import React from 'react'

import slide_image_1 from '@/../public/images/slide-img-1.jpg'
import slide_image_2 from '@/../public/images/slide-img-2.jpg'
import slide_image_3 from '@/../public/images/slide-img-3.jpg'
import slide_image_4 from '@/../public/images/slide-img-4.jpg'
import Image from 'next/image'

import './banner.css'

export default function Banner() {
  return (
    <section className='banner'>

        <div className="banner-content">
            <h1 className="banner-heading">
                Gran Venta
            </h1>
            <button className='banner-btn'>
                <span className='banner-btn-text-one'>Comprar Ahora</span>
                <span className='banner-btn-text-two'>Interesante</span>
            </button>
        </div>

        <div className='slideshow'>
            <button className="slide-btn slide-btn-1"></button>
            <button className="slide-btn slide-btn-2"></button>
            <button className="slide-btn slide-btn-3"></button>
            <button className="slide-btn slide-btn-4"></button>

            <div className="slideshow-wrapper">
                <div className="slide">
                    <Image src={slide_image_1} alt='' />
                </div>
                <div className="slide">
                    <Image src={slide_image_2} alt='' />
                </div>
                <div className="slide">
                    <Image src={slide_image_3} alt='' />
                </div>
                <div className="slide">
                    <Image src={slide_image_4} alt='' />
                </div>
            </div>
            
        </div>

    </section>
  )
}
