import { Notification_msg } from './Notification_msg'
import React from 'react'


export const Notify_popup = ({ closeNotifyModal }) => (
    <>

        <div className='absolute flex justify-end w-full mt-96'>
            <div className='h-78 w-72 bg-gray-100 mr-40 shadow-lg rounded'>
                <div className='flex justify-between p-2 border bg-gray-700 text-gray-200'>
                    <h4>Notifications</h4>
                    <div className='flex items-center'>
                        <button className='rounded-3xl text-white bg-red-600 px-2 py-1 rounded text-xs' onClick={() => closeNotifyModal(false)} >X</button>
                        <span className='w-5 h-5 bg-gray-700 -mt-8 rotate-45'></span>
                    </div>
                </div>
                <Notification_msg />
            </div>
        </div>

    </>
)
