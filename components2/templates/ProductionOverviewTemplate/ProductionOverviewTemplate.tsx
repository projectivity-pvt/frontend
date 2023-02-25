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
// import { VendorDashTransactions } from '@components/Charts/VendorDashboards/VendorDashTransactions'
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
import VendorDashTransactions from '@components/Charts/VendorDashboards/VendorDashTransactions'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export const ProductionOverviewTemplate = () => {
  let a = 1
  return (
    <>
      <VendorSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 md:col-span-6">
            <div className="card">
              <h4 className="pb-3">Earnings</h4>
              <div className="mb-5">
                <StatsCard />
              </div>
              <VendorDashSalesChart />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div
              className="celeb_card card"
              style={{
                height: '200px',
                padding: '0px',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <div
                className="card_overlay flex justify-center items-center"
                style={{ height: '200px' }}
              >
                <div className=" overflow-hidden flex flex-col justify-center items-center">
                  <h3 className="truncate text-yellow-300">
                    Welcome, John Doe
                  </h3>
                  <h5 className="text-center m-2 text-gray-100">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                  </h5>
                  <h5
                    className="bg-gray-100 rounded-2xl py-1.5 px-8 mt-3 text-gray-600"
                    style={{ backgroundColor: '#54f9ef' }}
                  >
                    <a href=""> Complete KYC </a>
                  </h5>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="card" style={{ height: '140px' }}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-gray-600">
                        Requirement
                        <br /> Of Contracts
                      </p>
                      <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
                    </div>
                    <h4 className="flex justify-center items-center p-4 bg-blue-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-xs"
                        icon={faBox}
                        style={{ color: '#33c5f4' }}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </div>

                <div className="card mt-4" style={{ height: '140px' }}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-gray-600">
                        Arrivals
                        <br /> For Today
                      </p>
                      <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
                    </div>
                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-500 text-xs"
                        icon={faArrowTrendUp}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-span-6">
                <div className="card" style={{ height: '140px' }}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-gray-600">
                        Awaiting
                        <br /> Actions
                      </p>
                      <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
                    </div>
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faShield}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </div>

                <div className="card mt-4" style={{ height: '140px' }}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-gray-600">
                        Total
                        <br /> Vendors
                      </p>
                      <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
                    </div>
                    <h4 className="flex justify-center items-center p-4 bg-pink-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-pink-400 text-xs"
                        icon={faUser}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-12"> */}
          {/* <div className="col-span-12 lg:col-span-8 md:col-span-6">
            <div className="card">
              <h4 className="pb-3">Earnings</h4>
              <StatsCard />
              <VendorChart />
            </div> 
            </div> */}

          <div className="col-span-12 lg:col-span-8 md:col-span-6">
            <div className="card" style={{ height: '440px' }}>
              <h4 className="pb-3">Contracts</h4>
              <VendorDashProjectChart />
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
              <h4 className="pb-5">Recent Transactions</h4>
              <div className="overflow-y-scroll scrollbar-hide">
                <VendorDashTransactions />
                <VendorDashTransactions />
                <VendorDashTransactions />
                <VendorDashTransactions />
                <VendorDashTransactions />
                <VendorDashTransactions />
                <VendorDashTransactions />
              </div>
              <div className='flex justify-center'>
                <p className='text-xs pt-5 -mb-2 cursor-pointer'>View All</p>
              </div>
            </div>
          </div>

          {/* <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card" style={{ height: "480px" }}>
              <h4 className="pb-3">Average Enquiries</h4>
              <div className='flex flex-col'>
              <div className='flex justify-center '>
                <img  className='h-40' src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg" />
              </div>
              <div className='-rotate-90 -mt-16'>
              <VendorDashEnquiryChart />
              </div>
              </div>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-12"> */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card" style={{ height: '540px' }}>
              <h4 className="pb-3">Latest Projects</h4>
              <VendorDashContractsChart />
              <div>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-green-400"
                    icon={faCircle}
                    style={{ color: '#54f9ef' }}
                  ></FontAwesomeIcon>
                  Completed Projects
                </p>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-blue-500"
                    icon={faCircle}
                    style={{ color: '#33c5f4' }}
                  ></FontAwesomeIcon>
                  Upcoming Projects
                </p>
                <p className="text-sm text-gray-600 py-1.5">
                  <FontAwesomeIcon
                    className="text-xs mr-1 text-red-500"
                    icon={faCircle}
                  ></FontAwesomeIcon>
                  Pending Projects
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 md:col-span-12">
            <div className="card" style={{ height: '540px' }}>
              <h4 className="pb-3">Projects</h4>
              <div className="overflow-y-scroll">
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
      </div>
    </>
  )
}
