import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export const VendorConnectionAddCard = () => (
  <div className="">

{/* --------------------------connection card--------------------------- */}
    <div className="flex flex-col items-center gap-2 rounded justify-start text-sm mb-4 border w-52 py-2 px-2">
      <div>
        <img
          src="/images/user_prabhas.jpg"
          className="h-20 w-20 rounded-full"
        />
      </div>
      <div>
        <p className="text-gray-600 text-center truncate">Ajay Tiwari</p>
        <p className="text-gray-600 text-center font-semibold truncate">
          Camera Vendor
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="text-xs text-white rounded py-1.5 px-5"
          style={{ background: '#33c5f4' }}
        >
          Connect
        </button>
        <button className="bg-gray-300 text-xs text-white hover:bg-gray-500 rounded py-1.5 px-5">
          Remove
        </button>
      </div>
    </div>
{/* --------------------------connection card--------------------------- */}

  </div>
)
