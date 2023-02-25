import React from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'

export const PaymentProductionTemplate = () => {
  return (
    <>
      <BusinessSidebar2 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <div className="card">
          <main className="px-4 mt-4 mb-20 flex items-center justify-center flex-col w-full">
            <div className="mb-1">
              <p className="text-green-500">
                <Image src="/images/tick-circle.svg" height={45} width={45} />
              </p>
            </div>
            <div className="mb-10">
              <p className="text-2xl text-center">
                Your Payment is successful.
              </p>
              <p className="text-xs text-center">
                Please wait while we verify the amount and transfer it to the
                vendor
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <div className="border-t-4 border-green-300 rounded-3xl w-3/4 lg:w-1/2 justify-center mb-2"></div>
              <div className="flex justify-between items-center w-3/4 lg:w-1/2 -mt-5">
                <p>
                  <FontAwesomeIcon
                    className="text-green-500 text-xl bg-white"
                    icon={faCircleCheck}
                  ></FontAwesomeIcon>
                </p>

                <p>
                  <FontAwesomeIcon
                    className="text-green-500 text-xl bg-white"
                    icon={faCircleCheck}
                  ></FontAwesomeIcon>
                </p>
              </div>

              <div className="flex w-1/2 justify-between">
                <p className="text-center text-gray-600 -ml-10 text-sm">
                  Production House
                </p>  
                <p className="text-center text-gray-500 -mr-5 text-sm">
                  John Doe <br /> (Vendor)
                </p>
              </div>
            </div>

            <div className="mt-10 mb-10">
              <p className="text-xs text-black font-semibold text-center">
                Rate your experience with John Doe and his services.
              </p>
              <p className="text-sm text-center justify-center flex gap-2 mt-5">
                <Image src="/images/payment/Star.svg" height={20} width={20} />
                <Image
                  src="/images/payment/Star-1.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src="/images/payment/Star-2.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src="/images/payment/Star-3.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src="/images/payment/Star-4.svg"
                  height={20}
                  width={20}
                />
              </p>

              <textarea
                className="text-xs mt-5 h-28 resize-none border-gray-300 rounded-lg w-full teaxtarea_focus"
                placeholder="Let others and us know about your experience with the vendors."
              ></textarea>

              <div className="flex justify-end">
                <button className="group bg-green-100 hover:bg-green-400 hover:text-white text-green-400 rounded-2xl py-2 text-xs px-5">
                  Submit
                  <FontAwesomeIcon
                    className="text-green-400 text-sm ml-2 bg-white group-hover:text-white group-hover:bg-green-400"
                    icon={faCircleCheck}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-xs text-black font-semibold text-center">
                How much you like the payment experience ?
              </p>
              <p className="text-sm text-center justify-center flex gap-2 mt-5">
                <Image src="/images/payment/Star.svg" height={20} width={20} />
                <Image
                  src="/images/payment/Star-1.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src="/images/payment/Star-2.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src="/images/payment/Star-3.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src="/images/payment/Star-4.svg"
                  height={20}
                  width={20}
                />
              </p>
            </div>

            <div className="mb-8">
              <p className="text-xs text-black font-semibold text-center">
                How likely are you to recommend Projectivity to a friend ?
              </p>

              <textarea
                className="text-xs mt-5 h-28 resize-none border-gray-300 rounded-lg w-full teaxtarea_focus"
                placeholder="Let us know about your experience with Projectivity and how can we improve it."
              ></textarea>

              <div className="flex justify-end">
                <button className="group bg-green-100 hover:bg-green-400 hover:text-white text-green-400 rounded-2xl py-2 text-xs px-5">
                  Submit
                  <FontAwesomeIcon
                    className="text-green-400 text-sm ml-2 bg-white group-hover:text-white group-hover:bg-green-400"
                    icon={faCircleCheck}
                  ></FontAwesomeIcon>
                </button>
              </div>

              <p className="text-yellow-400 text-sm text-center justify-center flex gap-2 mt-5">
                <img
                  className="h-8 hover:h-9 duration-200"
                  src="/images/emojirating-1.svg"
                />
                <img
                  className="h-8 hover:h-9 duration-200"
                  src="/images/emojirating-2.svg"
                />
                <img
                  className="h-8 hover:h-9 duration-200"
                  src="/images/emojirating-3.svg"
                />
                <img
                  className="h-8 hover:h-9 duration-200"
                  src="/images/emojirating-4.svg"
                />
              </p>
            </div>

            {/* --------------------------content------------------ */}
          </main>
        </div>
      </div>
    </>
  )
}
