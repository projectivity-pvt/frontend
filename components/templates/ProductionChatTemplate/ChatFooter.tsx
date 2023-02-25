import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ChatFooter() {
  return (
    <>
      <div className='flex items-center w-full border-t-2 py-2 px-2'>
        <input className='border-0 w-full  text-sm' type="text" placeholder="Type a message here..." />
        <h4 className="flex justify-center items-center p-5 bg-blue-600 hover:bg-green-500 cursor-pointer w-5 h-5 rounded-full">
          <FontAwesomeIcon
            className="group-hover:text-white text-white text-xs"
            icon={faPaperPlane}
          ></FontAwesomeIcon>
        </h4>
      </div>
    </>
  )
}

export default ChatFooter
