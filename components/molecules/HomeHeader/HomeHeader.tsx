import React from 'react'
import Logo from 'public/images/LOGO.svg'
import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { useReactiveVar } from '@apollo/client'
import {
  userGlobalState,
  UserType,
} from '@components/globalStates/UserGlobal/UserGlobalState'
import Link from 'next/link'

export const HomeHeader = () => {
  const { user } = useReactiveVar(userGlobalState)
  return (
    <header className="w-full px-3 md:px-8 text-gray-700 bg-white">
      <div className="container flex flex-wrap items-center justify-between py-5 mx-auto  max-w-7xl">
        <div className="relative flex flex-col md:flex-row md:items-center  md:justify-between flex-grow">
          <Link
            href="/"
            className="text-2xl flex items-center font-medium text-black dark:text-gray-200"
          >
            Projectivity
          </Link>

          {/* ---------------- */}
          <nav className="hidden md:flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-r md:border-gray-200">
            <Link
              href="/website/features"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/website/about"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              About Us
            </Link>
          </nav>
          {/* ---------------- */}
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          demo
        </div>
      </div>
    </header>
  )
}
