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

export const VendorSinglePaymentTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize w-60'>Contract</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Contractor</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Invoice</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Credited Date</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize ml-5'>Status</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-blue-500 text-sm'>Pending</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-blue-500  text-sm'>Pending</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-sm text-green-500'>Paid</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-sm text-red-500'>Failed</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-blue-500 text-sm'>Pending</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-blue-500 text-sm'>Pending</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-1">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                #54630
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold text-gray-600">
                                $ 4353
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="font-medium text-red-600 -mb-1">12 Oct, 2021</span>
                                <span className="text-xs text-gray-400">6 Days ago</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div className='flex gap-5 items-center'>
                                    <p className='w-16 text-blue-500 text-sm'>Pending</p>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>






                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
