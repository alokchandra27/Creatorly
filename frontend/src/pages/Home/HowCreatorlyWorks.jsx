import React from 'react'
import {Palette, UserRound, ArrowRight, Link2, MessageCircle, Package, Store } from 'lucide-react'

const HowCreatorlyWorks = () => {
  return (
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
  )
}

export default HowCreatorlyWorks