import { bestselling } from "@/utils/data"
import BestsellingCard from "./BestsellingCard"
import './bestselling.css'


const Bestselling = () => {
  return (
    <section className="bestselling-furniture">
      <h1 className="bestselling-furniture-header">
        Muebles más vendidos
      </h1>
      <div className="bestselling-furniture-cards">
        {
          bestselling.map(item => (
            <BestsellingCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
            />
          ))
        }
      </div>
    </section>
  )
}

export default Bestselling