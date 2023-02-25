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

export const VendorDocumentTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize w-60'>Document Name</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Date</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Type</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize ml-5'>Status</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize ml-5'>Actions</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Adhar card</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-gray-600">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                PDF file
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-600">
                                Sign Pending
                            </div>
                        </TableCell>

                        <TableCell>
                            <div className="flex align-center text-gray-600 gap-2">
                                <p className='w-40 text-center text-green-600 bg-green-100 rounded text-sm p-1'>Review & Sign</p>
                                <p className='w-28 text-center text-blue-600 bg-blue-100 rounded text-sm p-1'>Download</p>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Adhar card</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-gray-600">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                PDF file
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-red-600">
                                Document Pending
                            </div>
                        </TableCell>

                        <TableCell>
                            <div className="flex align-center text-gray-600 gap-2">
                                <p className='w-40 text-center text-green-600 bg-green-100 rounded text-sm p-1'>Upload & Send</p>
                                <p className='w-28 text-center text-gray-600 bg-gray-100 rounded text-sm p-1'>Download</p>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-lg text-black py-3">Adhar card</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col'>
                                <span className="text-gray-600">12 Oct, 2021</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                PDF file
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-green-600">
                                Sent
                            </div>
                        </TableCell>

                        <TableCell>
                            <div className="flex align-center text-gray-600 gap-2">
                                <p className='w-40 text-center text-green-600 bg-green-100 rounded text-sm p-1'>Sent on 12 April, 2022</p>
                                <p className='w-28 text-center text-blue-600 bg-blue-100 rounded text-sm p-1'>Download</p>
                            </div>
                        </TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
