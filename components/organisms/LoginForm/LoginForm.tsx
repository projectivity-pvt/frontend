import React from 'react'
import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { phoneRegExp } from '@utils//constants'
import Image from 'next/image'
import { Auth } from 'aws-amplify'

interface IFormInputs {
  mobile: string
  password: string
}

const schema = yup
  .object({
    mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: yup
      .string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can not be more than 16 characters'),
  })
  .required()

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const loginWithMobile = async (data: IFormInputs) => {
    const { mobile, password } = data
    try {
      const amplifyUser = await Auth.signIn(`+91${mobile}`, password)
      if (amplifyUser) {
        console.log(amplifyUser)
        // router.push('/')
      } else {
        throw new Error('Unable to Login.')
      }
    } catch (error) {
      console.log('error signing in', error)
    }
  }

  const onSubmit = (data: IFormInputs) => {
    try {
      loginWithMobile(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label className="mt-4">
        <span>Mobile Number</span>
        <div className="relative">
          <Input
            {...register('mobile')}
            type="tel"
            maxLength="10"
            id="mobile"
            name="mobile"
            className="mt-1 pl-10"
            css={undefined}
          />
          <span className="absolute h-[19px] left-2 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/india-flag.svg"
              alt="indian flag"
              height="19"
              width="19"
            />
          </span>
        </div>
        <HelperText valid={false}>{errors.mobile?.message}</HelperText>
      </Label>
      <Label className="mt-4">
        <span>Password</span>
        <Input
          {...register('password')}
          id="password"
          name="password"
          type="password"
          className="mt-1"
          placeholder="******"
          css={undefined}
        />
        <HelperText valid={false}>{errors.password?.message}</HelperText>
      </Label>
      <Button className="mt-6" block type="submit">
        Log In
      </Button>
    </form>
  )
}
