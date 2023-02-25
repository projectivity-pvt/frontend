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

export const ContractorNoinvoiceTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Description</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Date</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Check-in</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Check-out</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Category</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Attachments</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="truncate text-sm text-black py-1">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12 July, 2021</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">3:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1 font-semibold">$45</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">Commercial</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-3'>
                                <p className="text-xs text-black py-1">2 Files</p>
                                <p className="text-xs text-black py-1 text-blue-500 bg-blue-100 rounded-2xl px-5">Download</p>
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="truncate text-sm text-black py-1">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12 July, 2021</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">3:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1 font-semibold">$45</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">Commercial</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-3'>
                                <p className="text-xs text-black py-1 text-red-500 bg-red-100 rounded-2xl px-5">No files attached</p>
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="truncate text-sm text-black py-1">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12 July, 2021</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">3:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1 font-semibold">$45</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">Commercial</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-3'>
                                <p className="text-xs text-black py-1">2 Files</p>
                                <p className="text-xs text-black py-1 text-blue-500 bg-blue-100 rounded-2xl px-5">Download</p>
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="truncate text-sm text-black py-1">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12 July, 2021</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">3:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1 font-semibold">$45</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">Commercial</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-3'>
                                <p className="text-xs text-black py-1 text-red-500 bg-red-100 rounded-2xl px-5">No files attached</p>
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="truncate text-sm text-black py-1">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12 July, 2021</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">3:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1 font-semibold">$45</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">Commercial</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-3'>
                                <p className="text-xs text-black py-1">2 Files</p>
                                <p className="text-xs text-black py-1 text-blue-500 bg-blue-100 rounded-2xl px-5">Download</p>
                            </div>
                        </TableCell>

                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="truncate text-sm text-black py-1">Catering and food supplies</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12 July, 2021</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">12:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">3:30 PM</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1 font-semibold">$45</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-xs text-black py-1">Commercial</p>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-3'>
                                <p className="text-xs text-black py-1">2 Files</p>
                                <p className="text-xs text-black py-1 text-blue-500 bg-blue-100 rounded-2xl px-5">Download</p>
                            </div>
                        </TableCell>

                    </TableRow>




                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
