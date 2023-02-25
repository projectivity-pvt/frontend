import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { RecentPostCard } from '@components/organisms/RecentPostCard/RecentPostCard'

import React from 'react'
import { AddPost } from '@components/organisms/RecentPostCard/AddPost'
import PostCardContent from '@components/organisms/RecentPostCard/PostCardContent'

export const VendorAddTimelineTemplate = () => (
  <>
    <VendorSidebar1 />
    <div className="flex flex-col flex-1 w-full overflow-y-auto background">
      <TopHeaderBar />

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <div className="">
            <AddPost />
            <RecentPostCard />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <PostCardContent />
        </div>
      </div>
    </div>
  </>
)
