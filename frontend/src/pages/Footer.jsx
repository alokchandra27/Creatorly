import React from 'react'
import { MessageCircle, Heart } from 'lucide-react'

const Footer = () => {

    const goToExplore = () => {
        navigate("/explore");
      }

      const goToAuth = () => {
        navigate("/auth");
      }
  return (
     <footer
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-5
          px-6
          py-8
          sm:px-10
          md:flex-row
        "
      >
        {/* BRAND */}

        <div className="font-caveat text-2xl text-neutral-800">
          Creatorly
          <span className="ml-1 text-creator-pink">♥</span>
        </div>

        {/* LINKS */}

        <div className="flex flex-wrap justify-center gap-5 text-xs text-neutral-500">
          <button
            onClick={() => navigate("/")}
            className="transition-colors hover:text-creator-pink"
          >
            Home
          </button>

          <button
            onClick={goToExplore}
            className="transition-colors hover:text-creator-pink"
          >
            Explore
          </button>

          <button
            onClick={goToExplore}
            className="transition-colors hover:text-creator-pink"
          >
            Creators
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("creatorly-how-it-works");

              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="transition-colors hover:text-creator-pink"
          >
            How it Works
          </button>
        </div>

        {/* SOCIAL */}

        <div className="flex items-center gap-4 text-neutral-500">
          {/* <Instagram
            size={17}
            className="cursor-pointer transition-colors hover:text-creator-pink"
          /> */}

          <MessageCircle
            size={17}
            className="cursor-pointer transition-colors hover:text-creator-pink"
          />

          <Heart size={17} className="text-creator-pink" fill="currentColor" />
        </div>
      </footer>
  )
}

export default Footer