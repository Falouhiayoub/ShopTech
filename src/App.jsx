import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Wishlist from './pages/Wishlist'
import CartSidebar from './components/CartSidebar'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <CartSidebar />
    
      <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path='/catalogue' element= {<Catalogue/>}/>
        <Route path='/wishlist' element = {<Wishlist/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
