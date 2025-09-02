// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const DURATION_MS = 5000; // total time from 0% -> 100% (tweak if you want)

// export default function Loader() {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const step = Math.max(10, Math.round(DURATION_MS / 100)); // ~1% per step
//     const id = setInterval(() => {
//       setPercent((p) => {
//         if (p >= 100) {
//           clearInterval(id);
//           return 100;
//         }
//         return p + 1;
//       });
//     }, step);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[9999] bg-[#0B0B0B] overflow-hidden">
//       {/* Soft moving scanlines (very subtle) */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.06] scanlines" />
//       {/* Vignette to match depth */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_40%,#000_100%)] opacity-70" />

//       <div className="relative h-full w-full flex items-center justify-center">
//         {/* Container for the brand word */}
//         <div className="relative leading-[0.85] select-none">
//           {/* Base word in brand color with very low opacity */}
//           <motion.div
//             className="font-extrabold tracking-[-0.02em] text-center text-[#034D9D]/15 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
//             // Huge responsive font-size (keeps edges cut like the GIF)
//             style={{ fontSize: "min(18vw, 180px)" }}
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{
//               opacity: 1,
//               scale: [1, 1.02, 1],
//             }}
//             transition={{
//               duration: 1.2,
//               ease: "easeOut",
//               repeat: Infinity,
//               repeatDelay: 2.2,
//             }}
//           >
//             WINDHANS
//           </motion.div>

//           {/* Moving highlight (sweeping light masked by text) */}
//           <div
//             className="absolute inset-0 font-extrabold tracking-[-0.02em] text-transparent bg-clip-text pointer-events-none"
//             style={{ fontSize: "min(18vw, 180px)" }}
//           >
//             <span className="shine block">WINDHANS</span>
//           </div>

//           {/* Loading label anchored relative to the word, like the GIF */}
//           <div
//             className="pointer-events-none absolute"
//             style={{
//               // position slightly below and to the right of the word’s center
//               top: "62%",
//               right: "-10%",
//             }}
//           >
//             <span className="text-[11px] md:text-sm text-white/80 tracking-wide">
//               loading... {percent}%
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Local styles for scanlines + shimmer */}
//       <style jsx global>{`
//         /* subtle moving scanlines across the whole screen */
//         .scanlines {
//           background-image: repeating-linear-gradient(
//             0deg,
//             rgba(255, 255, 255, 0.7) 0px,
//             rgba(255, 255, 255, 0.7) 1px,
//             transparent 1px,
//             transparent 4px
//           );
//           animation: scan-move 6s linear infinite;
//         }
//         @keyframes scan-move {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 0 -200px;
//           }
//         }

//         /* shimmering highlight which is clipped to the text */
//         .shine {
//           background-image: linear-gradient(
//             100deg,
//             rgba(255, 255, 255, 0) 0%,
//             rgba(255, 255, 255, 0) 38%,
//             rgba(255, 255, 255, 0.75) 50%,
//             rgba(255, 255, 255, 0) 62%,
//             rgba(255, 255, 255, 0) 100%
//           );
//           background-size: 220% 100%;
//           background-position: -120% 0;
//           filter: blur(0.8px);
//           animation: shine-move 2.8s ease-in-out infinite;
//           /* tint the highlight slightly with brand color for cohesion */
//           mix-blend-mode: screen;
//         }
//         @keyframes shine-move {
//           0% {
//             background-position: -120% 0;
//           }
//           50% {
//             background-position: 140% 0;
//           }
//           100% {
//             background-position: 220% 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }









