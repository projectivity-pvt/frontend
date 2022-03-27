import { Badge } from '@windmill/react-ui'
import React from 'react'
import ClockIcon from '../../../public/images/clock-outline.svg'
import RightIcon from '../../../public/images/right-arrow-circle.svg'

export const ProductTransactionListItem = () => (
    <>
        <div className="p-3 rounded-lg flex justify-between items-center mt-2 mx-5" style={{ background: "#F5F5F5" }}>
            <div className="avatar rounded-full text-white flex items-center justify-center h-10 w-10 md:h-14 md:w-14 mr-2 md:mr-5" style={{ backgroundColor: '#A7C0FF' }}>
                A
            </div>
            <div>
                <h3 className="font-semibold text-sm md:text-lg truncate max-w-[160px] md:max-w-full">
                    Godzilla Shooting
                </h3>
            </div>
            <div className='ml-auto'>
                <span className="md:flex items-center gap-2 hidden text-sm md:text-lg truncate">
                    <ClockIcon height={16} width={16} />
                    <span>12 Sept - 24 Oct</span>
                </span>
            </div>
            <div className="ml-auto text-right">
                <p>
                    <span className="font-medium mr-1 hidden md:inline-block">Income:</span>
                    <span className="font-bold text-lg">$196</span>
                </p>
            </div>

            <div className='ml-5'>
                <p><RightIcon height={16} width={16} /></p>
            </div>
        </div>
    </>
) 