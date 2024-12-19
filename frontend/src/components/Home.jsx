import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Pricing from './Pricing'

export default function Home() {
  return (
    <div className='p-20'>
      <HeroSection />
      <FeatureSection />
      <Pricing/>
    </div>
  )
}
