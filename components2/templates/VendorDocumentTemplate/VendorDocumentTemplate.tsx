import React, { useState } from "react"
import {VendorSidebar2} from '@components/organisms/DesktopSidebar/VendorSidebar2'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { InvoiceTemp } from '@components/organisms/InvoiceTemp/InvoiceTemp'
import { VendorPaidTemp } from '@components/organisms/InvoiceTemp/VendorPaidTemp'
import { VendorPaidTempMax } from '@components/organisms/InvoiceTemp/VendorPaidTempMax'

import { InvoiceTempMax } from '@components/organisms/InvoiceTemp/InvoiceTempMax'
import { VendorDocForm } from '@components/templates/VendorDocumentTemplate/VendorDocForm'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { VendorSinglePaymentTable } from '@components/organisms/VendorSinglePaymentTable/VendorSinglePaymentTable'
import { VendorDocumentTable } from '@components/organisms/VendorDocumentTable/VendorDocumentTable'
import { VendorContractorExpenseTable } from '@components/organisms/VendorContractorExpenseTable/VendorContractorExpenseTable'
import { VendorPaymentStatsCard } from '@components/molecules/StatsCard/VendorPaymentStatsCard'
import { VendorContractEarningCard } from '@components/molecules/StatsCard/VendorContractEarningCard'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'


export const VendorDocumentTemplate = () => {

    const [openVendorDoc, setOpenVendorDoc] = useState(false);


    return (
        <>

            {openVendorDoc &&
                <div className="pop_container" style={{ alignItems: "center" }}>
                    <div className="w-3/5">
                        <VendorDocForm closeVendorDocForm={setOpenVendorDoc} />
                        <p className="h-5"></p>
                    </div>
                </div>
            }

            {/* -------------------main page------------------- */}

            <VendorSidebar2 />
            <div className="flex flex-col flex-1 overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">

                    {/* --------------------------expense table-------------------- */}
                    <div>
                        <VendorPICard />
                    </div>

                    <div className="flex justify-between">
                        <h2 className="">All Documents</h2>
                        <button className="bg-blue-600 text-white px-5 py-1 text-sm rounded-3xl"
                            onClick={() => setOpenVendorDoc(true)}
                        >Upload New Document</button>
                    </div>

                    <div className="mt-5">
                        <VendorDocumentTable />
                    </div>
                    {/* --------------------------expense table-------------------- */}

                </main>
            </div >

        </>
    );
}