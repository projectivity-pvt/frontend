import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { Auth } from '@aws-amplify/auth'
import { VerifyAccountForm } from '../VerifyAccountForm/VerifyAccountForm'
import { phoneRegExp } from '@utils//constants'
import Image from 'next/image'

interface Props {}

interface IFormInputs {
  name: string
  mobile: string
  email: string
  password: string
  agree: boolean
}

const schema = yup
  .object({
    name: yup
      .string()
      .required('Required')
      .min(2, 'Name must be at least 2 characters long')
      .max(16, 'Name can not be more than 16 characters'),
    mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Required'),
    password: yup
      .string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can not be more than 16 characters'),
    agree: yup.bool().oneOf([true], 'You must agree with our privacy policy'),
  })
  .required()

export const RegisterForm = (props: Props) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  async function signUpWithEmail(data: IFormInputs) {
    const { email, password, name, mobile } = data
    try {
      const { user } = await Auth.signUp({
        username: `+91${mobile}`,
        password,
        attributes: {
          name,
          email,
        },
      })

      if (user.getUsername()) {
        setUserData({ username: user.getUsername(), password })
      }
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

  const onSubmit = (data: IFormInputs) => {
    console.log(data)
    try {
      signUpWithEmail(data)
    } catch {
      console.log('failed')
    }
  }

  return (
    <>
      {!userData.username ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <span>Name</span>
            <Input
              {...register('name')}
              id="name"
              name="name"
              className="mt-1"
              placeholder="John Doe"
              css={undefined}
            />
            <HelperText valid={false}>{errors.name?.message}</HelperText>
          </Label>
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
            <span>Email</span>
            <Input
              {...register('email')}
              id="email"
              name="email"
              className="mt-1"
              placeholder="john@doe.com"
              css={undefined}
            />
            <HelperText valid={false}>{errors.email?.message}</HelperText>
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
          <Label className="mt-6" check>
            <Input
              {...register('agree')}
              id="agree"
              name="agree"
              type="checkbox"
              css={undefined}
            />
            <span className="ml-2">
              I agree to the <span className="underline">privacy policy</span>
            </span>
          </Label>
          <HelperText className="block" valid={false}>
            {errors.agree?.message}
          </HelperText>

          <Button className="mt-6" block type="submit">
            Create Account
          </Button>
        </form>
      ) : (
        <VerifyAccountForm userData={userData} />
      )}
    </>
  )
}
