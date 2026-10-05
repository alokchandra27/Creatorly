import { MoveRight , LineSquiggle} from "lucide-react";



const LeftDiv = () => {
  return (
       <div className="relative hidden h-full min-h-0 w-full overflow-hidden px-8 py-10 sm:px-12 md:px-16 lg:flex lg:w-1/2 lg:px-20 xl:px-24">
         
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-creator-pink/10 blur-3xl" />

          <div className="absolute bottom-[-120px] left-[20%] w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-xl flex-col justify-center pb-10">
            {/* Small label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-creator-pink" />

              <p className="font-caveat text-xl text-creator-pink">
                A home for creative work
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h1 className="font-caveat text-5xl font-normal leading-[0.82] -rotate-2 text-neutral-800 xl:text-5xl">
                Make
              </h1>

              <h2 className="font-caveat text-5xl font-normal leading-[0.82] -rotate-2 text-neutral-800 xl:text-5xl">
                it Creatorly.
              </h2>
              </div>

              <h2 className="mt-2 font-caveat text-5xl font-normal leading-[0.82] -rotate-1 text-creator-pink xl:text-5xl">
                Share your story.
              </h2>
            </div>

            <div className="mt-6 max-w-md">
              <p className="text-sm leading-6 text-neutral-500 xl:text-sm">
                Your work, your space, your people. Creatorly helps you put it
                all in one place.
              </p>

              <LineSquiggle
                size={40}
                strokeWidth={1.5}
                className="text-creator-pink"
              />
            </div>


            <div className="mt-2 flex flex-wrap gap-2">
              <div className="border border-neutral-200 bg-white px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm">
                ✦ Your own storefront
              </div>

              <div className="border border-neutral-200 bg-white px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm">
                ♡ Showcase your work
              </div>

              <div className="border border-neutral-200 bg-white px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm">
                ↗ Share anywhere
              </div>
            </div>

            <div className="mt-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-creator-pink text-white">
                  <MoveRight size={15} />
                </span>

                <span>Your creator journey starts here.</span>
              </div>
            </div>
          </div>


          <div className="absolute bottom-[16%] right-[5%] aspect-square w-[150px] rotate-6 border-[7px] border-creator-bg bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] xl:right-[6%] xl:w-[190px]">
            <img
              src="/src/assets/yarnKaGola.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[15%] right-[28%] aspect-square w-[90px] -rotate-12 border-[6px] border-creator-bg bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] xl:right-[30%] xl:w-[110px]">
            <img
              src="/src/assets/clay.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[10%] right-[1%] xl:right-[5%] opacity-90">
            <img src="/src/assets/palette.webp" alt="" className="w-12 xl:w-16" />
          </div>


          <div className="absolute bottom-[12%] left-[7%] opacity-70">
            <img
              src="/src/assets/redcolor.webp"
              alt=""
              className="w-12 xl:w-16"
            />
          </div>
        </div>
  )
}

export default LeftDiv