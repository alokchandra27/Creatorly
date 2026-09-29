import React from "react";
import { ArrowRight } from "lucide-react";

const PeoplePassionPurpose = () => {
  const goToExplore = () => {
    navigate("/explore");
  };

  return (
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
              src="/src/assets/sunflowerKeychains.jpeg"
              alt="Creator working on handmade art"
              className="h-full w-full object-cover "
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
              src="/src/assets/purse.jpeg"
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
              src="/src/assets/bookMark .jpeg"
              alt="Handmade crochet"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Flower */}

          <img
            // src="/assets/sunflowerKeychains.jpeg"
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
            A handmade product isn't just another product. Someone imagined it,
            made it, packed it and put a piece of themselves into it.
          </p>

          {/* JOURNEY */}

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <span className="rounded-full bg-pink-100 px-3 py-2">Creator</span>

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
  );
};

export default PeoplePassionPurpose;
