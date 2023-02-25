import { Avatar } from '@components/atoms/Avatar/Avatar'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Badge,
  Button,
} from '@windmill/react-ui'
import React from 'react'
import DownloadIcon from 'public/images/arrow/download.svg'
import { faDownload, faFileCsv } from '@fortawesome/free-solid-svg-icons';

export const VendorPaymentTable = () => (
  <>
    <TableContainer className="ring-0 cursor-pointer">
      <Table>
        <TableHeader>
          <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
            <TableCell><div className='py-2 text-sm font-normal capitalize w-64'>Project Name</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>Date</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize ml-5'>Status</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>Invoice</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>Action</div></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/contracts">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-64 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-gray-500 text-sm">
                  <span>₹</span> 45
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">
                  Paid
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-500 bg-green-100 text-center text-xs py-1.5 px-3 rounded'>
                  <p>Available</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-blue-500 bg-blue-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-blue-500 text-sm" icon={faDownload}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>

                  <div className='flex gap-2 items-center text-indigo-500 bg-indigo-100 text-center text-xs py-1.5 px-3 rounded'>
                    <FontAwesomeIcon className="text-indigo-500 text-sm" icon={faFileCsv}></FontAwesomeIcon>
                    <p>Download</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>



        </TableBody>
      </Table>
    </TableContainer>

  </>
)
