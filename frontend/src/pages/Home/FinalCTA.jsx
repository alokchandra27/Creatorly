import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const navigate = useNavigate();
  const ctaSectionRef = useRef(null);

  const goToExplore = () => {
    navigate("/explore");
  };
  const goToAuth = () => {
    navigate("/auth");
  };

  useGSAP(() => {
    // 1. Text Content Stagger Animation
    gsap.from(".animate-cta-text", {
      scrollTrigger: {
        trigger: ctaSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 35,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });

    // 2. Decorative Side Daisies Animation
    gsap.from(".animate-cta-flower-left", {
      scrollTrigger: {
        trigger: ctaSectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      scale: 0.6,
      rotation: -45,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.5)"
    });

    gsap.from(".animate-cta-flower-right", {
      scrollTrigger: {
        trigger: ctaSectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      scale: 0.6,
      rotation: 45,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.5)"
    });

    // 3. CTA Buttons Entrance Animation
    gsap.from(".animate-cta-btn", {
      scrollTrigger: {
        trigger: ctaSectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: "power2.out"
    });

  }, { scope: ctaSectionRef });

  return (
    <section ref={ctaSectionRef} className="relative mx-4 mb-6 overflow-hidden rounded-[2.5rem] bg-[#FBE8EA] px-6 py-16 sm:mx-6 sm:px-10 md:py-20 lg:mx-10">
      {/* Decorative flower - Left */}
      <img 
        src={"/src/assets/flowerDaisy.webp"} 
        alt="" 
        className="animate-cta-flower-left absolute -bottom-4 left-3 w-20 rotate-[-15deg] opacity-80 sm:left-8 sm:w-28" 
      />

      {/* Decorative flower - Right */}
      <img 
        src={"/src/assets/flowerDaisy.webp"} 
        alt="" 
        className="animate-cta-flower-right absolute -right-3 bottom-0 w-20 rotate 12 opacity-80 sm:right-8 sm:w-28" 
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="animate-cta-text font-caveat text-lg text-creator-pink sm:text-xl">
          Your next favorite find is waiting to be discovered.
        </p>

        <h2 className="animate-cta-text mt-3 font-playfair text-3xl font-bold leading-tight text-neutral-800 sm:text-4xl md:text-5xl">
          Explore independent brands.
          <br />
          Find something truly personal.
        </h2>

        <p className="animate-cta-text mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
          Discover unique products, learn the stories of the people who built them, and support an entrepreneur growing a business they love.
        </p>

        {/* CTA BUTTONS CONTAINER */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={goToExplore}
            className="animate-cta-btn group flex items-center cursor-pointer bg-creator-pink px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-creator-accent hover:shadow-lg"
          >
            Explore Independent Brands
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={goToAuth}
            className="animate-cta-btn group flex items-center cursor-pointer border border-creator-pink bg-white/70 px-6 py-3 text-sm font-medium text-creator-pink transition-colors duration-300 hover:bg-white"
          >
            I'm a Small Business Owner
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
