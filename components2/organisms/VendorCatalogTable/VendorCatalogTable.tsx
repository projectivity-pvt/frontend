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

export const VendorCatalogTable = () => (
    <>

        <div className='flex justify-between items-center text-center mb-3'>
            <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-500 text-left ml-5'>Name</h5>
            <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-left ml-5'>Model Nomber</h5>
            <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>Quantity</h5>
            <h5 className='td_catalog_flex4 text-xs font-semibold text-gray-500 text-center ml-5'>Status</h5>
            <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-500 text-center ml-5'>Pricing</h5>
            <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-500 text-center ml-5'>Pricing Model</h5>
            <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-500 text-center ml-5'>Image</h5>
            <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-500 text-center ml-5'>Actions</h5>
        </div>

        <div className='vertical_list_wrapper' style={{ paddingRight: "10px" }}>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalog_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>CNikon DSLR High Zoom</h5>
                <h5 className='td_catalog_flex2 text-xs font-semibold text-gray-500 text-center ml-5'>MXYZ123RT</h5>
                <h5 className='td_catalog_flex3 text-xs font-semibold text-gray-500 text-center ml-5'>5</h5>
                <h5 className='td_catalog_flex4 text-xs font-semibold text-green-500 text-center ml-5'>Available</h5>
                <h5 className='td_catalog_flex5 text-xs font-semibold text-gray-700 text-center ml-5'>₹ <span>7000</span></h5>
                <h5 className='td_catalog_flex6 text-xs font-semibold text-gray-700 text-center ml-5'>Per day</h5>
                <h5 className='td_catalog_flex7 text-xs font-semibold text-gray-700 text-center ml-5'>Image</h5>
                <h5 className='td_catalog_flex8 text-xs font-semibold text-gray-700 text-center ml-5'>
                    <span className=''>Edit</span>
                    <span className=''></span>
                </h5>
            </div>



        </div>






    </>
)
