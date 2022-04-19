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
import { ProjectHeader } from '@components/organisms/ProjectHeader/ProjectHeader'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { VendorSidebarList } from '@utils//constants'
import { VendorCatalogTable } from '@components/organisms/VendorCatalogTable/VendorCatalogTable'
import { RecentPostCard } from '@components/organisms/RecentPostCard/RecentPostCard'

import React from 'react'

export const VendorAddTimelineTemplate = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />

            <main className="px-4 mt-4 mb-20">
                <div className=''>
                    <h3 className='py-3'>Update you timeline</h3>
                    <textarea className='w-full h-24 rounded-lg resize-none text-sm border-gray-300'>
                        Write something here...
                    </textarea>
                </div>

                <div className='flex justify-between mt-2'>
                    <div>
                        <span className='text-gray-500 text-xs bg-gray-100 rounded-lg px-5 py-1 mr-3'>Add Image</span>
                        <span className='text-gray-500 text-xs bg-gray-100 rounded-lg px-5 py-1'>Add Video</span>
                    </div>
                    <div>
                        <span className='text-white text-xs bg-blue-600 rounded-2xl px-5 py-1'>Post Update</span>
                    </div>
                </div>

                <div className='mt-10'>
                    <h3 className='py-3'>Recent Posts</h3>
                </div>

                <div className='vertical_list_wrapper pr-2'>
                    <RecentPostCard />
                    <RecentPostCard />
                </div>

            </main>
        </div>
    </>
)
