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




export const BusinessSingleFinance = () => {
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
                        <div className="flex items-center">
                            <p className="text-xs">Project Created by: </p>
                            <button className="text-xs ml-2 text-blue-500 bg-blue-100 rounded-2xl px-5 py-0.5">John Doe</button>
                        </div>
                    </div>

                    <div className="flex border-b">
                        <div className="flex flex-col w-3/4 pr-5">

                            <div className="mb-10">
                                <SingleFinanceStatsCard />
                            </div>

                        </div>

                        <div className="flex flex-col w-1/4 pr-5">
                            <h1>Piechart</h1>
                        </div>
                    </div>

                    <div className="my-5">
                        <p>All Contractors <span className="text-sm text-blue-500 bg-blue-100 px-2 py-.9 rounded-full">3</span></p>
                    </div>

                    <div>
                        <ProductionFinanceTable />
                    </div>

                </main>
            </div >

        </>
    );
}