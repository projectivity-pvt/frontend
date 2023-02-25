import React, { useState } from 'react'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import CatalogFormCatalog from './CatalogFormCatalog'

export const ProductionCatalogFormTemplate = () => {
  const [projectPop, setAddProjectPop] = useState(false)

  return (
    <>
      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="mb-2">
          <div className="card">
            <div>
              <h1>Add your requirements</h1>
              <p className="text-gray-500 text-sm">
                Mention the budget and requirements of the project
              </p>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="mt-5 mr-5">
                  <label className="font-semibold text-sm">Project Name</label>
                  <br />
                  <select className="w-full border-gray-300 rounded">
                    <option>Burger Sing Ad shoot</option>
                    <option>Burger Sing Ad shoot</option>
                    <option>Burger Sing Ad shoot</option>
                    <option>Burger Sing Ad shoot</option>
                  </select>
                </div>
              </div>

              <div className="col-span-6">
                <div className="mt-5 mr-5">
                  <label className="font-semibold text-sm">Category</label>
                  <br />
                  <select className="w-full border-gray-300 rounded">
                    <option>Food and catering</option>
                    <option>Food and catering</option>
                    <option>Food and catering</option>
                    <option>Food and catering</option>
                  </select>
                </div>
              </div>

              <div className="col-span-6">
                <div className="mt-5 mr-5">
                  <label className="font-semibold text-sm">Closing Date</label>
                  <br />
                  <input
                    className="w-full border-gray-300 rounded"
                    type="date"
                  />
                </div>
              </div>

              <div className="col-span-6">
                <div className="mt-5 mr-5">
                  <label className="font-semibold text-sm">Create New Project</label>
                  <br />
                  <input
                    className="w-full border-gray-300 rounded"
                    type="text"
                    placeholder='project name...'
                  />
                </div>
              </div>
            </div>

            <div className="my-5 mt-10">
              <h5>
                <b>Choose From catalogue</b>
              </h5>
              <CatalogFormCatalog />
            </div>

            <div className="flex items-center justify-between">
              <h3>Total Amount For Selected Items</h3>
              <h3>
                <b>₹16000</b>
              </h3>
            </div>

            <div className="mt-10">
              <h5 className="mb-2">
                <b>
                  Mention terms and conditions or requirements for the service
                </b>
              </h5>
              <textarea
                className="w-full rounded-md h-32 border-gray-300 resize-none"
                placeholder="list all the terms and conditions"
              ></textarea>
            </div>

            <div className="mt-10">
              <h5 className="mb-2">
                <b>Attachment</b>
              </h5>
              <input type="file" />
            </div>

            <div className="mt-10 flex justify-between">
              <h5 className="mb-2">
                <b>You can track the status in the chat section.</b>
              </h5>
              <button className='bg-blue-500 text-white rounded-3xl py-2.5 px-10 text-xs hover:bg-blue-600'>Send Message</button>
            </div>

            
          </div>
        </main>
      </div>
    </>
  )
}
