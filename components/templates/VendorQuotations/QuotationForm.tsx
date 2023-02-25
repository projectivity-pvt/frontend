import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { CatalogDetail } from '@components/organisms/Catalog/CatalogDetail'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import Image from 'next/image'
import React from 'react'
import StarSvg from 'public/images/star.svg'


export const QuotationForm = ({ closeModal }) => {
    return (
        <>
            <VendorSidebar1 />
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                <TopHeaderBar />
                <main className="px-4 mt-4 mb-20">

                    <button className='text-white bg-red-600 px-5 -mr-2' onClick={() => closeModal(false)} >X</button>


                    <div className='flex justify-between items-center'>
                        <div>
                            <h1>Add Your Requirments</h1>
                            <p className='text-sm text-gray-500'>Mention the budget and requirements of the project</p>
                        </div>
                        <div>
                            <h2>cancel</h2>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <form>

                            <div className='w-full grid grid-cols-4 gap-5 my-5'>
                                <div className='col-span-2'>
                                    <label>Project Name</label> <br />
                                    <input className='w-full  border-gray-300 rounded border-gray-300 rounded' type="text" placeholder='Project Name' />
                                </div>
                                <div className='col-span-2'>
                                    <label>Requirements</label> <br />
                                    <input className='w-full  border-gray-300 rounded' type="text" placeholder='Project Name' />
                                </div>
                            </div>

                            <div className='w-full grid grid-cols-4 gap-5 my-5'>
                                <div className='col-span-2'>

                                    <div className='w-full grid grid-cols-4 gap-5'>
                                        <div className='col-span-2'>
                                            <label>From</label> <br />
                                            <input className='w-full  border-gray-300 rounded' type="date" placeholder='Project Name' />
                                        </div>
                                        <div className='col-span-2'>
                                            <label>To</label> <br />
                                            <input className='w-full  border-gray-300 rounded' type="date" placeholder='Project Name' />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-span-2'>
                                    <label>Location of the project</label> <br />
                                    <input className='w-full  border-gray-300 rounded' type="text" placeholder='Project Name' />
                                </div>
                            </div>


                            <div className="my-10">
                                <h4>Choose From catalogue</h4>
                                <div className='flex flex-wrap gap-5 justify-between'>
                                    <CatalogDetail />
                                    <CatalogDetail />
                                    <CatalogDetail />
                                    <CatalogDetail />
                                    <CatalogDetail />
                                    <CatalogDetail />
                                </div>
                            </div>

                            <div className="my-5 flex justify-between font-semibold">
                                <h3>Total Amount For Selected Items</h3>
                                <h1>₹16000</h1>
                            </div>

                            <div className="my-5">
                                <label>Mention terms and conditions for the service</label> <br />
                                <textarea className='h-32 rounded resize-none w-full  border-gray-300'></textarea>
                            </div>

                            <div className='flex justify-between'>
                                <div>
                                    <label>Attachment</label> <br />
                                    <input className='' type border-gray-300 rounded="file" placeholder='Project Name' />
                                </div>
                                <div>
                                    <button className='w-52 text-white bg-green-600 rounded-3xl py-1.5 px-5'>Submit</button>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-top mt-10'>
                                <div>
                                    <p className='text-gray-500'>You can track the status in the chat section.</p>
                                </div>
                                <div className='flex gap-5'>
                                    <button className='w-52 text-red-600 bg-gray-200 rounded-3xl py-1.5 px-5'>Decline</button>
                                    <button className='w-52 text-white bg-blue-600 rounded-3xl py-1.5 px-5'>Send Message</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
