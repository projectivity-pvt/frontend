import React, { useState } from 'react'
import Link from 'next/link'
import { VendorConnectionAddCard } from '@components/organisms/VendorProfileCard/VendorConnectionAddCard'
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { PostForm } from './PostForm'

export const AddPost = () => {
  const [openPostModal, setOpenPostModal] = useState(false)
  const [openSearchModal, setOpenSearchModal] = useState(false)
  // const [serchInput, setSerchInput] = useState(false)

  const searchState = (e: any) => {
    if(e.target.value.length >= 1){
      setOpenSearchModal(true);
    } else {
      setOpenSearchModal(false);
    }
  }

  const searchModel = openSearchModal
    ? 'w-full z-50 mt-2 h-64 border-t overflow-y-scroll ease-in duration-150'
    : 'w-full z-50 h-0 overflow-y-scroll ease-in duration-150'

  return (
    <>
      {/* -------------------post popup-------------- */}
      {openPostModal && (
        <div className="pop_container items-center">
          <div className="lg:w-1/3 md:w-2/3 w-full">
            <PostForm closePostModal={setOpenPostModal} />
          </div>
        </div>
      )}
      {/* -------------------post popup-------------- */}

      {/* -------------------post card-------------- */}
      <div className="relative">
        {/* <div className="card p-2 rounded-2xl"> */}
        <div
          className={
            openSearchModal ? 'card p-2 rounded-2xl' : 'card p-2 rounded-full'
          }
        >
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <Link href="/vendor/post/singlePost">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={45}
                  width={45}
                  className="rounded-full cursor-pointer"
                />
              </Link>
              <input
                onKeyUp={searchState}
                className="border-gray-200 rounded outline-none w-full text-sm mx-2"
                type="text"
                placeholder="Search and connect here ..."
              />
            </div>
            <div>
              <button
                onClick={() => {
                  setOpenPostModal(true)
                }}
                className="bg-[#33c5f4] hover:bg-[] text-white text-sm px-10 py-2 rounded-full"
              >
                Post
              </button>
            </div>
          </div>

          <div className={searchModel}>
            {/* ----------------listing----------- */}
            <ul className="flex flex-col py-3">
              <li className="text-gray-600 text-sm flex items-center gap-3 hover:bg-gray-50 p-2">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
                <Link href="/vendor/post/singlePost">ajay tiwari</Link>
              </li>

              <li className="text-gray-600 text-sm flex items-center gap-3 hover:bg-gray-50 p-2">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
                <Link href="/vendor/post/singlePost">ajay tiwari</Link>
              </li>

              <li className="text-gray-600 text-sm flex items-center gap-3 hover:bg-gray-50 p-2">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
                <Link href="/vendor/post/singlePost">ajay tiwari</Link>
              </li>

              <li className="text-gray-600 text-sm flex items-center gap-3 hover:bg-gray-50 p-2">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
                <Link href="/vendor/post/singlePost">ajay tiwari</Link>
              </li>

              <li className="text-gray-600 text-sm flex items-center gap-3 hover:bg-gray-50 p-2">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
                <Link href="/vendor/post/singlePost">ajay tiwari</Link>
              </li>

              <li className="text-gray-600 text-sm flex items-center gap-3 hover:bg-gray-50 p-2">
                <Image
                  src="/images/user_prabhas.jpg"
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
                <Link href="/vendor/post/singlePost">ajay tiwari</Link>
              </li>
            </ul>
            {/* ----------------listing----------- */}
          </div>
        </div>
      </div>
      {/* -------------------post card-------------- */}
    </>
  )
}
