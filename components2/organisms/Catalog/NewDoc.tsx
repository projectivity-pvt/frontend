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

export const NewDoc = ({ closeDocPopup }) => (
    <>

        <div className='w-full m-2 shadow-lg rounded pb-5 text-sm bg-white'>

            <div className='flex justify-between p-5'>
                <h2 className='pl-5'>Upload New Document</h2>
                <button className='text-white rounded bg-red-600 px-3 py-1' onClick={() => closeDocPopup(false)} >X</button>
            </div>

            <form>
                <div className='grid grid-cols-12 p-5 gap-5'>
                    <div className='col-span-12 flex flex-col gap-5 text-gray-500'>
                        <div>
                            <label>Name</label> <br />
                            <input className="mt-1 w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div>
                            <label>Valid Till</label> <br />
                            <input className="mt-1 w-3/5 border-gray-300 rounded" type="date" />
                        </div>
                        <div>
                            <label>Attachment</label> <br />
                            <input className='mt-1 rounded' type="file" />
                        </div>
                    </div>


                </div>
                <div className='flex justify-start px-5 gap-5 my-5'>
                    <button className='bg-blue-500 text-white px-5 py-1 rounded'>Add Item</button>
                    <button className='text-black bg-gray-200 px-5 py-1 rounded'>Cancel</button>
                </div>
            </form>

        </div>
    </>
)
