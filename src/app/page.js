import AIOfferings from '@/components/AIOfferings'
import CareersDuplex from '@/components/CareersDuplex'
import Carousel from '@/components/Carousel'
import PalantirFooter from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OfferingsSection from '@/components/OfferingSection'
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
    <OfferingsSection />
    <AIOfferings />
    <PalantirFooter />
    </>
  )
}

export default LandingPage
