import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { Tabs } from '@components/molecules/Tabs/Tabs'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'
import { VendorProjectCard } from '@components/organisms/VendorProjectCard/VendorProjectCard'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'


export const VendorContractTemplate = () => (
  <>
    <DesktopSidebar
      sidebarList={VendorSidebarList}
      source={EntitySourceEnum.VENDOR}
    />
    <div className="flex flex-col flex-1 w-full overflow-y-auto ">
      <TopHeaderBar />

      <main className="px-4 mt-4 mb-20">

        <div className='grid grid-cols-12'>
          <div className='col-span-8'>
            <div className="rounded-lg flex-grow">
              <div className="p-4 ">
                <h2 className="mb-4">Near Due date</h2>
                <div className="flex items-center gap-4 overflow-auto pb-2">
                  <VendorProjectCard />
                  <VendorProjectCard />
                  <VendorProjectCard />
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-4'>
            calender
          </div>
        </div>


        <div className="mt-8 ">
          <div className="mb-4">
            <Tabs />
          </div>
          <VendorContractTable />
        </div>
      </main>
    </div>
  </>
)
