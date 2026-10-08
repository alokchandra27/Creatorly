import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PeoplePassionPurpose = () => {
  const navigate = useNavigate();
  const componentRef = useRef(null);
  const contentTriggerRef = useRef(null);

  const goToExplore = () => {
    navigate("/explore");
  };

  useGSAP(() => {
    // 1. LEFT SIDE - LAYERED IMAGES ENTRANCES
    const imagesTl = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      }
    });

    imagesTl.from(".animate-ppp-img", {
      scale: 0.85,
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out"
    });

    // 2. RIGHT SIDE - CONTENT SEQUENCE (Heading, Tags, Button)
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: contentTriggerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    contentTl.from(".animate-ppp-text", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out"
    })
    .from(".animate-ppp-tag", {
      x: -15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.2")
    .from(".animate-ppp-btn", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.15");

  }, { scope: componentRef });

  return (
    <section ref={componentRef} className="w-full bg-white px-6 py-20 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        
        {/* IMAGES CONTAINER */}
        <div className="relative min-h-[380px] w-full max-w-xl lg:w-1/2">
          
          {/* IMAGE 1 (Main Left) */}
          <div className="animate-ppp-img absolute left-[8%] top-[12%] z-20 h-[65%] w-[55%] rotate-[-8deg] overflow-hidden border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:border-[12px]">
            <img
              src="/src/assets/sunflowerKeychains.webp"
              alt="Creator working on handmade art"
              className="h-full w-full object-cover scale-120 transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* IMAGE 2 (Top Right Backing) */}
          <div className="animate-ppp-img absolute right-[8%] top-[5%] z-10 h-[48%] w-[38%] rotate-6 overflow-hidden border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:border-[10px]">
            <img
              src="/src/assets/clayclay.webp"
              alt="Handmade products"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* IMAGE 3 (Bottom Right Front) */}
          <div className="animate-ppp-img absolute bottom-[3%] right-[12%] z-30 h-[42%] w-[40%] rotate-[-4deg] overflow-hidden border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:border-[10px]">
            <img
              src="/src/assets/crochetproduct.webp"
              alt="Handmade crochet"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

        </div>

        {/* CONTENT */}
        <div ref={contentTriggerRef} className="w-full lg:w-1/2">
          <p className="animate-ppp-text font-caveat text-lg text-creator-pink sm:text-xl">
            Built for the founders behind the brands.
          </p>

          <h2 className="animate-ppp-text mt-2 font-playfair text-3xl font-bold leading-tight text-neutral-800 sm:text-4xl md:text-5xl">
            It's about people,
            <br />
            passion and purpose.
          </h2>

          <p className="animate-ppp-text mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            A product from an independent business isn't just another item on a shelf. An entrepreneur dreamed it, perfected it, packed it, and poured their heart into building it.
          </p>

          {/* STEPS FLOW TAGS */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <span className="animate-ppp-tag bg-pink-100 px-3 py-2">The Founder</span>
            <span className="animate-ppp-tag flex items-center"><ArrowRight size={14} /></span>
            
            <span className="animate-ppp-tag bg-yellow-100 px-3 py-2">Their Passion</span>
            <span className="animate-ppp-tag flex items-center"><ArrowRight size={14} /></span>
            
            <span className="animate-ppp-tag bg-green-100 px-3 py-2">Their Brand</span>
            <span className="animate-ppp-tag flex items-center"><ArrowRight size={14} /></span>
            
            <span className="animate-ppp-tag bg-purple-100 px-3 py-2">Their store</span>
            <span className="animate-ppp-tag flex items-center"><ArrowRight size={14} /></span>
            
            <span className="animate-ppp-tag bg-orange-100 px-3 py-2">Your purchase</span>
          </div>

          {/* DISCOVER BUTTON */}
          <button
            onClick={goToExplore}
            className="animate-ppp-btn group mt-8 flex items-center gap-2 bg-creator-pink px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-creator-accent hover:shadow-lg cursor-pointer"
          >
            Discover Independent Brands
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PeoplePassionPurpose;
