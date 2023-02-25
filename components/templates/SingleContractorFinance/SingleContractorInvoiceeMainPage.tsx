import React, { useState } from 'react'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { VendorSidebarList } from '@utils//constants'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { InvoiceTemp } from '@components/organisms/InvoiceTemp/InvoiceTemp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { InvoiceCorrectionForm } from '@components/organisms/InvoiceTemp/InvoiceCorrectionForm'
import { ChooseProjectVendorForm } from '@components/organisms/InvoiceTemp/ChooesProjectVendorForm'
import { InvoiceCorrectionForm2 } from '@components/organisms/InvoiceTemp/InvoiceCorrectionForm2'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'
import SingleProjectHeader from '@components/organisms/card/SingleProjectHeader'
import { BusinessContractorExpenseTable } from './BusinessContractorExpenseTable'
import InvoiceWrapper from './InvoiceWrapper'
import OpenInvoiceWrapper from './OpenInvoiceWrapper'

export const SingleContractorInvoiceeMainPage = () => {
  const [openCorrectionModal, setOpenCorrectionModal] = useState(false)

  return (
    <>
      {/* ChooseProjectVendorForm */}
      {/* InvoiceCorrectionForm */}
      {openCorrectionModal && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <InvoiceCorrectionForm2 closeModal12={setOpenCorrectionModal} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <BusinessSidebar2 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <main className="">
          <div className="card">
            <SingleProjectHeader />
          </div>

          <div className="card">
            <div>
              <OpenInvoiceWrapper />
              <BusinessContractorExpenseTable />
            </div>

            <div className="mt-10">
              <div className="flex flex-col gap-5">
                <InvoiceWrapper />
                <InvoiceWrapper />
                <InvoiceWrapper />
                <InvoiceWrapper />
              </div>
            </div>
            {/* --------------------------content------------------ */}
          </div>
        </main>
      </div>
    </>
  )
}
