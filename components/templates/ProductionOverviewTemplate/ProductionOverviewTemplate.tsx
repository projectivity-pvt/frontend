import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { ProductTransactionHeading } from '@components/molecules/ProductSectionHeading/ProductTransactionHeading'
import { ProductProjectHeading } from '@components/molecules/ProductSectionHeading/ProductProjectHeading'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { ProductionStatsCard } from '@components/molecules/StatsCard/ProductionStatsCard'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'

import { UserPill } from '@components/molecules/UserPill/UserPill'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { ProductProjectListItem } from '@components/organisms/ProductListItem/ProductProjectListItem'
import { ProductTransactionListItem } from '@components/organisms/ProductListItem/ProductTransactionListItem'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const ProductionOverviewTemplate = () => {
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
            <div className=" flex-grow">
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <ProductionStatsCard />
                </div>
              </div>

              <ProductProjectHeading />

              <div className="list_wrapper1 rounded-lg border flex-grow py-4 mb-5 h-60 overflow-scroll">
                <ProductProjectListItem />
                <ProductProjectListItem />
                <ProductProjectListItem />
                <ProductProjectListItem />
                <ProductProjectListItem />
                <ProductProjectListItem />
                <ProductProjectListItem />
                <ProductProjectListItem />
              </div>

              <ProductTransactionHeading />

              <div className="list_wrapper2 rounded-lg border flex-grow py-4 h-60 overflow-scroll">
                <ProductTransactionListItem />
                <ProductTransactionListItem />
                <ProductTransactionListItem />
                <ProductTransactionListItem />
                <ProductTransactionListItem />
                <ProductTransactionListItem />
                <ProductTransactionListItem />
              </div>

            </div>
          </div>

        </main>
      </div>
    </>
  )
}
