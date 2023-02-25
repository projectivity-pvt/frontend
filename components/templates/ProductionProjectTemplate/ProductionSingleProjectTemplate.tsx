import React, { useState } from 'react'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import { VendorProjectCard } from 'components2/organisms/VendorProjectCard/VendorProjectCard'
import { ProjectCalendar } from 'components2/organisms/VendorChart/VendorProjectChart/VendorProjectCalendar'
import TableTabs from 'components2/molecules/TableTabs/TableTabs'
import ProjectTabs from 'components2/molecules/TableTabs/ProjectTabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { ContactPopup } from '@components/organisms/ContactPopup/ContactPopup'
import { AddProjectPop } from '@components/organisms/ContactPopup/AddProjectPop'
import Link from 'next/link'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import SingleProjectHeader from '@components/organisms/card/SingleProjectHeader'
import { BusinessProjectPie } from '@components/Charts/VendorDashboards/BusinessProjectPie'
import BusinessSingleProjectBoxes from './BusinessSingleProjectBoxes'
import {
  ProjectLocationCard,
  ProjectMemberCard,
  RecentTransactionCard,
  UpcomingPaymentCard,
} from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { SingleProjectPop } from '@components/organisms/ContactPopup/SingleProjectPop'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'

export const ProductionSingleProjectTemplate = () => {

  return (
    <>

      <BusinessSidebar2 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="mb-2">
          <div className="">
            {/* ----------main-------- */}
            <div className="card">
              <SingleProjectHeader />
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-6">
                    <div
                      className="card h-auto lg:h-96"
                      style={{ padding: '10px' }}
                    >
                      <h4 className='p-4'>
                        <b>Project Statestics</b>
                      </h4>
                      <BusinessSingleProjectBoxes />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="card h-auto lg:h-96">
                      <h4>
                        <b>Department Expense</b>
                      </h4>
                      <BusinessProjectPie />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="card">
                      <h4>
                        <b>Upcoming Payments</b>
                      </h4>
                      <div className="pr-10 mt-5">
                        <UpcomingPaymentCard />
                        <UpcomingPaymentCard />
                        <UpcomingPaymentCard />
                        <UpcomingPaymentCard />
                        <UpcomingPaymentCard />
                        <UpcomingPaymentCard />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="card">
                      <h4>
                        <b>Recent transaction</b>
                      </h4>
                      <div className="mt-5">
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                        <RecentTransactionCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <div className="card h-auto lg:h-96">
                  <ProjectMemberCard />
                </div>

                <div className="card mt-5">
                  <h4>
                    <b>Location</b>
                  </h4>
                  <ProjectLocationCard />
                </div>
              </div>
            </div>

            {/* ----------main-------- */}
          </div>
        </main>
      </div>
    </>
  )
}
