import { Avatar } from '@components/atoms/Avatar/Avatar'
import { Badge } from '@windmill/react-ui'
import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

export const VendorProjectCard = () => (
  <div className="group rounded-xl border p-2 max-w-xs">
    <div className="flex items-center gap-2">
      <Avatar initial="A" size={42} />
      <div className="w-full truncate">
        <h3 className="truncate font-medium">
          Project name ad shoot burger singh
        </h3>
        <p className="truncate text-xs font-medium text-gray-600">Created by: Joehn Doe (Line Producer)</p>
      </div>
    </div>
    <div className="mt-5">
      <div className="due bg-red-100 py-1 px-2 inline-block rounded text-red-600 text-sm">
        Due Date: 23 Nov, 2021
      </div>
      <Badge className="bg-gray-200 text-gray-600 font-bold py-1 px-2 ml-2 rounded">2</Badge>
    </div>
    <div className="mt-5 flex gap-7 items-center">
      <div className='flex'>
        <div>
          <p className='text-xs text-gray-500'>Net Income</p>
          <p className='text-sm font-semibold text-gray-700'>$4500</p>
        </div>
        <div className='ml-5'>
          <p className='text-xs text-gray-500'>Days Remaining</p>
          <p className='text-sm font-semibold text-gray-700'>9 Days</p>
        </div>

      </div>

      <RightArrowIcon
        height={25}
        width={25}
        className="stroke-0 ml-auto  inline align-middle"
      />
    </div>

    <div className='flex items-center justify-around mt-2'>
      <div className='w-4/5 bg-gray-400 h-1.5 rounded-3xl group-hover:bg-blue-400'></div>
      <div>
        <p className='text-sm color-gray-300'>77%</p>
      </div>
    </div>
  </div>
)
