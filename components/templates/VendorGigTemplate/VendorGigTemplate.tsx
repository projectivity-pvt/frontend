import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { GigCard } from '@components/organisms/GigCard'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import { Button } from '@windmill/react-ui'
import React from 'react'

export const VendorGigTemplate = () => {
  return (
    <>
      <DesktopSidebar
        sidebarList={VendorSidebarList}
        source={EntitySourceEnum.VENDOR}
      />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <main className="px-4 mt-4 mb-20">
          <EmptyContract title="You have not created any Gigs" />
          <div className="my-5 flex items-center justify-between">
            <p className="text-2xl font-bold">Your Gigs</p>
            <Button size='large'>Create new Gig</Button>
          </div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-10">
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
          </div>
        </main>
      </div>
    </>
  )
}
