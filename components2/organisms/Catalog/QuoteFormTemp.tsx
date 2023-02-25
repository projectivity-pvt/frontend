import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import {
    DesktopSidebar,
    EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { CatalogDetail } from '@components/organisms/Catalog/CatalogDetail'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import Image from 'next/image'
import React from 'react'
import StarSvg from 'public/images/star.svg'

export const QuotationFormTemp = ({ closeQuotationForm }) => (
    <>

        <div className='bg-white p-5 rounded-lg quotation_wrapper'>

            <div className='flex justify-between px-3 mb-10'>
                <div>
                    <h3>Add Your Requirments</h3>
                    <p className='text-sm text-gray-500'>Mention the budget and requirements of the project</p>
                </div>
                <div>
                    <button className='rounded text-white bg-red-600 py-1 px-5 -mr-2' onClick={() => closeQuotationForm(false)} >X</button>
                </div>
            </div>

            <form>

                <div className='w-full grid grid-cols-4 gap-5'>
                    <div className='col-span-2'>
                        <label className='text-sm'>Project Name</label> <br />
                        <input className='text-xs w-full border-gray-300 rounded border-gray-300 rounded' type="text" placeholder='Project Name' />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Requirements</label> <br />
                        <input className='text-xs w-full  border-gray-300 rounded' type="text" placeholder='Project Name' />
                    </div>
                </div>

                <div className='w-full grid grid-cols-4 gap-5 mt-3'>
                    <div className='col-span-2'>

                        <div className='w-full grid grid-cols-4 gap-5'>
                            <div className='col-span-2'>
                                <label className='text-sm'>From</label> <br />
                                <input className='text-xs w-full  border-gray-300 rounded' type="date" placeholder='Project Name' />
                            </div>
                            <div className='col-span-2'>
                                <label className='text-sm'>To</label> <br />
                                <input className='text-xs w-full  border-gray-300 rounded' type="date" placeholder='Project Name' />
                            </div>
                        </div>

                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Location of the project</label> <br />
                        <input className='text-xs w-full border-gray-300 rounded' type="text" placeholder='Project Name' />
                    </div>
                </div>


                <div className="my-5">
                    <p className='text-xs text-center py-2 bg-indigo-500 px-3 rounded-2xl text-white w-48 cursor-pointer mb-5'>Choose From catalogue</p>
                    <div className='flex flex-wrap gap-5 justify-between'>
                        <CatalogDetail />
                        <CatalogDetail />
                        <CatalogDetail />
                        <CatalogDetail />
                        <CatalogDetail />
                        <CatalogDetail />
                    </div>
                </div>

                <div className="my-5 flex justify-center items-center gap-10 p-2 bg-green-100">
                    <h5 className='text-green-500 text-xs'>Total Amount For Selected Items</h5>
                    <h5 className='text-green-600 font-semibold'>₹16000</h5>
                </div>

                <div className="my-5">
                    <h5 className='mb-2'>Mention terms and conditions for the service</h5>
                    <textarea className='h-32 rounded resize-none w-full  border-gray-300'></textarea>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <label className='text-xs mr-3'>Attachment</label>
                        <input className='text-xs' type="file" placeholder='Project Name' />
                    </div>
                    <div>
                        <button className='w-32 text-xs text-white bg-green-500 rounded-3xl py-1.5 px-5'>Submit</button>
                    </div>
                </div>

                <div className='flex justify-between items-center border-top mt-10'>
                    <div>
                        <p className='text-gray-500 text-xs'>You can track the status in the chat section.</p>
                    </div>
                    <div className='flex gap-5'>
                        <button className='w-32 text-xs text-red-600 bg-gray-200 rounded-3xl py-1.5 px-5'>Decline</button>
                        <button className='w-32 text-xs text-white bg-blue-600 rounded-3xl py-1.5 px-5'>Send Message</button>
                    </div>
                </div>

            </form>
        </div>
    </>
)
