import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import {VendorSidebar1} from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'
import { EmptyServices } from '@components/molecules/EmptyServices/EmptyServices'


export const NoServicesTemplate = () => (
    <>
        <VendorSidebar1/>
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />

            <main className="px-4 mt-4 mb-20">
                <EmptyServices />
            </main>

        </div>
    </>
)
