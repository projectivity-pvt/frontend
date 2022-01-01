import { Badge } from '@windmill/react-ui'
import React from 'react'
import ClockIcon from '../../../public/images/clock-outline.svg'

export const VendorProjectListItem = () => (
  <div className="bg-cool-gray-100 p-3 rounded-lg flex items-center">
    <div className="avatar rounded-full bg-primary-600 text-white flex items-center justify-center h-10 w-10 md:h-14 md:w-14 mr-2 md:mr-5">
      A
    </div>
    <div>
      <h3 className="font-semibold text-sm md:text-lg truncate max-w-[160px] md:max-w-full">
        Project Name Burger Singh
      </h3>
      <p className="flex items-center gap-5 text-gray-600 text-sm md:text-base">
        <span>Dharma Productions</span>
        <span className="md:flex items-center gap-2 hidden">
          <ClockIcon height={16} width={16} />
          <span>12 Sept - 24 Oct</span>
        </span>
      </p>
    </div>
    <div className="ml-auto text-right">
      <p>
        <span className="font-medium mr-1 hidden md:inline-block">Income:</span>
        <span className="font-bold text-lg">$196</span>
      </p>
      <Badge className="bg-blue-500 text-white truncate">In Progress</Badge>
    </div>
  </div>
)
