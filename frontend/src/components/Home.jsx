import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Pricing from '../pages/Pricing'

export default function Home() {
  return (
    <div className='lg:p-10 p-3 mt-6'>
      <HeroSection />
      {/* <FeatureSection />
      <Pricing /> */}
    </div>
  )
}
