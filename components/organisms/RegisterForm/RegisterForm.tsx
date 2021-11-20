import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'

interface Props {}

interface IFormInputs {
  name: string
  email: string
  password: string
  agree: boolean
}

const schema = yup
  .object({
    name: yup
      .string()
      .required('Required')
      .min(6, 'Name must be at least 2 characters long')
      .max(16, 'Name can not be more than 16 characters'),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IFormInputs) => console.log(data)

  console.log(errors)
  return (
    <>
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
    </>
  )
}
