import React from 'react'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebar1 } from 'components2/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from 'components2/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from 'components2/organisms/VendorChart/VendorChart'
import { VendorEarningCard } from 'components2/molecules/VendorEarningCard/VendorEarningCard'
import { VendorEarningReport } from 'components2/organisms/VendorEarningReport/VendorEarningReport'
import { PendingPaymentCard } from 'components2/organisms/PendingPaymentCard/PendingPaymentCard'
import { VendorPaymentTable } from 'components2/organisms/VendorPaymentTable/VendorPaymentTable'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'

export const ContactProductionTemplate = () => {
  return (
    <>
      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="px-2 mt-2 mb-2">
          <div className="flex items-start gap-4">
            <div className="grid grid-cols-12">
              <div className="border-r mr-4 pr-4 flex-grow col-span-8">
                <div className="card">
                  <h3 className="mb-4">Personal Report</h3>
                  <div className="grid grid-cols-12">
                    <div className="col-span-8">
                      <VendorChart />
                    </div>
                    <div className="col-span-4 mt-10 ml-5">
                      <VendorEarningCard />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-span-4">
                <div className="card" style={{padding:'0'}}>
                  <VendorEarningReport />
                </div>

                <div className="mt-5">
                  <div className="card" style={{height:'400px'}}>
                    <PendingPaymentCard />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="card">
              <div className='mb-4 flex items-center justify-between'>
                <h3 className="">Recent Expenses</h3>
                <button className='text-xs bg-red-600 text-white p-2 px-5 rounded'>Download CSV</button>
              </div>
              <VendorPaymentTable />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
