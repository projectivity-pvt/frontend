import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const VendorOverviewTemplate = () => {
  let a = 1
  return (
    <>
      <DesktopSidebar
        sidebarList={VendorSidebarList}
        source={EntitySourceEnum.VENDOR}
      />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <main className="px-4 mt-4 mb-20">
          <div className="flex items-start gap-4">
            <div className="rounded-lg border flex-grow">
              <div className="p-4">
                <h2 className="mb-4">Earnings</h2>
                <div className="flex items-center gap-4">
                  <StatsCard />
                  <StatsCard />
                  <StatsCard />
                </div>
              </div>
              <div className="p-4 w-3/4">
                <VendorChart />
              </div>
            </div>
            <div className="w-1/4">
              <VendorProfileCard />
            </div>
          </div>
          <div className="mt-8 flex gap-4 items-stretch">
            <div className="flex-grow">
              <div className="mb-4">
                <SectionHeading />
              </div>
              <VendorProjectListItem />
            </div>
            <div className="bg-indigo-200 rounded-lg p-4 w-1/4">USP banner</div>
          </div>
        </main>
      </div>
    </>
  )
}
