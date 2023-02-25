import FeatureSlider from '@components/molecules/HomeHeader/FeatureSlider'
import { HomeHeader } from '@components/molecules/HomeHeader/HomeHeader'
import React from 'react'

function features() {
  return (
    <>
      <div className='w-full'>
        <HomeHeader />
        <div className="bg-primary p-10 h-screen overflow-scroll">
          <FeatureSlider />
        </div>
      </div>
    </>
  )
}

export default features
