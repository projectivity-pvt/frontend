import { Avatar } from '@components/atoms/Avatar/Avatar'
import { Badge } from '@windmill/react-ui'
import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

export const VendorProjectCard = () => (
  <div className="border rounded-lg p-3">
    <div className="flex items-center gap-2">
      <Avatar initial="A" size={47} />
      <div className="w-full truncate">
        <h3 className="truncate font-medium">
          Project name ad shoot burger singh
        </h3>
        <p className="text-xs font-medium text-gray-600">Dharma production</p>
      </div>
    </div>
    <div className="mt-5">
      <div className="due bg-red-100 py-1 px-2 inline-block rounded text-red-600 text-sm">
        Due Date: 23 Nov, 2021
      </div>
      <Badge className="text-sm py-1 px-2 ml-2 rounded">In Progress</Badge>
    </div>
    <div className="mt-5 flex gap-7 items-center">
      <div>
        <p className="font-medium text-xs text-gray-500">Net Earnings</p>
        <p className="text-xl font-bold">$450</p>
      </div>
      <div>
        <p className="font-medium text-xs text-gray-500">Days remaining</p>
        <p className="text-xl font-bold">9 days</p>
      </div>
      <RightArrowIcon
        height={25}
        width={25}
        className="stroke-0 ml-auto  inline align-middle"
      />
    </div>
  </div>
)
