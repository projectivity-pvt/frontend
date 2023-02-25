import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { RecentPostCard } from '@components/organisms/RecentPostCard/RecentPostCard'
import { VendorConnectionCard } from '@components/organisms/VendorProfileCard/VendorConnectionCard'
import { VendorMessageCard } from '@components/organisms/VendorProfileCard/VendorMessageCard'
import { VendorPostProfileCard } from '@components/organisms/VendorProfileCard/VendorPostProfileCard'

import React from 'react'

export const VendorAddTimelineTemplate = () => (
  <>
    <VendorSidebar1 />
    <div className="flex flex-col flex-1 w-full overflow-y-auto background">
      <TopHeaderBar />

      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className=''>
          <RecentPostCard />
          </div>
        </div>
        <div className="col-span-4">
          <div className="card">
            <VendorPostProfileCard />
          </div>
          <div className="card mt-5">
            <VendorConnectionCard />
          </div>
          <div className="card mt-5">
            <VendorMessageCard />
          </div>
        </div>
      </div>
    </div>

    
  </>
)
