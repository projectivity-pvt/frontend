import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { Auth } from '@aws-amplify/auth'
import { useRouter } from 'next/dist/client/router'
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
    try {
      await Auth.confirmSignUp(username, code)
      const amplifyUser = await Auth.signIn(username, password)
      if (amplifyUser) {
        console.log(amplifyUser)
        // router.push('/')
      } else {
        throw new Error('Unable to Login.')
      }
    } catch (err) {
      console.log('Error confirming signup:', err)
    }
  }

  const onSubmit = (data: IFormInputs) => {
    try {
      verifyCode(data.code)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
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
        <Button className="mt-6" block type="submit">
          Verify and Login
        </Button>
      </form>
    </>
  )
}
