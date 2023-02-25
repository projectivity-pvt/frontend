import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import  TableTabs from '@components/molecules/TableTabs/TableTabs'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorProjectPie } from '@components/organisms/VendorChart/VendorProjectChart/VendorProjectPie'
import { VendorProjectLine } from '@components/organisms/VendorChart/VendorProjectChart/VendorProjectLine'
import { ProjectCalendar } from '@components/organisms/VendorChart/VendorProjectChart/VendorProjectCalendar'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'
import { VendorProjectCard } from '@components/organisms/VendorProjectCard/VendorProjectCard'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'


export const VendorContractTemplate = () => (
  <>
    <VendorSidebar1 />
    <div className="flex flex-col flex-1 w-full overflow-y-auto background">
      <TopHeaderBar />

      <main className="mb-2">

      <div className='grid grid-cols-12'>

        <div className='col-span-12 md:col-span-6 lg:col-span-8'>
         <div className="card"  style={{ height: "400px" }}>
            <h3 className="mb-4">Near Due date</h3>
            <div className="flex items-center gap-4 overflow-auto pb-2">
              <VendorProjectCard />
              <VendorProjectCard />
              <VendorProjectCard />
              <VendorProjectCard />
              <VendorProjectCard />
              <VendorProjectCard />
            </div>
          </div>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <div className="card"  style={{ height: "400px" }}>
              <h3>Calendar</h3>
              <ProjectCalendar />
            </div>
        </div>
      </div>


        <div className="card">
          <div className="">
            <div className="mb-4">
              <TableTabs />
            </div>
            {/* <VendorContractTable /> */}
          </div>
        </div>

      </main>
    </div>
  </>
)
