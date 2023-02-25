import { ProgressRing } from '@components/molecules/ProgressRing/ProgressRing'
import React from 'react'

export const ProjectHeader = () => (
  <div>
    <h1 className="font-bold text-3xl mb-1">
      Project Name Burger Singh Advertisement
    </h1>
    <div className="flex items-center gap-0 md:gap-5 justify-between md:justify-start">
      <div>
        <p className="font-medium text-base text-gray-700 mb-1">
          Created on: 10 October, 2021
        </p>
        <p className="font-medium">
          <span className="text-red-600">Due Date: 30 November</span> | 6 Days
          left
        </p>
      </div>
      <ProgressRing percent={20} />
    </div>
  </div>
)
