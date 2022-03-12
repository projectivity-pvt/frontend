import Image from 'next/image'
import React from 'react'
import StarSvg from 'public/images/star.svg'
import RightArrowCircle from '../../../public/images/right-arrow-circle.svg'

export const GigCard = () => {
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="w-full h-48 relative">
        <Image src="/images/bg-gig.jpg" layout="fill" />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image src="/images/avatar.png" height={50} width={50} />
          <div>
            <p className=" font-bold text-lg">John Doe</p>
            <p className="font-normal text-gray-500 text-base">
              Furniture Vendor
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-5 w-5">
            <StarSvg />
          </span>
          <p className=" font-bold text-gray-600 text-xl">4.0</p>
          <p className=" text-gray-400 text-lg">(13)</p>
        </div>
      </div>
      <p className="line-clamp-3 text-lg px-4 my-4">
        I provide furniture and costumes at budget prices around Mumbai. Contact
        for a free quote.
      </p>
      <div className="flex items-center justify-between p-4 border-t">
        <p className=" font-bold text-xl ">Starting from ₹ 10,000</p>
        <RightArrowCircle
          height={20}
          width={20}
          className="stroke-1 stroke-current"
        />
      </div>
    </div>
  )
}
