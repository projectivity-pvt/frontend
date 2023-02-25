import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faDollar } from "@fortawesome/free-solid-svg-icons";


export const NotificationPill = () => {


  return (
    <>

      <div className="group py-2 px-3 rounded-full bg-white flex gap-2 items-center shadow-md cursor-pointer">
        <h4><FontAwesomeIcon className="text-gray-400 text-lg" icon={faBell}></FontAwesomeIcon></h4>


        <div className='shadow-md duration-300 bg-white w-64 h-34 hidden overflow-hidden absolute -ml-48 -mb-48 group-hover:block' style={{ marginTop: "-20px" }}>

          {/* group-hover:h-60 */}
          <ul className='h-full mt-2'>
            <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
              <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faDollar}></FontAwesomeIcon>PO is generated</h4>
            </Link>

            <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
              <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faDollar}></FontAwesomeIcon>PO is generated</h4>
            </Link>

            <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
              <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faDollar}></FontAwesomeIcon>PO is generated</h4>
            </Link>

            <Link href="/"><h4 className='group text-xs py-2 px-3 hover:bg-indigo-500 hover:text-white'>
              <FontAwesomeIcon className="text-gray-300 hover:text-white text-md mr-2" icon={faDollar}></FontAwesomeIcon>PO is generated</h4>
            </Link>
          </ul>
        </div>

      </div>

    </>
  )

}