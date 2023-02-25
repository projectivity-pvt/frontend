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

export const BusinessProjectTable = () => (
  <>
    <TableContainer className="ring-0 cursor-pointer">
      <Table>
        <TableHeader>
          <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize w-36">
                Contract Name
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">
                Project Name
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize w-48">
                Executive Production
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">
                Start Date
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">
                End Date
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">
                Progress
              </div>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          {/* -------------row 1---------- */}

          {/* -------------row 1---------- */}
          <Link href="/business/contracts">
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Camera services ...
                </p>
              </TableCell>
              <TableCell>
                <p className="truncate text-sm text-black py-3">
                  BurgerKing Ad s....
                </p>
              </TableCell>
              <TableCell>
                <div className="w-48 flex items-center text-gray-500 text-sm gap-2">
                  <Avatar size={35} initial="j" />
                  <p>Dharma Productions</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="text-gray-600 text-sm">77%</div>
                  <FontAwesomeIcon
                    className="text-gray-700 text-sm"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
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
