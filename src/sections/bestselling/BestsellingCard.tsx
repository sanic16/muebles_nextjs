import Image from 'next/image'
import './bestselling.css'

const BestsellingCard = (
  {
    image,
    price,
    title
  }:{
    image: NextImage,
    price: number,
    title: string
  }
) => {
  return (
    <div className='bestselling-furniture-card'>
      <Image src={image} alt='' className='bestselling-furniture-img' />
      <h2 className='bestselling-furniture-heading'>
        { title }
      </h2>
      <p className='bestselling-furniture-paragraph'>
        Q { price } 
      </p>
      <button className='bestselling-furniture-btn'>
        { title }
      </button>
    </div>
  )
}

export default BestsellingCard
