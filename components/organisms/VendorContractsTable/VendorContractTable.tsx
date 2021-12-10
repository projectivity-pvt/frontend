import { Avatar } from '@components/atoms/Avatar/Avatar'
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

interface Props {}

export const VendorContractTable = (props: Props) => (
  <div>
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Contract Name</TableCell>
            <TableCell>Production House</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Burger Singh Ad shoot</span>
            </TableCell>
            <TableCell>
              <div className="flex items-center text-sm gap-2">
                <Avatar size={20} initial="J" />
                <span className="text-sm">Dharma Production</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <Badge type="success">success</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Burger Singh Ad shoot</span>
            </TableCell>
            <TableCell>
              <div className="flex items-center text-sm gap-2">
                <Avatar size={20} initial="J" />
                <span className="text-sm">Dharma Production</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <Badge type="success">success</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Burger Singh Ad shoot</span>
            </TableCell>
            <TableCell>
              <div className="flex items-center text-sm gap-2">
                <Avatar size={20} initial="J" />
                <span className="text-sm">Dharma Production</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <Badge type="success">success</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-semibold">Burger Singh Ad shoot</span>
            </TableCell>
            <TableCell>
              <div className="flex items-center text-sm gap-2">
                <Avatar size={20} initial="J" />
                <span className="text-sm">Dharma Production</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium ">30 Nov, 2021</span>
            </TableCell>
            <TableCell>
              <Badge type="success">success</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)
