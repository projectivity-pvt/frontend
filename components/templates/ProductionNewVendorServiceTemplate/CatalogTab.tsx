import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { RecentPostCard } from '@components/organisms/RecentPostCard/RecentPostCard'
import { VendorConnectionCard } from '@components/organisms/VendorProfileCard/VendorConnectionCard'
import { VendorMessageCard } from '@components/organisms/VendorProfileCard/VendorMessageCard'
import { VendorPostProfileCard } from '@components/organisms/VendorProfileCard/VendorPostProfileCard'

import React from 'react'

export const CatalogTab = () => (
  <>
    <div className="flex flex-col">
      <div className="mb-5">
        <h5>
          <b>
            Catalogue Offered by <span>Vendor Name</span>
          </b>
        </h5>
      </div>

      {/* ---------------------catalog--------------- */}
      <div className="grid grid-cols-12">
        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}

        {/* ---------------------catalog 1--------------- */}
        <div className="col-span-4">
          <div className="bg-gray-50 pb-3 pt-1 px-2 m-2 rounded-lg">
            <div className="flex justify-end">
              <p className="text-xs text-green-500 p-2">Available</p>
            </div>
            <div className="flex justify-center p-3">
              <img
                className="w-24 h-20"
                src="/images/catalog/camera_catalog.png"
              />
            </div>

            <div className="flex justify-between text-xs mb-5 mt-5">
              <div className="">
                <p className="font-semibold">Nikon DSLR High Zoom</p>
                <p className="text-xs text-gray-600">Model No: MXYZ123RT</p>
              </div>

              <div className="">
                <p className="font-semibold">₹ 5000</p>
                <p className="text-xs text-gray-600">Per Day</p>
              </div>
            </div>

            <p className="text-gray-500 text-xs line-clamp-3">
              This camera has some description and lorem ipsum dolor sit
              maetThis camera has some description and lorem ipsum dolor sit
              maet{' '}
            </p>
            <div className="flex justify-end">
              <span className="text-blue-600 text-xs mt-2 cursor-pointer">
                <b>Read More</b>
              </span>
            </div>
          </div>
        </div>
        {/* ---------------------catalog 1--------------- */}
      </div>
      {/* ---------------------catalog--------------- */}
    </div>
  </>
)
