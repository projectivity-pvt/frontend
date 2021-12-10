import { Avatar } from '@components/atoms/Avatar/Avatar'
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
import React from 'react'
import DownloadIcon from 'public/images/arrow/download.svg'

interface Props {}

export const VendorPaymentTable = (props: Props) => (
  <TableContainer>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Project Name</TableCell>
          <TableCell>Production House</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Invoice</TableCell>
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
            <span className="text text-sm font-bold ">$4500</span>
          </TableCell>
          <TableCell>
            <Badge type="success">Paid</Badge>
          </TableCell>
          <TableCell>
            <Button
              layout="outline"
              icon={DownloadIcon}
              className="text-xs py-1 px-2"
            >
              Download
            </Button>
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
            <span className="text text-sm font-bold ">$4500</span>
          </TableCell>
          <TableCell>
            <Badge type="danger">Unpaid</Badge>
          </TableCell>
          <TableCell>
            <Badge type="danger">Not Available</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)
