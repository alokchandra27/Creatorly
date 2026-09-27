import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import PublicStore from '../pages/PublicStore'
import VibeLoader from '../components/VibeLoader'
import Intro from './Intro'
import Auth from '../pages/Auth'
import SellerDashboard from './Seller/SellerDashboard'
import ProductsManagement from './Seller/ProductManagement'
import StoreSettings from './Seller/StoreSettings'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/productDetails/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path= "/publicStore/:storeName" element={<PublicStore/>} />
            <Route path= "/loader" element={<VibeLoader/>} />
            <Route path= "intro" element={<Intro/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/sellerDashboard" element={<SellerDashboard/>} />
            <Route path="/productManagement" element={<ProductsManagement/>} />
            <Route path="/storeSettings" element={<StoreSettings/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes 