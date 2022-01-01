import React, { useEffect, useReducer } from 'react'
import Image from 'next/image'
import { LoginForm } from '@components/organisms/LoginForm/LoginForm'
import { RegisterForm } from '@components/organisms/RegisterForm/RegisterForm'
import { ForgotPasswordForm } from '@components/organisms/ForgotPasswordForm/ForgotPasswordForm'
import { useReactiveVar } from '@apollo/client'
import { userGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { MobileVerificationForm } from '@components/organisms/MobileVerificationForm/MobileVerificationForm'
import { redirectUser } from '@components/globalStates/UserGlobal/utils'

enum AuthActionEnum {
  'LOGIN' = 'LOGIN',
  'REGISTER' = 'REGISTER',
  'FORGOT_PASSWORD' = 'FORGOT_PASSWORD',
  'MOBILE_VERIFICATION' = 'MOBILE_VERIFICATION',
}

interface AuthState {
  type: AuthActionEnum
  header: string
}

export const LoginTemplate = () => {
  const router = useRouter()

  const authReducer = (state: AuthState, action: AuthActionEnum): AuthState => {
    switch (action) {
      case 'LOGIN': {
        return {
          ...state,
          type: action,
          header: 'Login',
        }
      }
      case 'REGISTER': {
        return {
          ...state,
          type: action,
          header: 'Create a new account!',
        }
      }
      case 'FORGOT_PASSWORD': {
        return {
          ...state,
          type: action,
          header: 'Reset Password',
        }
      }
      case 'MOBILE_VERIFICATION': {
        return {
          ...state,
          type: action,
          header: 'Verify your mobile number',
        }
      }
      default: {
        return state
      }
    }
  }
  const initialAuthState: AuthState = {
    type: AuthActionEnum.LOGIN,
    header: 'Login',
  }
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)
  const { user } = useReactiveVar(userGlobalState)

  useEffect(() => {
    if (user?.id) {
      const userType = user.type
      redirectUser(userType, router)
      toast.success('Already logged in')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <span
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Navigated to login page.
      </span>

      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row min-h-[580px]">
            <div className="relative h-32 flex items-center justify-center md:h-auto md:w-1/2">
              <Image
                src="/images/loginHelper.webp"
                layout="fill"
                objectFit="cover"
                alt="Login to Projectivity"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-6 font-semibold text-gray-700 dark:text-gray-200">
                  {authState.header}
                </h1>
                {
                  {
                    LOGIN: <LoginForm />,
                    REGISTER: <RegisterForm />,
                    FORGOT_PASSWORD: <ForgotPasswordForm />,
                    MOBILE_VERIFICATION: <MobileVerificationForm />,
                  }[authState.type]
                }
                <hr className="my-8" />
                <p>
                  <span
                    onClick={() => {
                      if (authState.type === AuthActionEnum.LOGIN) {
                        dispatch(AuthActionEnum.REGISTER)
                      } else {
                        dispatch(AuthActionEnum.LOGIN)
                      }
                    }}
                    className="text-sm cursor-pointer font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    {authState.type === AuthActionEnum.LOGIN
                      ? 'Create a new account'
                      : 'Already have an account? Login'}
                  </span>
                </p>
                {authState.type === AuthActionEnum.LOGIN && (
                  <p className="mt-2">
                    <span
                      onClick={() => dispatch(AuthActionEnum.FORGOT_PASSWORD)}
                      className=" cursor-pointer text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Forgot your password?
                    </span>
                  </p>
                )}
                <p className="mt-2">
                  <span
                    onClick={() => dispatch(AuthActionEnum.MOBILE_VERIFICATION)}
                    className=" cursor-pointer text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Verify your mobile number
                  </span>
                </p>
                <p className="mt-2">
                  <span
                    onClick={() => dispatch(AuthActionEnum.FORGOT_PASSWORD)}
                    className=" cursor-pointer text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Need Help? Contact us
                  </span>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
