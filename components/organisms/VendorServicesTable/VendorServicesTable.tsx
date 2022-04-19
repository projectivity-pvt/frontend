import { Avatar } from '@components/atoms/Avatar/Avatar'
import {
    TableContainer,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TableBody,
    Badge,
    Button,
} from '@windmill/react-ui'
import React from 'react'
import DownloadIcon from 'public/images/arrow/download.svg'

export const VendorServicesTable = () => (
    <>
        <div className='vertical_list_wrapper'>

            <div className='flex justify-between items-center text-center mb-3'>
                <h5 className='td_serv_flex1 text-sm font-semibold text-gray-600 text-left ml-5'>Name</h5>
                <h5 className='td_serv_flex2 text-sm font-semibold text-gray-600 text-left ml-5'>Status</h5>
                <h5 className='td_serv_flex3 text-sm font-semibold text-gray-600 text-center ml-5'>Pricing</h5>
                <h5 className='td_serv_flex4 text-sm font-semibold text-gray-600 text-left ml-5'>Catalogue</h5>
                <h5 className='td_serv_flex5 text-sm font-semibold text-gray-600 text-center ml-5'>Actions</h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-green-500'>Added</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-red-500'>Missing</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-green-500'>Added</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-red-500'>Missing</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-green-500'>Added</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-red-500'>Missing</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 px-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_serv_flex1 truncate text-sm text-left'>Camera Services</h5>
                <h5 className='td_serv_flex2 truncate text-left whitespace-nowrap text-xs text-blue-600'>Live</h5>
                <h5 className='td_serv_flex3 text-center text-xs text-gray-600'>$300 - $500</h5>
                <h5 className='td_serv_flex4 text-center text-sm text-green-500'>Added</h5>
                <h5 className='td_serv_flex5 text-center'>
                    <span className='text-white bg-green-500 rounded-2xl text-xs px-5 py-0.5 mr-3'>Update</span>
                    <span className='text-white bg-red-500 rounded-2xl text-xs px-5 py-0.5'>Delete</span>
                </h5>
            </div>

        </div>






    </>
)
