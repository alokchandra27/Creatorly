import React from "react";
import { ArrowRight, Check, Link2, ShoppingBag, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatorlyValueSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShoppingBag,
      title: "Your products",
      text: "Show everything you create in one beautiful place.",
    },
    {
      icon: UserRound,
      title: "Your story",
      text: "Tell people who you are and what makes your work special.",
    },
    {
      icon: Link2,
      title: "Your way to order",
      text: "Let customers reach you directly through WhatsApp or Instagram.",
    },
  ];

  const benefits = [
    "No website building",
    "No customer login",
    "No complicated setup",
    "Share your store anywhere",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f3e8] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HERO ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Built for small creators
          </p>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Your work deserves
            <span className="block font-serif italic font-normal">
              its own space.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Create your free Creatorly store. Share one simple link on
            Instagram, WhatsApp or anywhere.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button
              onClick={() => navigate("/auth")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 sm:w-auto"
            >
              Create your store
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("creatorly-how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-7 py-3.5 text-sm font-medium text-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md active:scale-95 sm:w-auto"
            >
              See how it works
            </button>

          </div>
        </div>


        {/* ================= ONE LINK ================= */}
        <div className="mt-24 sm:mt-32">

          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
              One simple link
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              One link. Your whole store.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
              Everything your customer needs, without sending them through
              endless DMs.
            </p>
          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-900 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h4 className="text-lg font-semibold text-neutral-900">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>


        {/* ================= MADE FOR SMALL CREATORS ================= */}
        <div
          id="creatorly-how-it-works"
          className="mt-24 overflow-hidden rounded-[2rem] bg-neutral-900 px-7 py-12 text-white sm:px-12 lg:mt-32 lg:px-16 lg:py-16"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">
                Why Creatorly
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Made for small creators.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
                You don't need to become a website designer or learn
                complicated e-commerce tools. Creatorly keeps the setup
                simple so you can focus on what you actually create.
              </p>
            </div>


            <div className="grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900">
                    <Check size={15} strokeWidth={2.5} />
                  </div>

                  <span className="text-sm text-neutral-200">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CreatorlyValueSection;