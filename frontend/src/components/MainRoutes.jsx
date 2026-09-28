import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages aur Components ke Direct Imports
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
      {/* Universal Customer/Visitor Paths */}
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/publicStore/:storeName" element={<PublicStore />} />
      <Route path="/loader" element={<VibeLoader />} />
      <Route path="/intro" element={<Intro />} />
      <Route
        path="/auth"
        element={<Auth setIsLoggedIn={setIsLoggedIn} />}
      />

      {/* Flat Dashboard Paths: Kisi alag template wrapper ki zarurat nahi h */}
      <Route path="/dashboard" element={<SellerDashboard />} />
      <Route path="/dashboard/products" element={<ProductsManagement />} />
      <Route path="/dashboard/settings" element={<StoreSettings />} />
    </Routes>
  );
};

export default MainRoutes;
