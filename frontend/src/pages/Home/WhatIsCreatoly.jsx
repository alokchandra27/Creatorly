import React from 'react'
import creator1 from "/src/assets/contentCreator.jpg";
import { Heart, Sparkles, Share2, ShoppingBag } from "lucide-react";

const WhatIsCreatoly = () => {


  return (
    <section className="relative w-full bg-[#FAF7F2] px-6 py-20 sm:px-10 md:py-24 lg:px-20">
        <div
          className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20"
        >
          {/* LEFT IMAGE */}

          <div className="relative w-full lg:w-[48%]">
            <div
              className="relative mx-auto max-w-xl overflow-hidden rounded-[3rem] bg-[#F8E8E7] p-5 sm:p-8"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={creator1}
                  alt="Creator storefront"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -right-2 top-8 rotate-12 text-creator-pink">
                <Heart size={34} fill="currentColor" />
              </div>

              <div className="absolute bottom-6 left-4 rotate-[-12deg]">
                <img
                  // src={flowerImage}
                  alt=""
                  className="w-16 sm:w-20"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="w-full lg:w-[52%]">
            <p className="mb-2 font-caveat text-lg text-creator-pink sm:text-xl">
              More than a product link.
            </p>

            <h2
              className="font-playfair text-3xl font-bold leading-tight text-creator-text sm:text-4xl md:text-5xl"
            >
              A storefront made
              <br />
              for creators.
            </h2>

            <p
              className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base"
            >
              Creatorly gives independent creators a simple place to showcase
              what they make, tell their story, and let people discover and
              order from them directly.
            </p>

            {/* FEATURES */}

            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Feature 1 */}

              <div className="group">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-creator-pink transition-transform duration-300 group-hover:scale-110"
                >
                  <Sparkles size={21} />
                </div>

                <h3 className="font-semibold text-neutral-800">
                  Show your work
                </h3>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Create your own simple mini storefront.
                </p>
              </div>

              {/* Feature 2 */}

              <div className="group border-neutral-200 sm:border-l sm:pl-5">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110"
                >
                  <Share2 size={21} />
                </div>

                <h3 className="font-semibold text-neutral-800">
                  Share anywhere
                </h3>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Share your Creatorly link on Instagram or WhatsApp.
                </p>
              </div>

              {/* Feature 3 */}

              <div className="group border-neutral-200 sm:border-l sm:pl-5">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 transition-transform duration-300 group-hover:scale-110"
                >
                  <ShoppingBag size={21} />
                </div>

                <h3 className="font-semibold text-neutral-800">
                  Sell directly
                </h3>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Let customers discover products and connect with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhatIsCreatoly