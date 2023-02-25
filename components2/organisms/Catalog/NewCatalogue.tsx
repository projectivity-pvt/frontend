import { Avatar } from '@components/atoms/Avatar/Avatar'
import Image from 'next/image'
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

export const NewCatalogue = ({ closeCatPopup }) => (
    <>

        <div className='w-full m-2 shadow-lg rounded pb-5 text-sm bg-white'>

            <div className='flex justify-between p-5'>
                <h2 className='pl-5'>Add New Item To Catalogue</h2>
                <button className='text-white rounded bg-red-600 px-3 py-1' onClick={() => closeCatPopup(false)} >X</button>
            </div>

            <form>
                <div className='grid grid-cols-12 p-5 gap-5'>
                    <div className='col-span-8 flex flex-col gap-5'>
                        <div>
                            <label>Name</label> <br />
                            <input className="mt-1 w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div>
                            <label>Model No.</label> <br />
                            <input className="mt-1 w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div>
                            <label>Description</label> <br />
                            <textarea className="resize-none h-32 mt-1 w-full border-gray-300 rounded" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div className='flex'>
                            <div>
                                <label>Attachment</label> <br />
                                <input className='mt-1 rounded' type="file" />
                            </div>
                            <div className='flex justify-center'>
                                <Image src="/images/catalog/camera_catalog.png" height={170} width={200} />
                            </div>
                        </div>
                    </div>

                    <div className='col-span-4 flex flex-col gap-5'>
                        <div>
                            <label>Quantity</label> <br />
                            <input className="mt-1 w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div>
                            <label>Rate</label> <br />
                            <input className="mt-1 w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                        </div>
                        <div className='flex flex-col gap-5 mt-5'>
                            <div className='flex gap-2 items-center'>
                                <input className="border-gray-300" type="checkbox" />
                                <label>Rate For</label>
                                <input className="border-gray-300 w-16 h-6" type="number" />
                                <label>Hours</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input className="border-gray-300" type="checkbox" />
                                <label>Per Day</label> <br />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input className="border-gray-300" type="checkbox" />
                                <label>Fixed Price</label> <br />
                            </div>
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