"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION_MS = 8000; // total time from 0% -> 100%

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const step = Math.max(10, Math.round(DURATION_MS / 100));
    const id = setInterval(() => {
      setPercent((p) => {
        if (p >= 100) {
          clearInterval(id);
          setIsComplete(true);
          // Start fade out after completion
          setTimeout(() => {
            setShouldHide(true);
          }, 500);
          return 100;
        }
        return p + 1;
      });
    }, step);
    return () => clearInterval(id);
  }, []);

  if (shouldHide) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: isComplete ? 1.5 : 0,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-full w-full">
          {/* Main text positioned like in GIF - left side */}
          <div className="absolute left-[8%] top-1/2 transform -translate-y-1/2">
            {/* Base text - dark gray background */}
            <div
              className="relative font-black tracking-tight text-gray-700"
              style={{ fontSize: "min(16vw, 160px)" }}
            >
              WINDHANS
              {/* Text reveal overlay - this creates the painting/reveal effect */}
              <div
                className="absolute inset-0 font-black tracking-tight text-white overflow-hidden"
                style={{ fontSize: "min(16vw, 160px)" }}
              >
                <div className="reveal-text">WINDHANS</div>
              </div>
            </div>
          </div>

          {/* Loading text in bottom right corner exactly like GIF */}
          <div className="absolute bottom-8 right-8">
            <span className="text-white text-sm font-medium">
              loading... {percent}%
            </span>
          </div>
        </div>

        {/* Styles for text reveal effect */}
        <style jsx global>{`
          /* Text reveal effect that matches the GIF */
          .reveal-text {
            background: linear-gradient(90deg, #034d9d 0%, #034d9d 100%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-color: #034d9d;

            /* Create the reveal effect */
            position: relative;
            overflow: hidden;
          }

          .reveal-text::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              transparent 0%,
              #034d9d 20%,
              #ffffff 50%,
              #034d9d 80%,
              transparent 100%
            );
            animation: text-reveal 4s ease-in-out infinite;
            z-index: 1;
          }

          @keyframes text-reveal {
            0% {
              transform: translateX(-100%);
              opacity: 0.8;
            }
            50% {
              transform: translateX(0%);
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0.8;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}






// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const DURATION_MS = 5000; // total time from 0% -> 100%

// export default function Loader() {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const step = Math.max(10, Math.round(DURATION_MS / 100)); // ~1% per step
//     const id = setInterval(() => {
//       setPercent((p) => {
//         if (p >= 100) {
//           clearInterval(id);
//           return 100;
//         }
//         return p + 1;
//       });
//     }, step);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
//       {/* Remove all these effects to match the clean GIF */}

//       <div className="relative h-full w-full flex items-center justify-center">
//         {/* Container positioned like in GIF - left side */}
//         <div className="absolute left-[8%] top-1/2 transform -translate-y-1/2">
//           {/* Base text - darker gray like in GIF */}
//           <div
//             className="relative font-black tracking-tight text-gray-600/80"
//             style={{ fontSize: "min(16vw, 160px)" }}
//           >
//             WINDHANS
//             {/* Shimmer overlay */}
//             <div
//               className="absolute inset-0 font-black tracking-tight text-transparent bg-clip-text shimmer-text"
//               style={{ fontSize: "min(16vw, 160px)" }}
//             >
//               WINDHANS
//             </div>
//           </div>
//         </div>

//         {/* Loading text in bottom right corner exactly like GIF */}
//         <div className="absolute bottom-8 right-8">
//           <span className="text-white text-sm font-medium">
//             loading... {percent}%
//           </span>
//         </div>
//       </div>

//       {/* Local styles for shimmer effect */}
//       <style jsx global>{`
//         /* Shimmer effect that matches the GIF */
//         .shimmer-text {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             transparent 40%,
//             #034d9d 50%,
//             #ffffff 55%,
//             #034d9d 60%,
//             transparent 70%,
//             transparent 100%
//           );
//           background-size: 200% 100%;
//           background-position: -200% 0;
//           animation: shimmer-sweep 3s ease-in-out infinite;
//           background-clip: text;
//           -webkit-background-clip: text;
//         }

//         @keyframes shimmer-sweep {
//           0% {
//             background-position: -200% 0;
//           }
//           50% {
//             background-position: 200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const BRAND = "WINDHANS";
// const BRAND_HEX = "#034D9D";
// const TOTAL_DURATION = 4200; // ms: 0 → 100% (tweak only if you must)
// const EXIT_FADE = 2800; // ms: smooth fade-out duration

// export default function Loader() {
//   const [percent, setPercent] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const startedAt = useRef<number | null>(null);
//   const doneRef = useRef(false);

//   // Smooth progress 0→100 based on time, not fixed steps (matches GIF feel)
//   useEffect(() => {
//     let raf = 0;
//     const tick = (t: number) => {
//       if (startedAt.current === null) startedAt.current = t;
//       const elapsed = t - startedAt.current;
//       const p = Math.min(100, Math.floor((elapsed / TOTAL_DURATION) * 100));
//       setPercent(p);

//       if (p < 100) {
//         raf = requestAnimationFrame(tick);
//       } else if (!doneRef.current) {
//         doneRef.current = true;
//         // allow the shimmer to finish its pass then fade the whole overlay
//         setTimeout(() => setVisible(false), 300);
//       }
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key="loader"
//           className="fixed inset-0 z-[9999] bg-black overflow-hidden"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ ease: [0.22, 1, 0.36, 1], duration: EXIT_FADE / 1000 }}
//         >
//           {/* subtle scanlines + vignette for the exact techy depth */}
//           <div className="pointer-events-none absolute inset-0 opacity-[0.06] scanlines" />
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_42%,#000_100%)] opacity-70" />

//           <div className="relative h-full w-full flex items-center justify-center">
//             {/* Word block (use a relative box so the label sits to the right of it) */}
//             <div className="relative select-none leading-[0.85]">
//               {/* Base giant word in brand color with very low opacity (reads like dark gray on black) */}
//               <motion.div
//                 className="font-black tracking-[-0.015em] text-center drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]"
//                 style={{
//                   color: `${BRAND_HEX}1F`, // ~12% alpha
//                   fontSize: "clamp(72px, 18vw, 320px)", // huge, edges slightly cropped like GIF
//                 }}
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 animate={{ opacity: 1, scale: [1, 1.018, 1] }}
//                 transition={{
//                   duration: 1.2,
//                   ease: "easeOut",
//                   repeat: Infinity,
//                   repeatDelay: 2.2,
//                 }}
//               >
//                 {BRAND}
//               </motion.div>

//               {/* Shimmer sweep clipped to text */}
//               <div
//                 className="absolute inset-0 font-black tracking-[-0.015em] text-transparent bg-clip-text pointer-events-none"
//                 style={{ fontSize: "clamp(72px, 18vw, 320px)" }}
//                 aria-hidden
//               >
//                 <span className="shine block">{BRAND}</span>
//               </div>

//               {/* Loading label positioned like the GIF (to the right & a touch below midline) */}
//               <div
//                 className="absolute pointer-events-none"
//                 style={{
//                   top: "58%", // slightly below mid-height of the word
//                   left: "100%", // right edge of the word
//                   transform: "translate(10px, -50%)",
//                 }}
//               >
//                 <div className="text-[11px] md:text-sm text-white/85 tracking-wide">
//                   loading... {percent}%
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Local styles for scanlines and shimmer */}
//           <style jsx global>{`
//             .scanlines {
//               background-image: repeating-linear-gradient(
//                 0deg,
//                 rgba(255, 255, 255, 0.7) 0px,
//                 rgba(255, 255, 255, 0.7) 1px,
//                 transparent 1px,
//                 transparent 4px
//               );
//               animation: scan-move 6s linear infinite;
//             }
//             @keyframes scan-move {
//               0% {
//                 background-position: 0 0;
//               }
//               100% {
//                 background-position: 0 -200px;
//               }
//             }

//             .shine {
//               /* thin bright band sweeping across the letters */
//               background-image: linear-gradient(
//                 100deg,
//                 rgba(255, 255, 255, 0) 0%,
//                 rgba(255, 255, 255, 0) 38%,
//                 rgba(255, 255, 255, 0.82) 50%,
//                 rgba(255, 255, 255, 0) 62%,
//                 rgba(255, 255, 255, 0) 100%
//               );
//               /* slight brand tint so the highlight marries with #034D9D */
//               mix-blend-mode: screen;
//               filter: blur(0.6px);
//               background-size: 220% 100%;
//               background-position: -120% 0;
//               animation: shine-move 2.9s ease-in-out infinite;
//             }
//             @keyframes shine-move {
//               0% {
//                 background-position: -120% 0;
//               }
//               50% {
//                 background-position: 140% 0;
//               }
//               100% {
//                 background-position: 220% 0;
//               }
//             }
//           `}</style>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
