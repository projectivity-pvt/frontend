import { HomeContent } from '@components/molecules/HomeContent/HomeContent'
import { HomeFeatures } from '@components/molecules/HomeFeatures/HomeFeatures'
import { HomeFooter } from '@components/molecules/HomeFooter/HomeFooter'
import { HomeHeader } from '@components/molecules/HomeHeader/HomeHeader'
import { HomeBanner } from '@components/molecules/HomeHero/HomeBanner'
import { HomeHero } from '@components/molecules/HomeHero/HomeHero'
import { HomeTestimonial } from '@components/molecules/HomeTestimonial/HomeTestimonial'
import React from 'react'

export const HomepageTemplate = () => (
  <div className='overflow-x-auto'>
    <HomeHeader />
    <HomeHero />
    <HomeContent />
    <HomeFeatures />
    <HomeTestimonial />
    <HomeFooter />
  </div>
)
