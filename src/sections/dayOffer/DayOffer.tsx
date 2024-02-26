import day_offer_image_one from '@/../public/images/day-offer-img-one.jpg'
import day_offer_image_two from '@/../public/images/day-offer-img-two.jpg'
import Image from 'next/image'

import './dayOffer.css'

const DayOffer = () => {
  return (
    <section className='day-offer'>
        <Image src={day_offer_image_one} alt='' className='day-offer-img-one' />
        <h1 className='day-offer-heading'>
            Oferta del Día
        </h1>
        <p className='day-offer-paragraph'>
            Aprovecha el precio de nuestro nuevo mueble
        </p>
        <button className='day-offer-btn'>
            Comprar Ahora
        </button>
        <Image src={day_offer_image_two} alt='' className='day-offer-img-two' />
    </section>
  )
}

export default DayOffer