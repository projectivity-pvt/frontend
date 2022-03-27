import React from "react"
import Image from 'next/image'


export const FinanceStatsCard = () => (
    <>
        <div className="flex flex-wrap justify-evenly w-full">

            {/* ----------------------card 1---------------- */}
            <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-32 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #E7EDFF 100%);" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/notification.svg" height={24} width={24} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Top Expenses</p>
                    <p className="text-center text-lg font-bold text-black-700">$1023</p>
                </div>
            </div>
            {/* ----------------------card 1---------------- */}

            {/* ----------------------card 2---------------- */}
            <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-32 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #DAFFDE 100%);" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/notification.svg" height={24} width={24} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Paid</p>
                    <p className="text-center text-lg font-bold text-black-700">$800</p>
                </div>
            </div>
            {/* ----------------------card 2---------------- */}

            {/* ----------------------card 3---------------- */}
            <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-32 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFE6E6 100%);" }}>
                <div className="flex items-center justify-center -mt-5">
                    <Image src="/images/notification.svg" height={24} width={24} />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-center text-base font-medium text-black-600 mb-1">Due</p>
                    <p className="text-center text-lg font-bold text-black-700">$223</p>
                </div>
            </div>
            {/* ----------------------card 3---------------- */}

        </div>
    </>
)