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

export const InvoiceCorrectionForm2 = ({ closeModal12 }) => (
  <>
    <div className="w-full m-2 shadow-lg rounded pb-5 text-sm bg-white">
      <div className="flex justify-between p-5">
        <div>
          <h1>Correction Requested</h1>
          <p className="text-xs">
            Choose a project for which you want to hire John Doe
          </p>
        </div>
        <div>
          <button
            className="text-white bg-red-600 px-3 py-1 rounded"
            onClick={() => closeModal12(false)}
          >
            X
          </button>
        </div>
      </div>

      <form>
        {/* ------------------------------------- */}
        <div className='px-5'>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className='p-3'>
              <h5 className='mb-1'>
                <b>Description</b>
              </h5>
              <textarea className="h-32 text-sm rounded border-gray-300 w-full resize-none"></textarea>
            </div>
          </div>

          <div className="col-span-4">
            <div className='p-3'>
              <h5 className='mb-1'>
                <b>Date</b>
              </h5>
              <input className="rounded border-gray-300 w-full" type="date" />
            </div>
          </div>
        </div>

        <div className='my-5 ml-3'>
          <p className=''>
            <b>NOTE:</b> If you think this is a mistake , Please raise a request
            to our <br/> support team. We will solve the issue withing one day.
          </p>
        </div>

        <div className="flex gap-2 justify-end px-5 mt-auto ">
          <button className="bg-blue-500 text-white px-5 py-2 text-sm rounded hover:bg-blue-600">
          Send Correction
          </button>
          <button className="border-gray-400 border px-5 py-2 text-sm rounded w-32 hover:bg-gray-200">
            Cancel
          </button>
        </div>

</div>
        {/* ------------------------------------- */}
      </form>
    </div>
  </>
)
