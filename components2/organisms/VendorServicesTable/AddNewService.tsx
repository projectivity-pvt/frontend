import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { InvoiceTable } from '@components/organisms/InvoiceTable/InvoiceTable'
import { useState } from "react";
import { Amplify, API } from 'aws-amplify'


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




export const AddNewService = ({ closeServiceModal }) => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [serviceType, setServiceType] = useState("");





    const onSubmit = (e) => {

        e.prevetDefault();
        const headers = {
            "Content-Type": "application/graphql",
            "Authorization": "$TOKEN"
        }

        const result = Amplify.API('')
    }

    return (
        <>

            <div className='w-full m-2 shadow-lg rounded-lg pb-5 text-sm bg-white quotation_wrapper'>

                <div className='flex justify-between p-5'>
                    <h3>Add New Service</h3>
                    <button className='text-white bg-red-600 px-3 py-1 rounded' onClick={() => closeServiceModal(false)} >X</button>
                </div>

                <form>
                    <div className='grid grid-cols-12 p-5 gap-5 text-gray'>
                        <div className='col-span-12 lg:col-span-8 flex flex-col gap-5'>
                            <div>
                                <label className='text-sm'>Name</label> <br />
                                <input className="text-xs mt-1 w-full border-gray-300 rounded" type="text" placeholder='Eg. Food department or Catering' />
                            </div>
                            <div>
                                <label>Description</label> <br />
                                <textarea className='text-xs mt-1 w-full resize-none rounded border-gray-300 h-28' placeholder='Eg. Food department or Catering' />
                            </div>
                            <div>
                                <label>Department</label> <br />
                                <input className="text-xs mt-1 w-full border-gray-300 rounded" type="text" placeholder='Service Name' />
                            </div>
                            <div>
                                <label>Suggesions</label> <br />
                                <div className='flex gap-3 mt-1'>
                                    <span className='text-yellow-600 bg-yellow-100 border-2 border-orange-100 rounded-2xl px-3 py-0.5 text-xs'>Camera</span>
                                    <span className='text-yellow-600 bg-yellow-100 border-2 border-orange-100 rounded-2xl px-3 py-0.5 text-xs'>Ass. Director</span>
                                    <span className='text-yellow-600 bg-yellow-100 border-2 border-orange-100 rounded-2xl px-3 py-0.5 text-xs'>Dolly Grip</span>
                                </div>
                            </div>
                            <div className='bg-green-100 py-3 px-5 rounded mt-1'>
                                <p className='text-green-500 text-xs'>You will get the option to add catalogue in the next screen.</p>
                            </div>
                        </div>

                        <div className='col-span-12 lg:col-span-4 flex flex-col gap-5'>
                            <div>
                                <label>Price Range</label> <br />
                                <input className="text-xs mt-1 w-full border-gray-300 rounded" type="date" placeholder='' />
                            </div>
                            <div>
                                <label>Type</label> <br />
                                <div className='flex flex-col gap-5 mt-2'>
                                    <div className='flex items-center gap-3'>
                                        <input className="border-gray-300 rounded" type="checkbox" />
                                        <label>Crew</label>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input className="border-gray-300 rounded" type="checkbox" />
                                        <label>Inventory</label>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input className="border-gray-300 rounded" type="checkbox" />
                                        <label>Service</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 px-5 mb-3'>
                        <button onClick={onSubmit} type="button" className='bg-blue-500 text-white px-5 py-2 rounded w-36 text-xs'>Create Service</button>
                        <button className='text-black px-5 text-xs py-1.5 border-2 border-gray-500 rounded w-28'>Cancel</button>
                    </div>
                </form>

            </div>
        </>
    )
}
