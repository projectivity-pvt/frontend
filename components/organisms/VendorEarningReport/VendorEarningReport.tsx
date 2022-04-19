import React from 'react'
import { MonthDropdown } from '@components/molecules/MonthDropdown/MonthDropdown'
import { EarningPercent } from '@components/molecules/EarningPercent/EarningPercent'
import Image from 'next/image'

export const VendorEarningReport = () => (
  // const [showMonthDropdown, setShowMonthDropdown] = useState<boolean>(false)
  <div className="border rounded-lg p-4" style={{ background: "linear-gradient(90deg, rgba(221, 214, 243, 0.2) 0%, rgba(250, 172, 168, 0.2) 100%)" }}>
    <div className="flex items-center justify-between mb-5">
      <h3 className="">Earnings</h3>
      <MonthDropdown />
    </div>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-green-500 text-2xl font-semibold mb-2">$12,200</p>
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
        <p className="text-gray-600">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-green-500" />
          Gross
        </p>
        <span>$560</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-yellow-500" />
          Discounts
        </p>
        <span>$560</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-blue-500" />
          Service Charge
        </p>
        <span>$560</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-gray-500" />
          Refunds
        </p>
        <span>$560</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-black" />
          Net Sales
        </p>
        <span>$560</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-red-500" />
          Taxes
        </p>
        <span>$560</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-700 text-lg">
          <span className="h-2 w-2 inline-block mr-2 rounded-full bg-green-500" />
          Total Received
        </p>
        <span className="font-semibold text-gray-700 text-lg">$5060</span>
      </div>
    </div>
  </div>
)
