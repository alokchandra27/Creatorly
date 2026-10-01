import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages aur Components ke Imports
import Home from "../pages/Home"; 
import Explore from "../pages/Explore";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import PublicStore from "../pages/PublicStore";
import VibeLoader from "./VibeLoader";
import Intro from "./Intro";
import Auth from "../pages/Auth";

// Seller Sections
import ProductsManagement from "./Seller/ProductManagement";
import StoreSettings from "./Seller/StoreSettings";
import EditProduct from "./Seller/EditProduct";
import Wishlist from "../pages/Wishlist";

const MainRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Routes>
      {/* =====================================================
          1. UNIVERSAL CUSTOMER / VISITOR PATHS
          ===================================================== */}
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/loader" element={<VibeLoader />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />

      {/* =====================================================
          2. PERSONAL ISOLATED SELLER STOREFRONT PATHS
          ===================================================== */}
      {/* App.jsx checks .startsWith("/publicStore") and automatically injects CreatorNavbar */}
      <Route path="/publicStore" element={<Navigate to="/" replace />} />
      <Route path="/publicStore/:storeName" element={<PublicStore />} />
      <Route path="/publicStore/:storeName/product/:id" element={<ProductDetails />} /> 

      {/* =====================================================
          3. FLAT SELLER DASHBOARD CONTROL PATHS
          ===================================================== */}
      <Route path="/products" element={<ProductsManagement />} />
      <Route path="/store/settings" element={<StoreSettings />} />
      <Route path="/products/edit/:productId" element={<EditProduct />} />
      <Route
  path="/publicStore/:storeName/cart"
  element={<Cart />}
/>

<Route
  path="/publicStore/:storeName/wishlist"
  element={<Wishlist />}
/>
    </Routes>
  );
};

export default MainRoutes;
