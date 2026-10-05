import React from "react";
import { Heart, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToExplore = () => {
    navigate("/explore");
  };

  const goToAuth = () => {
    navigate("/auth");
  };

  const sendFeedback = () => {
    window.location.href = "mailto:alokchandra2621@gmail.com?subject=Feedback%20for%20Creatorly&body=Hi%20Alok,%0A%0AI%20wanted%20to%20share%20some%20feedback%20about%20Creatorly:%0A%0A";
  };

  return (
    <footer className="border-t border-neutral-200/70 bg-creator-bg-butter px-5 pb-7 pt-10 sm:px-8 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* TOP FOOTER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* BRAND / DEVELOPER */}
          <div className="max-w-md">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-caveat text-3xl text-neutral-900">Creatorly</span>

              <Heart size={17} className="text-creator-pink" fill="currentColor" />
            </div>

            <p className="text-sm leading-6 text-neutral-500">A little space for small businesses to show what they make, tell their story, and connect directly with their customers.</p>

            {/* DEVELOPER CARD */}
            <button
              onClick={sendFeedback}
              className="group mt-5 flex w-fit items-center gap-3 rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-creator-pink/30 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-creator-pink/10 text-creator-pink">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Developed by</p>

                <p className="flex items-center gap-1 font-medium text-neutral-800">
                  Alok Chandra
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </div>
            </button>
          </div>

          {/* LINKS + CTA */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-12">
            {/* LINKS */}
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">Explore</p>

              <div className="flex flex-col gap-2.5 text-sm text-neutral-500">
                <button onClick={() => navigate("/")} className="w-fit transition-colors hover:text-creator-pink">
                  Home
                </button>

                <button onClick={goToExplore} className="w-fit transition-colors hover:text-creator-pink">
                  Explore
                </button>

                <button onClick={() => navigate("/our-story")} className="w-fit transition-colors hover:text-creator-pink">
                  Our Story
                </button>

                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById("creatorly-how-it-works")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
                  className="w-fit transition-colors hover:text-creator-pink"
                >
                  How it Works
                </button>
              </div>
            </div>

            {/* CREATOR CTA */}
            <div className="max-w-[220px]">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">Building something?</p>

              <button onClick={goToAuth} className="group flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-creator-pink">
                Create your store
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* FEEDBACK STRIP */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-neutral-200/80 bg-white/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Sparkles size={17} className="mt-0.5 shrink-0 text-creator-pink" />

            <div>
              <p className="text-sm font-medium text-neutral-800">Have an idea, found a bug, or just want to say hi?</p>

              <p className="mt-0.5 text-xs text-neutral-500">I'd genuinely love to hear what you think about Creatorly.</p>
            </div>
          </div>

          <button
            onClick={sendFeedback}
            className="flex w-fit items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-all duration-300 hover:border-creator-pink hover:text-creator-pink"
          >
            <Mail size={14} />
            Send feedback
          </button>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 flex flex-col gap-2 border-t border-neutral-200/70 pt-5 text-[11px] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Creatorly. Made with <Heart size={11} className="mx-0.5 inline text-creator-pink" fill="currentColor" /> for people who make things.
          </p>

          <p className="font-caveat text-base text-neutral-500">Developed by Alok Chandra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
