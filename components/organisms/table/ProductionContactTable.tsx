import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Badge,
} from '@windmill/react-ui'
import React, { useState } from 'react'
import { ContactPopup } from '../ContactPopup/ContactPopup'

export const ProductionContactTable = () => {
  const [openContactPop, setOpenContactPop] = useState(false)

  return (
    <>
      {openContactPop && (
        <div className="pop_container" style={{alignItems:'center'}}>
          <div className="w-3/5">
            <ContactPopup closeModal2={setOpenContactPop} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <div>
        <TableContainer className="ring-0">
          <Table>
            <TableHeader>
              <TableRow
                style={{ background: '#fff', border: '1px solid #fff' }}
              >
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize w-48">
                    Name
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    No. Of Contacts
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Contact No.
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Email
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Rating
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Action
                  </div>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* --------------------row 1--------------- */}
              <TableRow
                className=""
                style={{ background: '#fff' }}
                onClick={() => {
                  setOpenContactPop(true)
                }}
              >
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>John Doe </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>20</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500 text-sm">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-32 font-bold text-sm text-gray-600">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>4.5</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center px-2">
                    <button className="text-white text-xs rounded-md px-5 py-2 bg-green-400">
                      Open In chat
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>John Doe </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>20</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500 text-sm">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-32 font-bold text-sm text-gray-600">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>4.5</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center px-2">
                    <button className="text-white text-xs rounded-md px-5 py-2 bg-green-400">
                      Open In chat
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>John Doe </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>20</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500 text-sm">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-32 font-bold text-sm text-gray-600">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>4.5</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center px-2">
                    <button className="text-white text-xs rounded-md px-5 py-2 bg-green-400">
                      Open In chat
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>John Doe </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>20</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500 text-sm">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-32 font-bold text-sm text-gray-600">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>4.5</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center px-2">
                    <button className="text-white text-xs rounded-md px-5 py-2 bg-green-400">
                      Open In chat
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>John Doe </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>20</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500 text-sm">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-32 font-bold text-sm text-gray-600">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>4.5</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center px-2">
                    <button className="text-white text-xs rounded-md px-5 py-2 bg-green-400">
                      Open In chat
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>John Doe </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>20</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-gray-500 text-sm">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-32 font-bold text-sm text-gray-600">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>4.5</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center px-2">
                    <button className="text-white text-xs rounded-md px-5 py-2 bg-green-400">
                      Open In chat
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
