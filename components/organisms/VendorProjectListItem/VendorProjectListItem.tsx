import { Badge } from '@windmill/react-ui'
import React from 'react'
import ClockIcon from '../../../public/images/clock-outline.svg'

export const VendorProjectListItem = () => (
  <>
    <div className="flex flex-col gap-2 mb-2 w-full">
      <div
        className="py-3 px-3 rounded-xl flex items-center"
        style={{ background: '#F9F9F9' }}
      >
        <div className="avatar rounded-full bg-gray-400 text-white flex items-center justify-center h-10 w-10 md:h-10 md:w-10 mr-2 md:mr-5">
          A
        </div>
        <div>
          <h3 className="text-gray-700 text-sm font-semibold md:text-lg md:text-sm truncate max-w-[160px] md:max-w-full">
            Project Name: Burger Singh
          </h3>
          <p className="flex items-center gap-5 text-gray-600 lg:text-sm md:text-base text-xs">
            <span>Dharma Productions</span>
            <span className="md:flex text-xs text-gray-400 items-center gap-2 hidden">
              <ClockIcon height={14} width={14} />
              <span>12 Sept - 24 Oct</span>
            </span>
          </p>
        </div>
        <div className="ml-auto text-right">
          <p>
            <span className="text-xs mr-1 hidden md:inline-block">
              Income:{' '}
            </span>
            <span className="font-bold text-sm"> $196</span>
          </p>
          <Badge className="bg-green-400 text-white truncate text-xs px-5 py-1 mb-1">
            In Progress
          </Badge>
        </div>
      </div>
    </div>
  </>
)
