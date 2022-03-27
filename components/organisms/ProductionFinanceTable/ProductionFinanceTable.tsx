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

export const ProductionFinanceTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Project Name</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Contractors</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Invoice</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Due Date</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Payment Status</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="text-lg text-black py-3">Catering and food supplies</p>
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
                                <span className="text-xs font-medium text-gray-600">6 Days left</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-400 font-semibold text-sm'>Paid</p>
                                </div>
                                <div className='ml-auto'>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="text-lg text-black  py-3">Catering and food supplies</p>
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
                                <span className="text-xs font-medium text-gray-600">6 Days left</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-green-400 font-semibold text-sm'>Paid</p>
                                </div>
                                <div className='ml-auto'>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="text-lg text-black  py-3">Catering and food supplies</p>
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
                                <span className="text-xs font-medium text-gray-600">6 Days left</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-blue-700 font-semibold text-sm'>Pending</p>
                                </div>
                                <div className='ml-auto'>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="text-lg text-black  py-3">Catering and food supplies</p>
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
                                <span className="text-xs font-medium text-gray-600">6 Days left</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-blue-700 font-semibold text-sm'>Pending</p>
                                </div>
                                <div className='ml-auto'>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="text-lg text-black  py-3">Catering and food supplies</p>
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
                                <span className="text-xs font-medium text-gray-600">6 Days left</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center px-2'>
                                <div>
                                    <p className='text-red-700 font-semibold text-sm'>Failed</p>
                                </div>
                                <div className='ml-auto'>
                                    <RightArrowIcon
                                        height={25}
                                        width={25}
                                        color="red"
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
