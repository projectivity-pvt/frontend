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
import { VendorCatalogDcsTable } from '@components/organisms/VendorCatalogTable/VendorCatalogDcsTable'

import React from 'react'

export const VendorSingleService = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />

            <main className="px-4 mt-4 mb-20">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h3 className=''>Camera Service</h3>
                        <span className='ml-5'>Live</span>
                    </div>

                    <div>
                        <p className='text-xs text-white bg-blue-600 rounded-2xl px-5 py-2'>Save Changes</p>
                    </div>
                </div>

                <div>
                    <p className='text-xs text-white bg-yellow-300 rounded-2xl px-5 py-1 w-24'>Inventory</p>
                </div>

                <div className='mt-5 w-3/4'>
                    <h5 className='mb-1'>Description</h5>
                    <textarea className='w-full h-24 rounded-lg resize-none text-sm border-gray-300'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis commodo nec, vestibulum adipiscing. Vitae varius sem eget scelerisque nulla habitant. Mauris lectus volutpat placerat lectus mauris, lacus. Blandit pellentesque magna consequat gravida dui ac.</textarea> <br />
                    <span className='text-xs float-right mr-5 cursor-pointer'>edit</span>
                </div>

                <div className='mt-10'>
                    <h5 className='mb-1'>Pricing</h5>
                    <div>
                        <input type="text" className='text-sm rounded-lg border-gray-300' value="$500 - $900" />
                    </div>
                </div>

                <div className='mt-10 flex items-center justify-between mb-10'>
                    <div className=''>
                        <h5 className=''>Catalogue</h5>
                    </div>

                    <div>
                        <p className='text-xs text-white bg-blue-600 rounded-2xl px-5 py-2'>Add item to catalogue</p>
                    </div>
                </div>

                <div>
                    <VendorCatalogTable />
                </div>


                <div className='mt-10 flex items-center justify-between mb-10'>
                    <div className=''>
                        <h5 className=''>Documents and Licence</h5>
                    </div>

                    <div>
                        <p className='text-xs text-white bg-blue-600 rounded-2xl px-5 py-2'>Upload new Document</p>
                    </div>
                </div>

                <div>
                    <VendorCatalogDcsTable />
                </div>



            </main>
        </div>
    </>
)
