import { Badge } from '@windmill/react-ui'
import React from 'react'
import ClockIcon from '../../../public/images/clock-outline.svg'

interface Props {}

export const VendorProjectListItem = (props: Props) => (
  <div className="bg-cool-gray-100 p-3 rounded-lg flex items-center">
    <div className="avatar rounded-full bg-primary-600 text-white flex items-center justify-center h-14 w-14 mr-5">
      A
    </div>
    <div>
      <h3 className="font-semibold">Project Name Burger Singh</h3>
      <p className="flex items-center gap-5 text-gray-600">
        <span>Dharma Productions</span>
        <span className="md:flex items-center gap-2 hidden">
          <ClockIcon height={16} width={16} />
          <span>12 Sept - 24 Oct</span>
        </span>
      </p>
    </div>
    <div className="ml-auto text-right">
      <p>
        <span className="font-medium mr-1">Income:</span>
        <span className="font-bold text-lg">$196</span>
      </p>
      <Badge className="bg-blue-500 text-white">In Progress</Badge>
    </div>
  </div>
)
