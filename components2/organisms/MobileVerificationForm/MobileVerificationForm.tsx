import { resendConfirmationCode } from '@components/globalStates/UserGlobal/utils'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { LoginForm } from '../LoginForm/LoginForm'
import { VerifyAccountForm } from '../VerifyAccountForm/VerifyAccountForm'

export const MobileVerificationForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

  const handleLoginCallback = async (data: any) => {
    const resendSuccess = await resendConfirmationCode(`+91${data.mobile}`)
    if (resendSuccess) {
      toast.success(`Please verify your mobile number to continue`)
      setUserData({ username: `+91${data.mobile}`, password: data.password })
    }
  }

  return (
    <div>
      {userData?.username ? (
        <VerifyAccountForm userData={userData} />
      ) : (
        <LoginForm submitText="Verify Account" callBack={handleLoginCallback} />
      )}
    </div>
  )
}
