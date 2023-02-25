import React from 'react'
import Image from 'next/image'

export const VendorPostProfileCard = () => (
  <div className="">
    <div className="my-5 mb-10 text-center">
      <Image
        src="/images/user_prabhas.jpg"
        height={60}
        width={60}
        className="rounded-full cursor-pointer"
      />
      <p className="text-sm font-bold mb-2">Level One</p>
      <p className="text-sm font-bold">
        <span className="align-middle mr-2">
          <Image
            src="/images/star.svg"
            height={20}
            width={20}
            className="mr-2"
          />
        </span>
        <span>5.0</span>
      </p>
    </div>
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">Total Connections</p>
      <p className="text-right ml-2">78</p>
    </div>
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">Business Connections</p>
      <p className="text-right ml-2">89%</p>
    </div>{' '}
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">Vendor Connections</p>
      <p className="text-right ml-2">11%</p>
    </div>{' '}
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">Total Post</p>
      <p className="text-right ml-2">13</p>
    </div>
  </div>
)
