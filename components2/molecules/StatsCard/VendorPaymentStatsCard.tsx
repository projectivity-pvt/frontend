import React from "react"
import Image from 'next/image'


export const VendorPaymentStatsCard = () => (
    <>
        <div className="flex flex-wrap justify-evenly w-full mt-10">

            {/* ----------------------card 1---------------- */}
            <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 mx-2 mb-10 shadow-lg" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #B4C9FF 100%)" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/overview/note-2.svg" height={40} width={40} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Total Income</p>
                    <p className="text-center text-lg font-bold text-black-700">$ 1023</p>
                </div>
            </div>
            {/* ----------------------card 1---------------- */}

            {/* ----------------------card 2---------------- */}
            <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 mx-2  mb-10  shadow-lg" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #D0FFD5 100%)" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/overview/people.svg" height={40} width={40} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Paid</p>
                    <p className="text-center text-lg font-bold text-black-700">$ 800</p>
                </div>
            </div>
            {/* ----------------------card 2---------------- */}

            {/* ----------------------card 3---------------- */}
            <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 mx-2  mb-10  shadow-lg" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFE6E6 100%);" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/overview/empty-wallet.svg" height={40} width={40} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Pending Bills</p>
                    <p className="text-center text-lg font-bold text-black-700"><span>$ </span>223</p>
                </div>
            </div>
            {/* ----------------------card 3---------------- */}


        </div>
    </>
)