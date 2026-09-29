import React from 'react'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {

    const goToExplore = () => {
        navigate("/explore");
      }
      const goToAuth = () => {
        navigate("/auth");
      }
  return (
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
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={goToAuth}
              className="
                group
                flex
                items-center
                cursor-pointer
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
  )
}

export default FinalCTA