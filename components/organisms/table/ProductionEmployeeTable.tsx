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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { EmployeePopup } from '../ContactPopup/EmployeePop'

export const ProductionEmployeeTable = () => {
  const [openEmployeePop, setOpenEmployeePop] = useState(false)

  return (
    <>
      {openEmployeePop && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <EmployeePopup closeModalEmployee={setOpenEmployeePop} />
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
                    Employee Name
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Contact Number
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Email
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Status
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Position
                  </div>
                </TableCell>
                <TableCell>
                  <div className="py-2 text-sm font-normal capitalize">
                    Actions
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
                    setOpenEmployeePop(true)
                }}
              >
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Super-Admin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Line Producer</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Admin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Executive Producer</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Admin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Accountant</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Admin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Director</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Normal</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Auditor</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Admin</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Line Producer</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
                  </div>
                </TableCell>
              </TableRow>
              {/* --------------------row 1--------------- */}

              {/* --------------------row 1--------------- */}
              <TableRow className="" style={{ background: '#fff' }}>
                <TableCell>
                  <div className="w-48 truncate text-sm text-black py-3 flex items-center gap-2">
                    <Avatar size={35} initial="J" />
                    <p>Employee Name </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p>81293129313</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-36 text-gray-500 text-sm">
                    <p className="truncate">abcd@gamil.com</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-sm text-gray-600">
                    <p className="truncate">Normal</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <p>Line Producer</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-green-400 text-xs"
                        icon={faEdit}
                      ></FontAwesomeIcon>
                    </h4>

                    <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                      <FontAwesomeIcon
                        className="group-hover:text-white text-red-400 text-xs"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </h4>
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
