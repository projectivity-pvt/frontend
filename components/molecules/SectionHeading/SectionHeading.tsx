import Image from 'next/image'
import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

interface Props {
  viewAll: boolean
  viewAllText: string
  viewAllLink: string
}

export const SectionHeading = (props: Props) => (
  <div className="py-2 flex items-center justify-between">
    <h2 className="font-bold text-xl">Latest Contracts</h2>
    <span className="text-primary-700 font-semibold  text-sm pt-1 flex items-center gap-1 cursor-pointer">
      <span>View All</span>
      <RightArrowIcon
        height={14}
        width={14}
        className="stroke-current text-primary-600 inline align-middle"
      />
    </span>
  </div>
)
