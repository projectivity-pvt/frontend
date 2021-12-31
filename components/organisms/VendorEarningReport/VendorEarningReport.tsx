import { Dropdown, DropdownItem, Button } from '@windmill/react-ui'
import React, { useState } from 'react'
import ChevronDown from 'public/images/arrow/chevron-down.svg'
import { MonthDropdown } from '@components/molecules/MonthDropdown/MonthDropdown'
import { EarningPercent } from '@components/molecules/EarningPercent/EarningPercent'
import Image from 'next/image'

interface Props {}

export const VendorEarningReport = (props: Props) => {
  const [showMonthDropdown, setShowMonthDropdown] = useState<boolean>(false)
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-5">
        <p className="text-xl font-semibold">Earnings</p>
        <MonthDropdown />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-green-500 text-3xl font-bold mb-2">$12,200</p>
          <EarningPercent />
        </div>
        <Image
          src="/images/greenGraph.png"
          height={60}
          width={120}
          quality={100}
        />
      </div>
      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-green-500" />
            Gross
          </p>
          <span>$560</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-yellow-500" />
            Discounts
          </p>
          <span>$560</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-blue-500" />
            Service Charge
          </p>
          <span>$560</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-gray-500" />
            Refunds
          </p>
          <span>$560</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-black" />
            Net Sales
          </p>
          <span>$560</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-red-500" />
            Taxes
          </p>
          <span>$560</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">
            <span className="h-2 w-2 inline-block mr-2 rounded-full bg-green-500" />
            Total Received
          </p>
          <span className="font-bold text-2xl">$5060</span>
        </div>
      </div>
    </div>
  )
}
