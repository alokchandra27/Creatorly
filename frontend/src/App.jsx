import React, { useState } from "react";
import MainRoutes from "./components/MainRoutes";
import Navbar from "./components/Navbar";
import CreatorNavbar from "./components/CreatorNavbar";
import VibeLoader from "./components/VibeLoader";
import Intro from "./components/Intro";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("token"))
  );

  const location = useLocation();

  // 1. Session Storage is best: Tab close hone par forget karega, refresh par yaad rakhega.
  const [hasSeenIntro, setHasSeenIntro] = useState(
    () => sessionStorage.getItem("creatorly-intro-seen") === "true"
  );

  // 2. Main Logic: Agar user pehle intro dekh chuka hai, YA fir direct kisi link se 
  // (jaise /auth ya /store/settings) refresh karke aa raha hai, toh loader mat dikhao.
  const [appStage, setAppStage] = useState(() => {
    const hasSeen = sessionStorage.getItem("creatorly-intro-seen") === "true";
    
    // Agar intro dekh chuka hai, ya landing page '/' ke alawa koi aur page hai, toh direct home render karein
    if (hasSeen || location.pathname !== "/") {
      return "home";
    }
    return "loader";
  });

  const isCreatorStoreRoute = location.pathname.startsWith("/publicstore");

  const handleLoaderComplete = () => setAppStage("intro");
  
  const handleIntroComplete = () => {
    sessionStorage.setItem("creatorly-intro-seen", "true");
    setHasSeenIntro(true);
    setAppStage("home");
  };

  return (
    <div className="min-h-screen bg-creator-bg">

      {/* NAVBAR LAYER */}
      {appStage === "home" && location.pathname !== "/intro" && (
        isCreatorStoreRoute ? (
          <CreatorNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )
      )}

      {/* STAGE 1: LOADER (Sirf tabhi chalega jab bilkul fresh entry ho '/' par) */}
      {appStage === "loader" && location.pathname === "/" && (
        <VibeLoader onComplete={handleLoaderComplete} />
      )}

      {/* STAGE 2: INTRO */}
      {appStage === "intro" && location.pathname === "/" && (
        <Intro onIntroComplete={handleIntroComplete} />
      )}

      {/* STAGE 3: ACTUAL WEBSITE SYSTEM */}
      {appStage === "home" && (
        <>
          <ScrollToTop /> 
          <MainRoutes
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            hasSeenIntro={hasSeenIntro}
            setHasSeenIntro={setHasSeenIntro}
          />
        </>
      )}

    </div>
  );
};

export default App;
