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

export const VendorCatalogDcsTable = () => (
    <>

        <div className='flex justify-between items-center text-center mb-3'>
            <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-500 text-left ml-5'>Name</h5>
            <h5 className='td_catalogDcs_flex2 text-xs font-semibold text-gray-500 text-center'>Date Added</h5>
            <h5 className='td_catalogDcs_flex3 text-xs font-semibold text-gray-500 text-center'>Valid till</h5>
            <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-500 text-center ml-5'>Actions</h5>
        </div>

        <div className='vertical_list_wrapper' style={{ paddingRight: "10px" }}>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>

            <div className='tr_flex flex justify-between items-center py-3 rounded mb-2' style={{ background: "#F9F9F9;" }}>
                <h5 className='td_catalogDcs_flex1 text-xs font-semibold text-gray-700 text-left ml-5'>Oscar Camera licence and certification</h5>
                <h5 className='td_catalogDcs_flex2 text-xs text-gray-500 text-center'>12 July, 2021</h5>
                <h5 className='td_catalogDcs_flex3 text-xs text-gray-500 text-center'>12 July, 2022</h5>
                <h5 className='td_catalogDcs_flex4 text-xs font-semibold text-gray-700 text-center'>
                    <span className='text-blue-600 bg-blue-100 text-xs rounded-lg px-5 py-0.5'>Download</span>
                    <span className=''></span>
                </h5>
            </div>





        </div>






    </>
)
