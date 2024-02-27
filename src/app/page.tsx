import Banner from '@/sections/banner/Banner'
import Bestselling from '@/sections/bestselling/Bestselling'
import Contact from '@/sections/contact/Contact'
import DayOffer from '@/sections/dayOffer/DayOffer'
import Footer from '@/sections/footer/Footer'
import Gallery from '@/sections/gallery/Gallery'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Banner />
      <DayOffer />
      <Bestselling />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}
