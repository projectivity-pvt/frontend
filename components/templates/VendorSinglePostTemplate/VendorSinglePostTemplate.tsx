import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { RecentPostCard } from '@components/organisms/RecentPostCard/RecentPostCard'
import { VendorConnectionCard } from '@components/organisms/VendorProfileCard/VendorConnectionCard'
import { VendorMessageCard } from '@components/organisms/VendorProfileCard/VendorMessageCard'
import { VendorPostProfileCard } from '@components/organisms/VendorProfileCard/VendorPostProfileCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AddPost } from '@components/organisms/RecentPostCard/AddPost'
import PostCardContent from '@components/organisms/RecentPostCard/PostCardContent'

export const VendorSinglePostTemplate = () => {

  return (
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
          <div className=" md:col-span-5 lg:col-span-4">
            <PostCardContent />
          </div>
        </div>
      </div>
    </>
  )
}
