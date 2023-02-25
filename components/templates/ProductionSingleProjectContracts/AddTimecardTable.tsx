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

export const AddTimecardTable = () => {
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
              <TableCell></TableCell>
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
                <div className="py-2 text-sm font-normal capitalize">
                  Contact
                </div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">
                  Call Time
                </div>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* -------------row 1---------- */}

            <Link href="">
              <TableRow>
                <TableCell>
                  <div>
                    <input type="checkbox" className="rounded-full" />
                  </div>
                </TableCell>
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
                  <div className="items-center text-gray-700 text-xs">
                    1234567891
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="items-center text-gray-700 text-xs">
                      10:00 PM
                    </div>
                    <div>
                      <button className="text-blue-600 bg-blue-100 rounded-full px-4 py-1.5 text-xs">
                        Schedule Time
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </Link>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}

            <Link href="">
              <TableRow>
                <TableCell>
                  <div>
                    <input type="checkbox" className="rounded-full" />
                  </div>
                </TableCell>
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
                  <div className="items-center text-gray-700 text-xs">
                    1234567891
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="items-center text-gray-700 text-xs">
                      10:00 PM
                    </div>
                    <div>
                      <button className="text-blue-600 bg-blue-100 rounded-full px-4 py-1.5 text-xs">
                        Schedule Time
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </Link>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}

            <Link href="">
              <TableRow>
                <TableCell>
                  <div>
                    <input type="checkbox" className="rounded-full" />
                  </div>
                </TableCell>
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
                  <div className="items-center text-gray-700 text-xs">
                    1234567891
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <div className="items-center text-gray-700 text-xs">
                      10:00 PM
                    </div>
                    <div>
                      <button className="text-blue-600 bg-blue-100 rounded-full px-4 py-1.5 text-xs">
                        Schedule Time
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </Link>
            {/* -------------row 1---------- */}

            
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
