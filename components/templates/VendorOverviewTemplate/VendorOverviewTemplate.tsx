import React from 'react'
import Image from 'next/image'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorDashTimeline } from '@components/organisms/VendorProfileCard/VendorDashTimeline'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorDashProjectChart } from '@components/Charts/VendorDashboards/VendorDashProjectChart'
import { VendorDashProjectChart2 } from '@components/Charts/VendorDashboards/VendorDashProjectChart2'
import { VendorDashPaymentChart } from '@components/Charts/VendorDashboards/VendorDashPaymentChart'
import { VendorDashEnquiryChart } from '@components/Charts/VendorDashboards/VendorDashEnquiryChart'
import { VendorDashSalesChart } from '@components/Charts/VendorDashboards/VendorDashSalesChart'
import { VendorDashContractsChart } from '@components/Charts/VendorDashboards/VendorDashContractsChart'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendUp,
  faBox,
  faBoxOpen,
  faCircle,
  faCircleDot,
  faShield,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
import { url } from 'inspector'
import WelcomeCards from '@components/molecules/StatsCard/WelcomeCards'
import FooterIconsLinks from '@components/organisms/TopHeaderBar/FooterIconsLinks'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export const VendorOverviewTemplate = () => {
  let a = 1
  return (
    <>
      <VendorSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:hidden lg:hidden">
            <div>
              <WelcomeCards />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 md:col-span-12">
            <div className="card px-2 md:px-8">
              <h4 className="pb-3 ml-4 md:ml-0">Earnings</h4>
              <div className="mb-5">
                <StatsCard />
              </div>
              <div className="flex overflow-x-scroll scrollbar-hide">
                <VendorDashSalesChart />
              </div>
            </div>
          </div>

          <div className="hidden md:col-span-12 md:flex lg:col-span-4 lg:flex">
            <div>
              <WelcomeCards />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 md:col-span-12">
            <div className="card" style={{ height: '440px' }}>
              <h4 className="pb-3">Projects</h4>
              <div className="flex overflow-x-scroll scrollbar-hide">
                <VendorDashProjectChart />
              </div>
              {/* <VendorDashProjectChart2 /> */}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card" style={{ height: '440px' }}>
              <VendorProfileCard />
            </div>
          </div>
          {/* </div> */}

          {/* <div className="grid grid-cols-12"> */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div
              className="card overflow-hidden"
              style={{ height: '480px', paddingRight: '5px' }}
            >
              <h4 className="pb-5">User Timeline</h4>
              <div className="list_wrapper1 overflow-scroll pr-5">
                <VendorDashTimeline />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card" style={{ height: '480px' }}>
              <h4 className="pb-3">Payment Modes</h4>
              <VendorDashPaymentChart />
              <div>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1"
                    icon={faCircle}
                    style={{ color: '#33c5f4' }}
                  ></FontAwesomeIcon>
                  neft / rtgs
                </p>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-green-400"
                    icon={faCircle}
                  ></FontAwesomeIcon>
                  Net Banking
                </p>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-yellow-300"
                    icon={faCircle}
                  ></FontAwesomeIcon>
                  E-Wallet
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card" style={{ height: '480px' }}>
              <h4 className="pb-3">Average Enquiries</h4>
              <div className="flex flex-col">
                <div className="flex justify-center ">
                  <img
                    className="h-40"
                    src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg"
                  />
                </div>
                <div className="-rotate-90 -mt-16">
                  <VendorDashEnquiryChart />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* <div className="grid grid-cols-12"> */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card" style={{ height: '540px' }}>
              <h4 className="pb-3">Latest Contracts</h4>
              <VendorDashContractsChart />
              <div>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-green-400"
                    icon={faCircle}
                    style={{ color: '#54f9ef' }}
                  ></FontAwesomeIcon>
                  Completed Contracts
                </p>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-blue-500"
                    icon={faCircle}
                    style={{ color: '#33c5f4' }}
                  ></FontAwesomeIcon>
                  Upcoming Contracts
                </p>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-red-500"
                    icon={faCircle}
                  ></FontAwesomeIcon>
                  Pending Contracts
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 md:col-span-12">
            <div className="card" style={{ height: '540px' }}>
              <h4 className="pb-3">Contracts</h4>
              <div className="overflow-y-scroll">
                <VendorProjectListItem />
                <VendorProjectListItem />
                <VendorProjectListItem />
                <VendorProjectListItem />
              </div>
              <h5 className="text-gray-500 cursor-pointer text-center pt-3 -mb-2">
                View All
              </h5>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className='bg-[#54F9EF] fixed bottom-0 border-t w-full py-5 shadow-lg md:hidden'>
          <FooterIconsLinks />
        </div>
      </div>
    </>
  )
}
