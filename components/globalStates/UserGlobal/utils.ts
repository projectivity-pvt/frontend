import { Auth } from 'aws-amplify'
import { NextRouter } from 'next/router'
import toast from 'react-hot-toast'
import { User, userGlobalState, UserType } from './UserGlobalState'

export const getUserTypeFromAmplify = (
  amplifyUser: any
): UserType | undefined => {
  try {
    return amplifyUser?.attributes['custom:user_type']
  } catch (err: any) {
    toast.error(err.message)
  }
  return undefined
}

export const redirectUser = (
  userType: UserType,
  router: NextRouter,
  pathVendor?: string,
  pathBusiness?: string
) => {
  if (userType === UserType.VENDOR) {
    router.push(pathVendor || '/vendor')
  } else if (
    userType === UserType.BUSINESS_ADMIN ||
    userType === UserType.BUSINESS_USER
  ) {
    router.push(pathBusiness || '/business')
  }
}

export const setUserGlobalState = (user: User) => {
  userGlobalState({
    loading: false,
    user,
  })
}

export const clearUserGlobalState = () => {
  userGlobalState({
    loading: false,
    user: null,
  })
}

export const setUserGlobalStateFromAmplify = (amplifyUser: any) => {
  if (amplifyUser && amplifyUser.attributes && amplifyUser.username) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name, phone_number, phone_number_verified } = amplifyUser.attributes
    const tempUser = {
      name,
      phone: phone_number.replace('+91', ''),
      phone_verified: phone_number_verified,
      id: amplifyUser.username,
      type: amplifyUser.attributes['custom:user_type'],
    }
    setUserGlobalState(tempUser)
  }
}

export const authenticateUserOnMount = async () => {
  const { user } = userGlobalState()
  if (user?.id) return
  userGlobalState({ ...userGlobalState(), loading: true })
  const currentUserInfo = await Auth.currentUserInfo()
  userGlobalState({ ...userGlobalState(), loading: false })
  if (
    currentUserInfo &&
    currentUserInfo.attributes &&
    currentUserInfo.username
  ) {
    setUserGlobalStateFromAmplify(currentUserInfo)
  }
}

export const handleSignout = async () => {
  try {
    await Auth.signOut()
    clearUserGlobalState()
    toast.success('Logged out', {
      icon: '🙋‍♂️',
    })
  } catch (err: any) {
    toast.error(err.message)
  }
}

export const handleLogin = async (
  mobile: string,
  password: string
): Promise<any | null> => {
  let success = null
  try {
    const amplifyUser = await Auth.signIn(`+91${mobile}`, password)
    if (amplifyUser?.attributes && amplifyUser?.username) {
      setUserGlobalStateFromAmplify(amplifyUser)
      toast.success('Logged In successfully')
      success = amplifyUser
    } else {
      throw new Error('Unable to Login.')
    }
  } catch (error: any) {
    toast.error(error.message)
  }
  return success
}

export const handleRegister = async (
  mobile: string,
  password: string,
  name: string,
  userType: UserType
): Promise<any | null> => {
  try {
    const { user } = await Auth.signUp({
      username: `+91${mobile}`,
      password,
      attributes: {
        name,
        'custom:user_type': userType,
      },
    })

    if (user && user.getUsername()) {
      toast.success(`Please verify your mobile number to continue`)
      return user
    }
  } catch (error: any) {
    toast.error(error.message)
  }
  return null
}

export const handleVerificationCode = async (
  code: string,
  username: string,
  password: string
): Promise<any | null> => {
  let success = null
  try {
    await Auth.confirmSignUp(username, code)
    const amplifyUser = await Auth.signIn(username, password)
    if (amplifyUser) {
      if (amplifyUser.attributes && amplifyUser.username) {
        setUserGlobalStateFromAmplify(amplifyUser)
      }
      toast.success(`👋 Hello, ${amplifyUser?.attributes?.name}`)
      success = amplifyUser
    } else {
      throw new Error('Unable to Verify code. Please try again later')
    }
  } catch (err: any) {
    toast.error(err.message)
  }
  return success
}

export const handleForgotPassword = async (
  mobile: string
): Promise<boolean> => {
  let success = false
  try {
    const resetUser = await Auth.forgotPassword(`+91${mobile}`)
    if (resetUser) {
      success = true
      toast.success('Please verify the OTP to reset your password')
    }
  } catch (err: any) {
    toast.error(err.message)
  }
  return success
}

export const handleChangePassword = async (
  code: string,
  password: string,
  username: string
): Promise<boolean> => {
  let success = false
  try {
    const changedPassword = await Auth.forgotPasswordSubmit(
      `+91${username}`,
      code,
      password
    )
    if (changedPassword) {
      success = true
      toast.success('Password changed. Login again to continue')
    }
  } catch (err: any) {
    toast.error(err.message)
  }
  return success
}

export async function resendConfirmationCode(username: string) {
  let success = false
  try {
    await Auth.resendSignUp(username)
    success = true
  } catch (err: any) {
    toast.error(err.message)
  }
  return success
}
