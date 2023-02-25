import React from 'react'
import { VendorConnectionCard } from '@components/organisms/VendorProfileCard/VendorConnectionCard'
import { VendorMessageCard } from '@components/organisms/VendorProfileCard/VendorMessageCard'
import { VendorPostProfileCard } from '@components/organisms/VendorProfileCard/VendorPostProfileCard'

function PostCardContent() {
  return (
    <>
      <div className="h-[90vh] overflow-y-scroll scrollbar-hide">
        <div className="card">
          <VendorPostProfileCard />
        </div>
        <div className="card mt-5">
          <VendorConnectionCard />
        </div>
        <div className="card mt-5">
          <VendorMessageCard />
        </div>
      </div>
    </>
  )
}

export default PostCardContent
