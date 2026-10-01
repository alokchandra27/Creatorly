import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PeoplePassionPurpose = () => {

  const navigate = useNavigate();

  const goToExplore = () => {
    navigate("/explore");
  };

  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 md:py-24 lg:px-16">
      <div
        className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20"
      >


        <div
          className="relative min-h-[380px] w-full max-w-xl lg:w-1/2"
        >


          <div
            className="absolute left-[8%] top-[12%] z-20 h-[65%] w-[55%] rotate-[-8deg] overflow-hidden border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:border-[12px]"
          >
            <img
              src="/src/assets/sunflowerKeychains.jpeg"
              alt="Creator working on handmade art"
              className="h-full w-full object-cover scale-120 transition-transform duration-300 hover:scale-110"
            />
          </div>


          <div
            className="absolute right-[8%] top-[5%] z-10 h-[48%] w-[38%] rotate-6 overflow-hidden border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:border-[10px]"
          >
            <img
              src="/src/assets/clayclay.jpg"
              alt="Handmade products"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>


          <div
            className="absolute bottom-[3%] right-[12%] z-30 h-[42%] w-[40%] rotate-[-4deg] overflow-hidden border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:border-[10px]"
          >
            <img
              src="/src/assets/crochetproduct.jpg"
              alt="Handmade crochet"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

        </div>

        {/* CONTENT */}

        <div className="w-full lg:w-1/2">
          <p className="font-caveat text-lg text-creator-pink sm:text-xl">
            Built for the founders behind the brands.
          </p>

          <h2
            className="mt-2 font-playfair text-3xl font-bold leading-tight text-neutral-800 sm:text-4xl md:text-5xl"
          >
            It's about people,
            <br />
            passion and purpose.
          </h2>

          <p
            className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base"
          >
            A product from an independent business isn't just another item on a shelf. An entrepreneur dreamed it, perfected it, packed it, and poured their heart into building it.
          </p>


          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <span className=" bg-pink-100 px-3 py-2">The Founder</span>

            <ArrowRight size={14} />

            <span className=" bg-yellow-100 px-3 py-2">
              Their Passion
            </span>

            <ArrowRight size={14} />

            <span className=" bg-green-100 px-3 py-2">
              Their Brand
            </span>

            <ArrowRight size={14} />

            <span className=" bg-purple-100 px-3 py-2">
              Their store
            </span>

            <ArrowRight size={14} />

            <span className=" bg-orange-100 px-3 py-2">
              Your purchase
            </span>
          </div>

          <button
            onClick={goToExplore}
            className="group mt-8 flex items-center gap-2  bg-creator-pink px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-creator-accent hover:shadow-lg cursor-pointer"
          >
            Discover Independent Brands
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
