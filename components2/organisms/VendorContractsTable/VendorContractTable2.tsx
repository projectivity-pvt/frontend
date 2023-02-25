import { Avatar } from '@components/atoms/Avatar/Avatar'
import Link from 'next/link'

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

export const VendorContractTable2 = () => (
  <div className='w-full'>
    <TableContainer className="ring-0 cursor-pointer">
      <Table>
        <TableHeader>
          <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
            <TableCell><div className='py-2 text-sm font-normal capitalize w-60'>Contract Name</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>Production House</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>Start Date</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize'>End Date</div></TableCell>
            <TableCell><div className='py-2 text-sm font-normal capitalize ml-5'>Status</div></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

          <Link href="/vendor/projects/1">
            <TableRow className='' style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-60 truncate text-black text-sm">Burger Singh Ad shoot</p>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <div className='ml-0'><Avatar size={35} initial="J" /></div>
                  <div className='flex flex-col ml-1'>
                    <span className="text-gray-500 -mb-1 text-sm">Dharma Production</span>
                  </div>
                </div>

              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Nov, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-500 text-sm">
                  30 Dec, 2021
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col text-green-400 bg-green-100 text-center text-sm py-1.5 px-3 rounded'>
                  <p className='text-xs'>Success</p>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center px-2'>
                  <div className='flex gap-5 items-center'>

                  </div>
                </div>
              </TableCell>
            </TableRow>
          </Link>

        </TableBody>
      </Table>
    </TableContainer>




  </div>
)
