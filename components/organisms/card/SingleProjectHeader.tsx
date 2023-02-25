import { Avatar } from '@components/atoms/Avatar/Avatar'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function SingleProjectHeader() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs">
        <Link href="/vendor">
          <p>Projects</p>
        </Link>
        <p>
          <FontAwesomeIcon
            className="group-hover:text-white text-gray-500 text-xs"
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </p>
        <Link href="/vendor">
          <p>Project #123</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-5 text-xs">
        <h1>
          <b>Burger Singh Television Advertisement</b>
        </h1>
        <p>Created on: 10 October, 2021</p>
        <div className="flex items-center gap-3">
          <p>Project Created by: </p>
          <div className="flex gap-1 items-center justify-start border rounded-2xl px-2 pr-5 py-1">
            <Avatar size={20} initial="J" />
            <p className="text-blue-500">Jane Doe</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProjectHeader
