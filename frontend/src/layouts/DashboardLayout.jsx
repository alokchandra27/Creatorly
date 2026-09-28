import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Left Side: Yahan aapka Seller Sidebar ka UI aa jayega */}
      <div className="w-full md:w-64 bg-creator-text text-white p-5 shrink-0 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 text-creator-bg-butter">Creatorly Dashboard</h3>
          {/* Baad mein aap yahan products, settings ke proper Links/Buttons de sakte ho */}
          <p className="text-xs text-white/50">Seller Control Panel</p>
        </div>
        <div className="py-4">
          <p className="text-xs text-white/50">© 2023 Creatorly. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side: Yeh space hai jahan dashboard ke pages (stats, product form) dikhenge */}
      <div className="flex-1 bg-slate-50 p-6 sm:p-10">
        <Outlet />
      </div>
    </div>
  );
}
