import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import Link from 'next/link'


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

export const VendorServicesTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Name</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Statue</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Pricing</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Catalogue</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal ml-10 capitalize'>Actions</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>

                    <Link href="/vendor/services/1">
                        <TableRow className='cursor-pointer' style={{ background: '#fff' }}>

                            <TableCell>
                                <p className="w-52 truncate text-sm text-black py-1 align-left">Camera Service</p>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    <p className="text-blue-500 py-1 text-sm align-left">Live</p>
                                </div>

                            </TableCell>
                            <TableCell>
                                <div className="w-46 text-gray-500 text-sm">
                                    $300 - $500
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-gray-500">
                                    <p className="text-sm text-green-500 align-left">Added</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center py-1 gap-3">
                                    <button className='text-xs bg-green-500 text-white rounded-2xl py-1.5 w-32'>Update</button>
                                    <button className='text-xs bg-red-500 text-white rounded-2xl py-1.5 w-32'>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </Link>




                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
