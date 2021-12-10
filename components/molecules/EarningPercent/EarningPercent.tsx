import React from 'react'
import ArrowRight from 'public/images/arrow/arrow-right.svg'

interface Props {}

export const EarningPercent = (props: Props) => (
  <div className="flex items-center gap-2">
    <div className="bg-red-300 flex items-center justify-center rounded-full h-4 w-4">
      <ArrowRight
        className="stroke-current text-red-600 transform rotate-45"
        height={8}
        width={8}
      />
    </div>
    <p className="text-red-600 text-base font-medium">+10.25%</p>
  </div>
)
