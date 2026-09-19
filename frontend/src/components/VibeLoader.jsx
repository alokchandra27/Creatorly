import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

// export default function VibeLoader({ onComplete }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const counterObj = { value: 0 };
    
//     // 1. 0% se 100% ka numeric counter animation
//     gsap.to(counterObj, {
//       value: 100,
//       duration: 2.0, // 2 seconds mein load hoga
//       ease: "power1.out",
//       onUpdate: () => {
//         setProgress(Math.floor(counterObj.value));
//       }
//     });

//     const tl = gsap.timeline({
//       onComplete: () => {
//         if (onComplete) onComplete(); // Loader khatam hone par next page triggers hoga
//       }
//     });

//     // 2. Cute elements pop-up stagger animation
//     tl.fromTo(".floating-emoji", 
//       { scale: 0, y: 30, opacity: 0 }, 
//       { scale: 1, y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" }
//     );

//     // Continuous floating breathing effect (Loop)
//     gsap.to(".floating-emoji", {
//       y: "-=10",
//       duration: 1.0,
//       repeat: -1,
//       yoyo: true,
//       stagger: 0.1,
//       ease: "sine.inOut"
//     });

//     // 3. Screen upward exit effect
//     tl.to(".loader-screen", {
//       yPercent: -100,
//       duration: 0.8,
//       ease: "power3.inOut",
//       delay: 0.3
//     });

//   }, [onComplete]);

//   return (
//     <div className="loader-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-creator-bg text-creator-text select-none">
//       <div className="flex gap-6 mb-8 text-4xl">
//         <span className="floating-emoji">🧶</span>
//         <span className="floating-emoji">🎨</span>
//         <span className="floating-emoji">🌸</span>
//         <span className="floating-emoji">✏️</span>
//       </div>
//       <div className="text-center font-sans">
//         <p className="text-xs tracking-widest text-creator-primary font-medium uppercase mb-1">
//           Assembling Creators
//         </p>
//         <h1 className="text-6xl font-serif font-semibold">
//           {progress}%
//         </h1>
//       </div>
//     </div>
//   );
// }

const VibeLoader = () => {
  return (
        <div className="loader-screen fixed inset-0 z-50 flex flex-col  items-center justify-center bg-creator-bg text-creator-text select-none ">
          <div className='flex gap-2'>
              <span className="floating-emoji">🧶</span>
            <span className="floating-emoji">🎨</span>
            <span className="floating-emoji">🌸</span>
            <span className="floating-emoji">✏️</span>
            <span className="floating-emoji">🖌️</span>      </div>      
        <div className="text-center font-sans z">
         <p className="text-xs tracking-widest text-creator-primary font-medium uppercase mb-1">
          Assembling Creators
                 </p>
        </div>
        </div>
    
  )
}

export default VibeLoader
