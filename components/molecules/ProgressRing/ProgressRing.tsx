import React from 'react'

interface Props {
  percent: number
}

export const ProgressRing = (props: Props) => {
  const { percent } = props
  const circumference = 30 * 2 * Math.PI
  return (
    <div>
      <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full">
        <svg className="w-20 h-20">
          <circle
            className="text-gray-300"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
          <circle
            className="text-blue-600"
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
        </svg>
        <span className="text-xl absolute  text-blue-700">{percent}%</span>
      </div>
    </div>
  )
}
