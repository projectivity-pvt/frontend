import React, { useState } from "react"
import {VendorSidebar2} from '@components/organisms/DesktopSidebar/VendorSidebar2'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { InvoiceTemp } from '@components/organisms/InvoiceTemp/InvoiceTemp'
import { InvoiceTempMax } from '@components/organisms/InvoiceTemp/InvoiceTempMax'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { VendorSinglePaymentTable } from '@components/organisms/VendorSinglePaymentTable/VendorSinglePaymentTable'
import { VendorContractorExpenseTable } from '@components/organisms/VendorContractorExpenseTable/VendorContractorExpenseTable'
import { VendorPaymentStatsCard } from '@components/molecules/StatsCard/VendorPaymentStatsCard'
import { VendorContractEarningCard } from '@components/molecules/StatsCard/VendorContractEarningCard'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'


export const VendorContractsInvoiceTemplate = () => {

    const [openModal, setOpenModal] = useState(false);



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



            <VendorSidebar2/>
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
                        <div className="bg-green-100 w-3/5 rounded-lg p-5">
                            <div className="flex justify-between align-center">
                                <p className="text-gray-700 text-sm p-2">You have generated the invoice.</p>
                                <button className="rounded-3xl py-1 px-5 text-sm bg-green-500 text-white"> Invoice Generated </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-3/5">
                        <div className="flex gap-5 justify-end">
                            <button className="bg-gray-400 rounded-3xl text-sm px-5 py-2 w-36"
                                onClick={() => { setOpenModal(true) }}
                            >View</button>
                            <button className="bg-yellow-300 rounded-3xl text-sm px-5 py-2 w-36">Print As PDF</button>
                        </div>
                        <InvoiceTemp />
                    </div>


                    <div className="h-0.5 bg-gray-100 my-10"></div>


                    <div className="my-5">
                        <h2 className="font-semibold">Expenses</h2>
                    </div>

                    <div>
                        <VendorContractorExpenseTable />
                    </div>

                </main>
            </div >

        </>
    );
}