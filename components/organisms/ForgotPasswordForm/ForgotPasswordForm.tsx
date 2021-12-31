import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import Image from 'next/image'
import { phoneRegExp } from '@utils//constants'
import { Loader } from '@components/atoms/Loader/Loader'
import { handleForgotPassword } from '@components/globalStates/UserGlobal/utils'
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm'

interface IFormInputs {
  mobile: string
}

const schema = yup
  .object({
    mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  })
  .required()

export const ForgotPasswordForm = () => {
  const [codeSent, setCodeSent] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

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
    setLoading(true)
    const forgotPasswordSuccess = await handleForgotPassword(mobile)
    if (forgotPasswordSuccess) {
      setCodeSent(true)
    }
    setLoading(false)
  }

  const onSubmit = (data: IFormInputs) => {
    forgotPasswordHandler(data)
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
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
          <Button disabled={loading} className="mt-6 h-10" block type="submit">
            {!loading ? <span>Verify account</span> : <Loader />}
          </Button>
        </form>
      ) : (
        <ChangePasswordForm username={getValues('mobile')} />
      )}
    </>
  )
}
