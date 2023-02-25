import React from "react"
import {VendorSidebar2} from '@components/organisms/DesktopSidebar/VendorSidebar2'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { VendorSinglePaymentTable } from '@components/organisms/VendorSinglePaymentTable/VendorSinglePaymentTable'
import { VendorPaymentStatsCard } from '@components/molecules/StatsCard/VendorPaymentStatsCard'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'




export const VendorSinglePayment = () => {
    return (
        <>
            <VendorSidebar2/>
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20  w-full">
                    <div>
                        <VendorPICard />
                    </div>

                    <div className="grid grid-cols-6">
                        <div className="col-span-4 mt-10">
                            <VendorPaymentStatsCard />
                        </div>
                        <div className="col-span-2">
                            Piechart
                        </div>
                    </div>
                    <div className="h-0.5 bg-gray-100 mb-10"></div>


                    <div className="my-5">
                        <h2 className="font-semibold">All Contracts</h2>
                    </div>

                    <div>
                        <VendorSinglePaymentTable />
                    </div>

                </main>
            </div >

        </>
    );
}