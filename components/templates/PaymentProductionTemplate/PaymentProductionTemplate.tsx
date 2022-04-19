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
import Image from 'next/image'




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

                    <div className="mb-1">
                        <p className="text-green-500">
                            <Image src="/images/tick-circle.svg" height={45} width={45} />
                        </p>
                    </div>
                    <div className="mb-10">
                        <p className="text-2xl text-center">Your Payment is successful.</p>
                        <p className="text-xs text-center">Please wait while we verify the amount and transfer it to the vendor</p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="border-t-4 border-green-300 rounded-3xl w-1/2 justify-center mb-2"></div>
                        <div className="flex justify-between w-1/2 -mt-5">
                            <p className=""> <Image src="/images/payment/tick-circle.svg" height={20} width={20} /> </p>
                            <Image src="/images/payment/Ellipse.svg" height={20} width={20} />
                        </div>

                        <div className="flex w-1/2 justify-between">
                            <p className="text-xs">Production House</p>
                            <p className="text-xs">John Doe <br /> (Vendor)</p>
                        </div>
                    </div>

                    <div className="mt-10 mb-10">
                        <p className="text-xs text-black font-semibold text-center">Rate your experience with John Doe and his services.</p>
                        <p className="text-sm text-center justify-center flex gap-2 mt-5">
                            <Image src="/images/payment/Star.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-1.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-2.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-3.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-4.svg" height={20} width={20} />
                        </p>

                        <textarea className="text-xs mt-5 resize-none border-gray-300 rounded-lg w-full" placeholder="What did you like about this vendor ?"></textarea>
                    </div>

                    <div className="mb-10">
                        <p className="text-xs text-black font-semibold text-center">How much you like the payment experience ?</p>
                        <p className="text-sm text-center justify-center flex gap-2 mt-5">
                            <Image src="/images/payment/Star.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-1.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-2.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-3.svg" height={20} width={20} />
                            <Image src="/images/payment/Star-4.svg" height={20} width={20} />
                        </p>
                    </div>

                    <div className="mb-8">
                        <p className="text-xs text-black font-semibold text-center">How likely are you to recommend Projectivity to a friend ?</p>
                        <p className="text-yellow-400 text-sm text-center justify-center flex gap-2 mt-5">
                            <Image src="/images/emojirating-1.svg" height={30} width={30} />
                            <Image src="/images/emojirating-2.svg" height={30} width={30} />
                            <Image src="/images/emojirating-3.svg" height={30} width={30} />
                            <Image src="/images/emojirating-4.svg" height={30} width={30} />
                        </p>
                    </div>
                    {/* --------------------------content------------------ */}

                </main>
            </div >

        </>
    );
}