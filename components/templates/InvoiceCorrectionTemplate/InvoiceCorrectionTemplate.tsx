import React, { useState } from 'react'
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
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { InvoiceTemp } from '@components/organisms/InvoiceTemp/InvoiceTemp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { InvoiceTempMax } from '@components/organisms/InvoiceTemp/InvoiceTempMax'
import { InvoiceCorrectionForm } from '@components/organisms/InvoiceTemp/InvoiceCorrectionForm'

export const InvoiceCorrectionTemplate = () => {

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
            <p className="text-2xl font-bold mb-3">
              Burger Singh Television Advertisement
            </p>
            <p className="text-xs">Created on: 10 October, 2021</p>
            <div className="flex items-center">
              <p className="text-xs">Project Created by:</p>
              <div className="flex gap-2 text-xs ml-2 text-blue-500 bg-blue-50 rounded-2xl pl-1 pr-3 py-0.5">
                <Avatar size={20} initial="j" />
                <button>John Doe</button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-10 mb-10">
            <p className="px-5 py-2 rounded-2xl text-xs text-center bg-blue-50">
              All Contractors{' '}
              <span className="text-xs text-white bg-blue-500 px-1 rounded-full">
                3
              </span>
            </p>
            <p>
              {' '}
              <FontAwesomeIcon
                className="group-hover:text-white text-gray-500 text-xs"
                icon={faChevronRight}
              ></FontAwesomeIcon>{' '}
            </p>
            <p className="text-sm">Catering and Food Supplies</p>
          </div>
          {/* --------------------------content------------------ */}
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-5 md:col-span-5 col-span-12">
              <div className="flex flex-col justify-center h-screen items-center">
                <div className="flex flex-col items-center gap-5 justify-center">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400 text-5xl"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>
                  </p>
                  <p className="text-sm text-black text-center leading-5">
                    Cheers! Your request for correction of{' '}
                    <span className="text-blue-500">Invoice #3321</span> is{' '}
                    <br /> successfully sent to{' '}
                    <span className="text-green-400">John Doe.</span> <br /> You
                    will be get a notification for the new invoice.
                  </p>
                </div>
                <div className="flex justify-center my-10">
                  <button className="bg-gray-100 rounded-2xl py-2 px-8 text-xs">
                    <FontAwesomeIcon
                      className="group-hover:text-white mr-2 text-gray-500 text-xs"
                      icon={faArrowLeft}
                    ></FontAwesomeIcon>
                    Go Back
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-7 col-span-12">
              <div className="flex gap-2 items-center justify-end">
                <button className="text-xs bg-gray-100 rounded-2xl px-10 py-2.5 mb-3 hover:bg-gray-200">
                  Print as PDF{' '}
                </button>
                <button className="text-xs bg-gray-100 rounded-2xl px-10 py-2.5 mb-3 hover:bg-gray-200">
                  Share{' '}
                </button>
              </div>
              <div className="flex justify-center items-center relative">
                <InvoiceTemp />
                <div
                  className="absolute flex justify-center items-center w-full h-full"
                  style={{ background: 'rgb(255,255,255,0.5)' }}
                >
                  <p
                    className="font-bold text-gray-300"
                    style={{ transform: 'rotate(-25deg)', fontSize: '70px' }}
                  >
                    {' '}
                    Rejected{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------content------------------ */}
        </main>
      </div>
    </>
  )
}
