import Image from 'next/image'
import './gallery.css'
import { gallery } from '@/utils/data'

const Gallery = () => {
  return (
    <section className='gallery'>
        {
            gallery.map(item => (
                <Image 
                    key={item.id}
                    src={item.image}
                    alt='gallery'
                    className={`gallery-img gallery-img-${item.id}`}
                />
            ))
        }
    </section>
  )
}

export default Gallery