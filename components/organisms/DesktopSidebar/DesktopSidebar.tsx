import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { prodHouseDashboardUrls } from '@utils//constants'
import React from 'react'
import { Button } from '@windmill/react-ui'
import Logo from '../../../public/images/Logo.svg'

interface Props {}

export const DesktopSidebar = (props: Props) => {
  const a = 1
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-gray-50 dark:bg-gray-800 lg:block">
      <div className="py-4 text-gray-500 dark:text-gray-400 h-full flex flex-col">
        <ActiveLink href="/">
          <a className="ml-6 text-2xl flex items-center font-medium text-black dark:text-gray-200">
            <span className="mr-2">
              <Logo />
            </span>
            Projectivity
          </a>
        </ActiveLink>
        <ul className="mt-10">
          <li className="relative px-4 mb-2">
            <ActiveLink
              href="/"
              activeClassName="bg-indigo-200 text-indigo-600  hover:text-indigo-600 hover:bg-indigo-200"
            >
              <a className="rounded-lg px-6 py-3 flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100 hover:bg-gray-200">
                <span className="mr-4  relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </span>
                Dashboard
              </a>
            </ActiveLink>
          </li>
          {prodHouseDashboardUrls.map((item) => (
            <li className="relative px-4 mb-2" key={item}>
              <ActiveLink
                href={item.toLowerCase()}
                activeClassName="bg-indigo-200 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-600"
              >
                <a className="rounded-lg px-6 py-3 flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-200 text-gray-600 dark:text-gray-100 hover:bg-gray-200">
                  <span className="mr-4 h-6 w-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </span>
                  {item}
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
        <div className="px-6 my-6 mt-auto">
          <Button block className="text-base">
            <span className="mr-2 h-5 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Profile{' '}
          </Button>
        </div>
      </div>
    </aside>
  )
}
