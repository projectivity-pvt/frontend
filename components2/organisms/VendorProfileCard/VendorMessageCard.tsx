import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const VendorMessageCard = () => (
  <div className="">
    <div className="mb-5 text-left flex items-center gap-2">
      <h4 className="flex justify-center items-center p-3 bg-blue-50 w-3 h-3 rounded-full">
        <FontAwesomeIcon
          className="group-hover:text-white text-xs"
          icon={faCircle}
          style={{ color: '#33c5f4' }}
        ></FontAwesomeIcon>
      </h4>
      <h4 className="">Message Requests</h4>
    </div>
    <div className="flex items-center gap-2 justify-start text-sm mb-4  ">
      <div>
        <img
          src="/images/user_prabhas.jpg"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-gray-600 truncate">Ajay Tiwari</p>
        <p className="text-xs text-gray-800 font-semibold truncate w-40">
          hi..
        </p>
      </div>
      <div className="ml-auto">
        <button className="text-xs text-gray-300 opacity-6">12 pm</button>
      </div>
    </div>

    <div className="flex items-center gap-2 justify-start text-sm mb-4  ">
      <div>
        <img
          src="/images/user_prabhas.jpg"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <p className="text-gray-600 truncate">Azaz Ali</p>
        <p className="text-xs text-gray-800 font-semibold truncate w-40">
          this message is system generated.
        </p>
      </div>
      <div className="ml-auto">
        <button className="text-xs text-gray-300 opacity-6">12 pm</button>
      </div>
    </div>

    <div className="flex items-center gap-2 justify-start text-sm mb-4  ">
      <div>
        <img
          src="/images/user_prabhas.jpg"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <p className="text-gray-600 truncate">Uday Bhatia</p>
        <p className="text-xs text-gray-800 font-semibold truncate w-40">
          work in progress
        </p>
      </div>
      <div className="ml-auto">
        <button className="text-xs text-gray-300 opacity-6">12 pm</button>
      </div>
    </div>

    <div className="flex items-center gap-2 justify-start text-sm mb-4  ">
      <div>
        <img
          src="/images/user_prabhas.jpg"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <p className="text-gray-600 truncate">Saurabh Shubham</p>
        <p className="text-xs text-gray-800 font-semibold truncate w-40">yes</p>
      </div>
      <div className="ml-auto">
        <button className="text-xs text-gray-300 opacity-6">12 pm</button>
      </div>
    </div>

    <div className="flex items-center gap-2 justify-start text-sm mb-4  ">
      <div>
        <img
          src="/images/user_prabhas.jpg"
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <p className="text-gray-600 truncate">John Doe</p>
        <p className="text-xs text-gray-800 font-semibold truncate w-40">
          system is ready
        </p>
      </div>
      <div className="ml-auto">
        <button className="text-xs text-gray-300 opacity-6">12 pm</button>
      </div>
    </div>

    {/* ----------------all connections--------------------- */}
    <div
      className="flex justify-center mt-10 cursor-pointer"
      style={{ color: '#33c5f4' }}
    >
      <p className="text-sm hover:text-blue-600">See All Messages</p>
    </div>
    {/* ----------------all connections--------------------- */}
  </div>
)
