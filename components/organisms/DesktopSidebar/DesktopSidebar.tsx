/* eslint-disable react/jsx-no-useless-fragment */
import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'
import { prodHouseDashboardUrls } from '@utils//constants'
import React from 'react'
import { Button } from '@windmill/react-ui'
import Logo from 'public/images/LOGO.svg'
import { useReactiveVar } from '@apollo/client'
import { sidebarState } from '@components/globalStates/Sidebar/SidebarState'
import { getIconByName } from '../IconProvider/IconProvider'

export interface SidebarListItem {
  url: string
  label: string
  icon: string
}

export enum EntitySourceEnum {
  'VENDOR' = 'VENDOR',
  'BUSINESS' = 'BUSINESS',
}
interface SidebarProps {
  sidebarList: SidebarListItem[]
  source: EntitySourceEnum
}

export const DesktopSidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { sidebarList } = props
  const sidebarStatus = useReactiveVar(sidebarState)
  return (
    <>
      {sidebarStatus ? (
        <>
          <div className="fixed z-[1001] h-screen w-screen">
            <div
              className="h-screen w-screen bg-gray-400 opacity-50"
              onClick={() => sidebarState(false)}
            />
            <aside className="absolute inset-0 h-full z-30 flex-shrink-0 w-64 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <div className="py-4 text-gray-500 dark:text-gray-400 h-full flex flex-col">
                {sidebarStatus && (
                  <span
                    className="absolute top-5 z-50 right-2 h-8 w-8"
                    onClick={() => sidebarState(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                )}
                <ActiveLink href="/">
                  <a className="mx-6 text-2xl flex items-center font-medium text-black dark:text-gray-200">
                    <span className="mr-2">
                      <Logo />
                    </span>
                    Projectivity
                  </a>
                </ActiveLink>
                <ul className="mt-10">
                  {sidebarList.map((item) => (
                    <li className="relative px-4 mb-2" key={item.label}>
                      <ActiveLink
                        href={item.url.toLowerCase()}
                        activeClassName="bg-indigo-200 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-600"
                      >
                        <a className="rounded-lg capitalize px-6 py-3 flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-200 text-gray-600 dark:text-gray-100 hover:bg-gray-200">
                          <span className="mr-4 h-6 w-6 relative">
                            {getIconByName(item.icon)}
                          </span>
                          {item.label}
                        </a>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
                <div className="px-6 my-6 mt-auto">
                  <Button block className="">
                    <span className="mr-2 h-5 w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    Profile{' '}
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </>
      ) : (
        <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-gray-50 dark:bg-gray-800 lg:block">
          <div className="py-4 text-gray-500 dark:text-gray-400 h-full flex flex-col">
            <ActiveLink href="/">
              <a className="mx-6 text-2xl flex items-center font-medium text-black dark:text-gray-200">
                <span className="mr-2">
                  <Logo />
                </span>
                Projectivity
              </a>
            </ActiveLink>
            <ul className="mt-10">
              {sidebarList.map((item) => (
                <li className="relative px-4 mb-2" key={item.label}>
                  <ActiveLink
                    href={item.url.toLowerCase()}
                    activeClassName="bg-indigo-200 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-600"
                  >
                    <a className="rounded-lg capitalize px-6 py-3 flex items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-700  text-gray-600  hover:bg-gray-200">
                      <span className="mr-4 h-6 w-6 relative">
                        {getIconByName(item.icon)}
                      </span>
                      {item.label}
                    </a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
            <div className="px-6 my-6 mt-auto">
              <Button block className="">
                <span className="mr-2 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Profile{' '}
              </Button>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
