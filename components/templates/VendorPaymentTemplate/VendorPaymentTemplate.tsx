import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { VendorEarningCard } from '@components/molecules/VendorEarningCard/VendorEarningCard'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { PendingPaymentCard } from '@components/organisms/PendingPaymentCard/PendingPaymentCard'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorEarningReport } from '@components/organisms/VendorEarningReport/VendorEarningReport'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const VendorPaymentTemplate = () => (
  <>
    <DesktopSidebar
      sidebarList={VendorSidebarList}
      source={EntitySourceEnum.VENDOR}
    />
    <div className="flex flex-col flex-1 w-full overflow-y-auto ">
      <TopHeaderBar />
      <main className="px-4 mt-4 mb-20">
        <div className="flex items-start gap-4">
          <div className='grid grid-cols-12'>
            <div className="border-r mr-4 pr-4 flex-grow col-span-8">
              <div className="p-4">
                <h3 className="mb-4">Personal Report</h3>
                <div className="grid grid-cols-12">
                  <div className="col-span-8">
                    <VendorChart />
                  </div>
                  <div className="col-span-4 mt-5 ml-5">
                    <VendorEarningCard />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-4">
                  <h3 className="mb-4">Recent Earnings</h3>
                </div>
                <VendorPaymentTable />
              </div>
            </div>

            <div className=" col-span-4">
              <VendorEarningReport />
              <div className="mt-8">
                <PendingPaymentCard />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  </>
)
