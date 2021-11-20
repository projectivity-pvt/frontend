import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'

interface Props {}

interface IFormInputs {
  email: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Required'),
  })
  .required()

export const ForgotPasswordForm = (props: Props) => {
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
        <Button className="mt-6" block type="submit">
          Recover Password
        </Button>
      </form>
    </>
  )
}
