import React from 'react'

const ExploreByCraft = () => {


     // =======================================================
  // CRAFTS
  // =======================================================

  const crafts = [
    {
      name: "Clay",
      icon: "🏺",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      name: "Crochet",
      icon: "🧶",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      name: "Resin",
      icon: "✨",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
    },
    {
      name: "Wood",
      icon: "🪵",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
    },
    {
      name: "Metal",
      icon: "⛓️",
      bgColor: "bg-slate-100",
      textColor: "text-slate-700",
    },
    {
      name: "Fabric",
      icon: "🧵",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
    },
    {
      name: "Petal",
      icon: "🌸",
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
    },
    {
      name: "Other",
      icon: "✦",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-700",
    },
  ];
  return (
       <section className="relative w-full bg-white px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-caveat text-lg tracking-wide text-creator-pink sm:text-xl">
            Different hands. Different crafts. Same heart.
          </p>

          <h2
            className="
              mt-2
              font-playfair
              text-3xl
              font-bold
              text-neutral-800
              sm:text-4xl
              md:text-5xl
            "
          >
            Explore by Craft
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm text-neutral-500">
            A world of handmade ideas, waiting to be discovered.
          </p>

          {/* CRAFT GRID */}

          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-5xl
              grid-cols-2
              gap-6
              sm:grid-cols-4
              lg:grid-cols-8
            "
          >
            {crafts.map((craft, index) => (
              <button
                key={craft.name}
                onClick={() => goToCraft(craft.name)}
                className="group flex flex-col items-center"
              >
                <div
                  className={`
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    text-3xl
                    ${craft.bgColor}
                    ${craft.textColor}
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:-translate-y-2
                    group-hover:scale-105
                    group-hover:shadow-md
                    sm:h-24
                    sm:w-24
                  `}
                  style={{
                    borderRadius:
                      index % 2 === 0
                        ? "45% 55% 60% 40% / 50% 45% 55% 50%"
                        : "55% 45% 40% 60% / 45% 55% 50% 50%",
                  }}
                >
                  {craft.icon}
                </div>

                <span
                  className="
                    mt-3
                    text-sm
                    font-medium
                    text-neutral-700
                    transition-colors
                    group-hover:text-creator-pink
                  "
                >
                  {craft.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ExploreByCraft