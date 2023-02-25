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




export const SingleContractorFinance = () => {
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
                            <div className="mb-5">
                                <p className="text-2xl mb-3">Invoice</p>
                                <p className="text-sm"> <span className="text-blue-500">John Doe</span> sent you an invoice for their <span className="text-green-400">catering and food service</span>. Please review carefully before approving. </p>
                            </div>
                            <div className="mb-5 flex justify-center gap-5">
                                <button className="text-gray-500 bg-gray-100 px-5 py-1 text-xs rounded-2xl">Request Correction</button>
                                <button className="text-green-500 bg-green-100 px-5 py-1 text-xs rounded-2xl">Approved Invoice</button>
                            </div>
                            <div className="flex justify-center items-center gap-10">
                                <div><p className="text-xs text-gray-400">Paid</p> <p className="text-sm">$ 0</p></div>
                                <div>+</div>
                                <div><p className="text-xs text-gray-400">Unpaid</p> <p className="text-sm">$ 891</p></div>
                                <div>=</div>
                                <div><p className="text-xs text-gray-400">Total Payable</p> <p className="text-sm text-blue-500">$ 891</p></div>
                            </div>
                            <div className="flex justify-center my-5">
                                <button className="text-white text-xs bg-blue-500 px-10 py-1 rounded-2xl">Proceed to Pay</button>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Terms and condition: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae dignissim magna ipsum nisl. Diam adipiscing aliquam volutpat enim, eu accumsan tincidunt tincidunt. Turpis facilisis ultricies eros, cursus enim arcu tristique non arcu. </p>
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