import React from 'react'

const Wishlist = () => {
  return (
    <div className='page wishlist'>
      <h2>My Wishlist</h2>

      <div className="grid">
        <div className="card">
          <img src="" alt="wishlist image" />
          <h3>product Name</h3>
          <p>product price $</p>

          <button>Add To Cart</button>
          <button>Remove From Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
