import React, { useState } from 'react'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { InvoiceCorrectionForm } from '@components/organisms/InvoiceTemp/InvoiceCorrectionForm'

export const ProductionProjectSettingTemplate = () => {
  const [openProductionDocModal, setOpenProductionDocModal] = useState(false)

  return (
    <>
      <DesktopSidebar
        sidebarList={VendorSidebarList}
        source={EntitySourceEnum.VENDOR}
      />
      <div className="flex flex-col flex-1 w-full overflow-y-auto">
        <TopHeaderBar />
        <main className="mb-2 w-full background">
          <div className="card">
            <div className='w-3/4'>
            {/* ---------------------------- */}
            <div className="grid grid-cols-12">
              <div className="col-span-8">
                <div className="mt-5 p-2">
                  <h5 className="mb-1">
                    <b>Project Name</b>
                  </h5>
                  <input
                    className="w-full border-gray-300 rounded"
                    type="text"
                    placeholder="test"
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="mt-5 p-2">
                  <h5 className="mb-1">
                    <b>Project Budget</b>
                  </h5>
                  <input
                    className="w-full border-gray-300 rounded"
                    type="text"
                    placeholder="test"
                  />
                </div>
              </div>

              <div className="col-span-12">
                <div className="mt-5 p-2">
                  <h5 className="mb-1">
                    <b>Description</b>
                  </h5>
                  <textarea
                    className="w-full resize-none h-32 border-gray-300 rounded"
                    placeholder="test"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-8">
                <div className="mt-5 p-2">
                  <h5 className="mb-1">
                    <b>Address</b>
                  </h5>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded"
                    placeholder="test"
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="mt-11 p-2">
                  <button className="bg-gray-100 text-xs rounded px-10 py-3 hover:bg-gray-200">
                    <FontAwesomeIcon
                      className="text-gray-400 mr-2 text-sm"
                      icon={faLocationDot}
                    ></FontAwesomeIcon>
                    Choose Location
                  </button>
                </div>
              </div>

              <div className="col-span-4">
                <div className="mt-5 p-2">
                  <h5 className="mb-1">
                    <b>Start Date</b>
                  </h5>
                  <input
                    type="date"
                    className="w-full border-gray-300 rounded"
                    placeholder="test"
                  />
                </div>
              </div>

              <div className="col-span-4">
                <div className="mt-5 p-2">
                  <h5 className="mb-1">
                    <b>End Date</b>
                  </h5>
                  <input
                    type="date"
                    className="w-full border-gray-300 rounded"
                    placeholder="test"
                  />
                </div>
              </div>
            </div>
            {/* ---------------------------- */}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
