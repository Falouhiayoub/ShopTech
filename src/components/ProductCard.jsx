import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {addToCart} from "../features/cart/cartSlice"
import {toggleWishlist} from "../features/wishlist/wishlistSlice"

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <img src= {product.image} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>{product.price} $</p>

      <div className="actions">
        <FaShoppingCart onClick={() => dispatch(addToCart(product))}/>
        <FaHeart onClick={() => dispatch(toggleWishlist(product))}/>
      </div>
    </div>
  )
}

export default ProductCard