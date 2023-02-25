import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { InvoiceTable } from '@components/organisms/InvoiceTable/InvoiceTable'

import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Badge,
} from '@windmill/react-ui'
import React from 'react'

export const VendorDocForm = ({ closeVendorDocForm }) => (
  <>
    <div className="w-full m-2 shadow-lg rounded pb-5 text-sm bg-white">
      <div className="flex justify-between p-5">
        <h3>Upload New Document</h3>
        <button
          className="text-white bg-red-600 px-3 py-1 rounded"
          onClick={() => closeVendorDocForm(false)}
        >
          X
        </button>
      </div>

      <form>
        <div className="grid grid-cols-12 p-5 gap-5">
          <div className="col-span-12 md:col-span-9 flex flex-col gap-5">
            <div className="w-full">
              <label>Name</label> <br />
              <input
                className="mt-1 w-full text-sm border-gray-300 rounded"
                type="text"
                placeholder="Eg. Food department or Catering"
              />
            </div>
            <div className="w-full">
              <label>Valid Till</label> <br />
              <input
                className="mt-1 w-full text-sm border-gray-300 rounded"
                type="date"
                placeholder="Eg. Food department or Catering"
              />
            </div>
            <div>
              <label>Attachment</label> <br />
              <input className="mt-1" type="file" />
            </div>
          </div>
        </div>
        <div className="flex justify-end px-5 mt-5 gap-5">
          <button className="bg-gray-200 px-5 py-1 rounded w-46">Cancel</button>
          <button className="bg-[#33c5f4] text-white px-5 py-2 rounded text-sm">
            Add Document
          </button>
        </div>
      </form>
    </div>
  </>
)
