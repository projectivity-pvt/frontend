import React from 'react'
import { TopHeaderBar } from 'components2/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import { ProductionEmployeeTable } from '@components/organisms/table/ProductionEmployeeTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'

export const EmployeeProductionTemplate = () => {
  return (
    <>
      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="px-2 mb-1">
          <div className="card">
            <div className="flex items-center justify-between">
              <h4>User Access Control</h4>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="search..."
                  className="border border-gray-300 rounded-3xl w-64"
                />
                <button className="text-xs bg-blue-600 text-white p-3 px-10 rounded">
                  Add User
                </button>

                <button className="text-xs bg-red-600 text-white p-3 px-5 rounded">
                  Download CSV
                </button>
              </div>
            </div>

            <div>
              <ProductionEmployeeTable />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
