import {products} from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const bestSellingProducts = products.filter(p => p.bestSelling)
  return (
    <div className='page'>
      <div className="header">
        <h1 style={{marginBottom: "30px"}}>Discover the Future of Smartphones and Accessories</h1>
        <p className="subtitle">Our Best Selligns</p>
      </div>
      <div className="grid">
        {bestSellingProducts.slice(0, 6).map(p => (
          <ProductCard key={p.id} product = {p}/>
        ))}
      </div>
    </div>
  )
}

export default Home
