import React, { useState } from 'react'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { InvoiceCorrectionForm } from '@components/organisms/InvoiceTemp/InvoiceCorrectionForm'
import { ProductionDocumentsTable } from './ProductionDocumentsTable'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'
import SingleProjectHeader from '@components/organisms/card/SingleProjectHeader'

export const ProductionRequestDocsTemplate: any = () => {
  const [openProductionDocModal, setOpenProductionDocModal] = useState(false)

  return (
    <>
      {/* ChooseProjectVendorForm */}
      {/* InvoiceCorrectionForm */}
      {openProductionDocModal && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <InvoiceCorrectionForm closeModal7={setOpenProductionDocModal} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <BusinessSidebar2 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <main className="mb-2 w-full background">
          <div className="card">
            <SingleProjectHeader />
          </div>

          <div className="card">
            <div className="flex justify-end">
              <button
                onClick={() => setOpenProductionDocModal(true)}
                className="bg-blue-500 flex gap-2 text-white rounded-3xl py-2.5 px-8 text-xs hover:bg-blue-600"
              >
                <FontAwesomeIcon
                  className="text-white bg-blue-500 text-sm"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
                Request Document
              </button>
            </div>

            <div>
              <ProductionDocumentsTable />
            </div>

            {/* --------------------------content------------------ */}

            {/* --------------------------content------------------ */}
          </div>
        </main>
      </div>
    </>
  )
}
