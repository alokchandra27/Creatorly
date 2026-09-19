import { useEffect } from "react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";

export default function Intro({ onIntroComplete }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onIntroComplete(); // Jab intro animations khatam honge, yeh home page reveal karega
      }
    });

    // 1. Text elements ko niche se upar fade-in karein (Staggered effect)
    tl.fromTo(".intro-text-element", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );

    // 2. Pure intro page ko 1.2 seconds tak screen par hold rakhein taaki log feel le sakein
    tl.to({}, { duration: 1.2 });

    // 3. Poori screen ko softly fade-out karke background website reveal karein
    tl.to(".intro-full-screen", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    });

  }, [onIntroComplete]);

  return (
    <div className="intro-full-screen fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FAF9F6] text-[#2C2A29] select-none">
      <div className="text-center font-sans max-w-md px-6">
        
        {/* Soft Animated Icon */}
        <div className="intro-text-element opacity-0 mb-4 flex justify-center text-amber-800">
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>

        {/* The Welcome Hook Message */}
        <h2 className="intro-text-element opacity-0 text-3xl font-serif font-bold text-gray-950 mb-2 leading-tight">
          Where Stories Shape Art
        </h2>
        
        <p className="intro-text-element opacity-0 text-sm tracking-wide text-gray-500 font-medium uppercase">
          Welcome to Creatorly
        </p>

      </div>
    </div>
  );
}
