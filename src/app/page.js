import CareersDuplex from '@/components/CareersDuplex'
import Carousel from '@/components/Carousel'
import PalantirFooter from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PartnersMarquee from '@/components/PartnersMarquee'

import React from 'react'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Carousel />
    <PartnersMarquee />
    <CareersDuplex />
    <PalantirFooter />
    </>
  )
}

export default LandingPage
