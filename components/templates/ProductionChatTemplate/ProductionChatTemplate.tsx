import React, { useState } from 'react'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,
  faLocation,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import ChatVendorName from './ChatVendorNameOpen'
import ChatVendorContent from './ChatVendorContent'
import ChatVendorNameOpen from './ChatVendorNameOpen'
import ChatVendorNameClose from './ChatVendorNameClose'

export const ProductionChatTemplate = () => {
  return (
    <>
      <DesktopSidebar
        sidebarList={VendorSidebarList}
        source={EntitySourceEnum.VENDOR}
      />
      <div className="flex flex-col flex-1 w-full h-screen">
        <TopHeaderBar />
        <main className="mb-2 w-full background">
          <div className="flex p-2 w-full" style={{height:'65%'}}>
            {/* ---------------------------- */}
            <div className="card w-2/5 my-0 flex flex-col gap-3 overflow-scroll bg-white scrollbar-hide h-full">
              <ChatVendorNameOpen />
              <ChatVendorNameClose />
              <ChatVendorNameClose />
              <ChatVendorNameClose />
              <ChatVendorNameClose />
              <ChatVendorNameClose />
              <ChatVendorNameClose />
              <ChatVendorNameClose />
            </div>

            <div className="w-4/5  h-full">
              <ChatVendorContent />
            </div>
            {/* ---------------------------- */}
          </div>
        </main>
      </div>
    </>
  )
}
