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
import {
  faCircleCheck,
  faCircleXmark,
  faDownload,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

export const ProductionDocsApprove = ({ closeModal12 }) => (
  <>
    <div className="w-full px-5 m-2 shadow-lg rounded pb-5 text-sm bg-white">
      <div className="flex justify-between p-5">
        <h1>Request Document</h1>
        <button
          className="text-white bg-red-600 px-3 py-1 rounded"
          onClick={() => closeModal12(false)}
        >
          X
        </button>
      </div>

      <TableContainer className="ring-0 cursor-pointer">
        <Table>
          <TableHeader>
            <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
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
                  Download
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
            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Document Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
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
              <TableCell>
                <div className="flex gap-5 items-center">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400 text-lg"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-red-500 text-lg"
                      icon={faCircleXmark}
                    ></FontAwesomeIcon>
                  </p>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Document Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
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
              <TableCell>
                <div className="flex gap-5 items-center">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400 text-lg"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-red-500 text-lg"
                      icon={faCircleXmark}
                    ></FontAwesomeIcon>
                  </p>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Document Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
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
              <TableCell>
                <div className="flex gap-5 items-center">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400 text-lg"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-red-500 text-lg"
                      icon={faCircleXmark}
                    ></FontAwesomeIcon>
                  </p>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}

            {/* -------------row 1---------- */}
            <TableRow className="" style={{ background: '#fff' }}>
              <TableCell>
                <p className="w-36 truncate text-sm text-black py-3">
                  Document Name
                </p>
              </TableCell>
              <TableCell>
                <div className="text-gray-600 text-sm">12 July, 2021</div>
              </TableCell>
              <TableCell>
                <div className="text-green-400 text-sm">Received</div>
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
              <TableCell>
                <div className="flex gap-5 items-center">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400 text-lg"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-red-500 text-lg"
                      icon={faCircleXmark}
                    ></FontAwesomeIcon>
                  </p>
                </div>
              </TableCell>
            </TableRow>
            {/* -------------row 1---------- */}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='flex items-center justify-end gap-2 my-5'>
      <button className="bg-blue-500 flex gap-2 text-white rounded-3xl py-2.5 px-8 text-xs hover:bg-blue-600">
                <FontAwesomeIcon
                  className="text-white bg-blue-500 text-sm"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
                Request Document
              </button>

              <button className="bg-blue-500 flex gap-2 text-white rounded-3xl py-2.5 px-8 text-xs hover:bg-blue-600">
                <FontAwesomeIcon
                  className="text-white bg-blue-500 text-sm"
                  icon={faPaperPlane}
                ></FontAwesomeIcon>
                Upload Document
              </button>
      </div>

    </div>

  </>
)
