import React, { useState } from 'react'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'
import SingleProjectHeader from '@components/organisms/card/SingleProjectHeader'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'

export const ProductionSingleProjectContractsSigninTemplate = () => {
  return (
    <>
      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="mb-2">
          {/* ----------main-------- */}
          <div className="card">
            <SingleProjectHeader />
          </div>

          <div className="card">
            <div>
              <p className="mb-1">Title</p>
              <input className="rounded text-xs w-full md:w-2/4" type="text" />
            </div>

            <div className="mt-10">
              <div className="">
                <p className="mb-1">Body</p>
                <div className="flex items-center gap-10 pb-2">
                  <div className="flex justify-between w-64 items-center px-5 py-2 rounded bg-gray-100">
                    <h5 className="font-semibold">B</h5>
                    <h5 className="font-semibold">I</h5>
                    <h5 className="font-semibold">U</h5>
                    <h5 className="font-semibold">T</h5>
                  </div>
                  <button className="text-xs rounded-full px-10 py-2.5 bg-blue-600 text-white">
                    Add a Field
                  </button>
                </div>
              </div>
              <textarea className="text-xs rounded h-64 w-full resize-none" />
            </div>
            <div className='flex justify-end'>
                <button
                className='text-xs rounded-full px-10 py-2.5 bg-blue-600 text-white'
                >
                    Save
                </button>
            </div>
          </div>
          {/* ----------main-------- */}
        </main>
      </div>
    </>
  )
}
