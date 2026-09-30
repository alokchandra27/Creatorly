import React from "react";
import {
  ArrowRight,
  Heart,
  // Instagram,
  MessageCircle,
  Store,
  Sparkles,
  Share2,
  ShoppingBag,
  UserRound,
  Palette,
  Package,
  Link2,
  MoveRight,
  LineSquiggle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// =========================================================
// ASSETS
// =========================================================

// import crochetImage from "/src/assets/crochet.jpg";
// import paintsImage from "/src/assets/paintsandall.jpg";
// import keychainsImage from "/src/assets/keychains.jpg";
// import yarnImage from "/src/assets/yarn.png";
// import flowerImage from "/src/assets/flowerDaisy.png";
// import leafImage from "/src/assets/leafStem.png";
// import paletteImage from "/src/assets/palette.png";

import creator1 from "/src/assets/contentCreator.jpg";
import WhatIsCreatoly from "./Home/WhatIsCreatoly";
import ExploreByCraft from "./Home/ExploreByCraft";
import DiscoverCreators from "./Home/DiscoverCreators";
import HowCreatorlyWorks from "./Home/HowCreatorlyWorks";
import PeoplePassionPurpose from "./Home/PeoplePassionPurpose";
import FinalCTA from "./Home/FinalCTA";
import Footer from "./Footer";
import CreatorlyValueSection from "./Home/CreatorlyValueSection";
// import creator2 from "/src/assets/creator2.png";
// import creator3 from "/src/assets/creator3.png";
// import creator4 from "/src/assets/creator4.png";

// import avatar1 from "/src/assets/avatar1.png";
// import avatar2 from "/src/assets/avatar2.png";
// import avatar3 from "/src/assets/avatar3.png";
// import avatar4 from "/src/assets/avatar4.png";

// =========================================================
// HOME
// =========================================================

const Home = () => {
  const navigate = useNavigate();

  // =======================================================
  // DEMO / SEEDED CREATORS
  // =======================================================

  const creators = [
    {
      username: "mystriispot",
      name: "MystriiSpot",
      location: "Rishikesh",
      desc: "Handmade with a little magic ✨",
      category: "Handmade art & DIY",
      // image: creator1,
      // avatar: avatar1,
    },
    {
      username: "theclaycorner",
      name: "TheClayCorner",
      location: "Dehradun",
      desc: "Dream it • Shape it • Love it",
      category: "Clay & home decor",
      // image: creator2,
      // avatar: avatar2,
    },
    {
      username: "threadandtales",
      name: "ThreadAndTales",
      location: "Rishikesh",
      desc: "Crochet stories in every loop",
      category: "Crochet & handmade gifts",
      // image: creator3,
      // avatar: avatar3,
    },
    {
      username: "woodenwhimsy",
      name: "WoodenWhimsy",
      location: "Dehradun",
      desc: "Carved with care",
      category: "Wooden decor & gifts",
      // image: creator4,
      // avatar: avatar4,
    },
  ];

  // =======================================================
  // HELPERS
  // =======================================================

  const goToExplore = () => {
    navigate("/explore");
  };

  const goToAuth = () => {
    navigate("/auth");
  };

  const goToCraft = (craftName) => {
    navigate(`/explore?craft=${craftName.toLowerCase()}`);
  };

  // =======================================================
  // JSX
  // =======================================================

  return (
    <main className="w-full overflow-x-hidden bg-creator-bg text-creator-text">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="min-h-0 lg:min-h-screen w-full flex flex-col lg:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 min-h-[28rem] sm:min-h-[30rem] md:min-h-[34rem] lg:min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-10 sm:py-12 md:py-14 lg:py-16">
          {/* a little space/  Small Creators */}
          <div className="w-full lg:-mt-30 md:-mt-0 xl:-mt-30">
            {/* <p
              className="-mb-2 text-center font-caveat text-lg tracking-wide text-creator-pink sm:text-xl lg:text-left"
            >
              A little space for big ideas ✦
            </p> */}
            <h1 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none lg:-rotate-4 md:rotate-0 xl:-rotate-4 text-center lg:text-left md:text-center xl:text-left">
              Small
            </h1>
            <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none lg:-rotate-4 md:rotate-0 xl:-rotate-4 text-center lg:text-left md:text-center xl:text-left">
              Creators.
            </h2>
          </div>
          {/* Big Stories */}
          <div className="mt-2">
            <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none text-creator-pink lg:-rotate-3 md:rotate-0 xl:-rotate-3 text-center lg:text-left md:text-center xl:text-left">
              Big Stories.
            </h2>
          </div>
          {/* Description */}
          <div className="mt-3 lg:mt-6 xl:mt-8 md:mt-6 flex flex-col items-center lg:items-start md:items-center xl:items-start">
            <p className="font-caveat text-base md:text-xl text-creator-text">
              Discover handmade. Support small creators.
            </p>
            <LineSquiggle
              size={50}
              strokeWidth={1.5}
              className="text-creator-pink mt-1"
            />
          </div>
          {/* CTA */}
          <div className="flex justify-center lg:justify-start md:justify-center xl:justify-start mt-6 xl:mt-2 md:mt-2 lg:mt-2 gap-5">
            <button
              onClick={goToExplore}
              className="group flex items-center cursor-pointer bg-creator-pink px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-creator-accent hover:shadow-lg"
            >
              Explore Creators
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={goToAuth}
              className="flex items-center cursor-pointer border border-creator-pink/50 bg-white/60 px-6 py-3 text-sm font-medium text-creator-text transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              I'm a Creator
            </button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/2 min-h-[32rem] sm:min-h-[36rem] md:min-h-[40rem] lg:min-h-[calc(100vh-80px)] relative flex items-center justify-center px-4 sm:px-10 py-8 sm:py-12 lg:py-0 overflow-hidden lg:overflow-visible -mt-25 lg:-mt-0 md:mt-0">
          {/* Left leaf */}
          <div className="absolute top-[16%] sm:top-[9%] md:top-[10%] left-[5%] sm:left-[8%] md:left-[10%] lg:left-[13%] -rotate-90 z-10">
            <img
              src="/src/assets/leafStem.png"
              alt=""
              className="w-14 sm:w-[4.5rem] md:w-20 lg:w-24"
            />
          </div>
          {/* Right leaf */}
          <div className="absolute top-[22%] sm:top-[8%] md:top-[10%] lg:top-[14%] right-[2%] sm:right-[3%] lg:right-[6%] z-10">
            <img
              src="/src/assets/leafStem.png"
              alt=""
              className="w-14 sm:w-[4.5rem] md:w-20 lg:w-24"
            />
          </div>
          {/* Main image */}
          <div className="relative w-[68%] sm:w-[58%] md:w-[50%] lg:w-[65%] aspect-square z-10 rotate-6 border-[10px] sm:border-[14px] border-creator-bg shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-[70vh] h-auto lg:-mt-10">
            {" "}
            <img
              src="/src/assets/crochet.jpg"
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Left image */}
          <div className="absolute top-[24%] sm:top-[27%] md:top-[29%] lg:top-[30%] left-[2%] sm:left-[8%] md:left-[11%] lg:left-[-5%] w-[40%] sm:w-[35%] md:w-[30%] lg:w-[38%] aspect-square z-20 -rotate-12 border-[8px] sm:border-[12px] border-creator-bg shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src="/src/assets/paintsandall.jpg"
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right image */}
          <div className="absolute bottom-[20%] sm:bottom-[23%] md:bottom-[24%] lg:bottom-[24%] right-[2%] sm:right-[7%] md:right-[10%] lg:right-[3%] w-[38%] sm:w-[33%] md:w-[28%] lg:w-[36%] aspect-square z-30 rotate-12 border-[8px] sm:border-[12px] border-creator-bg shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src="/src/assets/keychains.jpg"
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Yarn */}
          <div className="absolute bottom-[10%] lg:bottom-[3%] sm:bottom-[6%] md:bottom-[8%] lg:bottom-[14%] right-[2%] sm:right-[6%] lg:right-[18%] z-40">
            <img
              src="/src/assets/yarn.png"
              alt=""
              className="w-14 sm:w-[4.5rem] md:w-20 lg:w-28"
            />
          </div>
          {/* Daisy */}
          <div className="absolute bottom-[22%] lg:bottom-[18%] sm:bottom-[12%] md:bottom-[14%] left-[10%] lg:left-[10%] sm:left-[8%] md:left-[10%] z-40">
            <img
              src="/src/assets/flowerDaisy.png"
              alt=""
              className="w-14 sm:w-[4.5rem] md:w-20 lg:w-28"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS CREATORLY
      ===================================================== */}

      <WhatIsCreatoly />

      {/* =====================================================
          EXPLORE BY CRAFT
      ===================================================== */}

      <ExploreByCraft />

      {/* =====================================================
          DISCOVER CREATORS
      ===================================================== */}

      <CreatorlyValueSection  />
      {/* <DiscoverCreators/> */}
      {/* =====================================================
          HOW CREATORLY WORKS
      ===================================================== */}

      <HowCreatorlyWorks />

      {/* =====================================================
          PEOPLE / PASSION / PURPOSE
      ===================================================== */}

      <PeoplePassionPurpose/>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <FinalCTA/>

      {/* =====================================================
          MINI FOOTER
      ===================================================== */}

        <Footer/>
    </main>
  );
};

export default Home;
