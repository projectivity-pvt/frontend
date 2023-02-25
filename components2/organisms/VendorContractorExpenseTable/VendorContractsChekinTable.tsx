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

export const VendorContractsChekinTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell>
                            <div className='py-2 text-sm font-normal capitalize'>
                                <input type="checkbox" />
                            </div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Department</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Name</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Call Time</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Check In</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Check Out</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-blue-500 text-white rounded-2xl py-1.5 w-32'>Initiate Check IN</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-gray-300 text-white rounded-2xl py-1.5 w-36'>Initiate Check OUT</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-blue-500 text-white rounded-2xl py-1.5 w-32'>Initiate Check IN</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-gray-300 text-white rounded-2xl py-1.5 w-36'>Initiate Check OUT</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-36'>Initiate Check OUT</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-36'>Initiate Check OUT</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-yellow-400 text-white rounded-2xl py-1.5 w-36'>Initiated</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs bg-yellow-400 text-white rounded-2xl py-1.5 w-36'>Initiated</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <input className='rounded-3xl' type="checkbox" />
                        </TableCell>
                        <TableCell>
                            <p className="w-52 truncate text-sm text-black py-1 align-left">Catering</p>
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
                            <div className="text-gray-500 text-sm">
                                10:00 PM
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                <button className='text-xs border-gray-300 border rounded py-1.5 w-32'>10:00 PM</button>
                            </div>
                        </TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
