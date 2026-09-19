import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import PublicStore from '../pages/PublicStore'
import VibeLoader from '../components/VibeLoader'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/productDetails/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path= "/publicStore/:id" element={<PublicStore/>} />
            <Route path= "/loader" element={<VibeLoader/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes