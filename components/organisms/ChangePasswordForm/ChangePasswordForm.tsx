import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import { Loader } from '@components/atoms/Loader/Loader'
import toast from 'react-hot-toast'

interface Props {
  username: string
}

interface IFormInputs {
  code: string
  password: string
}

const schema = yup
  .object({
    code: yup.string().required('Required'),
    password: yup
      .string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can not be more than 16 characters'),
  })
  .required()

export const ChangePasswordForm: React.FC<Props> = (props: Props) => {
  const { username } = props
  const [loading, setLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const changePasswordHandler = async (data: IFormInputs) => {
    const { code, password } = data
    setLoading(true)
    try {
      const changedPassword = await Auth.forgotPasswordSubmit(
        `+91${username}`,
        code,
        password
      )
      if (changedPassword) {
        toast.success('Password changed. Login again to continue')
        setLoading(false)
      } else {
        throw new Error('Unable to Change password.')
      }
    } catch (err) {
      toast.error(err.message)
    }
    setLoading(false)
  }

  const onSubmit = (data: IFormInputs) => {
    changePasswordHandler(data)
  }

  return (
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
      </Label>
      <Label className="mt-4">
        <span>New Password</span>
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
        {!loading ? <span>Change Password</span> : <Loader />}
      </Button>
    </form>
  )
}
