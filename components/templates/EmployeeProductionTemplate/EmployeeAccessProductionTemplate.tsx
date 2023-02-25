import React from 'react'
import { TopHeaderBar } from 'components2/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import { ProductionEmployeeTable } from '@components/organisms/table/ProductionEmployeeTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { VendorPICard } from '@components/molecules/StatsCard/VendorPICard'
import { BusinessCallTime } from '../BusinessCallTime/BusinessCallTime'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'
import { EmployeeAccessTable } from './EmployeeAccessTable'
import SingleProjectHeader from '@components/organisms/card/SingleProjectHeader'

export const EmployeeAccessProductionTemplate = () => {
  return (
    <>
      <BusinessSidebar2 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="px-2 mb-1">
          <div className="card">
            <SingleProjectHeader />
          </div>
          <div className="card">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Project’s Admin Controls</p>
              <div className="flex flex-col items-end gap-2">
                <div>
                  <input
                    type="text"
                    placeholder="search..."
                    className="text-xs rounded-full w-[270px]"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 w-32 text-white text-xs rounded-full py-2">
                    Add Roles
                  </button>

                  <button className="bg-red-500 w-32 text-white text-xs rounded-full py-2">
                    Download CSV
                  </button>
                </div>
              </div>
            </div>

            <div>
              <EmployeeAccessTable />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
