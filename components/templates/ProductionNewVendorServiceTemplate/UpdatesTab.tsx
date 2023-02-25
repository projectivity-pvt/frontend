import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { RecentPostCard } from '@components/organisms/RecentPostCard/RecentPostCard'
import { VendorConnectionCard } from '@components/organisms/VendorProfileCard/VendorConnectionCard'
import { VendorMessageCard } from '@components/organisms/VendorProfileCard/VendorMessageCard'
import { VendorPostProfileCard } from '@components/organisms/VendorProfileCard/VendorPostProfileCard'

import React from 'react'

export const UpdatesTab = () => (
  <>
    <div className="flex flex-col">
      <div className="mb-5">
        <h5>
          <b>
          See what’s trending for <span>Vendor Name</span>
          </b>
        </h5>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <RecentPostCard />
        </div>
      </div>
    </div>
  </>
)
