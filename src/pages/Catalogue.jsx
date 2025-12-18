import {products} from '../data/products'
import ProductCard from '../components/ProductCard'

const Catalogue = () => {
  return (
    <div className='page'>
      <div className="header">
        <h1>Full Catalogue</h1>
        <p>Explore all Our Available products</p>
      </div>
      <div className="grid-cat">
        {products.map(p => (
          <ProductCard key={p.id} product = {p}/>
        ))}
      </div>
    </div>
  )
}

export default Catalogue
