import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { InvoiceTable } from '@components/organisms/InvoiceTable/InvoiceTable'


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

export const InvoiceTempMax = ({ closeModal }) => (
    <>

        <div className='flex justify-end'>
            <button className='text-white bg-red-600 px-5 -mr-2' onClick={() => closeModal(false)} >X</button>
        </div>

        <div className='w-full m-2 shadow-lg rounded pb-5 text-sm bg-white'>
            <div className='flex justify-between align-center bg-purple-100 px-10 py-5 text-gray-500'>
                <div>
                    <h1 className='text-purple-600 font-semibold'>Red Software</h1>
                    <p>648-888-9343</p>
                    <p>email@gmail.com</p>
                    <p>www.abcdefg.com</p>
                </div>
                <div className='text-right'>
                    <p>435 Forest Avenue</p>
                    <p>New York</p>
                    <p>10004</p>
                    <p>United States</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-12 p-5 h-52 text-gray-500'>
                <div className='col-span-5 flex flex-col justify-between'>
                    <div className='w-40'>
                        <p>Billed to,</p>
                        <p className='font-semibold text-black'>Terry Baptista,</p>
                        <p>3455  Geraldine Lane, New York-10013, United States</p>
                    </div>
                    <div>
                        <p className='font-semibold text-black text-xl'>Design System</p>
                    </div>
                </div>

                <div className='col-span-3 flex flex-col justify-between align-center'>
                    <div>
                        <p>Invoice number</p>
                        <p className='font-semibold text-black'>#00261</p>
                    </div>
                    <div>
                        <p>Reference</p>
                        <p className='font-semibold text-black'>INV-057</p>
                    </div>
                    <div>
                        <p>Invoice Date</p>
                        <p className='font-semibold text-black'>27 March, 2020</p>
                    </div>
                </div>

                <div className='col-span-4 flex flex-col justify-between text-right'>
                    <div>
                        <p>Invoice of (USD)</p>
                        <p className='text-purple-700 text-2xl font-semibold'>$ 4,950.00</p>
                    </div>
                    <div>
                        <p>Due Date</p>
                        <p className='font-semibold text-black'>04 April, 2020</p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 h-0.5'></div>
            <div>
                <InvoiceTable />
                <InvoiceTable />
                <InvoiceTable />
            </div>

            <div className='flex justify-end px-8 m-5 text-gray-500'>
                <p>Total : <span className='text-black font-semibold'>$ 7648</span></p>
            </div>

        </div>
    </>
)
