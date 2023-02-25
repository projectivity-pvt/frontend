import React, { useState } from 'react'
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'
import { BusinessProjectTable } from 'components2/organisms/table/BusinessProjectTable'
import Loader from '@components/atoms/LoaderAnim/Loader'

export default function ProjectTabs() {
  const [tab, setTab] = useState(1)
  const [loader, setLoader] = useState(false)
  // const [content, setContent] = useState(1);

  const action = (index) => {
    setTab(index)
    console.log(index)
  }

  const onTabClick = () => {
    setLoader(true)
  }

  const LoaderTimer = setTimeout(() => {
    setLoader(false)
  }, 1500)

  return (
    <>
      <div className="tabs">
        <div
          onClick={() => {
            action(1), onTabClick()
          }}
          className={`${tab === 1 ? 'tab active_tab' : 'tab'}`}
        >
          Ongoing Projects
        </div>
        <div
          onClick={() => action(2)}
          className={`${tab === 2 ? 'tab active_tab' : 'tab'}`}
        >
          Finished Projects
        </div>
        <div
          onClick={() => action(3)}
          className={`${tab === 3 ? 'tab active_tab' : 'tab'}`}
        >
          All Projects
        </div>
      </div>

      <div className="contents">
        {loader ? (
          <Loader />
        ) : (
          <div
            className={`${
              tab === 1 ? 'content active_content flex-col' : 'content'
            }`}
          >
            <div className="flex pt-5 justify-end gap-3">
              <div className="relative text-center rounded-md text-xs w-36">
                <select className="text-xs w-full border-gray-300 rounded">
                  <option>Today</option>
                </select>
              </div>
              <button className="bg-red-500 text-white rounded-md px-5 py-2.5 text-xs w-36">
                Download CSV
              </button>
            </div>
            <BusinessProjectTable />
          </div>
        )}

        <div
          className={`${
            tab === 2 ? 'content active_content flex-col' : 'content'
          }`}
        >
          <div className="flex pt-5 justify-end gap-3">
            <div className="relative text-center rounded-md text-xs w-36">
              <select className="text-xs w-full border-gray-300 rounded">
                <option>Today</option>
              </select>
            </div>
            <button className="bg-red-500 text-white rounded-md px-5 py-2.5 text-xs w-36">
              Download CSV
            </button>
          </div>
          <BusinessProjectTable />
        </div>

        <div
          className={`${
            tab === 3 ? 'content active_content flex-col' : 'content'
          }`}
        >
          <div className="flex pt-5 justify-end gap-3">
            <div className="relative text-center rounded-md text-xs w-36">
              <select className="text-xs w-full border-gray-300 rounded">
                <option>Today</option>
              </select>
            </div>
            <button className="bg-red-500 text-white rounded-md px-5 py-2.5 text-xs w-36">
              Download CSV
            </button>
          </div>
          <BusinessProjectTable />
        </div>
      </div>
    </>
  )
}
