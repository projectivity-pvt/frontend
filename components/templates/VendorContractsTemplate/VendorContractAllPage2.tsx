import React, { useState } from "react"
import { VendorSidebar2 } from '@components/organisms/DesktopSidebar/VendorSidebar2'
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
import { VendorContractsChekinTable } from '@components/organisms/VendorContractorExpenseTable/VendorContractsChekinTable'
import { VendorPaymentStatsCard } from '@components/molecules/StatsCard/VendorPaymentStatsCard'
import { VendorContractEarningCard } from '@components/molecules/StatsCard/VendorContractEarningCard'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'

import { ProjectDetails } from '@components/molecules/Details/ProjectDetails'
import { ProjectLocation } from '@components/molecules/Details/ProjectLocation'



export const VendorContractAllPage2 = () => {

    const [checkinTable, setCheckinTable] = useState(false);
    const toggleCheckinTable = () => {
        checkinTable ? setCheckinTable(false) : setCheckinTable(true);
    }

    return (
        <>

            {/* -------------------main page------------------- */}

            <VendorSidebar2 />
            <div className="flex flex-col flex-1 overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">

                    <div>
                        <VendorPICard />
                    </div>

                    <div className="flex justify-between items-bottom">
                        <div className="border-gray-300 border rounded py-3 px-2 bg-green-400 h-12 px-5 text-white">
                            <p>6 April, 2022</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-5">
                                <p className="text-green-500 py-1 bg-green-100 rounded-2xl border border-green-200 w-32 text-xs text-center">18 Selected</p>
                                <button className='text-xs bg-blue-600 text-white rounded-2xl py-1.5 w-36'>Initiate Check OUT</button>
                            </div>
                            <div className="flex items-center gap-5">
                                <p className="text-green-500 py-1 bg-green-100 rounded-2xl border border-green-200 w-32 text-xs text-center">18 Selected</p>
                                <button className='text-xs bg-blue-600 text-white rounded-2xl py-1.5 w-36'>Initiate Check IN</button>
                            </div>
                            <div className="flex items-center gap-5">
                                <p className="border-gray-300 border py-1 rounded-2xl w-32 text-xs text-center">Select All</p>
                                <button className='text-xs bg-gray-300 text-white rounded-2xl py-1.5 w-36'>Initiate Check OUT</button>
                            </div>
                        </div>
                    </div>


                    <div className="mt-10">
                        <VendorContractsChekinTable />
                    </div>

                    {/* -------------------------------------------------------------- */}
                    <div className="mt-10">
                        <div className={checkinTable ? 'border-gray-300 border rounded py-3 px-2' : 'text-white border-gray-300 border rounded py-3 px-2 bg-red-500'}
                            onClick={toggleCheckinTable}
                        >
                            <p>5 April, 2022</p>
                        </div>
                        <div className={checkinTable ? "vendor_checkin_table" : "vendor_checkin_table_active"}>
                            <VendorContractsChekinTable />
                        </div>
                    </div>
                    {/* -------------------------------------------------------------- */}

                    {/* -------------------------------------------------------------- */}
                    <div className="mt-10">
                        <div className={checkinTable ? 'border-gray-300 border rounded py-3 px-2' : 'text-white border-gray-300 border rounded py-3 px-2 bg-red-500'}
                            onClick={toggleCheckinTable}
                        >
                            <p>4 April, 2022</p>
                        </div>
                        <div className={checkinTable ? "vendor_checkin_table" : "vendor_checkin_table_active"}>
                            <VendorContractsChekinTable />
                        </div>
                    </div>
                    {/* -------------------------------------------------------------- */}


                </main>
            </div>


        </>
    );
}