import { faCircle, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import ChatMain from './ChatMain'

function ChatVendorContent() {
  return (
    <>
      <div className='card py-0 px-0 my-0'>
        <div style={{flex:'0.2'}}>
          <ChatHeader />
        </div>
        <div className=''  style={{flex:'0.8'}}>
          <ChatMain />
        </div>
        <div className=''  style={{flex:'0.2'}}>
          <ChatFooter />
        </div>
      </div>
    </>
  )
}

export default ChatVendorContent
