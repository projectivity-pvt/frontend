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
import { ProductionFinanceTable } from '@components/organisms/ProductionFinanceTable/ProductionFinanceTable'




export const InvoiceCorrectionTemplate = () => {
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
                    <div className="grid grid-cols-4 gap-5">
                        <div className="lg:col-span-2 md:col-span-2 col-span-4">

                            <div className="flex text-green-500 mb-5 justify-center">
                                checkicon
                            </div>
                            <div className="px-10">
                                <p className="text-xs text-center">Cheers! Your request for correction of <span className="text-blue-500">Invoice #3321</span> is successfully sent to <span className="text-green-500">John Doe.</span></p>
                                <p className="text-xs text-center">You will be get a notification for the new invoice.</p>
                            </div>
                            <div className="flex justify-center my-5">
                                <button className="text-xs bg-gray-100 px-10 py-1 rounded-2xl">Go Back</button>
                            </div>

                        </div>

                        <div className="lg:col-span-2 md:col-span-2 col-span-4">
                            <p className="text-center text-green-400">Invoice PDF</p>
                        </div>
                    </div>
                    {/* --------------------------content------------------ */}

                </main>
            </div >

        </>
    );
}