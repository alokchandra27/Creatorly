import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

const ExploreByCraft = () => {

  const ExploreByCraftRef = useRef(null);
  const gridRef = useRef(null);

 useGSAP(
    () => {
      // 1. Text Animation Trigger (Jab pure section ka top 80% screen par aayega)
      gsap.from(".animate-text", {
        scrollTrigger: {
          trigger: ExploreByCraftRef.current,
          start: "top 80%", 
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      });

      // 2. Buttons Animation Trigger (Sirf tab chalega jab actual craft grid screen ke 80% par aayega)
      gsap.from(".animate-buttons", {
        scrollTrigger: {
          trigger: gridRef.current, // ➔ Ab trigger poora section nahi, balki sirf buttons ka container hai
          start: "top 80%", 
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
      });
    },
    {
      scope: ExploreByCraftRef,
    }
  );



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
    <section ref={ExploreByCraftRef} className="relative w-full bg-white px-6 py-20 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="animate-text font-caveat text-lg tracking-wide text-creator-pink sm:text-xl -rotate-3">Different hands. Different trades. Same heart.</p>

        <h2 className="animate-text mt-2 font-playfair text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">Explore by Craft</h2>

        <p className="animate-text mx-auto mt-3 max-w-lg text-sm text-neutral-500">A world of independent brands, waiting to be discovered."</p>

        {/* CRAFT GRID */}

        <div ref={gridRef} className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {crafts.map((craft, index) => (
            <button key={craft.name} onClick={() => goToCraft(craft.name)} className="animate-buttons group flex flex-col items-center">
              <div
                className={`flex h-20 w-20 items-center justify-center text-3xl ${craft.bgColor} ${craft.textColor} shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-md sm:h-24 sm:w-24`}
                style={{
                  borderRadius: index % 2 === 0 ? "45% 55% 60% 40% / 50% 45% 55% 50%" : "55% 45% 40% 60% / 45% 55% 50% 50%",
                }}
              >
                {craft.icon}
              </div>

              <span className="mt-3 text-sm font-medium text-neutral-700 transition-colors group-hover:text-creator-pink">{craft.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByCraft;
