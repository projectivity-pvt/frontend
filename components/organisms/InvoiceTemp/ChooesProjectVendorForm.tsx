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

export const ChooseProjectVendorForm = ({ closeModal11 }) => (
  <>
    <div className="w-full m-2 shadow-lg rounded pb-5 text-sm bg-white">
      <div className="flex justify-between p-5">
        <div>
          <h1>Choose a project</h1>
          <p className="text-xs">
            Choose a project for which you want to hire John Doe
          </p>
        </div>
        <div>
          <button
            className="text-white bg-red-600 px-3 py-1 rounded"
            onClick={() => closeModal11(false)}
          >
            X
          </button>
        </div>
      </div>

      <form>
        {/* ------------------------------------- */}

        <div className="flex flex-col p-5 w-3/4 gap-5">
          <div>
            <h5 className="mb-1">
              <b>Project Name :</b>
            </h5>
            <select className="w-full border-gray-300 rounded text-sm">
              <option>Vendor Name</option>
              <option>Vendor Name</option>
              <option>Vendor Name</option>
            </select>
          </div>

          <div>
            <h5 className="mb-1">
              <b>Contract :</b>
            </h5>
            <select className="w-full border-gray-300 rounded text-sm">
              <option>Document Name</option>
              <option>Document Name</option>
              <option>Document Name</option>
            </select>
          </div>

          <div>
            <h5>
              <b>Create a new contract:</b>
            </h5>
            <p className="py-1">Contract Name</p>
            <input
              className="w-full border-gray-300 rounded"
              type="text"
              placeholder="contract name"
            />
          </div>

          <div className="flex justify-end px-5 mt-auto">
            <button className="bg-blue-500 text-white px-5 py-2 text-sm rounded-3xl w-32 hover:bg-blue-600">
              Hire Now
            </button>
          </div>
        </div>

        {/* ------------------------------------- */}
      </form>
    </div>
  </>
)
