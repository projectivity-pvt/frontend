import React from "react"
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
import { ContractorNoinvoiceTable } from '@components/organisms/ContractorNoinvoiceTable/ContractorNoinvoiceTable'




export const SingleContractorNoinvoice = () => {
    return (
        <>
            <DesktopSidebar
                sidebarList={VendorSidebarList}
                source={EntitySourceEnum.VENDOR}
            />
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20  w-full">

                    <div className="flex flex-col mb-10">
                        <p className="text-2xl font-bold mb-3">Burger Singh Television Advertisement</p>
                        <p className="text-xs">Created on: 10 October, 2021</p>
                        <div className="flex items-center mt-1">
                            <p className="text-xs">Project Created by:</p>
                            <button className="text-xs ml-2 text-blue-500 bg-blue-100 rounded-2xl px-5 py-0.5">John Doe</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mt-10 mb-10">
                        <p className="w-48 py-1.5 rounded-2xl text-xs text-center bg-blue-100">All Contractors <span className="text-xs text-blue-500 bg-blue-300 px-1.5 py-.9 rounded-full">3</span></p>
                        <p> > </p>
                        <p className="text-sm">Catering and Food Supplies</p>
                    </div>
                    {/* --------------------------content------------------ */}
                    <div>
                        <div className="flex items-center">
                            <p className="text-red-600 text-xs">Invoice yet to be generated</p>
                            <button className="text-xs ml-5 bg-gray-100 rounded-2xl px-5 py-1">Send Reminder</button>
                        </div>
                        <div className="mt-1">
                            <p className="text-xs">You will be able to pay when invoice is generated.</p>
                        </div>
                    </div>
                    {/* --------------------------content------------------ */}
                    <div className="flex justify-between items-center mt-10 px-5">
                        <div><p className="text-lg">Expenses</p></div>
                        <div className="flex gap-2"><p className="text-gray-500">Total</p> <p>:</p>  <p className="font-bold">$4392</p></div>
                    </div>

                    <div>
                        <ContractorNoinvoiceTable />
                    </div>

                </main>
            </div >

        </>
    );
}