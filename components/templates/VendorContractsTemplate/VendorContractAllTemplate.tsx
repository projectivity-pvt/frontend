import React, { useState } from "react"
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { InvoiceTemp } from '@components/organisms/InvoiceTemp/InvoiceTemp'
import { VendorPaidTemp } from '@components/organisms/InvoiceTemp/VendorPaidTemp'
import { VendorPaidTempMax } from '@components/organisms/InvoiceTemp/VendorPaidTempMax'

import { InvoiceTempMax } from '@components/organisms/InvoiceTemp/InvoiceTempMax'
import { AddNewExpense } from '@components/organisms/InvoiceTemp/AddNewExpense'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { VendorSinglePaymentTable } from '@components/organisms/VendorSinglePaymentTable/VendorSinglePaymentTable'
import { VendorContractorExpenseTable } from '@components/organisms/VendorContractorExpenseTable/VendorContractorExpenseTable'
import { VendorPaymentStatsCard } from '@components/molecules/StatsCard/VendorPaymentStatsCard'
import { VendorContractEarningCard } from '@components/molecules/StatsCard/VendorContractEarningCard'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'
import { ProjectDetails } from '@components/molecules/Details/ProjectDetails'
import { ProjectLocation } from '@components/molecules/Details/ProjectLocation'



export const VendorContractAllTemplate = () => {


    return (
        <>

            {/* -------------------main page------------------- */}

            <DesktopSidebar
                sidebarList={VendorSidebarList}
                source={EntitySourceEnum.VENDOR}
            />
            <div className="flex flex-col flex-1 overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">

                    <div>
                        <VendorPICard />
                    </div>

                    <div className="grid grid-cols-12">
                        <div className="col-span-8">
                            <div className="my-10">
                                <h2 className="font-semibold text-lg my-2">Earnings</h2>
                                <div className="w-full">
                                    <VendorContractEarningCard />
                                </div>
                            </div>

                            {/* --------------------------paid contract-------------------- */}

                            {/* --------------------------invoice generated-------------------- */}

                            {/* --------------------------paid contract-------------------- */}
                            <div className="mb-10">
                                <h2 className="font-semibold text-lg my-2">Invoice</h2>
                                <div className="bg-red-100 w-full rounded-lg p-3">
                                    <div className="flex justify-between align-center">
                                        <p className="text-gray-700 text-sm p-2">You will be able to generate invoice on the last day of this contract.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <h2 className="font-semibold text-lg my-2">Requirement</h2>
                                    <textarea className="resize-none w-full h-32 border-gray-300 rounded lg" />
                                </form>
                            </div>
                            {/* --------------------------textarea-------------------- */}
                        </div>

                        {/* --------------------------invoice generated-------------------- */}


                        <div className="col-span-4">
                            <ProjectDetails />
                            <div className="h-0.5 bg-gray-200 ml-5"></div>
                            <ProjectLocation />
                        </div>

                    </div>

                    <div className="h-0.5 bg-gray-100 my-10 mt-12"></div>

                </main>
            </div>


        </>
    );
}