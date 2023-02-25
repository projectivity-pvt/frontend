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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const InvoiceCorrectionForm = ({ closeModal7 }) => (
  <>
    <div className="w-full m-2 shadow-lg rounded pb-5 text-sm bg-white">
      <div className="flex justify-between p-5">
        <h1>Request Document</h1>
        <button
          className="text-white bg-red-600 px-3 py-1 rounded"
          onClick={() => closeModal7(false)}
        >
          X
        </button>
      </div>

      <form>
        {/* ------------------------------------- */}

        <div className="grid grid-cols-12 p-5 gap-5">
          <div className="col-span-6 flex flex-col gap-5">
            <div>
              <h5 className="mb-1">
                <b>Vendor Name</b>
              </h5>
              <select className="w-full border-gray-300 rounded text-sm">
                <option>Vendor Name</option>
                <option>Vendor Name</option>
                <option>Vendor Name</option>
              </select>
            </div>

            <div>
              <h5 className="mb-1">
                <b>Type of Document</b>
              </h5>
              <input
                className="text-sm w-full rounded border-gray-300"
                type="text"
                placeholder=""
              />
            </div>

            <div>
              <h5 className="mb-1">
                <b>Description</b>
              </h5>
              <textarea
                className="w-full text-sm rounded border-gray-300 resize-none h-24"
                placeholder=""
              >
                {' '}
              </textarea>
            </div>
          </div>

          <div className="col-span-6 flex flex-col gap-5">
            <div>
              <h5 className="mb-1">
                <b>Select Sign-Work</b>
              </h5>
              <select className="w-full border-gray-300 rounded text-sm">
                <option>Document Name</option>
                <option>Document Name</option>
                <option>Document Name</option>
              </select>
            </div>

            <div>
              <button className="bg-gray-100 rounded-3xl py-2 px-5 text-gray-500 text-xs hover:bg-gray-200">
                Review this document
              </button>
            </div>

            <div className="flex justify-end px-5 mt-auto">
              <button className="bg-blue-500 flex gap-2 text-white rounded-3xl py-2.5 px-8 text-xs hover:bg-blue-600">
                <FontAwesomeIcon
                  className="text-white bg-blue-500 text-sm"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
                Request Document
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------- */}
      </form>
    </div>
  </>
)
