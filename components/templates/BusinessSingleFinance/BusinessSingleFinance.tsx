import React from 'react'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { ProductionFinanceTable } from '@components/organisms/ProductionFinanceTable/ProductionFinanceTable'
import { BusinessFinancePieChart } from '@components/Charts/VendorDashboards/BusinessFinancePieChart'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'
import SingleProjectHeader from '@components/organisms/card/SingleProjectHeader'

export const BusinessSingleFinance = () => {
  return (
    <>
      <BusinessSidebar2 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <main className="">
          <div className="card">
            <SingleProjectHeader />
          </div>

          <div className="card">
            <div className="flex border-b">
              <div className="flex flex-col w-3/4 pr-5">
                <div className="mb-10">
                  <SingleFinanceStatsCard />
                </div>
              </div>

              <div className="flex flex-col w-1/4 pr-5 -mt-2">
                <BusinessFinancePieChart />
              </div>
            </div>
            <div className="my-5">
              <p>
                All Invoices{' '}
                <span className="text-sm text-blue-500 bg-blue-100 px-2 py-.9 rounded-full">
                  3
                </span>
              </p>
            </div>
            <div>
              <ProductionFinanceTable />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
