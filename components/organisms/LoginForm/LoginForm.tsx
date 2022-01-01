import React, { useState } from 'react'
import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { phoneRegExp } from '@utils//constants'
import Image from 'next/image'
import { Loader } from '@components/atoms/Loader/Loader'
import { useRouter } from 'next/router'
import {
  getUserTypeFromAmplify,
  handleLogin,
  redirectUser,
} from '@components/globalStates/UserGlobal/utils'

interface Props {
  callBack?: (data: IFormInputs) => void
  submitText?: string
}
interface IFormInputs {
  mobile: string
  password: string
}

const schema = yup
  .object({
    mobile: yup
      .string()
      .required('Required')
      .matches(phoneRegExp, 'Phone number is not valid'),
    password: yup
      .string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can not be more than 16 characters'),
  })
  .required()

export const LoginForm = (props: Props) => {
  const { callBack, submitText = 'Log In' } = props
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const loginWithMobile = async (data: IFormInputs) => {
    const { mobile, password } = data
    setLoading(true)
    const loginStatus = await handleLogin(mobile, password)
    console.log(loginStatus)
    setLoading(false)
    if (loginStatus) {
      const userType = getUserTypeFromAmplify(loginStatus)
      redirectUser(userType, router)
    }
  }

  const onSubmit = (data: IFormInputs) => {
    if (callBack) {
      callBack(data)
      setLoading(false)
    } else {
      loginWithMobile(data)
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
            maxLength={10}
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
      <Button disabled={loading} className="mt-6 h-10" block type="submit">
        {!loading ? <span>{submitText}</span> : <Loader />}
      </Button>
    </form>
  )
}

LoginForm.defaultProps = {
  callBack: undefined,
  submitText: 'Log In',
}
