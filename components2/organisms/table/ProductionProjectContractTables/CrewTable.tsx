import { Avatar } from '@components/atoms/Avatar/Avatar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
import React, { useState } from 'react'
import DownloadIcon from 'public/images/arrow/download.svg'
import {
  faChevronRight,
  faDownload,
  faFileCsv,
} from '@fortawesome/free-solid-svg-icons'
import { ContactPopup } from '@components/organisms/ContactPopup/ContactPopup'
import { SingleProjectPop } from '@components/organisms/ContactPopup/SingleProjectPop'

export const CrewTable = () => {
  const [openSingleProjectPop, setOpenSingleProjectPop] = useState(false)

  return (
    <>
      {openSingleProjectPop && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <SingleProjectPop closeModal5={setOpenSingleProjectPop} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <TableContainer className="ring-0 cursor-pointer">
        <Table>
          <TableHeader>
            <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize w-52">
                  Department
                </div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize w-36">
                  Name
                </div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">Rate</div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">
                  Pricing Model
                </div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">
                  Check-in Status
                </div>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* -------------row 1---------- */}
            
            <Link href='/business/contracts/details'>
              <TableRow>
                <TableCell>
                  <p className="w-52 truncate text-md text-black py-3">
                    Camera Department
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-36">
                    <Avatar size={35} initial="j" />
                    <div className="truncate flex flex-col">
                      <p className="truncate text-sm">John Doe</p>
                      <p className="truncate text-xs text-gray-500">
                        Designation
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-md">
                    $ 4353
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-sm">
                    Per Day
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="text-blue-600 font-semibold text-xs w-32">
                      Checked-in
                    </div>
                    <FontAwesomeIcon
                      className="text-gray-700 text-xs"
                      icon={faChevronRight}
                    ></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
              </Link>
            
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            
              <TableRow
                className=""
                style={{ background: '#fff' }}
                onClick={() => {
                  setOpenSingleProjectPop(true)
                }}
              >
                <TableCell>
                  <p className="w-52 truncate text-md text-black py-3">
                    Catering and food supplies
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-36">
                    <Avatar size={35} initial="j" />
                    <div className="truncate flex flex-col">
                      <p className="truncate text-sm">John Doe</p>
                      <p className="truncate text-xs text-gray-500">
                        Designation
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-md">
                    $ 4353
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-sm">
                    Per Day
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="text-blue-600 font-semibold text-xs w-32">
                      Checked-in
                    </div>
                    <FontAwesomeIcon
                      className="text-gray-700 text-xs"
                      icon={faChevronRight}
                    ></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
            
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <p className="w-52 truncate text-md text-black py-3">
                    Catering and food supplies
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-36">
                    <Avatar size={35} initial="j" />
                    <div className="truncate flex flex-col">
                      <p className="truncate text-sm">John Doe</p>
                      <p className="truncate text-xs text-gray-500">
                        Designation
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-md">
                    $ 4353
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-sm">
                    Per Day
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="text-blue-600 font-semibold text-xs w-32">
                      Checked-out
                    </div>
                    <FontAwesomeIcon
                      className="text-gray-700 text-xs"
                      icon={faChevronRight}
                    ></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
            
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <p className="w-52 truncate text-md text-black py-3">
                    Catering and food supplies
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-36">
                    <Avatar size={35} initial="j" />
                    <div className="truncate flex flex-col">
                      <p className="truncate text-sm">John Doe</p>
                      <p className="truncate text-xs text-gray-500">
                        Designation
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-md">
                    $ 4353
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-sm">
                    Per Day
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="text-red-500 font-semibold text-xs w-32">
                      Pending
                    </div>
                    <FontAwesomeIcon
                      className="text-gray-700 text-xs"
                      icon={faChevronRight}
                    ></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
            
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <p className="w-52 truncate text-md text-black py-3">
                    Catering and food supplies
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-36">
                    <Avatar size={35} initial="j" />
                    <div className="truncate flex flex-col">
                      <p className="truncate text-sm">John Doe</p>
                      <p className="truncate text-xs text-gray-500">
                        Designation
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-md">
                    $ 4353
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-sm">
                    Per Day
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="text-red-500 font-semibold text-xs w-32">
                      Pending
                    </div>
                    <FontAwesomeIcon
                      className="text-gray-700 text-xs"
                      icon={faChevronRight}
                    ></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
            
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <p className="w-52 truncate text-md text-black py-3">
                    Catering and food supplies
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-36">
                    <Avatar size={35} initial="j" />
                    <div className="truncate flex flex-col">
                      <p className="truncate text-sm">John Doe</p>
                      <p className="truncate text-xs text-gray-500">
                        Designation
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-md">
                    $ 4353
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold items-center text-gray-700 text-sm">
                    Per Day
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="text-blue-600 font-semibold text-xs w-32">
                      Checked-in
                    </div>
                    <FontAwesomeIcon
                      className="text-gray-700 text-xs"
                      icon={faChevronRight}
                    ></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
            
            {/* -------------row 1---------- */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
