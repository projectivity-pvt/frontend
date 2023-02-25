import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { Loader } from '@components/atoms/Loader/Loader'
import { useRouter } from 'next/router'
import {
  getUserTypeFromAmplify,
  handleVerificationCode,
  redirectUser,
} from '@components/globalStates/UserGlobal/utils'
import { ResendOtp } from '../ResendOtp/ResendOtp'

interface Props {
  userData: {
    username: string
    password: string
  }
}

interface IFormInputs {
  code: string
}

const schema = yup
  .object({
    code: yup.string().required('Required'),
  })
  .required()

export const VerifyAccountForm: React.FC<Props> = (props: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {
    userData: { username, password },
  } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const verifyCode = async (code: string) => {
    setLoading(true)
    const verificationSuccess = await handleVerificationCode(
      code,
      username,
      password
    )
    if (verificationSuccess) {
      const userType = getUserTypeFromAmplify(verificationSuccess)
      if (userType) {
        redirectUser(userType, router)
      }
    }
    setLoading(false)
  }

  const onSubmit = (data: IFormInputs) => {
    verifyCode(data.code)
  }

  return (
    <>
      <p className="text-sm mb-5">
        Verify your account linked with
        <span className="font-bold ml-2 text-primary-600">{username}</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Verification Code</span>
          <Input
            {...register('code')}
            id="code"
            name="code"
            className="mt-1"
            css={undefined}
          />
          <HelperText valid={false}>{errors.code?.message}</HelperText>
          <ResendOtp username={username} />
        </Label>
        <Button disabled={loading} className="mt-6 h-10" block type="submit">
          {!loading ? <span>Verify and Login</span> : <Loader />}
        </Button>
      </form>
    </>
  )
}
