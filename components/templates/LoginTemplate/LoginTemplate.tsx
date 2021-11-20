import React from 'react'
import Image from 'next/image'
import { LoginForm } from '@components/organisms/LoginForm/LoginForm'
interface Props {}

export const LoginTemplate = (props: Props) => {
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
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="relative h-32 flex items-center justify-center md:h-auto md:w-1/2">
              <Image
                src="/images/loginHelper.webp"
                layout="fill"
                objectFit="cover"
                alt="Login to Projectivity"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <LoginForm />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
