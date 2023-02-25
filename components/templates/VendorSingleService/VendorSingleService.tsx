import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorCatalogTable } from '@components/organisms/VendorCatalogTable/VendorCatalogTable'
import { VendorCatalogDcsTable } from '@components/organisms/VendorCatalogTable/VendorCatalogDcsTable'
import { NewCatalogue } from '@components/organisms/Catalog/NewCatalogue'
import { NewDoc } from '@components/organisms/Catalog/NewDoc'
import { ServiceSwitch } from '@components/organisms/Catalog/ServiceSwitch'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faSearch } from '@fortawesome/free-solid-svg-icons'

// ----------------getStaticPaths--------------

// ----------------getStaticPaths--------------

// ----------------getStaticProps--------------

// ----------------getStaticProps--------------

export const VendorSingleService = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    checked ? setChecked(false) : setChecked(true)
  }

  const [openCatModal, setOpenCatModal] = useState(false)
  const [openDoceModal, setOpenDocModal] = useState(false)

  return (
    <>
      {openCatModal && (
        <div className="pop_container">
          <div className="w-full md:w-3/5">
            <NewCatalogue closeCatPopup={setOpenCatModal} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      {openDoceModal && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5" style={{ width: '500px' }}>
            <NewDoc closeDocPopup={setOpenDocModal} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <VendorSidebar1 />

      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <TopHeaderBar />

        <main className="mb-2 background">
          <div className="card">
            {/* -------------------top bar---------------- */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h3 className="">Camera Service</h3>
              </div>

              <div className="flex items-center gap-3">
                <ServiceSwitch />
              </div>

              <div>
                <p className="text-xs text-white bg-[#33c5f4] rounded-full px-5 py-2.5">
                  Save Changes
                </p>
              </div>
            </div>
            {/* -------------------top bar---------------- */}

            <div>
              <p className="text-sm text-white bg-[#6abbad] text-center py-2 rounded-full w-32">
                Inventory
              </p>
            </div>

            <div className="mt-10 w-full">
              <h5 className="mb-1">
                <b>Description</b>
              </h5>
              <textarea 
              className="w-full h-24 rounded-lg resize-none text-sm border-gray-300 teaxtarea_focus"
              placeholder='Write description'
              />{' '}
              <br />
              <span className="text-xs float-right cursor-pointer flex gap-1 items-center bg-red-500 text-white px-2 py-1 rounded-full">
                <FontAwesomeIcon
                  className="text-gray-100 text-[10px]"
                  icon={faPen}
                ></FontAwesomeIcon>
                edit
              </span>
            </div>

            <div className="w-full lg:w-1/3">
              <h5 className="mb-1">
                <b>Pricing</b>
              </h5>
              <div>
                <input
                  type="text"
                  className="text-sm rounded border-gray-300 w-full"
                  value="$500 - $900"
                />

                <span className="mt-1 text-xs ml-auto text-center cursor-pointer flex justify-center gap-1 items-center bg-red-500 text-white w-14 py-1 rounded-full">
                  <FontAwesomeIcon
                    className="text-gray-100 text-[10px]"
                    icon={faPen}
                  ></FontAwesomeIcon>
                  edit
                </span>
              </div>
            </div>
          </div>

          <div className="card mt-5">
            <div className=" mb-5 flex justify-between items-center">
              <div className="">
                <h3 className="">Catalogue</h3>
              </div>

              <div className="hidden md:flex lg:flex items-center border border-gray-300 rounded-md px-2 w-1/2">
                <input
                  type="text"
                  placeholder="Search for catalogue ..."
                  className="border-0 text-sm w-full"
                />
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-400 text-sm"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </div>

              <div>
                <p
                  className="cursor-pointer text-xs text-white bg-[#33c5f4] rounded-full px-5 py-2.5"
                  onClick={() => {
                    setOpenCatModal(true)
                  }}
                >
                  Add item to catalogue
                </p>
              </div>
            </div>

            <div className="flex md:hidden lg:hidden items-center border border-gray-300 rounded-md px-2 w-full mb-4">
              <input
                type="text"
                placeholder="Search for catalogue ..."
                className="border-0 text-sm w-full"
              />
              <FontAwesomeIcon
                className="group-hover:text-white text-gray-400 text-sm"
                icon={faSearch}
              ></FontAwesomeIcon>
            </div>

            <div>
              <VendorCatalogTable />
            </div>
          </div>

          <div className="card mt-5">
            <div className=" mb-5 flex justify-between items-center">
              <div className="">
                <h3 className="">Documents and Licence</h3>
              </div>

              <div className="hidden md:flex lg:flex items-center border border-gray-300 rounded-md px-2 w-1/2">
                <input
                  type="text"
                  placeholder="Search for documents ..."
                  className="border-0 text-sm w-full"
                />
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-400 text-sm"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </div>

              <div>
                <p
                  className="cursor-pointer text-xs text-white bg-[#33c5f4] rounded-full px-5 py-2.5"
                  onClick={() => {
                    setOpenDocModal(true)
                  }}
                >
                  Upload new Document
                </p>
              </div>
            </div>

            <div className="flex md:hidden lg:hidden items-center border border-gray-300 rounded-md px-2 w-full mb-4">
              <input
                type="text"
                placeholder="Search for documents ..."
                className="border-0 text-sm w-full"
              />
              <FontAwesomeIcon
                className="group-hover:text-white text-gray-400 text-sm"
                icon={faSearch}
              ></FontAwesomeIcon>
            </div>

            <div>
              <VendorCatalogDcsTable />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
