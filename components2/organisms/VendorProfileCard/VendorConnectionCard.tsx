import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const VendorConnectionCard = () => (
  <div className="">
    <div className="mb-5 text-left flex items-center gap-2">
      <h4 className="flex justify-center items-center p-3 bg-blue-50 w-3 h-3 rounded-full">
        <FontAwesomeIcon
          className="group-hover:text-white text-xs"
          icon={faCircle}
          style={{ color: '#33c5f4' }}
        ></FontAwesomeIcon>
      </h4>
      <h4 className="">Connections Requests</h4>
    </div>

    <div className="flex gap-2 justify-start text-sm mb-4  ">
      <div>
      <img
          src="/images/user_prabhas.jpg"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div className='flex flex-col'>
      <p className="w-52 text-gray-600 truncate">Azaz Ali</p>
      <div className="m-auto flex gap-2">
          <button className="connect_btn bg-green-400 text-xs text-white rounded py-1.5 px-8">
            Confirm
          </button>
          <button className="bg-gray-300 hover:bg-red-500 text-xs text-white rounded py-1.5 px-8">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div className="flex gap-2 justify-start text-sm mb-4  ">
      <div>
      <img
          src="/images/user_prabhas.jpg"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div className='flex flex-col'>
      <p className="w-52 text-gray-600 truncate">Azaz Ali</p>
      <div className="m-auto flex gap-2">
          <button className="connect_btn bg-green-400 text-xs text-white rounded py-1.5 px-8">
            Confirm
          </button>
          <button className="bg-gray-300 hover:bg-red-500 text-xs text-white rounded py-1.5 px-8">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div className="flex gap-2 justify-start text-sm mb-4  ">
      <div>
      <img
          src="/images/user_prabhas.jpg"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div className='flex flex-col'>
      <p className="w-52 text-gray-600 truncate">Azaz Ali</p>
      <div className="m-auto flex gap-2">
          <button className="connect_btn bg-green-400 text-xs text-white rounded py-1.5 px-8">
            Confirm
          </button>
          <button className="bg-gray-300 hover:bg-red-500 text-xs text-white rounded py-1.5 px-8">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div className="flex gap-2 justify-start text-sm mb-4  ">
      <div>
      <img
          src="/images/user_prabhas.jpg"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div className='flex flex-col'>
      <p className="w-52 text-gray-600 truncate">Azaz Ali</p>
      <div className="m-auto flex gap-2">
          <button className="connect_btn bg-green-400 text-xs text-white rounded py-1.5 px-8">
            Confirm
          </button>
          <button className="bg-gray-300 hover:bg-red-500 text-xs text-white rounded py-1.5 px-8">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div className="flex gap-2 justify-start text-sm mb-4  ">
      <div>
      <img
          src="/images/user_prabhas.jpg"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div className='flex flex-col'>
      <p className="w-52 text-gray-600 truncate">Azaz Ali</p>
      <div className="m-auto flex gap-2">
          <button className="connect_btn bg-green-400 text-xs text-white rounded py-1.5 px-8">
            Confirm
          </button>
          <button className="bg-gray-300 hover:bg-red-500 text-xs text-white rounded py-1.5 px-8">
            Cancel
          </button>
        </div>
      </div>
    </div>

    {/* ----------------all connections--------------------- */}
    <div
      className="flex justify-center mt-10 cursor-pointer"
      style={{ color: '#33c5f4' }}
    >
      <p className="text-sm hover:text-blue-600">See All Connections</p>
    </div>
    {/* ----------------all connections--------------------- */}
  </div>
)
