import Image from 'next/image'
import React from 'react'
import StarSvg from 'public/images/star.svg'
import RightArrowCircle from '../../../public/images/right-arrow-circle.svg'
import Link from 'next/link'


function HireContractorGig() {
  return (
    <>
    <Link href ='/business/newVendorService'>
      <div className="card cursor-pointer" style={{padding:'0'}}>
        <div className="rounded-md overflow-hidden">
          <div className="w-full h-48 relative" style={{background: 'linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)'}} >
            {/* <Image src="/images/bg-gig.jpg" layout="fill" /> */}
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Image src="/images/avatar.png" height={40} width={40} />
              <div>
                <p className=" font-bold text-sm">John Doe</p>
                <p className="font-normal text-gray-500 text-xs">
                  Furniture Vendor
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-4 w-4">
                <StarSvg />
              </span>
              <p className=" font-bold text-gray-600 text-md">4.0</p>
              <p className=" text-gray-400 text-sm">(13)</p>
            </div>
          </div>
          <p className="line-clamp-3 text-sm px-4 mt-1 mb-2">
            I provide furniture and costumes at budget prices around Mumbai.
            Contact for a free quote.
          </p>
          <div className="flex items-center justify-between p-4 border-t">
            <p className="font-bold text-center text-sm">Starting from ₹ 10,000</p>
            <RightArrowCircle
              height={20}
              width={20}
              className="stroke-1 stroke-current"
            />
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}

export default HireContractorGig
