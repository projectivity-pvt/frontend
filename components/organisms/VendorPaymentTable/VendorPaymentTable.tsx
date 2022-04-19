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

export const VendorPaymentTable = () => (
  <>
    <div className='flex justify-between items-center text-center mb-3'>
      <h5 className='td_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Project Name</h5>
      <h5 className='td_flex2 text-xs font-semibold text-gray-700 text-left ml-5'>Date</h5>
      <h5 className='td_flex3 text-xs font-semibold text-gray-700 text-left ml-5'>Amount</h5>
      <h5 className='td_flex4 text-xs font-semibold text-gray-700 text-left ml-5'>Status</h5>
      <h5 className='td_flex5 text-xs font-semibold text-gray-700 text-left ml-5'>Invoice</h5>
    </div>

    <div className='tr_flex flex justify-between items-center py-2 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
      <h5 className='td_flex1 truncate text-xs'>Burger Singh Ad shoot</h5>
      <h5 className='td_flex2 truncate text-left whitespace-nowrap text-xs'>12 July, 2021</h5>
      <h5 className='td_flex3 text-center text-xs'>$45</h5>
      <h5 className='td_flex4 text-center text-xs text-green-500'>Paid</h5>
      <h5 className='td_flex5 text-right  text-xs'> <span className="mr-3">Available </span><Button
        layout="outline"
        icon={DownloadIcon}
        className="text-blue-500 text-xs py-0 px-2 bg-blue-100 border-none"
      >
        <span className='text-xs text-blue-500'>Download</span>
      </Button></h5>
    </div>

    <div className='tr_flex flex justify-between items-center py-2 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
      <h5 className='td_flex1 truncate text-xs'>Burger Singh Ad shoot</h5>
      <h5 className='td_flex2 truncate text-left whitespace-nowrap text-xs'>12 July, 2021</h5>
      <h5 className='td_flex3 text-center text-xs'>$45</h5>
      <h5 className='td_flex4 text-center text-xs text-green-500'>Paid</h5>
      <h5 className='td_flex5 text-right  text-xs'><span className="mr-3">Available</span><Button
        layout="outline"
        icon={DownloadIcon}
        className="text-blue-500 text-xs py-0 px-2 bg-blue-100 border-none"
      >
        <span className='text-xs text-blue-500'>Download</span>
      </Button></h5>
    </div>

    <div className='tr_flex flex justify-between items-center py-2 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
      <h5 className='td_flex1 truncate text-xs'>Burger Singh Ad shoot</h5>
      <h5 className='td_flex2 truncate text-left whitespace-nowrap text-xs'>12 July, 2021</h5>
      <h5 className='td_flex3 text-center text-xs'>$45</h5>
      <h5 className='td_flex4 text-center text-xs text-red-500'>Unpaid</h5>
      <h5 className='td_flex5 text-right  text-xs'><span className="mr-3">Available</span><Button
        layout="outline"
        icon={DownloadIcon}
        className="text-blue-500 text-xs py-0 px-2 bg-blue-100 border-none"
      >
        <span className='text-xs text-blue-500'>Download</span>
      </Button></h5>
    </div>

    <div className='tr_flex flex justify-between items-center py-2 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
      <h5 className='td_flex1 truncate text-xs'>Burger Singh Ad shoot </h5>
      <h5 className='td_flex2 truncate text-left whitespace-nowrap text-xs'>12 July, 2021</h5>
      <h5 className='td_flex3 text-center text-xs'>$45</h5>
      <h5 className='td_flex4 text-center text-xs text-blue-500'>Inprogress</h5>
      <h5 className='td_flex5 text-right  text-xs'><span className="mr-3">Un-available</span><Button
        layout="outline"
        icon={DownloadIcon}
        className="text-blue-500 text-xs py-0 px-2 bg-blue-100 border-none"
      >
        <span className='text-xs text-blue-500'>Download</span>
      </Button></h5>
    </div>



  </>
)
