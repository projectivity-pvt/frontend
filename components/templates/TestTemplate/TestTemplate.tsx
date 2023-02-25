import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { StatsCard } from '@components/molecules/StatsCard/StatsCard'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'
import Image from 'next/image'


export const VendorOverviewTemplate = () => {
    let a = 1
    return (
        <>
            <VendorSidebar1 />
            <div className="flex flex-col flex-1 w-full overflow-y-auto background">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-5">
                    <div className="grid grid-cols-12 gap-5">


                        <div className='col-span-8'>
                            <div className="card">
                                <h2 className="mb-4 span">Earnings</h2>
                                <div className=''>
                                    <StatsCard />

                                    <div className="py-4">
                                        <div className=''><VendorChart /></div>
                                    </div>

                                    <div className="flex-grow px-5">
                                        <div className="mt-5">
                                            <SectionHeading />
                                        </div>
                                        <div className="list_wrapper1 flex-grow -mx-2 px-2 py-4 h-60 overflow-scroll mb-2">
                                            <VendorProjectListItem />
                                            <VendorProjectListItem />
                                            <VendorProjectListItem />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='col-span-4'>
                            <div className="card">
                                <div className="">
                                    <VendorProfileCard />
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="card">
                                    <div className='w-full'>
                                        <Image src="/images/overview/vendorUsp.svg" width={500} height={500} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        </>
    )
}
