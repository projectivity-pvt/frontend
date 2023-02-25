import React, { useState } from "react"
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
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



export const VendorSinglePaidTemplate = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openPaidModal, setOpenPaidModal] = useState(false);
    const [openExpenseModal, setOpenExpenseModal] = useState(false);

    return (
        <>

            {openModal &&
                <div className="pop_container">
                    <div className="w-3/5">
                        <InvoiceTempMax closeModal={setOpenModal} />
                        <p className="h-5"></p>
                    </div>
                </div>
            }

            {openPaidModal &&
                <div className="pop_container" style={{ alignItems: "center" }}>
                    <div className="w-3/5">
                        <VendorPaidTempMax closePaidTemp={setOpenPaidModal} />
                        <p className="h-5"></p>
                    </div>
                </div>
            }

            {openExpenseModal &&
                <div className="pop_container" style={{ alignItems: "center" }}>
                    <div className="w-3/5">
                        <AddNewExpense closeExpenseModal={setOpenExpenseModal} />
                        <p className="h-5"></p>
                    </div>
                </div>
            }

            {/* -------------------main page------------------- */}

            <VendorSidebar1 />
            <div className="flex flex-col flex-1 overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">

                    <div>
                        <VendorPICard />
                    </div>

                    <div className="grid grid-cols-12">
                        <div className="col-span-8">
                            <div className="my-10">
                                <h2 className="font-semibold my-2">Earnings</h2>
                                <div className="w-full">
                                    <VendorContractEarningCard />
                                </div>
                            </div>

                            {/* --------------------------paid contract-------------------- */}
                            <div className="mb-10">
                                <h2 className="font-semibold my-5">Payment</h2>
                                <div className="bg-green-100 w-full rounded-lg p-5">
                                    <div className="flex justify-between align-center">
                                        <p className="text-gray-700 text-sm p-2">You have received a payment of $4567 .</p>
                                        <button className="rounded-3xl py-1 px-5 text-sm bg-green-500 text-white"> Contact support </button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex gap-5 justify-end">
                                    <button className="bg-gray-200 rounded-3xl text-sm px-5 py-2 w-36"
                                        onClick={() => { setOpenPaidModal(true) }}
                                    >View</button>
                                    <button className="bg-yellow-300 rounded-3xl text-sm px-5 py-2 w-36">Print As PDF</button>
                                </div>
                                <VendorPaidTemp />
                            </div>
                            {/* --------------------------paid contract-------------------- */}

                            <div className="h-0.5 bg-gray-100 my-10 mt-12"></div>

                            {/* --------------------------invoice generated-------------------- */}

                            <div className="mb-10">
                                <h2 className="font-semibold my-5">Invoice</h2>
                                <div className="bg-green-100 w-full rounded-lg p-5">
                                    <div className="flex justify-between align-center">
                                        <p className="text-gray-700 text-sm p-2">You have generated the invoice.</p>
                                        <button className="rounded-3xl py-1 px-5 text-sm bg-green-500 text-white"> Invoice Generated </button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex gap-5 justify-end">
                                    <button className="bg-gray-200 rounded-3xl text-sm px-5 py-2 w-36"
                                        onClick={() => { setOpenModal(true) }}
                                    >View</button>
                                    <button className="bg-yellow-300 rounded-3xl text-sm px-5 py-2 w-36">Print As PDF</button>
                                </div>
                                <InvoiceTemp />
                            </div>
                            {/* --------------------------invoice generated-------------------- */}
                        </div>
                        <div className="col-span-4">
                            <ProjectDetails />
                            <div className="h-0.5 bg-gray-200 ml-5"></div>
                            <ProjectLocation />
                        </div>

                    </div>



                    <div className="h-0.5 bg-gray-100 my-10 mt-12"></div>


                    {/* --------------------------expense table-------------------- */}
                    <div className="flex  justify-between items-center my-5">
                        <h2 className="font-semibold">Expenses</h2>
                        <button className="bg-blue-500 text-white text-sm px-5 py-1.5 rounded-3xl"
                            onClick={() => { setOpenExpenseModal(true) }}
                        >Add New Expense</button>
                    </div>

                    <div>
                        <VendorContractorExpenseTable />
                    </div>
                    {/* --------------------------expense table-------------------- */}

                    {/* --------------------------textarea-------------------- */}
                    <div className="my-5">
                        <h2 className="font-semibold">Requirements</h2>
                    </div>

                    <div>
                        <form>
                            <textarea className="resize-none w-full h-32 border-gray-300 rounded lg">
                            </textarea>
                        </form>
                    </div>
                    {/* --------------------------textarea-------------------- */}



                </main>
            </div >

        </>
    );
}