import React, { useState } from 'react'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorContractorExpenseTable } from '@components/organisms/VendorContractorExpenseTable/VendorContractorExpenseTable'
import { AddNewExpense } from '@components/organisms/InvoiceTemp/AddNewExpense'

export const BusinessSingleProjectExpenseTemplate = () => {
  const [openExpenseModal, setOpenExpenseModal] = useState(false)

  return (
    <>
      {openExpenseModal && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <AddNewExpense closeExpenseModal={setOpenExpenseModal} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      {/* -------------------main page------------------- */}

      <VendorSidebar1 />
      <div className="flex flex-col flex-1 overflow-y-auto background">
        <TopHeaderBar />
        <main className="card">
          {/* --------------------------expense table-------------------- */}
          <div className="flex  justify-between items-center my-5">
            <h2 className="font-semibold">Expenses</h2>
            <button
              className="bg-blue-500 text-white text-sm px-5 py-1.5 rounded-3xl"
              onClick={() => {
                setOpenExpenseModal(true)
              }}
            >
              Add New Expense
            </button>
          </div>

          <div>
            <VendorContractorExpenseTable />
          </div>
          {/* --------------------------expense table-------------------- */}

          {/* --------------------------textarea-------------------- */}
          {/* <div className="my-5">
            <h2 className="font-semibold">Requirements</h2>
          </div>

          <div>
            <form>
              <textarea className="resize-none w-full h-32 border-gray-300 rounded lg"></textarea>
            </form>
          </div> */}
          {/* --------------------------textarea-------------------- */}
        </main>
      </div>
    </>
  )
}
