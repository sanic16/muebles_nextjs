import Banner from '@/sections/banner/Banner'
import Bestselling from '@/sections/bestselling/Bestselling'
import DayOffer from '@/sections/dayOffer/DayOffer'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Banner />
      <DayOffer />
      <Bestselling />
    </>
  )
}
