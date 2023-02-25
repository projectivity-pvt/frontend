import React from 'react'
import Image from 'next/image'

export const VendorProfileCard = () => (
  <div className="">
    <div className="my-5 mb-10 text-center">
      <div
        className="avatar rounded-full mx-auto flex items-center justify-center h-14 w-14 mb-5 text-white"
        style={{ backgroundColor: '#33c5f4' }}
      >
        A
      </div>
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
      <p className="text-gray-600 truncate">Order completion rate</p>
      <p className="text-right ml-2">89%</p>
    </div>
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">Order completion rate </p>
      <p className="text-right ml-2">89%</p>
    </div>{' '}
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">
        Order completion rate long sentence
      </p>
      <p className="text-right ml-2">89%</p>
    </div>{' '}
    <div className="flex items-center justify-between text-sm mb-8">
      <p className="text-gray-600 truncate">Order completion rate </p>
      <p className="text-right ml-2">89%</p>
    </div>
  </div>
)
