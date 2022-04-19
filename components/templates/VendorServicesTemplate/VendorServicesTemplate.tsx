import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { VendorEarningCard } from '@components/molecules/VendorEarningCard/VendorEarningCard'
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { PendingPaymentCard } from '@components/organisms/PendingPaymentCard/PendingPaymentCard'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorEarningReport } from '@components/organisms/VendorEarningReport/VendorEarningReport'
import { VendorServicesTable } from '@components/organisms/VendorServicesTable/VendorServicesTable'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'

export const VendorServicesTemplate = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />
            <main className="px-4 mt-4 mb-20">

                <div className='flex justify-between items-center px-5'>
                    <h3 className="mb-4">All Services</h3>
                    <button className='text-white bg-blue-500 rounded-3xl text-xs px-3 py-1'>Create a new Service</button>
                </div>

                <div className=''>
                    <VendorServicesTable />
                </div>

            </main>
        </div>
    </>
)
