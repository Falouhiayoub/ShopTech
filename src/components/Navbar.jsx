import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector} from "react-redux"
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import {toggleCart} from "../features/cart/cartSlice"
const Navbar = () => {
    const dispatch = useDispatch()

    const total = useSelector(state =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    )
  return (
    <nav className='navbar'>
        <div className="nav-left">
            <h2 className='logo'>📱 ShopTech</h2>
        </div>

        <div className="nav-center">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/catalogue" className="nav-link">
                Catalogue
            </NavLink>
        </div>

        <div className="nav-right">
            <NavLink to="/wishlist" className="wishlist-btn">
                <FaHeart/>
            </NavLink>
            
            <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
                <FaShoppingCart />
                <span className='badge'>{total}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
