import { EmptyContract } from '@components/molecules/EmptyContract/EmptyContract'
import {
  DesktopSidebar,
  EntitySourceEnum,
} from '@components/organisms/DesktopSidebar/DesktopSidebar'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorSidebarList } from '@utils//constants'
import Image from 'next/image'
import React from 'react'
import StarSvg from 'public/images/star.svg'

export const SingleGigTemplate = () => {
  return (
    <>
      <DesktopSidebar
        sidebarList={VendorSidebarList}
        source={EntitySourceEnum.VENDOR}
      />
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />
        <main className="px-4 mt-4 mb-20">
          <EmptyContract title="You have not created any Gigs" />
          <h1 className=" font-semibold">Gig Details</h1>
          <div className="py-4 mt-10">
            {/* Gig image and vendor */}
            <div className="flex items-stretch justify-between">
              <div className="flex flex-col gap-4 h-full content-between">
                <div className="flex items-center gap-3">
                  <Image src="/images/avatar.png" height={50} width={50} />
                  <div>
                    <p className=" font-bold text-lg">John Doe</p>
                    <p className="font-normal text-gray-500 text-base">
                      Furniture Vendor
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5">
                    <StarSvg />
                  </span>
                  <p className=" font-bold text-gray-600 text-xl">4.0</p>
                  <p className=" text-gray-400 text-lg">(13)</p>
                </div>
                <p className=" font-bold text-2xl ">Starting from ₹ 10,000</p>
              </div>
              <div className=" w-2/5 h-48 relative">
                <Image
                  src="/images/bg-gig.jpg"
                  className="rounded-lg"
                  layout="fill"
                />
              </div>
            </div>

            {/* Gig full description */}
            <h2 className="mt-10 font-semibold">Full Description</h2>
            <p className="py-5 max-w-2xl text-xl">
              I provide furniture and costumes at budget prices around Mumbai.
              Contact for a free quote. I provide furniture and costumes at
              budget prices around Mumbai. Contact for a free quote. I provide
              furniture and costumes at budget prices around Mumbai. Contact for
              a free quote. I provide furniture and costumes at budget prices
              around Mumbai. Contact for a free quote.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
