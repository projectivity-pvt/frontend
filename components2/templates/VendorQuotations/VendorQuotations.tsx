import React, { useState } from "react"
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { SingleFinanceStatsCard } from '@components/molecules/StatsCard/SingleFinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { VendorQuotationTable } from '@components/organisms/VendorQuotationTable/VendorQuotationTable'
import { QuotationFormTemp } from "@components/organisms/Catalog/QuoteFormTemp"




export const VendorQuotations = () => {

    const [openQuoteModal, setOpenQuoteModal] = useState(false);


    return (
        <>

            {openQuoteModal &&
                <div className="pop_container" style={{ alignItems: "center" }}>
                    <div className="w-3/6">
                        <QuotationFormTemp closeQuotationForm={setOpenQuoteModal} />
                        <p className="h-5"></p>
                    </div>
                </div>
            }


            <VendorSidebar1 />
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mb-5 mt-2 w-full">
                    <div className="card">
                        <div className="flex justify-between items-center mb-5 px-3">
                            <h3 className="">All quotations</h3>
                            <button className="bg-green-400 text-white w-32 rounded-3xl py-2 text-xs"
                                onClick={() => { setOpenQuoteModal(true) }}
                            >Quote Now</button>
                        </div>

                        <div>
                            <VendorQuotationTable />
                        </div>
                    </div>
                </main>
            </div >

        </>
    );
}