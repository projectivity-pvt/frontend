import { Avatar } from '@components/atoms/Avatar/Avatar'
import React from 'react'
import RightArrowCircle from '../../../public/images/right-arrow-circle.svg'

export const PendingPaymentCard = () => (
  <div className="border rounded-lg p-4">
    <div className="flex items-center justify-between mb-6">
      <h3 className="">Pending</h3>
      <RightArrowCircle
        height={20}
        width={20}
        className=""
      />
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initial="A" size={34} />
          <div className="">
            <p className="font-sm line-clamp-1">
              Project name long format garbage text to test
            </p>
            <p className="text-xs text-gray-600 -mt-0.5">Dharma Productions</p>
          </div>
        </div>
        <p className="font-bold text-sm text-red-600">$4500</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initial="A" size={34} />
          <div className="">
            <p className="font-sm line-clamp-1">
              Project name long format garbage text to test
            </p>
            <p className="text-xs text-gray-600 -mt-0.5">Dharma Productions</p>
          </div>
        </div>
        <p className="font-bold text-sm text-red-600">$4500</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar initial="A" size={34} />
          <div className="">
            <p className="font-sm line-clamp-1">
              Project name long format garbage text to test
            </p>
            <p className="text-xs text-gray-600 -mt-0.5">Dharma Productions</p>
          </div>
        </div>
        <p className="font-bold text-sm text-red-600">$4500</p>
      </div>

    </div>
  </div>
)
