import React from 'react'

const CartSidebar = () => {
  return (
    <>  
        
        <div className='overlay' />

        <aside className='aside'>
            <button className='close-btn'>
                X
            </button>
            <h2>Cart</h2>
            <div className="cart-item">
                <h4>item name</h4>
                <p>item price</p>

                <button>-</button>
                <button>+</button>
                <button>❌</button>
            </div>
            <h3>Total : $</h3>
        </aside>
    </>
  )
}

export default CartSidebar
