import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { InvoiceTable } from '@components/organisms/InvoiceTable/InvoiceTable'
import Image from 'next/image'


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

export const VendorPaidTemp = () => (
    <>

        <div className='w-full m-2 rounded pb-5 text-sm bg-white' style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
            <div className='flex justify-between align-cente px-10 py-5 text-gray-500'>


                <div className='text-left'>
                    <div className='text-black font-semibold my-5'>
                        <h2>Order # 812313012903</h2>
                        <h3 className='text-gray-500 font-normal'>12 November , 2021</h3>
                    </div>

                    <div className='flex w-full my-3'>
                        <p className='w-32'>Gross</p>
                        <p>Gross</p>
                    </div>
                    <div className='flex w-full my-3'>
                        <p className='w-32'>Discount</p>
                        <p>Discount</p>
                    </div>
                    <div className='flex w-full my-3'>
                        <p className='w-32'>Net Total</p>
                        <p>Net Total</p>
                    </div>
                    <div className='flex w-full my-3'>
                        <p className='w-32'>Taxes</p>
                        <p>Taxes</p>
                    </div>
                    <div className='flex w-full my-3'>
                        <p className='w-32'>Service charge</p>
                        <p>Service charge</p>
                    </div>
                    <div className='text-black flex w-full my-3'>
                        <h2 className='w-32'>TOTAL</h2>
                        <h2>$4567</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-between align-center py-5'>
                    <div>
                        <h1 className='text-black text-center text-3xl font-semibold'>$4567</h1>
                    </div>
                    <div className=''>
                        <Image src="/images/payment/paid.png" height={120} width={150} />
                    </div>
                </div>
            </div>

        </div>
    </>
)
