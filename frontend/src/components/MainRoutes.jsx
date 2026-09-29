import React from "react";
import { Routes, Route } from "react-router-dom";

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
import SellerDashboard from "./Seller/SellerDashboard";
import ProductsManagement from "./Seller/ProductManagement";
import StoreSettings from "./Seller/StoreSettings";

const MainRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Routes>
      {/* =====================================================
          1. UNIVERSAL CUSTOMER / VISITOR PATHS (No Navbars Here!)
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
      {/* publicStore ke dono pages plain render honge, App.jsx automatically ispar CreatorNavbar lagayega */}
      <Route path="/publicStore/:storeName" element={<PublicStore />} />
      <Route path="/publicStore/:storeName/product/:id" element={<ProductDetails />} /> 

      {/* =====================================================
          3. FLAT SELLER DASHBOARD CONTROL PATHS
          ===================================================== */}
      {/* <Route path="/dashboard" element={<SellerDashboard />} /> */}
      <Route path="/products" element={<ProductsManagement />} />
      <Route path="/store/settings" element={<StoreSettings />} />
    </Routes>
  );
};

export default MainRoutes;
