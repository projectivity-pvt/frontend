import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { phoneRegExp } from '@utils//constants'
import Image from 'next/image'
import { Loader } from '@components/atoms/Loader/Loader'
import { handleRegister } from '@components/globalStates/UserGlobal/utils'
import { UserTypeSelector } from '@components/molecules/UserTypeSelector/UserTypeSelector'
import { UserType } from '@components/globalStates/UserGlobal/UserGlobalState'
import { VerifyAccountForm } from '../VerifyAccountForm/VerifyAccountForm'

interface IFormInputs {
  name: string
  mobile: string
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
    password: yup
      .string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can not be more than 16 characters'),
    agree: yup.bool().oneOf([true], 'You must agree with our privacy policy'),
  })
  .required()

export const RegisterForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const [userType, setUserType] = useState(UserType.BUSINESS_ADMIN)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  async function signUpWithEmail(data: IFormInputs) {
    const { password, name, mobile } = data
    setLoading(true)
    const registerSuccess = await handleRegister(
      mobile,
      password,
      name,
      userType
    )
    if (registerSuccess) {
      setUserData({ username: registerSuccess.getUsername(), password })
    }
    setLoading(false)
  }

  const onSubmit = (data: IFormInputs) => {
    signUpWithEmail(data)
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
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

          <UserTypeSelector userType={userType} setUserType={setUserType} />

          <Label className="mt-6" check>
            <Input
              {...register('agree')}
              id="agree"
              name="agree"
              type="checkbox"
              css={undefined}
              checked
            />
            <span className="ml-2">
              I agree to the{' '}
              <span className="underline cursor-pointer">privacy policy</span>
            </span>
          </Label>
          <HelperText className="block" valid={false}>
            {errors.agree?.message}
          </HelperText>

          <Button disabled={loading} className="mt-6 h-10" block type="submit">
            {!loading ? <span>Register</span> : <Loader />}
          </Button>
        </form>
      ) : (
        <VerifyAccountForm userData={userData} />
      )}
    </>
  )
}
