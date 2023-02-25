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

export const VendorQuotationTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize w-60'>Project Name</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Production House</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Type</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Start Date</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Status</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize text-center'>Comments</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3">Burger Singh Ad shoot Burger Singh Ad shoot </p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 text-sm -mb-0.5">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                Crew
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-sm text-gray-600">
                                <span>₹</span> 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-indigo-600 -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-500 text-sm'>In Progress</p>
                                </div>

                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex gap-5'>
                                <span className="w-36 text-center text-xs text-blue-600 bg-gray-100 rounded px-5 py-2">Review</span>
                                <span className="text-xs text-green-500 rounded bg-green-100 px-5 py-2">Open In Chat</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3">Burger Singh Ad shoot Ad shoot</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 text-sm -mb-0.5">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                Crew
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-sm text-gray-600">
                                <span>₹</span> 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-indigo-600 -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-500 text-sm'>In Progress</p>
                                </div>

                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex gap-5'>
                                <span className="w-36 text-center text-xs text-blue-600 bg-gray-100 rounded px-5 py-2">View Contract</span>
                                <span className="text-xs text-green-500 rounded bg-green-100 px-5 py-2">Open In Chat</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 text-sm -mb-0.5">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                Crew
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-sm text-gray-600">
                                <span>₹</span> 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-indigo-600 -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-500 text-sm'>In Progress</p>
                                </div>

                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex gap-5'>
                                <span className="w-36 text-center text-xs text-blue-600 bg-gray-100 rounded px-5 py-2">Review</span>
                                <span className="text-xs text-green-500 rounded bg-green-100 px-5 py-2">Open In Chat</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 text-sm -mb-0.5">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                Crew
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-sm text-gray-600">
                                <span>₹</span> 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-indigo-600 -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-500 text-sm'>In Progress</p>
                                </div>

                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex gap-5'>
                                <span className="w-36 text-center text-xs text-blue-600 bg-gray-100 rounded px-5 py-2">Review</span>
                                <span className="text-xs text-green-500 rounded bg-green-100 px-5 py-2">Open In Chat</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3">Burger Singh Ad shoot</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 text-sm -mb-0.5">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                Crew
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-sm text-gray-600">
                                <span>₹</span> 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-indigo-600 -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-500 text-sm'>In Progress</p>
                                </div>

                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex gap-5'>
                                <span className="w-36 text-center text-xs text-blue-600 bg-gray-100 rounded px-5 py-2">Awaiting Contract</span>
                                <span className="text-xs text-green-500 rounded bg-green-100 px-5 py-2">Open In Chat</span>
                            </div>
                        </TableCell>
                    </TableRow>




                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
