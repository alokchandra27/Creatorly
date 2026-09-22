import React from "react";
import { LineSquiggle, MoveRight } from "lucide-react";

const Home = () => {


 const crafts = [
    { name: 'Clay', icon: '🏺', bgColor: 'bg-orange-200 text-orange-800' },
    { name: 'Crochet', icon: '🧶', bgColor: 'bg-green-100 text-green-800' },
    { name: 'Resin', icon: '🪵', bgColor: 'bg-yellow-100 text-yellow-800' },
    { name: 'Wood', icon: '💎', bgColor: 'bg-purple-100 text-purple-800' },
    { name: 'Metal', icon: '⛓️', bgColor: 'bg-slate-200 text-slate-800' },
    { name: 'Fabric', icon: '🧵', bgColor: 'bg-amber-100 text-amber-800' },
    { name: 'Petal', icon: '🌸', bgColor: 'bg-pink-100 text-pink-800' },
    { name: 'Other', icon: '✨', bgColor: 'bg-emerald-100 text-emerald-800' },
  ];





  return (
    <div className="min-h-screen w-full bg-creator-bg text-creator-text overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen w-full flex flex-col lg:flex-row">

        {/* ================= LEFT ================= */}
        <div className="w-full lg:w-1/2 min-h-[55vh] lg:min-h-screen flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-16">

          {/* Small Creators */}
          <div className="w-full">
            <h1 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none -rotate-3">
              Small
            </h1>

            <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none -rotate-3">
              Creators.
            </h2>
          </div>

          {/* Big Stories */}
          <div className="mt-5">
            <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none text-creator-pink -rotate-2">
              Big Stories.
            </h2>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="font-caveat text-xl sm:text-2xl text-creator-text">
              Handmade * DIY * Crochet & More
            </p>

            <LineSquiggle
              size={100}
              strokeWidth={1.5}
              className="text-creator-pink mt-1"
            />
          </div>

          {/* CTA */}
          <div className="mt-6">
            <button className="bg-creator-pink hover:bg-creator-accent text-white py-3 px-5 rounded-full flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105">
              Explore More
              <MoveRight size={18} />
            </button>
          </div>
        </div>


        {/* ================= RIGHT ================= */}
        <div className="w-full lg:w-1/2 min-h-[45vh] lg:min-h-screen relative flex items-center justify-center px-6 sm:px-10 py-12 lg:py-0">

          {/* Left leaf */}
          <div className="absolute top-[8%] left-[5%] sm:left-[10%] rotate-270 z-10">
            <img
              src="/src/assets/leafStem.png"
              alt=""
              className="w-16 sm:w-20 md:w-24"
            />
          </div>

          {/* Right leaf */}
          <div className="absolute top-[10%] right-[10%] sm:right-[3%] ">
            <img
              src="/src/assets/leafStem.png"
              alt=""
              className="w-16 sm:w-20 md:w-24"
            />
          </div>


          {/* Main image */}
          <div className="relative w-[75%] sm:w-[65%] md:w-[55%] lg:w-[70%] aspect-[4/5] z-10 rotate-6 border-[10px] sm:border-[14px] border-creator-bg shadow-sm max-h-[calc(90vh-80px)] h-auto"> 
            <img
              src="/photo-1579783902915-f0b0de2c2eb3.avif"
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Left image */}
          <div className="absolute top-[18%] left-[8%] sm:left-[12%] md:left-[15%] lg:left-[5%] w-[42%] sm:w-[38%] md:w-[34%] lg:w-[42%] aspect-[4/5] z-20 -rotate-12 border-[8px] sm:border-[12px] border-creator-bg">
            <img
              src="/photo-1552160793-cbaf3ebcba72.avif"
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Right image */}
          <div className="absolute bottom-[15%] right-[5%] sm:right-[10%] md:right-[12%] lg:right-[2%] w-[40%] sm:w-[36%] md:w-[32%] lg:w-[40%] aspect-[4/5] z-30 rotate-12 border-[8px] sm:border-[12px] border-creator-bg">
            <img
              src="/photo-1578301978018-3005759f48f7.avif"
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Yarn */}
          <div className="absolute bottom-[5%] right-[5%] sm:right-[8%] z-40">
            <img
              src="/src/assets/yarn.png"
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32"
            />
          </div>


          {/* Daisy */}
          <div className="absolute bottom-[5%] left-[5%] sm:left-[12%] z-40">
            <img
              src="/src/assets/flowerDaisy.png"
              alt=""
              className="w-20 sm:w-24 md:w-28 lg:w-32"
            />
          </div>

        </div>
      </section>


      {/* ================= NEXT SECTION ================= */}
  {/* ================= SECOND SECTION ================= */}
      <section className="min-h-screen w-full relative px-6 sm:px-10 py-20 overflow-hidden">

        {/* Small heading */}
        <p className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center font-caveat text-sm sm:text-base md:text-lg text-creator-text tracking-wider -rotate-2 whitespace-nowrap">
          Different hands. Different crafts. Same heart.
        </p>


        {/* Main heading */}
        <h2 className="absolute top-[13%] left-1/2 -translate-x-1/2 text-center font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-creator-text max-w-3xl w-full px-4 leading-tight">
          Explore by Craft
        </h2>


        {/* Description */}
        <p className="absolute top-[23%] left-1/2 -translate-x-1/2 text-center font-caveat text-sm sm:text-base md:text-lg text-creator-text tracking-wider max-w-xl w-full px-4">
          A world of handmade magic, waiting to be discovered.
        </p>


        {/* Craft Grid */}
        <div className="absolute top-[34%] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-x-4 gap-y-8 md:gap-6 justify-items-center">

          {crafts.map((craft, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >

              {/* Organic Circle */}
              <div
                className={`
                  w-16 h-16
                  sm:w-18 sm:h-18
                  md:w-20 md:h-20
                  flex items-center justify-center
                  text-2xl md:text-3xl
                  shadow-sm
                  ${craft.bgColor}
                `}
                style={{
                  borderRadius:
                    index % 2 === 0
                      ? "45% 55% 60% 40% / 50% 45% 55% 50%"
                      : "55% 45% 40% 60% / 45% 55% 50% 50%",
                }}
              >
                <span>{craft.icon}</span>
              </div>

              {/* Craft Name */}
              <span className="mt-3 text-xs md:text-sm font-medium text-neutral-700 tracking-wide text-center">
                {craft.name}
              </span>

            </div>
          ))}

        </div>


        {/* ================= FEATURED AREA ================= */}
        <div className="absolute top-[55%] left-0 w-full h-[45%] bg-blue-100">

          <div className="w-full h-full flex items-center justify-center">

            <div className="bg-red-100 h-[75%] w-[55%] sm:w-[40%] md:w-[20%] border-2 border-dashed border-red-300">

            </div>

          </div>

        </div>

      </section>


    </div>






  );
};

export default Home;