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

export const AddNewExpense = ({ closeExpenseModal }) => (
    <>

        <div className='w-full m-2 shadow-lg rounded pb-5 text-sm bg-white'>

            <div className='flex justify-between p-5'>
                <h1>Add New Expense</h1>
                <button className='text-white bg-red-600 px-3 py-1 rounded' onClick={() => closeExpenseModal(false)} >X</button>
            </div>

            <form>
                <div className='grid grid-cols-12 p-5 gap-5'>
                    <div className='col-span-6 flex flex-col gap-5'>
                        <div>
                            <label>Description</label> <br />
                            <input className="w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div>
                            <label>Amount</label> <br />
                            <input className="w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div>
                            <label>Attachment</label> <br />
                            <input className="" type="file" />
                        </div>
                    </div>

                    <div className='col-span-6 flex flex-col gap-5'>
                        <div>
                            <label>Date</label> <br />
                            <input className="w-full border-gray-300 rounded" type="date" placeholder='' />
                        </div>
                        <div>
                            <label>Category</label> <br />
                            <input className="w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end px-5'>
                    <button className='bg-blue-500 text-white px-5 py-1 rounded w-32'>ADD</button>
                </div>
            </form>

        </div>
    </>
)
