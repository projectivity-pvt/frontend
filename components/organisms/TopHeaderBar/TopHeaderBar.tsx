import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { sidebarState } from '@components/globalStates/Sidebar/SidebarState'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import React from 'react'

export const TopHeaderBar = () => (
  <div className="flex items-center p-4 border-b z-[999] sticky top-0 backdrop-filter backdrop-blur-sm gap-4">
    <div className=" lg:hidden" onClick={() => sidebarState(!sidebarState())}>
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
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <HeaderText />
    <NotificationPill />
    <UserPill />
  </div>
)
