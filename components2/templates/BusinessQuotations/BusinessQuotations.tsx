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
import { BusinessQuotationTable } from "@components/organisms/VendorQuotationTable/BusinessQuotationTable"
import { BusinessSidebar2 } from "@components/organisms/DesktopSidebar/BusinessSidebar2"




export const BusinessQuotations = () => {

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


            <BusinessSidebar2 />
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="">
                    <div className="card">
                        <div className="flex justify-between items-center mb-5 px-3">
                            <h3 className="">All quotations</h3>
                        </div>

                        <div>
                            <BusinessQuotationTable />
                        </div>
                    </div>
                </main>
            </div >

        </>
    );
}