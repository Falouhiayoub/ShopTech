import React from 'react'
import { addToCart } from '../features/cart/cartSlice'
import { toggleWishlist } from '../features/wishlist/wishlistSlice'
import { useSelector, useDispatch } from 'react-redux'

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist)
  const dispatch = useDispatch()
  return (
    <div className='page-wishlist'>
      <h2>My Wishlist</h2>

      <div className="grid">
          {wishlist.map(p => (
          <div className='card' key={p.id}>
            <img src={p.image} alt={p.name}/>
            <h3>{p.name}</h3>
            <p>{p.price} $</p>

            <button onClick={() => dispatch(addToCart(p))}>Add To Cart</button>
            <button onClick={() => dispatch(toggleWishlist(p))}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
