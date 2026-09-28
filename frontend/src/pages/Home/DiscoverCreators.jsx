import React from 'react'
import { ArrowRight, Heart } from "lucide-react";

const DiscoverCreators = () => {

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

   const goToExplore = () => {
    navigate("/explore");
  };

  return (
       <section className="w-full bg-[#FAF7F2] px-6 py-20 sm:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}

          <div
            className="
              mb-10
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p className="font-caveat text-lg text-creator-pink sm:text-xl">
                Made by independent creators.
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
                Discover Creators
              </h2>

              <p className="mt-3 max-w-lg text-sm text-neutral-500">
                Explore artists, makers and small businesses building something
                of their own.
              </p>
            </div>

            <button
              onClick={goToExplore}
              className="
                group
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-creator-pink
                px-5
                py-2.5
                text-sm
                text-creator-pink
                transition-all
                duration-300
                hover:bg-creator-pink
                hover:text-white
              "
            >
              View All Creators
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* CREATOR CARDS */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {creators.map((creator) => (
              <article
                key={creator.username}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-neutral-100
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    // src={creator.image}
                    // alt={creator.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* HEART */}

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-neutral-500
                      shadow-sm
                      backdrop-blur
                      transition-all
                      hover:scale-110
                      hover:text-rose-500
                    "
                  >
                    <Heart size={16} />
                  </button>
                </div>

                {/* CONTENT */}

                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <img
                      // src={creator.avatar}
                      // alt={creator.name}
                      className="
                        h-9
                        w-9
                        rounded-full
                        object-cover
                        ring-2
                        ring-neutral-100
                      "
                    />

                    <div>
                      <h3 className="text-sm font-semibold text-neutral-800">
                        {creator.name}
                      </h3>

                      <p className="text-[11px] text-neutral-400">
                        {creator.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-neutral-500">
                    {creator.desc}
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-neutral-400">
                    {creator.category}
                  </p>

                  {/* VIEW STORE */}

                  <button
                    onClick={() => navigate(`/${creator.username}`)}
                    className="
                      group/button
                      mt-5
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-creator-pink
                      px-4
                      py-2.5
                      text-xs
                      font-medium
                      text-creator-pink
                      transition-all
                      duration-300
                      hover:bg-creator-pink
                      hover:text-white
                    "
                  >
                    View Store
                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  )
}

export default DiscoverCreators