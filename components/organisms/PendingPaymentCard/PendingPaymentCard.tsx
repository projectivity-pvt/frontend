import { Avatar } from '@components/atoms/Avatar/Avatar'
import React from 'react'
import RightArrowCircle from '../../../public/images/right-arrow-circle.svg'

export const PendingPaymentCard = () => (
  <div className="border rounded-lg p-4">
    <div className="flex items-center justify-between mb-6">
      <p className="text-xl font-semibold">Pending</p>
      <RightArrowCircle
        height={20}
        width={20}
        className="stroke-1 stroke-current"
      />
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initial="A" size={34} />
          <div className="">
            <p className="font-medium text-base line-clamp-1">
              Project name long format garbage text to test
            </p>
            <p className="text-sm text-gray-600">Dharma Productions</p>
          </div>
        </div>
        <p className="font-bold text-xl text-red-500">$4500</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initial="A" size={34} />
          <div className="">
            <p className="font-medium text-base line-clamp-1">
              Project name long format garbage text to test
            </p>
            <p className="text-sm text-gray-600">Dharma Productions</p>
          </div>
        </div>
        <p className="font-bold text-xl text-red-500">$4500</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initial="A" size={34} />
          <div className="">
            <p className="font-medium text-base line-clamp-1">
              Project name long format garbage text to test
            </p>
            <p className="text-sm text-gray-600">Dharma Productions</p>
          </div>
        </div>
        <p className="font-bold text-xl text-red-500">$4500</p>
      </div>
    </div>
  </div>
)
