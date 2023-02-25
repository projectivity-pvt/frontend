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

export const VendorContractorExpenseTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Date</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Department</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Name</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Quantity</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Rate</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>OT Amount</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-semibold text-black capitalize'>Total</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>


                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-sm text-black -mb-1">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p className="w-60 truncate text-sm text-black py-3 align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center'>
                                <div className='ml-0'><Avatar size={35} initial="J" /></div>
                                <div className='flex flex-col ml-1'>
                                    <span className="text-gray-500 -mb-0.5 text-sm">John Doe</span>
                                    <span className="text-xs text-gray-400">Jubilant Foods</span>
                                </div>
                            </div>

                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-center">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-500 text-sm">
                                <span>₹</span> 8000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-900 text-sm">
                                <span>₹</span> 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className=" text-yellow-500">
                                <span>₹</span> 9000
                            </div>
                        </TableCell>

                    </TableRow>



                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
