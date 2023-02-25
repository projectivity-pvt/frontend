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

export const SingleContractorFinance = () => {
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
            <div className="flex items-center gap-5 mt-10 mb-10">
              <p className="px-5 py-2 rounded-2xl text-xs text-center bg-blue-50">
                All Contractors{' '}
                <span className="text-xs text-white bg-blue-500 px-1 rounded-full">
                  3
                </span>
              </p>
              <p>
                {' '}
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-500 text-xs"
                  icon={faChevronRight}
                ></FontAwesomeIcon>{' '}
              </p>
              <p className="text-sm">Catering and Food Supplies</p>
            </div>
            {/* --------------------------content------------------ */}
            <div className="grid grid-cols-12 gap-5">
              <div className="lg:col-span-6 md:col-span-6 col-span-12">
                <div className="mb-10">
                  <p className="text-2xl mb-3">Invoice</p>
                  <p className="text-sm">
                    {' '}
                    <span className="text-blue-500">John Doe</span> sent you an
                    invoice for their <br />{' '}
                    <span className="text-green-400">
                      catering and food service
                    </span>
                    . Please review <br /> carefully before approving.{' '}
                  </p>
                </div>
                <div className="mb-5 flex justify-center gap-5">
                  <button
                    onClick={() => {
                      setOpenCorrectionModal(true)
                    }}
                    className="text-gray-500 bg-gray-100 px-10 py-2.5 text-xs rounded-full hover:bg-gray-200"
                  >
                    Request Correction
                  </button>
                  <button className="text-green-500 bg-green-100 px-10 py-2.5 text-xs rounded-full hover:bg-green-200">
                    Approved Invoice
                  </button>
                </div>
                <div className="flex justify-center items-center gap-10">
                  <div>
                    <p className="text-xs text-gray-400">Paid</p>{' '}
                    <p className="text-sm">$ 0</p>
                  </div>
                  <div>+</div>
                  <div>
                    <p className="text-xs text-gray-400">Unpaid</p>{' '}
                    <p className="text-sm">$ 891</p>
                  </div>
                  <div>=</div>
                  <div>
                    <p className="text-xs text-gray-400">Total Payable</p>{' '}
                    <p className="text-sm text-blue-500">$ 891</p>
                  </div>
                </div>
                <div className="flex justify-center my-5 mt-20">
                  <button className="text-white text-xs bg-blue-500 px-10 py-2.5 rounded-full hover:bg-blue-600">
                    Proceed to Pay
                  </button>
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    Terms and condition: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Amet vitae dignissim magna ipsum nisl. Diam
                    adipiscing aliquam volutpat enim, eu accumsan tincidunt
                    tincidunt. Turpis facilisis ultricies eros, cursus enim arcu
                    tristique non arcu.{' '}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 md:col-span-6 col-span-12">
                <div className="flex items-center justify-end">
                  <button
                    className="text-xs bg-gray-100 rounded-full px-10 py-2.5 mb-2 hover:bg-gray-200"
                    onClick={() => window.print()}
                  >
                    Print as PDF
                  </button>
                </div>
                <div>
                  <InvoiceTemp />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------content------------------ */}
        </main>
      </div>
    </>
  )
}
