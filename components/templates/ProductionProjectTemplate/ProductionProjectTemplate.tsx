import React from "react";
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessProjectCard } from '@components/organisms/BusinessProjectCard/BusinessProjectCard'
import { ProductionProjectTable } from '@components/organisms/ProductionProjectTable/ProductionProjectTable'
import { ProuctProjectTabs } from '@components/molecules/ProuctTabs/ProuctProjectTabs'
// import SimpleReactCalendar from 'simple-react-calendar';



export const ProductionProjectTemplate = () => (
    <>
        <DesktopSidebar
            sidebarList={VendorSidebarList}
            source={EntitySourceEnum.VENDOR}
        />

        <div className="flex flex-col flex-1 w-full overflow-y-auto ">
            <TopHeaderBar />
            <div className="rounded-lg flex flex-grow">
                <div className="p-4 w-2/3">
                    <h2 className="mb-4">Near Due date</h2>
                    <div className="flex items-center gap-4 overflow-auto">
                        <BusinessProjectCard />
                        <BusinessProjectCard />
                        <BusinessProjectCard />
                    </div>
                </div>

                <div className="">
                    Calender
                    {/* <SimpleReactCalendar activeMonth={new Date()} /> */}
                </div>
            </div>

            <div className="mt-8 ">
                <div className="mb-4">
                    <ProuctProjectTabs />
                </div>
                <ProductionProjectTable />
            </div>
        </div>
    </>
) 