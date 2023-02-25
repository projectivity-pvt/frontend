import React from 'react';

export const ServiceModeConfirm = ({ closeservConPopup, closeServiceAction }) => (
    <>
        <div className='flex flex-col rounded justify-between bg-white w-full py-3 px-5'>
            <div className='flex justify-between mb-5 items-center'>
                <h2>Service Activation</h2>
                <button className='text-white rounded bg-gray-600 px-4 py-0.5' onClick={() => closeservConPopup(false)} >X</button>
            </div>
            <div>
                <p className='text-gray-600 text-sm mb-3'>This operation will activate your current service. Once you activate, the service will be visible for all the Production houses.</p>
                <p>Do You really want to continue ?</p>
            </div>
            <div className='text-sm flex justify-end gap-3'>
                <button className='bg-red-600 text-white px-5 py-0.5 rounded' onClick={() => { closeServiceAction(false); closeservConPopup(false); }}>No</button>
                <button className='bg-green-500 text-white px-5 py-0.5 rounded' onClick={() => { closeServiceAction(true); closeservConPopup(false); }}>Yes</button>
            </div>
        </div>
    </>
);