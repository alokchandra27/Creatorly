import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function VibeLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counterObj = { value: 0 };
    let elementsRevealed = false;

    // 1. Progress Counter Animation (0% to 100% in 2.5 seconds)
    gsap.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: "power1.out",
      onUpdate: () => {
        const current = Math.floor(counterObj.value);
        setProgress(current);

        // 🎯 MAGIC REVEAL: जैसे ही प्रोग्रेस 65%-70% पहुंचेगी, सारे क्राफ्ट एलिमेंट्स आ जाएंगे
        if (current >= 65 && !elementsRevealed) {
          elementsRevealed = true;

          // Elements Pop-up (Second Image details)
          gsap.fromTo(".aesthetic-element",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.5)" }
          );

          // Lines surrounding the 100% text (Second Image rays)
          gsap.fromTo(".progress-rays",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4 }
          );
        }
      },
      onComplete: () => {
        // 🚀 THE BIG EXIT: 100% होने के 0.5s बाद पूरा लोडर ऊपर स्लाइड होकर गायब हो जाएगा
        // gsap.to(".vibe-loader-screen", {
        //   yPercent: -100,
        //   duration: 0.8,
        //   ease: "power3.inOut",
        //   delay: 0.5,
        //   onComplete: () => {
        //     if (onComplete) onComplete();
        //   }
        // });
      }
    });

    // 🔄 Soft Breathing Effect: जो एलिमेंट्स स्क्रीन पर आ चुके हैं वो हल्के से हवा में तैरते रहेंगे
    gsap.to(".floating-item", {
      y: "-=8",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

  }, [onComplete]);

  return (
    <div className="vibe-loader-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-creator-bg-butter color-creator-text select-none overflow-hidden font-sans">
      {/* ─── BRAND NAME (TOP LEFT) ─── */}
      <div className="absolute font-caveat top-8 left-8 text-2xl font-bold tracking-wide">
        Creatorly
      </div>
      {/* ─── CORNER & SIDE AESTHETIC ELEMENTS (Second Image) ─── */}
      {/* Top Right: Sun / Star Doodles */}
      <div className="absolute top-10 right-12 opacity-40">
        <svg 
          className="lg:w-30 lg:h-30 md:w-20 md:h-20 w-10 h-10 transform -skew-y-6 text-black" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      </div>
      <div className="aesthetic-element floating-item opacity-0 absolute top-[10%] left-[45%] text-2xl">
        <svg 
          className="lg:w-30 lg:h-30 md:w-20 md:h-20 w-10 h-10 transform -skew-y-6 text-black" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>


      {/* Fixed: display-none replaced with Tailwind hidden utility */}
      <div className="aesthetic-element floating-item opacity-0 absolute top-[12%] right-[25%] text-3xl sm:hidden">
        🦋
      </div>

       <div className="aesthetic-element floating-item opacity-0 absolute bottom-[10%] right-[25%] text-3xl sm:hidden">
        🦋
      </div>

       <div className="aesthetic-element floating-item opacity-0 absolute top-[12%] left-[25%] text-3xl">
        🦋
      </div>


      {/* Top Left Paint Brush & Color Tube */}
      <div className="aesthetic-element floating-item opacity-0 absolute top-[10%] left-[8%] text-6xl -rotate-12">
        🖌️
      </div>
      
      {/* Center Left Star & Bottom Left Yarn */}
      <div className="absolute top-[40%] left-[5%] text-2xl opacity-40">
        <svg 
          className="lg:w-30 lg:h-30 md:w-20 md:h-20 w-10 h-10 transform -skew-y-6 text-black" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <div className="aesthetic-element floating-item opacity-0 absolute bottom-[10%] left-[4%] text-7xl">
        🧶
      </div>


      <div className="aesthetic-element floating-item opacity-0 absolute bottom-[5%] left-[15%] text-xl">
        ⭐
      </div>


       <div className="aesthetic-element floating-item opacity-0 absolute top-[10%] left-[15%] text-xl">
        ⭐
      </div>

      <div className="aesthetic-element floating-item opacity-0 absolute top-[10%] right-[35%] text-xl">
        ⭐
      </div>



      {/* <div className="absolute -bottom-20 left-0 opacity-40 ">
        <div
          className="lg:w-30 lg:h-30 md:w-20 md:h-20 w-40 h-40 transform skew-y-20  bg-black "
          style={{
            mask: "url('/src/assets/heart.svg') no-repeat center / contain",
            WebkitMask:
              "url('/src/assets/heart.svg') no-repeat center / contain",
          }}
        />
      </div> */}
      {/* Bottom Right: Palette (Always Visible like Image 1) & Cat Cup (Appears in Image 2) */}
 
      <div className="aesthetic-element floating-item opacity-0 absolute bottom-[8%] right-[40%] lg:right-[50%] text-7xl">
        🐱
      </div>
      <div className="floating-item absolute bottom-[10%] right-[10%] ">
        <img
          src="/src/assets/palette.png"
          alt="palette"
          className=" lg:h-30 md:h-20  h-20 "
        />
      </div>
      {/* Image 1 Palette */}
      {/* ─── CENTER CONTENT AREA ─── */}
      <div className="text-center max-w-sm px-6 relative z-10">
        <p className="text-xl italic font-caveat text-creator-text mb-2 transform -skew-y-10 tracking-wider">
          Loading...
        </p>

        {/* Percentage Counter with Dynamic Rays */}
        <div className="relative inline-block mb-3">
          <span className="progress-rays opacity-0 absolute -left-8 top-1/2 -translate-y-1/2 text-xl text-pink-400">
            ✨
          </span>
          <h1
            className={`text-7xl font-bold font-caveat transition-all duration-300 ${progress >= 65 ? "text-[#D4A373] scale-105" : "text-gray-800"}`}
          >
            {progress}%
          </h1>
          <span className="progress-rays opacity-0 absolute -right-8 top-1/2 -translate-y-1/2 text-xl text-pink-400">
            ✨
          </span>
        </div>

        {/* Dynamic Loading Bar */}
        <div className="w-56 h-[3px] bg-gray-200 rounded-full overflow-hidden mx-auto mb-5">
          <div
            className={`h-full transition-all duration-75 ease-out ${progress >= 65 ? "bg-pink-500" : "bg-gray-400"}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ─── DYNAMIC SUB-TEXT ─── */}
        {progress < 65 ? (
          <div className="animate-fade-in">
            <p className="text-sm font-caveat italic text-creator-text  mb-1 px-20 tracking-wider">
              something creative is on its way...
            </p>
            <span className="text-red-300 text-lg flex items-center justify-center gap-2">
              <img
                src="/src/assets/heart.svg"
                alt="My Icon"
                className="w-10 h-10 transform -skew-y-3"
              />
            </span>
          </div>
        ) : (
          <div className="animate-fade-in">
            <p className="text-sm font-caveat italic text-creator-text  mb-1 px-20 tracking-wider">
              You're one step closer to something beautiful
            </p>
            <span className="text-red-300 text-lg flex items-center justify-center gap-2">
              <img
                src="/src/assets/flowerDaisy.png"
                alt="My Icon"
                className="w-10 h-10 transform -skew-y-3"
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
