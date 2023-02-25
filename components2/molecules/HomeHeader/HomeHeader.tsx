import React from 'react'
import Logo from 'public/images/LOGO.svg'
import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { useReactiveVar } from '@apollo/client'
import {
  userGlobalState,
  UserType,
} from '@components/globalStates/UserGlobal/UserGlobalState'

export const HomeHeader = () => {
  const { user } = useReactiveVar(userGlobalState)
  return (
    <header className="w-full px-3 md:px-8 text-gray-700 bg-white">
      <div className="container flex flex-wrap items-center justify-between py-5 mx-auto  max-w-7xl">
        <div className="relative flex flex-col md:flex-row md:items-center  md:justify-between flex-grow">
          <ActiveLink href="/">
            <a className="text-2xl flex items-center font-medium text-black dark:text-gray-200">
              <span className="mr-2">
                <Logo />
              </span>
              Projectivity
            </a>
          </ActiveLink>
          <nav className="hidden md:flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-r md:border-gray-200">
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              About Us
            </a>
          </nav>
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <ActiveLink
            href={
              user?.id
                ? `${user.type === UserType.VENDOR ? '/vendor' : '/business'}`
                : '/login'
            }
          >
            <a className="inline-flex items-center justify-center p-2 md:px-4 md:py-2 text-base font-medium leading-5 md:leading-6 text-white whitespace-no-wrap bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              {user?.id ? 'Dashboard' : 'Sign up'}
            </a>
          </ActiveLink>
        </div>
      </div>
    </header>
  )
}
