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
import Image from 'next/image'


import React from 'react'

export const VendorSinglePostTemplate = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />

            <main className="px-4 mt-4 mb-20">
                <div className='flex justify-between px-5'>

                    <div className='flex items-center'>
                        <p className=''>back</p>
                        <h3 className='ml-5'>How I animated Spider man for Sony</h3>
                    </div>

                    <div className='flex items-center mr-5'>
                        <p className='mr-5 text-xs text-white bg-blue-600 px-5 py-1 rounded-2xl'>edit</p>
                        <p>delete</p>
                    </div>

                </div>


                <div className='mt-8 px-8'>
                    <p className='text-sm'>
                        Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor siamet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.</p>
                </div>

                <div className='mt-10 px-5'>
                    <h3 className='mb-3'>Images</h3>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-3">
                            <Image src="/images/post/Rectangle 220.png" height={120} width={200} />
                        </div>
                        <div className="col-span-3">
                            <Image src="/images/post/Rectangle 221.png" height={120} width={200} />
                        </div>
                        <div className="col-span-3">
                            <Image src="/images/post/Rectangle 222.png" height={120} width={200} />
                        </div>
                        <div className="col-span-3">
                            <Image src="/images/post/Rectangle 223.png" height={120} width={200} />
                        </div>
                    </div>
                </div>

                <div className='mt-10 px-5'>
                    <h3 className='mb-3'>Videos</h3>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-4">
                            <Image src="/images/post/Rectangle 224.png" height={150} width={260} />
                        </div>
                        <div className="col-span-4">
                            <Image src="/images/post/Rectangle 224.png" height={150} width={260} />
                        </div>
                        <div className="col-span-4">
                            <Image src="/images/post/Rectangle 224.png" height={150} width={260} />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </>
)
