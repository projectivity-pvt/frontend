import { Avatar } from '@components/atoms/Avatar/Avatar'
import React from 'react'

function ChatVendorNameOpen() {
  return (
    <>
    <div className='bg-blue-500 rounded-xl px-5 py-3'>
      <div className="flex items-top justify-between">
      <div className='flex items-center gap-3'>
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src="/images/user_prabhas.jpg"
          />
        </div>
        <div>
          <p className='text-white'>Lalit Cameras</p>
          <h6 className="text-gray-300">1 minute ago</h6>
        </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xs w-5 h-5 text-center bg-red-500 text-white pt-0.5 rounded-full">
            2
          </p>
        </div>
      </div>

      <div className='mt-2'>
        <p className="line-clamp-2 text-xs text-white">
          Most of its text is made up from sections 1.10.32–3 of Cicero's De
          finibus bonorum et malorum
        </p>
      </div>
      </div>
    </>
  )
}



export default ChatVendorNameOpen
