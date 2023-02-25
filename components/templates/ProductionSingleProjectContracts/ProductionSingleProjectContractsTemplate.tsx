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
import {
  ProjectLocationCard,
  ProjectMemberCard,
  RecentTransactionCard,
  UpcomingPaymentCard,
} from '@components/molecules/StatsCard/UpcomingPaymentCard'
import { SingleProjectPop } from '@components/organisms/ContactPopup/SingleProjectPop'
import ProductionProjectContractsTab from 'components2/molecules/TableTabs/ProductionProjectContractsTab'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'

export const ProductionSingleProjectContractsTemplate = () => {
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

            <div className="card">
                <ProductionProjectContractsTab />
            </div>
    
            {/* ----------main-------- */}
          </div>
        </main>
      </div>
    </>
  )
}
