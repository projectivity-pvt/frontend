import { Avatar } from '@components/atoms/Avatar/Avatar'
import Image from 'next/image'
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

export const CatalogDetail = () => (
  <>
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className=" bg-gray-100 p-4 rounded w-full">
          <div className="flex flex-col gap-5">
            <p className="text-xs text-green-500 p-0 m-0">Available</p>
            <div className="flex justify-center">
              <Image
                src="/images/catalog/camera_catalog.png"
                height={50}
                width={80}
              />
            </div>

            <div className="flex justify-between text-xs">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <p className="font-semibold">Quantity</p>
              <p className="text-xs text-gray-600">6</p>
            </div>

            <div className="flex justify-between items-center text-xs">
              <input
                className="border-gray-300 h-8 w-32 rounded text-xs"
                type="number"
              />
              <button className="bg-blue-600 text-white text-xs rounded-2xl py-1 px-2">
                Updated Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
