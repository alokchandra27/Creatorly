import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Aapka abhi wala customer navbar

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-creator-bg-butter">
      {/* Yeh Navbar in saare pages par common chalega */}
      <Navbar /> 
      
      {/* Outlet ki jagah par URL ke hisab se Store, Cart ya ProductDetail automatic load hoga */}
      <Outlet />
    </div>
  );
}
