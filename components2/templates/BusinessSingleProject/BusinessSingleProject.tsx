import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { ProjectBreadcrumb } from '@components/molecules/Breadcrumb/ProjectBreadcrumb'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { ProjectDetailItem } from '@components/molecules/ProjectDetailItem/ProjectDetailItem'
import { SingleProjectDiscription } from '@components/molecules/SectionHeading/SingleProjectDiscription'
import { BusinessContractCard } from '@components/molecules/StatsCard/BusinessContractCard'
import { BusinessUnselectedContractCard } from '@components/molecules/StatsCard/BusinessUnselectedContractCard'
import { ProjectMembersTag } from '@components/molecules/StatsCard/ProjectMembersTag'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { BusinessProjectHeader } from '@components/organisms/ProjectHeader/BusinessProjectHeader'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorPaymentTable } from '@components/organisms/VendorPaymentTable/VendorPaymentTable'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import { VendorProjectListItem } from '@components/organisms/VendorProjectListItem/VendorProjectListItem'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const BusinessSingleProject = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />

            <main className="px-4 mt-4 mb-20">
                <div className="my-6">
                    <ProjectBreadcrumb />
                </div>
                <BusinessProjectHeader />

                <div className="flex items-start gap-4">
                    <div className="mr-4 pr-8 border-r flex-grow w-3/4">
                        <div className="mt-8">
                            <div className="mb-10">
                                <SingleProjectDiscription />
                            </div>
                        </div>

                        <div className="py-4 mb-8">
                            <div className='flex justify-between'>
                                <h2 className="mb-4">All Contracts <span className='text-sm text-blue-900 bg-blue-100 rounded-full px-2 py-0.5'>3</span></h2>
                                <div>
                                    <button className='text-blue-500 bg-blue-50 text-sm px-5 py-1 border-blue-400 rounded-2xl mr-2'>Add New Contract</button>
                                    <button className='text-white bg-blue-500 text-sm px-5 py-1 rounded-2xl'>Manage Payment</button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <BusinessContractCard />
                                <BusinessContractCard />
                                <BusinessContractCard />

                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <div>
                                    <BusinessUnselectedContractCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <div className='mb-5'>
                            <h3 className="font-bold">Project Members</h3>
                            <p className='text-xs '>These members will be modified of this project's activity</p>
                        </div>

                        <div className='h-2/4'>
                            <ProjectMembersTag />
                            <ProjectMembersTag />
                            <ProjectMembersTag />

                            <div className='w-full'>
                                <button className='w-full text-blue-500 bg-blue-100 text-sm rounded-2xl px-5 py-1'>Add Project Member</button>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h4 className='font-semibold'>Location</h4>
                            <div>MAP</div>
                            <p className='text-xs text-gray-500'>Address: 21 cloverfield lane, 201010, New Delhi.</p>
                        </div>

                    </div>


                </div>
            </main>
        </div>
    </>
)
