import React from "react"
import Image from 'next/image'


export const VendorPICard = () => (
    <>
        <div className="mt-5 mb-10">
            <h1 className="font-semibold">Project name</h1>
            <h3 className="text-gray-500">Food and Catering Services</h3>
            <p className="text-gray-500 text-sm py-2">Created on: 10 October, 2021</p>
            <div className="flex gap-5 text-sm">
                <p className="text-red-500 text-sm">Due Date: 30 Novermber</p>
                <p>|</p>
                <p>6 Days left</p>
            </div>

        </div>
    </>
)

    /* ----------------------card 3---------------- */ 
/* <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 mx-2  mb-10  shadow-lg" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFE6E6 100%);" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/overview/empty-wallet.svg" height={40} width={40} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Pending Bills</p>
                    <p className="text-center text-lg font-bold text-black-700"><span>$ </span>223</p>
                </div>
            </div> */
/* ----------------------card 3---------------- */ 


