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




export const PaymentProductionTemplate = () => {
    return (
        <>
            <DesktopSidebar
                sidebarList={VendorSidebarList}
                source={EntitySourceEnum.VENDOR}
            />
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20 flex items-center justify-center flex-col w-full">

                    <div className="mb-3">
                        <p className="text-green-500"> right icon </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-2xl text-center">Your Payment is successful.</p>
                        <p className="text-xs text-center">Please wait while we verify the amount and transfer it to the vendor</p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="border-t-4 rounded-3xl w-1/2 justify-center mb-2"></div>
                        <div className="flex w-1/2 justify-between">
                            <p className="text-xs">Production House</p>
                            <p className="text-xs">John Doe <br /> (Vendor)</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs text-black font-semibold text-center">Rate your experience with John Doe and his services.</p>
                        <p className="text-yellow-400 text-sm text-center">stars rating</p>
                        <textarea className="resize-none border-gray-300 rounded-lg w-full" placeholder="What did you like about this vendor ?"></textarea>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs text-black font-semibold text-center">How much you like the payment experience ?</p>
                        <p className="text-yellow-400 text-sm text-center">stars rating</p>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs text-black font-semibold text-center">How likely are you to recommend Projectivity to a friend ?</p>
                        <p className="text-yellow-400 text-sm text-center">emoji rating</p>
                    </div>
                    {/* --------------------------content------------------ */}

                </main>
            </div >

        </>
    );
}