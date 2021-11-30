import { Auth } from 'aws-amplify'
import { Button } from '@windmill/react-ui'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  username: string
}

export const ResendOtp = (props: Props) => {
  const { username } = props
  const [resent, setResent] = useState(false)

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username)
    } catch (err) {
      toast.error(err.message)
    }
  }

  const resendHandler = () => {
    setResent(true)
    toast.promise(resendConfirmationCode(), {
      loading: 'Resending OTP...',
      success: <b>A new OTP has been sent to you</b>,
      error: <b>Could not send new OTP.</b>,
    })
  }

  return (
    <div className="text-right my-1">
      <Button
        disabled={resent}
        layout="link"
        className="underline"
        size="small"
        onClick={resendHandler}
      >
        Resend OTP
      </Button>
    </div>
  )
}
