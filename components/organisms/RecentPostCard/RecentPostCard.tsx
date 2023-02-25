import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { VendorConnectionAddCard } from '@components/organisms/VendorProfileCard/VendorConnectionAddCard'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import axios from 'axios'
import Loader from '@components/atoms/LoaderAnim/Loader'

export const RecentPostCard = () => {
  const [post, setPost] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    axios.get('http://localhost:8050/posts/all').then((response) => {
      setPost(response.data.posts)
      console.log(response.data.posts)
    })
    setLoad(false)
  }, [])

  return (
    <>
      <div className="flex flex-col h-[80vh] overflow-y-scroll scrollbar-hide">
        {/* -------------------post mapping-------------- */}
        {post.map((value) => {
          return (
            <>
              <div className="card mb-5 rounded-xl" style={{ padding: '0px' }}>
                {load ? (
                  <Loader />
                ) : (
                  <>
                    <div className="p-5">
                      <div className="flex gap-2 items-top">
                        <span className="flex justify-center items-center">
                          <Image
                            src="/images/user_prabhas.jpg"
                            height={30}
                            width={30}
                            className="rounded-full cursor-pointer"
                          />
                        </span>
                        <p className="truncate text-lg py-1 px-1 text-gray-700">
                          {value.title}{' '}
                          <span style={{ color: '#33c5f4' }}>#Amazon</span>
                        </p>
                      </div>
                      <p className="text-sm py-3 px-1 text-gray-500">
                        Lorem ipsum dolor sit amet . Lorem ipsum dolor sit amet
                        description of the post from vendorLorem ipsum dolor sit
                        amet.{' '}
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
                  </>
                )}
              </div>
            </>
          )
        })}

        {/* -------------------post mapping-------------- */}

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
      </div>
    </>
  )
}
