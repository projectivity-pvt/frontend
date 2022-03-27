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

export const ProductionProjectTable = () => (
    <div>
        <TableContainer>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Project Name</TableCell>
                        <TableCell>Contractors</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Progress</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow className='' style={{ background: '#F9F9F9' }}>
                        <TableCell>
                            <span className="font-semibold">Burger Singh Ad shoot</span>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center text-sm gap-2">
                                <div className='ml-0'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <span className="text-sm">+2 more</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <div className='flex'>
                                <div className='items-center w-3/4'>
                                    <div className='flex'>
                                        <span className="ml-auto text-gray-400 text-sm font-medium ">77%</span>
                                    </div>
                                    <div className='h-1 w-full rounded-2xl bg-gray-400'></div>
                                </div>
                                <div className='ml-2'>
                                    <RightArrowIcon
                                        height={15}
                                        width={15}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <span className="font-semibold">Burger Singh Ad shoot</span>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center text-sm gap-2">
                                <div className='ml-0'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <span className="text-sm">+2 more</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <div className='flex'>
                                <div className='items-center w-3/4'>
                                    <div className='flex'>
                                        <span className="ml-auto text-gray-400 text-sm font-medium ">77%</span>
                                    </div>
                                    <div className='h-1 w-full rounded-2xl bg-gray-400'></div>
                                </div>
                                <div className='ml-2'>
                                    <RightArrowIcon
                                        height={15}
                                        width={15}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <span className="font-semibold">Burger Singh Ad shoot</span>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center text-sm gap-2">
                                <div className='ml-0'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <span className="text-sm">+2 more</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <div className='flex'>
                                <div className='items-center w-3/4'>
                                    <div className='flex'>
                                        <span className="ml-auto text-gray-400 text-sm font-medium ">77%</span>
                                    </div>
                                    <div className='h-1 w-full rounded-2xl bg-gray-400'></div>
                                </div>
                                <div className='ml-2'>
                                    <RightArrowIcon
                                        height={15}
                                        width={15}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <span className="font-semibold">Burger Singh Ad shoot</span>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center text-sm gap-2">
                                <div className='ml-0'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <span className="text-sm">+2 more</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <div className='flex'>
                                <div className='items-center w-3/4'>
                                    <div className='flex'>
                                        <span className="ml-auto text-gray-400 text-sm font-medium ">77%</span>
                                    </div>
                                    <div className='h-1 w-full rounded-2xl bg-gray-400'></div>
                                </div>
                                <div className='ml-2'>
                                    <RightArrowIcon
                                        height={15}
                                        width={15}
                                        color="red"
                                        className="stroke-0 ml-auto  inline align-middle"
                                    />
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <span className="font-semibold">Burger Singh Ad shoot</span>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center text-sm gap-2">
                                <div className='ml-0'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                                <span className="text-sm">+2 more</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm font-medium ">30 Nov, 2021</span>
                        </TableCell>
                        <TableCell>
                            <div className='flex'>
                                <div className='items-center w-3/4'>
                                    <div className='flex'>
                                        <span className="ml-auto text-gray-400 text-sm font-medium ">77%</span>
                                    </div>
                                    <div className='h-1 w-full rounded-2xl bg-gray-400'></div>
                                </div>
                                <div className='ml-2'>
                                    <RightArrowIcon
                                        height={15}
                                        width={15}
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
