import React from 'react'
import Link from 'next/link'
import { VendorConnectionAddCard } from '@components/organisms/VendorProfileCard/VendorConnectionAddCard'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const RecentPostCard = () => (
  <>
    <div className="">
      <Link href="/vendor/post/singlePost">
        <div className="card mb-5 rounded-xl" style={{ padding: '0px' }}>
          <div className="p-5">
            <div className="flex items-top justify-between">
              <p className="truncate text-lg py-1 px-1 text-gray-700">
                How I Animated RRR movie for{' '}
                <span style={{ color: '#33c5f4' }}>#Amazon</span>
              </p>
              <div className="flex relative">
                <div className="text-xs bg-white shadow-lg absolute -ml-24 mt-5">
                  <p className="py-2 pl-5 pr-12 hover:bg-gray-100">Save</p>
                  <p className="py-2 pl-5 pr-12 hover:bg-gray-100">Edit</p>
                  <p className="py-2 pl-5 pr-12 hover:bg-gray-100">Delete</p>
                </div>
                <h4 className="ml-5 flex justify-center items-center p-4 bg-blue-50 w-5 h-5 rounded-full">
                  <FontAwesomeIcon
                    className="group-hover:text-white text-xs"
                    icon={faEllipsis}
                    style={{ color: '#33c5f4' }}
                  ></FontAwesomeIcon>
                </h4>
              </div>
            </div>
            <p className="text-sm py-3 px-1 text-gray-500">
              Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet
              description of the post from vendorLorem ipsum dolor sit amet.{' '}
              <span className="ml-2 cursor-pointer text-xs text-gray-800 font-semibold">
                {' '}
                View more{' '}
              </span>
            </p>
          </div>

          <img
            src="https://i.pinimg.com/564x/4d/86/0c/4d860c8c89bcd9cd0c42677b274e1a69.jpg"
            className="w-full rounded-b-xl"
          />
        </div>
      </Link>

      

      <Link href="/vendor/post/singlePost">
        <div className="card mb-5 rounded-xl" style={{ padding: '0px' }}>
          <div className="p-5">
            <div className="flex items-top justify-between">
              <p className="truncate text-lg py-1 px-1 text-gray-700">
                How I Animated Extraction movie for{' '}
                <span style={{ color: '#33c5f4' }}>#Netflix.</span>
              </p>
              <h4 className="ml-5 flex justify-center items-center p-4 bg-blue-50 w-5 h-5 rounded-full">
                <FontAwesomeIcon
                  className="group-hover:text-white text-xs"
                  icon={faEllipsis}
                  style={{ color: '#33c5f4' }}
                ></FontAwesomeIcon>
              </h4>
            </div>
            <p className="text-sm py-3 px-1 text-gray-500">
              Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet
              description of the post from vendorLorem ipsum dolor sit amet .{' '}
              <span className="ml-2 cursor-pointer text-xs text-gray-800 font-semibold">
                {' '}
                View more{' '}
              </span>
            </p>
          </div>

          <img
            src="https://i.pinimg.com/564x/4b/d2/a3/4bd2a3d56d0a1ed4affc1344e11f4b98.jpg"
            className="w-full rounded-b-xl"
          />
        </div>
      </Link>


      <div className="card">
        {/* ---------------card header------------- */}
        <div className="mb-5 text-left flex items-center gap-2">
          <h4 className="flex justify-center items-center p-3 bg-blue-50 w-3 h-3 rounded-full">
            <FontAwesomeIcon
              className="group-hover:text-white text-xs"
              icon={faCircle}
              style={{ color: '#33c5f4' }}
            ></FontAwesomeIcon>
          </h4>
          <h4 className="">Add Connections</h4>
        </div>
        {/* ---------------card header------------- */}
        <div className="flex gap-2 overflow-x-scroll">
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
          <VendorConnectionAddCard />
        </div>
        {/* ----------------all connections--------------------- */}
        <div
          className="flex justify-center mt-2 cursor-pointer"
          style={{ color: '#33c5f4' }}
        >
          <p className="text-sm hover:text-blue-600">See All Connections</p>
        </div>
        {/* ----------------all connections--------------------- */}
      </div>



      <Link href="/vendor/post/singlePost">
        <div className="card mb-5 rounded-xl" style={{ padding: '0px' }}>
          <div className="p-5">
            <div className="flex items-top justify-between">
              <p className="truncate text-lg py-1 px-1 text-gray-700">
                How I Animated spider man for{' '}
                <span style={{ color: '#33c5f4' }}>#Sony.</span>
              </p>
              <h4 className="ml-5 flex justify-center items-center p-4 bg-blue-50 w-5 h-5 rounded-full">
                <FontAwesomeIcon
                  className="group-hover:text-white text-xs"
                  icon={faEllipsis}
                  style={{ color: '#33c5f4' }}
                ></FontAwesomeIcon>
              </h4>
            </div>
            <p className="text-sm py-3 px-1 text-gray-500">
              Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet
              description of the post from vendorLorem ipsum dolor sit amet .{' '}
              <span className="ml-2 cursor-pointer text-xs text-gray-800 font-semibold">
                {' '}
                View more{' '}
              </span>
            </p>
          </div>

          <img
            src="https://i.pinimg.com/564x/37/3b/dd/373bddafdb634bfedf87ad9d2008168b.jpg"
            className="w-full rounded-b-xl"
          />
        </div>
      </Link>
    </div>
  </>
)
