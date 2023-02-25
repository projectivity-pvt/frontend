import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function InvoiceWrapper() {
  return (
    <>
      <div className="flex gap-3 border border-gray-300 p-3 rounded-lg text-sm">
        <div>
          <FontAwesomeIcon
            className="text-sm"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="text-sm"
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Invoice # 38942</p>
          <p>Vendor Name</p>
          <p className="text-gray-600 text-xs">Generated on : 12 April 2022</p>
        </div>
      </div>
    </>
  )
}

export default InvoiceWrapper
