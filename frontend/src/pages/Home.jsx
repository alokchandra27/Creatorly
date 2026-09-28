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
              className="
              -mb-2
                text-center
                font-caveat
                text-lg
                tracking-wide
                text-creator-pink
                sm:text-xl
                lg:text-left
              "
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
                className="
                  group
                  flex
                  items-center
                  cursor-pointer
                  bg-creator-pink
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-creator-accent
                  hover:shadow-lg
                "
              >
                Explore Creators

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={goToAuth}
                className="
                  flex
                  items-center
                  cursor-pointer
                  border
                  border-creator-pink/50
                  bg-white/60
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-creator-text
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                "
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

      <WhatIsCreatoly/>

      {/* =====================================================
          EXPLORE BY CRAFT
      ===================================================== */}

      <ExploreByCraft/>

      {/* =====================================================
          DISCOVER CREATORS
      ===================================================== */}

        <DiscoverCreators/>

      {/* =====================================================
          HOW CREATORLY WORKS
      ===================================================== */}

      <section className="relative w-full overflow-hidden bg-[#FFFDF9] px-6 py-20 sm:px-10 md:py-24 lg:px-16">
        {/* Decorative leaf */}

        <img
          // src={leafImage}
          alt=""
          className="
            pointer-events-none
            absolute
            -left-5
            top-8
            w-20
            rotate-[-35deg]
            opacity-50
            sm:w-28
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="font-caveat text-lg text-creator-pink sm:text-xl">
              Simple by steps. Big impact.
            </p>

            <h2
              className="
                mt-1
                font-playfair
                text-3xl
                font-bold
                text-neutral-800
                sm:text-4xl
                md:text-5xl
              "
            >
              How Creatorly Works
            </h2>
          </div>

          {/* STEPS */}

          <div
            className="
              grid
              grid-cols-1
              gap-8
              md:grid-cols-2
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {/* STEP 1 */}

            <div className="group relative">
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-100
                  text-creator-pink
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <UserRound size={23} />
              </div>

              <span className="text-xs font-bold text-creator-pink">01</span>

              <h3 className="mt-2 font-semibold text-neutral-800">
                Create your space
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                Build your own simple storefront and give your creations a home
                on the internet.
              </p>
            </div>

            {/* STEP 2 */}

            <div className="group relative">
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                  text-green-700
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <Palette size={23} />
              </div>

              <span className="text-xs font-bold text-green-700">02</span>

              <h3 className="mt-2 font-semibold text-neutral-800">
                Add what you make
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                Add products, prices, images, descriptions and customization
                options.
              </p>
            </div>

            {/* STEP 3 */}

            <div className="group relative">
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-100
                  text-yellow-700
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <Link2 size={23} />
              </div>

              <span className="text-xs font-bold text-yellow-700">03</span>

              <h3 className="mt-2 font-semibold text-neutral-800">
                Share your link
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                Put your Creatorly link in your Instagram bio, WhatsApp or
                anywhere else.
              </p>
            </div>

            {/* STEP 4 */}

            <div className="group relative">
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-700
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <Package size={23} />
              </div>

              <span className="text-xs font-bold text-purple-700">04</span>

              <h3 className="mt-2 font-semibold text-neutral-800">
                Get orders
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                Customers browse your store and connect with you directly to
                place an order.
              </p>
            </div>
          </div>

          {/* SOCIAL CONNECTION STRIP */}

          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              justify-center
              gap-4
              rounded-3xl
              border
              border-neutral-100
              bg-white
              px-6
              py-6
              shadow-sm
              sm:flex-row
              sm:gap-6
            "
          >
            <div className="flex items-center gap-2 text-creator-pink">
              {/* <Instagram size={18} /> */}
              <span className="text-xs font-medium">Instagram</span>
            </div>

            <ArrowRight
              size={15}
              className="hidden text-neutral-300 sm:block"
            />

            <div className="flex items-center gap-2 text-green-600">
              <Store size={18} />
              <span className="text-xs font-medium">Creatorly Store</span>
            </div>

            <ArrowRight
              size={15}
              className="hidden text-neutral-300 sm:block"
            />

            <div className="flex items-center gap-2 text-green-700">
              <MessageCircle size={18} />
              <span className="text-xs font-medium">Direct Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PEOPLE / PASSION / PURPOSE
      ===================================================== */}

      <section className="w-full bg-white px-6 py-20 sm:px-10 md:py-24 lg:px-16">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            gap-12
            lg:flex-row
            lg:gap-20
          "
        >
          {/* IMAGE COLLAGE */}

          <div
            className="
              relative
              min-h-[380px]
              w-full
              max-w-xl
              lg:w-1/2
            "
          >
            {/* Main image */}

            <div
              className="
                absolute
                left-[8%]
                top-[12%]
                z-20
                h-[65%]
                w-[55%]
                rotate-[-8deg]
                overflow-hidden
                border-[8px]
                border-white
                shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                sm:border-[12px]
              "
            >
              <img
                // src={paintsImage}
                alt="Creator working on handmade art"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Second image */}

            <div
              className="
                absolute
                right-[8%]
                top-[5%]
                z-10
                h-[48%]
                w-[38%]
                rotate-6
                overflow-hidden
                border-[8px]
                border-white
                shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                sm:border-[10px]
              "
            >
              <img
                // src={keychainsImage}
                alt="Handmade products"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Third image */}

            <div
              className="
                absolute
                bottom-[3%]
                right-[12%]
                z-30
                h-[42%]
                w-[40%]
                rotate-[-4deg]
                overflow-hidden
                border-[8px]
                border-white
                shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                sm:border-[10px]
              "
            >
              <img
                // src={crochetImage}
                alt="Handmade crochet"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Flower */}

            <img
              // src={flowerImage}
              alt=""
              className="
                absolute
                bottom-[0]
                left-[4%]
                z-40
                w-20
                -rotate-12
                sm:w-24
              "
            />
          </div>

          {/* CONTENT */}

          <div className="w-full lg:w-1/2">
            <p className="font-caveat text-lg text-creator-pink sm:text-xl">
              Built for the people behind the products.
            </p>

            <h2
              className="
                mt-2
                font-playfair
                text-3xl
                font-bold
                leading-tight
                text-neutral-800
                sm:text-4xl
                md:text-5xl
              "
            >
              It's people,
              <br />
              passion and purpose.
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-neutral-600
                sm:text-base
              "
            >
              A handmade product isn't just another product. Someone imagined
              it, made it, packed it and put a piece of themselves into it.
            </p>

            {/* JOURNEY */}

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
              <span className="rounded-full bg-pink-100 px-3 py-2">
                Creator
              </span>

              <ArrowRight size={14} />

              <span className="rounded-full bg-yellow-100 px-3 py-2">
                Their craft
              </span>

              <ArrowRight size={14} />

              <span className="rounded-full bg-green-100 px-3 py-2">
                Their story
              </span>

              <ArrowRight size={14} />

              <span className="rounded-full bg-purple-100 px-3 py-2">
                Their store
              </span>

              <ArrowRight size={14} />

              <span className="rounded-full bg-orange-100 px-3 py-2">
                Your purchase
              </span>
            </div>

            <button
              onClick={goToExplore}
              className="
                group
                mt-8
                flex
                items-center
                gap-2
                rounded-full
                bg-creator-pink
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-creator-accent
                hover:shadow-lg
              "
            >
              Discover Creators
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          mx-4
          mb-6
          overflow-hidden
          rounded-[2.5rem]
          bg-[#FBE8EA]
          px-6
          py-16
          sm:mx-6
          sm:px-10
          md:py-20
          lg:mx-10
        "
      >
        {/* Decorative flower */}

        <img
          // src={flowerImage}
          alt=""
          className="
            absolute
            -bottom-4
            left-3
            w-20
            rotate-[-15deg]
            opacity-80
            sm:left-8
            sm:w-28
          "
        />

        <img
          // src={flowerImage}
          alt=""
          className="
            absolute
            -right-3
            bottom-0
            w-20
            rotate-12
            opacity-80
            sm:right-8
            sm:w-28
          "
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-caveat text-lg text-creator-pink sm:text-xl">
            Your next favorite thing might be handmade.
          </p>

          <h2
            className="
              mt-3
              font-playfair
              text-3xl
              font-bold
              leading-tight
              text-neutral-800
              sm:text-4xl
              md:text-5xl
            "
          >
            Discover creators.
            <br />
            Find something personal.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            Explore unique creations, discover the people behind them, and
            support someone building something they love.
          </p>

          {/* CTA BUTTONS */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <button
              onClick={goToExplore}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-creator-pink
                px-6
                py-3
                text-sm
                font-medium
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-creator-accent
                hover:shadow-lg
              "
            >
              Explore Creators
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={goToAuth}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-creator-pink
                bg-white/70
                px-6
                py-3
                text-sm
                font-medium
                text-creator-pink
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
              "
            >
              I'm a Creator
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          MINI FOOTER
      ===================================================== */}

      <footer
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-5
          px-6
          py-8
          sm:px-10
          md:flex-row
        "
      >
        {/* BRAND */}

        <div className="font-caveat text-2xl text-neutral-800">
          Creatorly
          <span className="ml-1 text-creator-pink">♥</span>
        </div>

        {/* LINKS */}

        <div className="flex flex-wrap justify-center gap-5 text-xs text-neutral-500">
          <button
            onClick={() => navigate("/")}
            className="transition-colors hover:text-creator-pink"
          >
            Home
          </button>

          <button
            onClick={goToExplore}
            className="transition-colors hover:text-creator-pink"
          >
            Explore
          </button>

          <button
            onClick={goToExplore}
            className="transition-colors hover:text-creator-pink"
          >
            Creators
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("creatorly-how-it-works");

              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="transition-colors hover:text-creator-pink"
          >
            How it Works
          </button>
        </div>

        {/* SOCIAL */}

        <div className="flex items-center gap-4 text-neutral-500">
          {/* <Instagram
            size={17}
            className="cursor-pointer transition-colors hover:text-creator-pink"
          /> */}

          <MessageCircle
            size={17}
            className="cursor-pointer transition-colors hover:text-creator-pink"
          />

          <Heart size={17} className="text-creator-pink" fill="currentColor" />
        </div>
      </footer>
    </main>
  );
};

export default Home;
