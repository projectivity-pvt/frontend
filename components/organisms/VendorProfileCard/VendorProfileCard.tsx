import React from 'react'
import Image from 'next/image'

interface Props {}

export const VendorProfileCard = (props: Props) => (
  <div className="border rounded-lg p-5">
    <div className="my-4 text-center">
      <div className="avatar rounded-full bg-primary-600 mx-auto flex items-center justify-center h-24 w-24 mb-5">
        A
      </div>
      <p className="text-base font-bold mb-2">Level One</p>
      <p className="text-base font-bold">
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
    <div className="flex items-center justify-between">
      <p>Order completion rate</p>
      <p className="text-right">89%</p>
    </div>
    <div className="flex items-center justify-between">
      <p>Order completion rate </p>
      <p className="text-right">89%</p>
    </div>{' '}
    <div className="flex items-center justify-between">
      <p>Order completion rate long sentence</p>
      <p className="text-right">89%</p>
    </div>{' '}
    <div className="flex items-center justify-between">
      <p>Order completion rate </p>
      <p className="text-right">89%</p>
    </div>
  </div>
)
