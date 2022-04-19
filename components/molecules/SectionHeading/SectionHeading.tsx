import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

// interface Props {
//   viewAll: boolean
//   viewAllText: string
//   viewAllLink: string
// }

export const SectionHeading = () => (
  <div className="py-2 flex items-center justify-between">
    <h2 className="font-bold text-gray-700 text-sm">Latest Contracts</h2>
    <span className="text-blue-700 text-sm pt-1 flex items-center gap-1 cursor-pointer underline underline-offset-1">
      <span>View All</span>
      <RightArrowIcon
        height={14}
        width={14}
        className="stroke-current text-blue-400 inline align-middle"
      />
    </span>
  </div>
)
