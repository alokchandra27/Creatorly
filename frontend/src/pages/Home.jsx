import React from "react";
import { LineSquiggle, MoveRight, Heart } from "lucide-react";

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

  // Reference image ke accurate cards ka data array
  const creators = [
    {
      name: "MystriiSpot",
      location: "Rishikesh",
      desc: "Handmade with a little magic ✨",
      image: "/src/assets/creator1.png", // Image path apne hisab se update karein
      avatar: "/src/assets/avatar1.png"
    },
    {
      name: "TheClayCorner",
      location: "Dehradun",
      desc: "Dream it • Shape it • Love it",
      image: "/src/assets/creator2.png",
      avatar: "/src/assets/avatar2.png"
    },
    {
      name: "ThreadAndTales",
      location: "Rishikesh",
      desc: "Crochet stories in every loop",
      image: "/src/assets/creator3.png",
      avatar: "/src/assets/avatar3.png"
    },
    {
      name: "WoodenWhimsy",
      location: "Dehradun",
      desc: "Carved with care",
      image: "/src/assets/creator4.png",
      avatar: "/src/assets/avatar4.png"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-creator-bg text-creator-text overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="min-h-screen w-full flex flex-col lg:flex-row">
        {/* ================= LEFT ================= */}
        <div className="w-full lg:w-1/2 min-h-[55vh] lg:min-h-screen flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-16">
          {/* Small Creators */}
          <div className="w-full">
            <h1 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none -rotate-3"> Small </h1>
            <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none -rotate-3"> Creators. </h2>
          </div>
          {/* Big Stories */}
          <div className="mt-5">
            <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none text-creator-pink -rotate-2"> Big Stories. </h2>
          </div>
          {/* Description */}
          <div className="mt-6">
            <p className="font-caveat text-xl sm:text-2xl text-creator-text"> Handmade * DIY * Crochet & More </p>
            <LineSquiggle size={100} strokeWidth={1.5} className="text-creator-pink mt-1" />
          </div>
          {/* CTA */}
          <div className="mt-6">
            <button className="bg-creator-pink hover:bg-creator-accent text-white py-3 px-5 rounded-full flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105"> Explore More <MoveRight size={18} /> </button>
          </div>
        </div>
        {/* ================= RIGHT ================= */}
        <div className="w-full lg:w-1/2 min-h-[45vh] lg:min-h-screen relative flex items-center justify-center px-6 sm:px-10 py-12 lg:py-0">
          {/* Left leaf */}
          <div className="absolute top-[8%] left-[5%] sm:left-[10%] rotate-270 z-10">
            <img src="/src/assets/leafStem.png" alt="" className="w-16 sm:w-20 md:w-24" />
          </div>
          {/* Right leaf */}
          <div className="absolute top-[10%] right-[10%] sm:right-[3%] ">
            <img src="/src/assets/leafStem.png" alt="" className="w-16 sm:w-20 md:w-24" />
          </div>
          {/* Main image */}
          <div className="relative w-[75%] sm:w-[65%] md:w-[55%] lg:w-[70%] aspect-[4/5] z-10 rotate-6 border-[10px] sm:border-[14px] border-creator-bg shadow-sm max-h-[calc(90vh-80px)] h-auto">
            <img src="/photo-1579783902915-f0b0de2c2eb3.avif" alt="Artwork" className="w-full h-full object-cover" />
          </div>
          {/* Left image */}
          <div className="absolute top-[18%] left-[8%] sm:left-[12%] md:left-[15%] lg:left-[5%] w-[42%] sm:w-[38%] md:w-[34%] lg:w-[42%] aspect-[4/5] z-20 -rotate-12 border-[8px] sm:border-[12px] border-creator-bg">
            <img src="/photo-1552160793-cbaf3ebcba72.avif" alt="Artwork" className="w-full h-full object-cover" />
          </div>
          {/* Right image */}
          <div className="absolute bottom-[15%] right-[5%] sm:right-[10%] md:right-[12%] lg:right-[2%] w-[40%] sm:w-[36%] md:w-[32%] lg:w-[40%] aspect-[4/5] z-30 rotate-12 border-[8px] sm:border-[12px] border-creator-bg">
            <img src="/photo-1578301978018-3005759f48f7.avif" alt="Artwork" className="w-full h-full object-cover" />
          </div>
          {/* Yarn */}
          <div className="absolute bottom-[5%] right-[5%] sm:right-[8%] z-40">
            <img src="/src/assets/yarn.png" alt="" className="w-20 sm:w-24 md:w-28 lg:w-32" />
          </div>
          {/* Daisy */}
          <div className="absolute bottom-[5%] left-[5%] sm:left-[12%] z-40">
            <img src="/src/assets/flowerDaisy.png" alt="" className="w-20 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>
      </section>

      {/* ================= EXPLORE BY CRAFT & FEATURED CREATORS ================= */}
      <section className="min-h-screen relative w-full px-6 sm:px-10 py-24 flex flex-col items-center">
        <h7 className="font-playfair text-xs md:text-base text-center -skew-y-3 font-caveat text-primary-text tracking-wider"> Different hands. Different crafts. Same heart. </h7>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary-text text-center max-w-3xl leading-tight mt-2 px-4"> Explore by Craft</h1>
        <h7 className="font-sans text-xs md:text-sm text-center font-caveat text-primary-text tracking-wider mt-1"> A world of handmade magic, waiting to be discovered. </h7>

        {/* Craft Items Grid */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-8 gap-6 justify-items-center items-center px-4 mt-12">
          {crafts.map((craft, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 shadow-sm ${craft.bgColor}`} style={{ borderRadius: index % 2 === 0 ? '45% 55% 60% 40% / 50% 45% 55% 50%' : '55% 45% 40% 60% / 45% 55% 50% 50%' }} >
                <span>{craft.icon}</span>
              </div>
              <span className="mt-3 text-xs md:text-sm font-medium text-neutral-700 tracking-wide group-hover:text-neutral-900"> {craft.name} </span>
            </div>
          ))}
        </div>

        {/* ================= FEATURED CREATORS SECTION ================= */}
         <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
          <p className="font-caveat text-lg text-[#D96B86] tracking-widest font-bold">Real people. Real passion. ✨</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-800 mt-1">
            Featured Creators
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-2">
            Meet the amazing creators who bring unique ideas to life.
          </p>
        </div>

        {/* Responsive Grid for Dynamic Cards */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {creators.map((creator, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col group cursor-pointer"
            >
              {/* Card Banner Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Heart/Like Action Overlay */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-neutral-500 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                  <Heart size={16} />
                </button>
              </div>

              {/* Creator Metadata Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  {/* Identity Row */}
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name} 
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-neutral-100"
                    />
                    <div>
                      <h4 className="font-sans font-semibold text-sm text-neutral-800 tracking-wide">{creator.name}</h4>
                      <div className="flex items-center text-[10px] text-neutral-400 font-medium">
                        <span>{creator.followers} followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </section>



          {/* More then just a platform */}

            <section className="min-h-screen w-full flex flex-col lg:flex-row">
        {/* ================= LEFT ================= */}
        <div className="w-full lg:w-1/2 min-h-[55vh] lg:min-h-screen flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-16">
          {/* Small Creators */}
          <div className="w-full">
            <h1 className="font-caveat text-6xl sm:text-7xl md:text-xl font-normal leading-none "> More than just a platform. </h1>
            {/* <h2 className="font-caveat text-6xl sm:text-7xl md:text-8xl font-normal leading-none -rotate-3"> Creators. </h2> */}
          </div>
          {/* Big Stories */}
          <div className="mt-5  ">
            <h2 className="font-caveat text-6xl sm:text-7xl md:text-5xl font-normal leading-15 text-creator-pink "> It's people , passion and purpose. </h2>
          </div>
          {/* Description */}
          <div className="mt-6">
            <p className="font-caveat text-xl sm:text-base text-creator-text"> Every purchase supports a creator dreams. <br/> Be a part of something meaningful. </p>
            <LineSquiggle size={100} strokeWidth={1.5} className="text-creator-pink mt-1" />
          </div>
          {/* CTA */}
          <div className="mt-6">
            <button className="bg-creator-pink hover:bg-creator-accent text-white py-3 px-5 rounded-full flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105"> Support creator <MoveRight size={18} /> </button>
          </div>
        </div>
        {/* ================= RIGHT ================= */}
        <div className="w-full lg:w-1/2 min-h-[45vh] lg:min-h-screen relative flex items-center justify-center px-6 sm:px-10 py-12 lg:py-0">
          {/* Left leaf */}
          <div className="absolute top-[8%] left-[5%] sm:left-[10%] rotate-270 z-10">
            <img src="/src/assets/leafStem.png" alt="" className="w-16 sm:w-20 md:w-24" />
          </div>
          {/* Right leaf */}
          <div className="absolute top-[10%] right-[10%] sm:right-[3%] ">
            <img src="/src/assets/leafStem.png" alt="" className="w-16 sm:w-20 md:w-24" />
          </div>
          
          {/* Left image */}
          <div className="absolute top-[18%] left-[8%] sm:left-[12%] md:left-[15%] lg:left-[5%] w-[42%] sm:w-[38%] md:w-[34%] lg:w-[60%] h-[40%] sm:h-[35%] md:h-[30%] lg:h-[60%]  z-20  border-[8px] sm:border-[12px] border-red-100 -rotate-12">
            <img src="/photo-1552160793-cbaf3ebcba72.avif" alt="Artwork" className="w-full h-full object-cover" />
          </div>
         
          {/* Yarn */}
          <div className="absolute bottom-[5%] right-[5%] sm:right-[8%] z-40">
            <img src="/src/assets/palette.png" alt="" className="w-20 sm:w-24 md:w-28 lg:w-32" />
          </div>
          {/* Daisy */}
          <div className="absolute bottom-[5%] left-[5%] sm:left-[12%] z-40">
            <img src="/src/assets/flowerDaisy.png" alt="" className="w-20 sm:w-24 md:w-28 lg:w-32" />
          </div>
        </div>
      </section>

    </div>
  );
}
export default Home;