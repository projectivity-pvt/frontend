import Image from 'next/image'
import React from 'react'

// interface Props {
//   bgColor: string
//   iconColor: string
//   title: string
//   value: string
//   icon: ReactNode
// }

export const StatsCard = () => (
  <div className="border rounded-lg p-3 flex items-center gap-4">
    <div className="rounded-lg bg-green-200 h-14 w-14 flex items-center justify-center">
      <Image src="/images/notification.svg" height={24} width={24} />
    </div>
    <div className="flex flex-col">
      <p className="text-base font-medium text-gray-600 mb-1">Total Income</p>
      <p className="text-lg font-bold text-gray-700">$4300</p>
    </div>
  </div>
)
