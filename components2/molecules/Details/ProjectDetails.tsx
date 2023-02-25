import React from "react"
import Image from 'next/image'


export const ProjectDetails = () => (
    <>
        <div className="p-5">
            <h1>Project Details</h1>

<div className="flex flex-col gap-5 text-gray-400 mt-5 text-sm">
            <div className="flex items-center gap-3">
                <div>
                <Image src="/images/overview/empty-wallet.svg" height={30} width={30} />
                </div>
                <div>
                <p>Contract</p>
                <h4 className="text-black -mt-1">Food and catering services </h4>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div>
                <Image src="/images/overview/empty-wallet.svg" height={30} width={30} />
                </div>
                <div>
                <p>Production House</p>
                <h4 className="text-black -mt-1">Dharma Production House</h4>
            </div>
            </div>

            <div className="flex items-center gap-3">
                <div>
                <Image src="/images/overview/empty-wallet.svg" height={30} width={30} />
                </div>
                <div>
                <p>Contact</p>
                <h4 className="text-black -mt-1">90812718291</h4>
            </div>
            </div>

            <div className="flex items-center gap-3">
                <div>
                <Image src="/images/overview/empty-wallet.svg" height={30} width={30} />
                </div>
                <div>
                <p>Email</p>
                <h4 className="text-black -mt-1">dharma.prod@gmail.com</h4>
            </div>
            </div>

            <div className="flex items-center gap-3">
                <div>
                <Image src="/images/overview/empty-wallet.svg" height={30} width={30} />
                </div>
                <div>
                <p>Quotation</p>
                <h4 className="font-semibold text-sm text-blue-600">View Quotation</h4>
            </div>
            </div>
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


