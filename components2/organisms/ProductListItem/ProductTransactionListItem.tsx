import { Badge } from '@windmill/react-ui'
import React from 'react'
import ClockIcon from '../../../public/images/clock-outline.svg'
import RightIcon from '../../../public/images/right-arrow-circle.svg'

export const ProductTransactionListItem = () => (
    <>
        <div className="px-3 py-2 rounded-lg flex justify-between items-center mt-2 mx-5" style={{ background: "rgb(180,201,255,.2)" }}>
            <div className="avatar rounded-full text-white flex items-center justify-center h-8 w-8 md:h-8 md:w-8 mr-2 md:mr-5" style={{ backgroundColor: '#A7C0FF' }}>
                A
            </div>
            <div>
                <h3 className="text-sm md:text-lg truncate max-w-[160px] md:max-w-full">
                    Godzilla Shooting
                </h3>
            </div>
            <div className='ml-auto'>
                <span className="md:flex items-center gap-2 hidden text-sm md:text-lg truncate">
                    <ClockIcon height={16} width={16} />
                    <span className='text-sm'>12 Sept - 24 Oct</span>
                </span>
            </div>
            <div className="ml-auto text-right">
                <p>
                    <span className="font-medium mr-2 hidden md:inline-block">Income:</span>
                    <span className="font-bold text-lg">$196</span>
                </p>
            </div>

            <div className='ml-5'>
                <p><RightIcon height={16} width={16} /></p>
            </div>
        </div>
    </>
) 