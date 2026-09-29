import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "./API/API";

export default function CreatorNavbar({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  const navigate = useNavigate();
  const { username } = useParams(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const logoutHandler = async () => {
    try {
      const response = await API.post("/api/auth/logout");
      if (response.status === 200) {
        toast.success("Logged out successfully!");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.log("Logout error:", error);
      toast.error(error?.response?.data?.message || "Logout completed locally.");
    } finally {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setIsOpen(false);
      navigate("/");
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-creator-bg hover:bg-creator-bg-butter backdrop-blur-md transition-all duration-500 ease-in-out ${
        isScrolled
          ? "border-b border-creator-text/10 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* LEFT: Dynamic Branding mapped to URL */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(`/publicStore/${username}`)}
          >
            <span className="font-serif text-2xl font-black tracking-tight text-creator-text capitalize">
              {username ? username.replace(/-/g, " ") : "Creator Store"}
            </span>
            <span className="text-xs bg-creator-pink/10 text-creator-pink px-2 py-0.5 rounded-full font-sans font-medium">
              Shop ✦
            </span>
          </div>

          {/* CENTER: Isolated Shop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <span
              onClick={() => navigate(`/publicStore/${username}`)}
              className={`cursor-pointer hover:text-creator-text transition-colors duration-150 text-creator-text/70 ${
                isActive(`/publicStore/\${username}`) ? "text-creator-text font-bold" : ""
              }`}
            >
              Shop Home
            </span>

            <span
              onClick={() => navigate(`/publicStore/${username}/about`)}
              className={`cursor-pointer hover:text-creator-text transition-colors duration-150 text-creator-text/70 ${
                isActive(`/publicStore/\${username}/about`) ? "text-creator-text font-bold" : ""
              }`}
            >
              About Creator
            </span>

            {isLoggedIn && (
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 hover:bg-emerald-100 transition shadow-sm text-xs cursor-pointer"
              >
                🎛️ Dashboard
              </button>
            )}
          </div>

          {/* RIGHT: Context Utilities */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              onClick={() => navigate(`/publicStore/${username}/cart`)}
              className="relative rounded-full border border-creator-text/10 p-2 text-creator-text hover:bg-creator-bg transition-all active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-creator-accent text-[10px] font-bold text-white shadow-sm ring-2 ring-creator-bg-butter animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate("/")}
              className="rounded-full border border-creator-text bg-transparent px-4 py-2 text-xs font-semibold text-creator-text hover:bg-creator-text hover:text-white transition-all duration-300"
            >
              Creatorly Home
            </button>
          </div>

          {/* MOBILE TOGGLE TRIGGER ROW */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => navigate(`/publicStore/${username}/cart`)}
              className="relative rounded-full border border-creator-text/10 p-2 text-creator-text"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-creator-accent text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-creator-text hover:bg-creator-bg focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE EXPANDED DRAWER CONTAINER */}
      {isOpen && (
        <div className="md:hidden border-t border-creator-text/5 bg-creator-bg px-4 py-4 space-y-3 flex flex-col shadow-inner">
          <span
            onClick={() => { navigate(`/publicStore/${username}`); setIsOpen(false); }}
            className="text-sm font-medium text-creator-text/80 hover:text-creator-text py-1 cursor-pointer"
          >
            Shop Home
          </span>
          <span
            onClick={() => { navigate(`/publicStore/${username}/about`); setIsOpen(false); }}
            className="text-sm font-medium text-creator-text/80 hover:text-creator-text py-1 cursor-pointer"
          >
            About Creator
          </span>
          <button
            onClick={() => { navigate("/"); setIsOpen(false); }}
            className="w-full text-center rounded-xl border border-creator-text py-2.5 text-xs font-semibold text-creator-text"
          >
            Back to Creatorly
          </button>
        </div>
      )}
    </nav>
  );
}
