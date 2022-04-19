import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import React from 'react'
import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'


export const NoContractTemplate = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />
        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />

            <main className="px-4 mt-4 mb-20">
                <EmptyContract />
            </main>

        </div>
    </>
)
