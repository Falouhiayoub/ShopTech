import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../features/cart/cartUISlice'
import { decreaseQty, increaseQty, removeFromCart } from '../features/cart/cartSlice'
const CartSidebar = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const isOpen = useSelector(state => state.cartUI.isOpen)
  return (
    <>  
        {isOpen && (
        <div className='overlay' 
            onClick={() => dispatch(closeCart())}
            />
        )}
        <aside className={`sidebar ${isOpen ? 'open': ''}`}>
            <button className='close-btn'>
                X
            </button>

            <h2>Cart</h2>

            {items.map(i => (
            <div className="cart-item">
                <h4>{i.name}</h4>
                <p>{i.price}</p>

                <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
                {i.quantity}
                <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(i.id))}>❌</button>
            </div>
            ))}
            <h3>Total : $</h3>
        </aside>
    </>
  )
}

export default CartSidebar
