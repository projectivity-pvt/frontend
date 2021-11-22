import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { Auth } from '@aws-amplify/auth'
import Image from 'next/image'
import { phoneRegExp } from '@utils//constants'
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm'

interface Props {}

interface IFormInputs {
  mobile: string
}

const schema = yup
  .object({
    mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  })
  .required()

export const ForgotPasswordForm = (props: Props) => {
  const [codeSent, setCodeSent] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  async function forgotPasswordHandler(data: IFormInputs) {
    const { mobile } = data
    try {
      const resetUser = await Auth.forgotPassword(`+91${mobile}`)
      if (resetUser) {
        console.log(resetUser)
        setCodeSent(true)
      }
      console.log('code resent successfully')
    } catch (err) {
      console.log('error resending code: ', err)
    }
  }

  const onSubmit = (data: IFormInputs) => {
    forgotPasswordHandler(data)
  }

  return (
    <>
      {!codeSent ? (
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
          <Button className="mt-6" block type="submit">
            Verify account
          </Button>
        </form>
      ) : (
        <ChangePasswordForm username={getValues('mobile')} />
      )}
    </>
  )
}
