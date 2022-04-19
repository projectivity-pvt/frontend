import { Badge } from '@windmill/react-ui'
import React from 'react'
import ClockIcon from '../../../public/images/clock-outline.svg'

export const VendorProjectListItem = () => (
  <>
    <div className='flex flex-col gap-2 mb-2'>
      <div className="py-1 px-3 rounded-lg flex items-center" style={{ background: "#F9F9F9" }}>
        <div className="avatar rounded-full bg-primary-600 text-white flex items-center justify-center h-10 w-10 md:h-10 md:w-10 mr-2 md:mr-5">
          A
        </div>
        <div>
          <h3 className="text-gray-700 text-sm font-semibold text-lg md:text-sm truncate max-w-[160px] md:max-w-full">
            Project Name: Burger Singh
          </h3>
          <p className="flex items-center gap-5 text-gray-600 lg:text-sm md:text-base text-sm">
            <span>Dharma Productions</span>
            <span className="md:flex items-center gap-2 hidden">
              <ClockIcon height={14} width={14} />
              <span>12 Sept - 24 Oct</span>
            </span>
          </p>
        </div>
        <div className="ml-auto text-right">
          <p>
            <span className="text-xs mr-1 hidden md:inline-block">Income: </span>
            <span className="font-bold text-sm"> $196</span>
          </p>
          <Badge className="bg-blue-500 text-white truncate text-xs px-5 py-0.5 mb-1">In Progress</Badge>
        </div>
      </div>

      <div className="bg-cool-gray-100 py-1 px-3 rounded-lg flex items-center" style={{ background: "#F9F9F9" }}>
        <div className="avatar rounded-full bg-primary-600 text-white flex items-center justify-center h-10 w-10 md:h-10 md:w-10 mr-2 md:mr-5">
          A
        </div>
        <div>
          <h3 className="text-gray-700 text-sm font-semibold text-lg md:text-sm truncate max-w-[160px] md:max-w-full">
            Project Name: Burger Singh
          </h3>
          <p className="flex items-center gap-5 text-gray-600 lg:text-sm md:text-base text-sm">
            <span>Dharma Productions</span>
            <span className="md:flex items-center gap-2 hidden">
              <ClockIcon height={14} width={14} />
              <span>12 Sept - 24 Oct</span>
            </span>
          </p>
        </div>
        <div className="ml-auto text-right">
          <p>
            <span className="text-xs mr-1 hidden md:inline-block">Income: </span>
            <span className="font-bold text-sm"> $196</span>
          </p>
          <Badge className="bg-green-500 text-white truncate text-xs px-5 py-0.5 mb-1">In Progress</Badge>
        </div>
      </div>

      <div className="bg-cool-gray-100 py-1 px-3 rounded-lg flex items-center" style={{ background: "#F9F9F9" }}>
        <div className="avatar rounded-full bg-primary-600 text-white flex items-center justify-center h-10 w-10 md:h-10 md:w-10 mr-2 md:mr-5">
          A
        </div>
        <div>
          <h3 className="text-gray-700 text-sm font-semibold text-lg md:text-sm truncate max-w-[160px] md:max-w-full">
            Project Name: Burger Singh
          </h3>
          <p className="flex items-center gap-5 text-gray-600 lg:text-sm md:text-base text-sm">
            <span>Dharma Productions</span>
            <span className="md:flex items-center gap-2 hidden">
              <ClockIcon height={14} width={14} />
              <span>12 Sept - 24 Oct</span>
            </span>
          </p>
        </div>
        <div className="ml-auto text-right">
          <p>
            <span className="text-xs mr-1 hidden md:inline-block">Income: </span>
            <span className="font-bold text-sm"> $196</span>
          </p>
          <Badge className="bg-red-500 text-white truncate text-xs px-5 py-0.5 mb-1">In Progress</Badge>
        </div>
      </div>
    </div>

  </>
)
