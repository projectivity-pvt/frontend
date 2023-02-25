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
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { ProductionDocsApprove } from './ProductionDocsApprove'

export const ProductionDocumentsTable = () => {
  const [openProductionDocApproveModal, setOpenProductionDocApproveModal] = useState(false)

  return (
    <>
      {openProductionDocApproveModal && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <ProductionDocsApprove closeModal12={setOpenProductionDocApproveModal} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <TableContainer className="ring-0 cursor-pointer">
        <Table>
          <TableHeader>
            <TableRow   
              style={{ background: '#fff', border: '1px solid #fff' }}
            >
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize w-36">
                  Name
                </div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">Date</div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">
                  Status
                </div>
              </TableCell>
              <TableCell>
                <div className="py-2 text-sm font-normal capitalize">
                  No. of Documents
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
            <TableRow onClick={() => setOpenProductionDocApproveModal(true)} className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Vendor Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm pl-10">5</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <button className="flex items-center gap-2 text-xs bg-blue-50 text-blue-500 px-10 py-2">
                    <FontAwesomeIcon
                      className="text-blue-500 text-sm"
                      icon={faDownload}
                    ></FontAwesomeIcon>
                    Download
                  </button>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Vendor Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-red-400 text-sm">Waiting</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm pl-10">5</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <button className="flex items-center gap-2 text-xs bg-blue-50 text-blue-500 px-10 py-2">
                    <FontAwesomeIcon
                      className="text-blue-500 text-sm"
                      icon={faDownload}
                    ></FontAwesomeIcon>
                    Download
                  </button>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Vendor Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm pl-10">5</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <button className="flex items-center gap-2 text-xs bg-blue-50 text-blue-500 px-10 py-2">
                    <FontAwesomeIcon
                      className="text-blue-500 text-sm"
                      icon={faDownload}
                    ></FontAwesomeIcon>
                    Download
                  </button>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Vendor Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm pl-10">5</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <button className="flex items-center gap-2 text-xs bg-blue-50 text-blue-500 px-10 py-2">
                    <FontAwesomeIcon
                      className="text-blue-500 text-sm"
                      icon={faDownload}
                    ></FontAwesomeIcon>
                    Download
                  </button>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
