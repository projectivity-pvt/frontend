import Image from 'next/image'
import React from 'react'
import { Avatar } from '@components/atoms/Avatar/Avatar'


// interface Props {
//   bgColor: string
//   iconColor: string
//   title: string
//   value: string
//   icon: ReactNode
// }

export const BusinessContractCard = () => (
    <div className="flex justify-between w-full bg-gray-100 rounded-xl py-2 px-5">
        <div className=''>
            <h4 className='text-lg font-bold'>Catering and Food Supplies</h4>
            <div className='flex items-center mb-5 mt-1'>
                <div>
                    <Avatar initial="A" size={30} />
                </div>
                <div className='ml-2'>
                    <p className='text-sm -mb-1 font-semibold'>John Doe</p>
                    <p className='text-sm text-gray-500'>Jubilant Foods</p>
                </div>
            </div>
            <div className='flex items-center'>
                <button className='mr-2 flex text-green-500 bg-green-100 px-5 py-1 text-xs rounded-3xl'>Approve Invoice</button>
                <button className='flex text-blue-500 bg-blue-100 px-5 py-1 text-xs rounded-3xl'>Add New Expense</button>
            </div>
        </div>

        <div className=''>
            <h4 className='text-lg font-bold text-right'>Expenses:  $196</h4>
            <p className='underline-offset-1 text-right'>History</p>
            <div className='flex flex-col mt-6'>
                <span className='text-red-400 text-sm'>Due Date: 12 Oct, 2021</span>
                <span className='text-gray-400 text-sm'>6 Days</span>
            </div>
        </div>
    </div>
)
