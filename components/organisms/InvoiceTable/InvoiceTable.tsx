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

export const InvoiceTable = () => (
    <div>
        <TableContainer className="ring-0">
            <Table>
                <TableHeader>
                    <TableRow style={{ background: '#fff', border: '1px solid #fff' }}>
                        <TableCell><div className='py-2 text-sm font-normal capitalize w-36'>Item Details</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize w-20'>Quantity</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Rate</div></TableCell>
                        <TableCell><div className='py-2 text-sm font-normal capitalize'>Amount</div></TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-36 truncate text-black align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 pl-7">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                $ 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                $ 8000
                            </div>
                        </TableCell>
                    </TableRow>


                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-black align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 pl-7">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                $ 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                $ 8000
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow className='' style={{ background: '#fff' }}>
                        <TableCell>
                            <p className="w-60 truncate text-black align-left">Catering</p>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500 pl-7">
                                1
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                $ 1000
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="text-gray-500">
                                $ 8000
                            </div>
                        </TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
