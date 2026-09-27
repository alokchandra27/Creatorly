import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  // Mobile Hamburger Menu State toggle
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Mock states (Inhe aap baad me Context API ya Redux state se badal sakte hain)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(2); 

  return (
    <nav className="sticky top-0 z-50 border-b border-creator-text/5 bg-creator-bg-butter/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT: Branding Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <span className="font-serif text-2xl font-black tracking-tight text-creator-text">
              Creatorly.
            </span>
          </div>

          {/* CENTER: Desktop Links Matrix */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link to="/discover" className="text-creator-text/70 hover:text-creator-primary transition-colors duration-150">
              Discover
            </Link>
            <Link to="/creators" className="text-creator-text/70 hover:text-creator-primary transition-colors duration-150">
              Creators
            </Link>
            <Link to="/about" className="text-creator-text/70 hover:text-creator-primary transition-colors duration-150">
              Our Story
            </Link>
          </div>

          {/* RIGHT: User Actions & Utilities */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Interactive Dynamic Cart Widget */}
            <button 
              onClick={() => navigate("/cart")}
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

            {/* Account CTA Conditional Switch */}
            {isLoggedIn ? (
              <button 
                onClick={() => navigate("/dashboard")}
                className="rounded-full bg-creator-primary px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-opacity-95 transition-all"
              >
                Dashboard
              </button>
            ) : (
              <button 
                onClick={() => navigate("/auth")}
                className="rounded-full bg-creator-text px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-creator-primary transition-all"
              >
                Login / Register
              </button>
            )}
          </div>

          {/* MOBILE INTERACTION ROW: Hamburger Switch Trigger */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Cart Counter Icon */}
            <button 
              onClick={() => navigate("/cart")}
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

            {/* Hamburger Trigger Engine */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-creator-text hover:bg-creator-bg focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close ('X') SVG icon
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Rows SVG icon
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE COLLAPSIBLE PANEL OVERLAY */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100 border-t border-creator-text/5 bg-creator-bg-butter" : "max-h-0 opacity-0 pointer-events-none"
        }`} 
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-3">
          <Link 
            to="/discover" 
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-3 py-2.5 text-base font-medium text-creator-text/80 hover:bg-creator-bg hover:text-creator-text transition-all"
          >
            Discover Items
          </Link>
          <Link 
            to="/creators" 
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-3 py-2.5 text-base font-medium text-creator-text/80 hover:bg-creator-bg hover:text-creator-text transition-all"
          >
            Creators List
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-3 py-2.5 text-base font-medium text-creator-text/80 hover:bg-creator-bg hover:text-creator-text transition-all"
          >
            About Marketplace
          </Link>
          
          {/* Mobile Login Custom row item */}
          <div className="pt-2 mt-2 border-t border-creator-text/5">
            <button 
              onClick={() => { setIsOpen(false); navigate("/auth"); }}
              className="w-full text-center rounded-xl bg-creator-text py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-creator-primary transition-all"
            >
              {isLoggedIn ? "Go to Dashboard" : "Login / Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
