import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../API/API";

export default function SellerDashboard() {
  const navigate = useNavigate();
  
  // Real dynamic states dashboard analytics ke liye
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // React rules ke mutabik useEffect ke andar function wrap karna zaroori hai
    const fetchDashboardStats = async () => {
      try {
        const response = await API.get("/api/seller/dashboard-stats");
        setDashboardData(response.data);
      } catch (error) {
        console.error("Dashboard data error:", error);
        toast.error("Failed to load dashboard metrics.");
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardStats();
  }, []);

  // UI Fallback parameters setting checking if backend data is empty
  const totalProducts = dashboardData?.totalProducts || 0;
  const whatsappClicks = dashboardData?.whatsappClicks || 0;
  const instagramClicks = dashboardData?.instagramClicks || 0;
  const outOfStock = dashboardData?.outOfStock || 0;
  const recentClicks = dashboardData?.recentClicks || [];

  const stats = [
    { id: 1, name: "Total Products Available", value: `${totalProducts} Items`, icon: "📦", color: "bg-blue-50 text-blue-700 border-blue-100" },
    { id: 2, name: "WhatsApp Order Clicks", value: String(whatsappClicks), icon: "💬", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { id: 3, name: "Instagram DM Clicks", value: String(instagramClicks), icon: "📸", color: "bg-purple-50 text-purple-700 border-purple-100" },
    { id: 4, name: "Out of Stock Alerts", value: `${outOfStock} Items`, icon: "⚠️", color: "bg-amber-50 text-amber-700 border-amber-100" },
  ];

  if (loading) {
    return <div className="text-center py-20 font-caveat text-2xl">Loading your insights dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-creator-bg font-sans text-creator-text antialiased">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Dashboard Top welcome banner */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-creator-text/5 pb-6 mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-black tracking-tight">Kariigar Dashboard 🎨</h1>
            <p className="text-xs text-creator-text/60 mt-1">
              Welcome back! Apne store ki insights yahan dekhein.
            </p>
          </div>
          
          <div className="flex gap-2.5">
            <button 
              onClick={() => navigate("/dashboard/products")} // Clean paths match
              className="rounded-full bg-creator-text px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-creator-primary transition active:scale-95 cursor-pointer"
            >
              ➕ Naya Product Add Karein
            </button>
            <button 
              onClick={() => navigate(`/publicStore/balbeerandsons`)} // Dynamic store paths template match
              className="rounded-full border border-creator-text/10 bg-creator-bg px-5 py-2.5 text-xs font-semibold hover:bg-creator-bg-butter transition cursor-pointer"
            >
              👁️ Live Store Dekhein
            </button>
          </div>
        </div>

        {/* 4-Grid Analytics Cards Layout */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.id} className="rounded-2xl border p-5 bg-white shadow-sm flex items-center justify-between border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-medium text-creator-text/50 block leading-tight">{stat.name}</span>
                <span className="font-serif text-2xl font-black text-creator-text block">{stat.value}</span>
              </div>
              <span className={`text-2xl p-3 rounded-xl border ${stat.color}`}>{stat.icon}</span>
            </div>
          ))}
        </div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* LEFT Shortcuts */}
          <div className="lg:col-span-7 rounded-2xl border border-creator-text/5 bg-white p-6 shadow-sm space-y-4">
            <h3 className="font-serif text-lg font-bold border-b border-creator-text/5 pb-2">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                onClick={() => navigate("/dashboard/products")}
                className="p-4 rounded-xl border border-neutral-100 bg-creator-bg-butter/40 hover:border-creator-accent cursor-pointer transition flex items-center gap-3"
              >
                <span className="text-xl">📦</span>
                <div>
                  <h4 className="text-sm font-bold">Manage Products</h4>
                  <p className="text-[11px] text-creator-text/50">Price, stocks edit karein</p>
                </div>
              </div>

              <div 
                onClick={() => navigate("/dashboard/settings")}
                className="p-4 rounded-xl border border-neutral-100 bg-creator-bg-butter/40 hover:border-creator-accent cursor-pointer transition flex items-center gap-3"
              >
                <span className="text-xl">⚙️</span>
                <div>
                  <h4 className="text-sm font-bold">Store Settings</h4>
                  <p className="text-[11px] text-creator-text/50">WhatsApp handles manage karein</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Logs Feed */}
          <div className="lg:col-span-5 rounded-2xl border border-creator-text/5 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold border-b border-creator-text/5 pb-2 mb-4">Recent Traffic Alerts</h3>
            <div className="space-y-3.5">
              {recentClicks.length > 0 ? (
                recentClicks.map((click, index) => (
                  <div key={index} className="flex justify-between items-center text-xs font-medium border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      <p className="text-creator-text">
                        Customer clicked on <span className="font-bold">"{click.item}"</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`font-bold block ${click.platform === 'WhatsApp' ? 'text-emerald-600' : 'text-purple-600'}`}>{click.platform}</span>
                      <span className="text-[10px] text-creator-text/40 block mt-0.5">{click.timestamp}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-neutral-400 italic py-4">No recent traffic logs recorded yet.</p>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
