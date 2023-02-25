import {
  faBell,
  faCircle,
  faHome,
  faMessage,
  faSearch,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'

function FooterIconsLinks() {
  return (
    <>
      <div className="flex items-center justify-around">
        <div>
          <FontAwesomeIcon
            className="text-lg mr-1 text-gray-700"
            icon={faHome}
          ></FontAwesomeIcon>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-lg mr-1 text-gray-700"
            icon={faMessage}
          ></FontAwesomeIcon>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-lg mr-1 text-gray-700"
            icon={faSearch}
          ></FontAwesomeIcon>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-lg mr-1 text-gray-700"
            icon={faBell}
          ></FontAwesomeIcon>
        </div>

        <div>
          <FontAwesomeIcon
            className="text-lg mr-1 text-gray-700"
            icon={faUserCircle}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  )
}

export default FooterIconsLinks
