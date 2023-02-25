import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import {VendorSidebar1} from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import Image from 'next/image'
import React from 'react'
import StarSvg from 'public/images/star.svg'

export const NoVendorQuotations = () => {
    return (
        <>
            <VendorSidebar1/>
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">
                    <EmptyContract title="Uh Oh! You don’t have any quotation requests to show." />
                </main>
            </div>
        </>
    )
}
