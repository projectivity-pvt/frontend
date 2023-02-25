import React from "react"
import Image from 'next/image'


export const VendorContractEarningCard = () => (
    <>
        <div className='grid grid-cols-12 gap-2'>

<div className="border rounded-lg p-2 flex items-center col-span-4">
  <div className="rounded-lg h-10 w-10 flex items-center justify-center" style={{ background: '#E3FAE8' }}>
    <Image src="/images/notification.svg" height={24} width={24} />
  </div>
  <div className="flex flex-col ml-3">
    <p className="text-sm text-gray-600">Total Income</p>
    <p className="text-sm font-bold text-gray-700">$4500</p>
  </div>
</div>

<div className="border rounded-lg p-2 flex items-center col-span-4">
  <div className="rounded-lg h-10 w-10 flex items-center justify-center" style={{ background: '#FFEAE7' }}>
    <Image src="/images/notification.svg" height={24} width={24} />
  </div>
  <div className="flex flex-col ml-3">
    <p className="text-sm text-gray-600">Pending</p>
    <p className="text-sm font-bold text-gray-700">$4500</p>
  </div>
</div>

</div>
    </>
)