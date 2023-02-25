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


export const VendorContractsInvoiceCorrTemplate = () => {
    return (
        <>
            <VendorSidebar2 />
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
                        <h2 className="font-semibold my-2">Invoice</h2>
                        <div className="bg-yellow-100 w-3/5 rounded-lg p-5">
                            <div className="flex justify-between align-center">
                                <p className="text-gray-700 text-sm p-2">Dharma production requested correction. <br /> Re-generate invoice.
                                    <span className="cursor-pointer text-blue-600">View Correction</span> </p>
                                <button className="h-10 mt-2 rounded-3xl py-1 px-5 text-sm bg-yellow-400 text-white">Generate Invoice</button>
                            </div>
                        </div>
                    </div>


                    <div className="h-0.5 bg-gray-100 mb-10"></div>


                    <div className="my-5">
                        <h2 className="font-semibold">Expenses</h2>
                    </div>

                    <div>
                        <VendorContractorExpenseTable />
                    </div>

                    <div className="flex float-right px-10">
                        <p className="text-gray-500">Total : <span className="text-black font-semibold">$ 4392</span></p>
                    </div>

                </main>
            </div >

        </>
    );
}