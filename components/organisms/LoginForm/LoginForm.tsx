import React from 'react'
import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'

interface Props {}

interface IFormInputs {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Required'),
    password: yup
      .string()
      .required('Required')
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can not be more than 16 characters'),
  })
  .required()

export const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
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
        <Button className="mt-6" block type="submit">
          Log In
        </Button>
      </form>
    </>
  )
}
