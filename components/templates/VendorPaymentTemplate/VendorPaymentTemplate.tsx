import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { VendorEarningCard } from '@components/molecules/VendorEarningCard/VendorEarningCard'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { PendingPaymentCard } from '@components/organisms/PendingPaymentCard/PendingPaymentCard'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorEarningReport } from '@components/organisms/VendorEarningReport/VendorEarningReport'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const VendorPaymentTemplate = () => (
  <>
    <VendorSidebar1 />
    <div className="flex flex-col flex-1 w-full overflow-y-auto background">
      <TopHeaderBar />


      <main className="">
        <div className="flex items-start gap-4">
          <div className='grid grid-cols-12'>
            <div className="flex-grow col-span-12 md:col-span-8">
              <div className="card">
                <h3 className="mb-4">Personal Report</h3>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-8">
                    <VendorChart />
                  </div>
                  <div className="col-span-12 md:col-span-4 mt-10">
                    <VendorEarningCard />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="card p-0">
                <VendorEarningReport />
              </div>

              <div className="mt-5">
                <div className="card p-0">
                  <PendingPaymentCard />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-0">
          <div className="card">
            <h3 className="mb-4">Recent Earnings</h3>
            <VendorPaymentTable />
          </div>
        </div>


      </main>
    </div>
  </>
)
