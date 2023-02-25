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
import React from 'react'

export const EmployeeAccessTable = () => (
  <div>
    <TableContainer className="ring-0">
      <Table>
        <TableHeader>
          <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize w-52">
                Name
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize w-56">
                Position
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">Role</div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">
                Assigned Category{' '}
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm font-normal capitalize">
                Assigned Tabs Access
              </div>
            </TableCell>
            <TableCell>
              <div className="py-2 text-sm flex justify-center font-normal capitalize">
                <p>Actions</p>
              </div>
            </TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="" style={{ background: '#fff' }}>
            <TableCell>
              <div className="flex items-center">
                <div className="ml-0">
                  <Avatar size={35} initial="J" />
                </div>
                <div className="flex flex-col ml-1">
                  <span className="text-gray-700 text-sm -mb-0.5">
                    John Doe
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-gray-700 text-sm">
                Executive Producer ...
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-600">Admin</div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Category
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-xs bg-gray-100 rounded text-center py-2 -mb-1">
                  All Tabs
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 px-2">
                <p className="bg-green-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Edit
                </p>
                <p className="bg-red-500 text-center text-white rounded-full w-16 py-2 text-xs">
                  Delete
                </p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)
