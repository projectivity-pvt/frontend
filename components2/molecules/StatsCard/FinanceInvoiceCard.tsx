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

export const FinanceInvoiceCard = () => (
    <div className="flex justify-between w-full rounded-xl py-2 px-5 mb-5" style={{ background: 'rgb(231, 237, 255,0.3)' }}>
        <div className=''>
            <h4 className='text-lg font-bold'>Burger Singh Advertisement shoot</h4>
            <div className='flex items-center mb-5 mt-1'>
                <div>
                    <p className='text-sm -mb-1'>Contracts Inside:</p>
                </div>
                <div className='flex items-center ml-2'>
                    <div className='ml-0'><Avatar initial="A" size={30} /></div>
                    <div className='-ml-4'><Avatar initial="A" size={30} /></div>
                    <div className='-ml-4'><Avatar initial="A" size={30} /></div>
                    <p className='text-sm text-gray-400 ml-2'>+ 2 more</p>
                </div>
            </div>

            <div className='flex'>
                <p>21 Oct, 2021 To 12 Nov, 2021</p>
                <p className='text-red-500 ml-5'>Due in 6 days</p>
            </div>

        </div>

        <div className=''>
            <div className='flex'>
                <h4 className='text-xl font-bold text-right'>$3155</h4>
                <p className='text-xs ml-5 mt-1'>Budget <br /> / $3000</p>
            </div>

            <div>
                <button className='text-green-400 bg-green-100 rounded-2xl text-sm px-5 py-2 mt-10'>Approve and Pay</button>
            </div>

        </div>
    </div>
)
