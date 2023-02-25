import React from "react"
import { VendorSidebar2 } from '@components/organisms/DesktopSidebar/VendorSidebar2'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { VendorSinglePaymentTable } from '@components/organisms/VendorSinglePaymentTable/VendorSinglePaymentTable'
import { VendorContractorExpenseTable } from '@components/organisms/VendorContractorExpenseTable/VendorContractorExpenseTable'
import { VendorPaymentStatsCard } from '@components/molecules/StatsCard/VendorPaymentStatsCard'
import { VendorContractEarningCard } from '@components/molecules/StatsCard/VendorContractEarningCard'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'


export const VendorContractsTemplate = () => {
    return (
        <>
            <VendorSidebar2 />

            {/* <DesktopSidebar
                sidebarList={VendorSidebarList}
                source={EntitySourceEnum.VENDOR}
            /> */}
            <div className="flex flex-col flex-1 overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">

                    <div>
                        <VendorPICard />
                    </div>

                    <div className="my-10">
                        <h2 className="font-semibold my-2">Earnings</h2>
                        <div className="w-3/5">
                            <VendorContractEarningCard />
                        </div>
                    </div>

                    <div className="mb-10">
                        <h3 className="">Invoice</h3>
                        <div className="bg-green-100 w-3/5 rounded-lg p-5">
                            <p className="text-gray-700 text-xs p-2">You can now generate the invoice by adding you GST Number.</p>
                            <div className="flex justify-between align-center">
                                <input className="rounded w-3/5 border-gray-200 text-xs" type="text" placeholder="GST Number" />
                                <button className="rounded-3xl py-1 px-5 text-xs bg-green-500 text-white">Generate Invoice</button>
                            </div>
                        </div>
                    </div>


                    <div className="h-0.5 bg-gray-100 mb-10"></div>


                    <div className="my-5">
                        <h3 className="">Expenses</h3>
                    </div>

                    <div>
                        <VendorContractorExpenseTable />
                    </div>

                </main>
            </div >

        </>
    );
}