import React from "react";
import { LineSquiggle, MoveRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-creator-bg-butter ">
      <div className="lg:h-screen min-h-screen w-full bg-gray-400 flex lg:flex-row flex-col ">
        <div className=".heading bg-red-400 min-h-[50vh] lg:h-full w-full lg:w-1/2 relative flex flex-col items-center justify-center p-10 px-30">
          {/* small stories div */}

          <div className="bg-blue-500 flex flex-col items-left justify-between gap-1 w-full text-creator-text ">
            <h1 className="text-6xl font-thin font-caveat text-creator-text -skew-y-4 ">
              Small
            </h1>
            <h2 className="text-6xl font-thin font-caveat text-creator-text -skew-y-4">
              Creators.
            </h2>
          </div>

          {/*big stories div */}

          <div className="bg-gray-500 flex flex-col items-left justify-space-between w-full py-5 text-pink-800">
            <h1 className="text-6xl font-thin font-caveat text-creator-pink -skew-y-2 ">
              Big Stories.
            </h1>
          </div>

          {/* handmade div */}

          <div className="bg-red-500 flex flex-col items-left justify-space-between w-full py-2 text-pink-800">
            <h3 className="text-s font-thin font-caveat text-creator-text -skew-y-1">
              Handmade * DIY * Crochet & More <br/> <LineSquiggle color="pink" />
            </h3>
          </div>

          {/* explore more button div */}

          <div className="bg-green-500 flex items-left justify-space-between w-full py-5 ">
            <button className="bg-creator-pink hover:bg-creator-accent text-white py-2 px-4 text-sm rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Explore More
              <span>
                <MoveRight />
              </span>
            </button>
          </div>
        </div>


        
        <div className=".heading bg-yellow-100 min-h-[50vh] lg:h-full w-full lg:w-1/2 relative flex flex-col items-center justify-center p-50 relative">
        
        

           <div className="bg-blue-500 flex flex-col items-left justify-between gap-1 w-full h-80 text-creator-text border-20  border-creator-bg rotate-10" >
           <img src="public\photo-1579783902915-f0b0de2c2eb3.avif" alt="Image" className="w-full h-full object-cover" />
          </div>

             <div className="absolute top-50 left-60 bg-blue-500 flex flex-col items-left justify-between gap-1 w-90 h-80 text-creator-text border-20  border-creator-bg rotate-15" >
           <img src="public\photo-1578301978018-3005759f48f7.avif" alt="Image" className="w-full h-full object-cover" />
          </div> 

            <div className="absolute top-50 left-50 bg-blue-500 flex flex-col items-left justify-between gap-1 w-90 h-80 text-creator-text border-20  border-creator-bg -rotate-15" >
           <img src="public\photo-1552160793-cbaf3ebcba72.avif" alt="Image" className="w-full h-full object-cover" />
          </div> 
        
        
        </div>
      </div>
      <div className="h-screen w-full bg-yellow-800"></div>
    </div>
  );
};

export default Home;
