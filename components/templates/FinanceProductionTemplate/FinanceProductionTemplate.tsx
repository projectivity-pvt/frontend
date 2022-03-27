import React from "react"
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { FinanceStatsCard } from '@components/molecules/StatsCard/FinanceStatsCard'
import { FinanceInvoiceCard } from '@components/molecules/StatsCard/FinanceInvoiceCard'
import { UpcomingPaymentCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { RecentTransactionCard } from '@components/molecules/StatsCard/UpcomingPaymentCard'



export const FinanceProductionTemplate = () => {
    return (
        <>
            <DesktopSidebar
                sidebarList={VendorSidebarList}
                source={EntitySourceEnum.VENDOR}
            />
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className=" flex px-4 mt-4 mb-20  w-full">

                    <div className="flex flex-col w-3/4 pr-5">

                        <div className="flex justify-between items-center mb-10">
                            <p>Expense This Month</p>
                            <button className="border-blue-400">oct, 2021</button>
                        </div>

                        <div className="mb-10">
                            <FinanceStatsCard />
                        </div>

                        <div className="flex justify-between mb-3 px-5">
                            <p className="text-sm">Projects and Invoices</p>
                            <button className="border-gray-300 text-sm">All</button>
                        </div>
                        <div>
                            <FinanceInvoiceCard />
                            <FinanceInvoiceCard />
                            <FinanceInvoiceCard />
                        </div>

                    </div>

                    <div className="w-1/4 border-l pl-5">
                        <div className="mb-10 pt-10">
                            <p className="font-bold text-sm pb-3">Upcoming Payments</p>
                            <div>
                                <UpcomingPaymentCard />
                                <UpcomingPaymentCard />
                                <UpcomingPaymentCard />
                                <UpcomingPaymentCard />
                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-sm pb-3">Latest Transactions</p>
                            <div>
                                <RecentTransactionCard />
                                <RecentTransactionCard />
                                <RecentTransactionCard />
                                <RecentTransactionCard />
                            </div>
                        </div>

                    </div>


                </main>
            </div >

        </>
    );
}