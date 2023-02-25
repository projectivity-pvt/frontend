import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function OpenInvoiceWrapper() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className="flex gap-3 p-3 rounded-lg text-sm">
          <div className="flex flex-col">
            <FontAwesomeIcon
              className="text-sm"
              icon={faChevronDown}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-sm -mt-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Invoice # 38942</p>
            <p>Vendor Name</p>
            <p className="text-gray-600 text-xs">
              Generated on : 12 April 2022
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <button className="text-white bg-blue-500 rounded-full text-xs px-5 py-2 hover:bg-blue-600">
            Download Invoice
          </button>
          <button className="text-white bg-green-400 rounded-full text-xs px-5 py-2 hover:bg-green-500">
            Approve Invoice
          </button>
          <button className="text-white bg-red-500 rounded-full text-xs px-5 py-2 hover:bg-red-600">
            Reject Invoice
          </button>
        </div>
      </div>
    </>
  )
}

export default OpenInvoiceWrapper
