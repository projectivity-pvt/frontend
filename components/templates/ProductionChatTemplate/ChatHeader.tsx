import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ChatHeader() {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-50 py-3 px-5 border-b-2">
        <div className="flex gap-5 items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="/images/user_prabhas.jpg"
          />
          <h4>Lalit Cameras</h4>
        </div>

        <div>
          <h4 className="flex justify-center items-center p-4 bg-white w-5 h-5 rounded-full shadow-sm">
            <FontAwesomeIcon
              className="text-gray-400 text-xs"
              icon={faEllipsisVertical}
            ></FontAwesomeIcon>
          </h4>
        </div>
      </div>
    </>
  )
}

export default ChatHeader
