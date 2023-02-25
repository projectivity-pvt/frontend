import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { Breadcrumb } from '@components/molecules/Breadcrumb/Breadcrumb'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { ProjectDetailItem } from '@components/molecules/ProjectDetailItem/ProjectDetailItem'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { ProjectHeader } from '@components/organisms/ProjectHeader/ProjectHeader'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const VendorSingleContract = () => (
  <>
    <VendorSidebar1 />
    <div className="flex flex-col flex-1 w-full overflow-y-auto ">
      <TopHeaderBar />

      <main className="px-4 mt-4 mb-20">
        <div className="my-6">
          <Breadcrumb />
        </div>
        <ProjectHeader />

        <div className="flex items-start gap-4 w-full">
          <div className="mr-4 pr-8 border-r flex-grow w-3/4">
            <div className="py-4 mb-8">
              <h2 className="mb-4">Earnings</h2>
              <div className="flex items-center gap-4">
                <StatsCard />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <SectionHeading />
              </div>
              <VendorPaymentTable />
            </div>
            <div className="mt-8">
              <div className="mb-4">
                <SectionHeading />
              </div>
              <div className="rounded-lg p-4 border">
                This contracts requirement. Can be in tabular form if need to
                add item and quantity (depending upon the nature of the contract
                ) Discussion needed
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div>
              <h3 className="mb-4">Project Details</h3>
              <div className="flex flex-col items-start gap-4">
                <ProjectDetailItem />
                <ProjectDetailItem />
                <ProjectDetailItem />
                <ProjectDetailItem />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
)
