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

// {/* ---------------------parameters------------------- */ }
// <div className='flex justify-around items-center'>
//     <div>Project Name</div>
//     <div>Contractors</div>
//     <div>Start Date</div>
//     <div>End Date</div>
//     <div>Progress</div>
// </div>
// {/* ---------------------parameters------------------- */ }

export const ProductionProjectTable = () => (
    <div>

        {/* -------------------listing--------------------- */}
        <div className='flex items-center justify-around bg-gray-100 my-1.5 px-0 py-3 mx-1 rounded-lg'>
            <div>
                <span className="cursor-pointer">Burger Singh Ad shoot</span>
            </div>
            <div>
                <div className="flex items-center text-sm gap-2">
                    <div className='ml-0'><Avatar size={25} initial="J" /></div>
                    <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                    <div className='-ml-5'><Avatar size={25} initial="J" /></div>
                    <span className="text-sm">+2 more</span>
                </div>
            </div>
            <div>
                <span className="text-sm font-medium ">30 Nov, 2021</span>
            </div>
            <div>
                <span className="text-sm font-medium ">30 Nov, 2021</span>
            </div>
            <div>
                <div className='flex'>
                    <div className='items-center w-3/4'>
                        <div className='flex'>
                            <span className="ml-auto text-gray-400 text-sm font-medium ">77%</span>
                        </div>
                        <div className='h-1 w-28 rounded-2xl bg-gray-400'></div>
                    </div>
                    <div className='ml-8'>
                        <RightArrowIcon
                            height={20}
                            width={20}
                            color="red"
                            className="stroke-0 ml-auto  inline align-middle"
                        />
                    </div>
                </div>
            </div>
        </div>
        {/* -----------------listing--------------- */}
    </div>
)
