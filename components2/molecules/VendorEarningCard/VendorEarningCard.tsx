import React from 'react'
import MedalIcon from 'public/images/medal.svg'
import { EarningPercent } from '../EarningPercent/EarningPercent'

export const VendorEarningCard = () => (
  <div className="border p-4 rounded-lg">
    <div className="flex items-center gap-5 mb-6">
      <div className="rounded-full flex items-center justify-center h-11 w-11 shadow-md">
        <MedalIcon height={20} width={20} />
      </div>
      <EarningPercent />
    </div>
    <p className="text-xl font-semibold text-blue-600 mb-1"> $12, 200</p>
    <p className="text-sm text-gray-400">Lifetime Earning</p>
  </div>
)
