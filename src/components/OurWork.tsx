// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import {
//   FiArrowRight,
//   FiCheck,
//   FiGlobe,
//   FiLock,
//   FiCloud,
//   FiTrendingUp,
// } from "react-icons/fi";
// import { Handlee } from "next/font/google";
// import { GrDeploy, GrLocationPin } from "react-icons/gr";
// import AnimatedButton from "./ui/AnimatedButton";

// const shadowsIntoLight = Handlee({
//   subsets: ["latin"],
//   weight: "400", // only 400 is available
// });

// export default function OurWork() {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const texts = [
//     "IT Security",
//     "Web Development",
//     "Cloud Solutions",
//     "Digital Marketing",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [texts.length]);

//   // Icon mapping for each service
//   const serviceIcons = {
//     "IT Security": <FiLock className="w-5 h-5" />,
//     "Web Development": <FiGlobe className="w-5 h-5" />,
//     "Cloud Solutions": <FiCloud className="w-5 h-5" />,
//     "Digital Marketing": <FiTrendingUp className="w-5 h-5" />,
//   };

//   const fadeInUp: Variants = {
//     hidden: { opacity: 0, y: 18, scale: 0.98 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 1.1, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section className="relative bg-white py-14 overflow-hidden">
//       {/* Premium background elements */}
//       <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-r from-[#034D9D]/20 to-[#034D9D]/30 transform -skew-y-6 origin-top-left"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Ultra Premium Header */}
//         <div className="flex flex-col items-center justify-center -mt-6 mb-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-4 flex items-center"
//           >
//             <div className="w-12 h-px bg-[#034D9D]/80"></div>
//             <span className="mx-3 text-[#034D9D] font-medium tracking-widest text-sm uppercase">
//               Excellence Delivered
//             </span>
//             <div className="w-12 h-px bg-[#034D9D]/80"></div>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl md:text-5xl font-light text-slate-800 text-center mb-8"
//           >
//             Premium Digital Solutions for <br className="hidden md:block" />
//             <span className="font-medium">Visionary Businesses</span>
//           </motion.h2>

//           {/* Luxury rotating text component */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative bg-black/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl shadow-[#034D9D]/10 border border-slate-200/60 mb-8 w-full max-w-xl"
//           >
//             <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
//               <div className="text-white text-lg md:text-xl font-light mb-4 md:mb-0 md:mr-4">
//                 We Specialize In
//               </div>

//               <div className="relative">
//                 <div className="flex items-center bg-gradient-to-r from-[#034D9D] to-[#0a63c9] rounded-xl py-3 px-6 text-white font-medium overflow-hidden">
//                   <div className="mr-3 opacity-90">
//                     {serviceIcons[texts[currentTextIndex]]}
//                   </div>
//                   <AnimatePresence mode="wait">
//                     <motion.span
//                       key={currentTextIndex}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       exit={{ y: -20, opacity: 0 }}
//                       transition={{ duration: 0.4 }}
//                       className="text-lg md:text-xl"
//                     >
//                       {texts[currentTextIndex]}
//                     </motion.span>
//                   </AnimatePresence>
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-white/80 rounded-full"></div>
//                 {/* <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-white/80 rounded-full"></div> */}
//               </div>
//             </div>

//             {/* Premium badge */}
//             <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#034D9D] to-[#0a63c9] text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg flex items-center">
//               <FiCheck className="mr-1" /> EXPERTISE IN
//             </div>
//           </motion.div>
//         </div>

//         {/* timeline wrapper */}
//         <div className="relative mt-12 md:-mt-16 h-[360px] md:h-[420px]">
//           {/* long dashed path (behind) */}
//           <svg
//             className="absolute inset-0 w-full h-full pointer-events-none"
//             viewBox="0 0 1200 420"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden
//           >
//             <path
//               d="M0 300 C 200 120, 360 120, 520 150 C 700 250, 750 280, 950 220 C 1050 180, 1120 160, 1160 150"
//               stroke="#034D9D"
//               strokeWidth="2"
//               strokeDasharray="4 6"
//               strokeLinecap="round"
//               fill="none"
//             />
//           </svg>

//           {/* left marker pin */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="absolute"
//             style={{
//               left: "0%",
//               top: "60%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#034D9D] backdrop-blur-md flex items-center justify-center">
//               <GrLocationPin className="text-white w-6 h-6" />
//             </div>
//             <h1
//               className={`${shadowsIntoLight.className} text-xl font-semibold text-[#034D9D] tracking-wider mt-2`}
//             >
//               WindHans
//             </h1>
//           </motion.div>

//           {/* small step dots placed to match path */}
//           {/* Analysis */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="absolute flex flex-col items-center"
//             style={{
//               left: "10%",
//               top: "26%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div className="w-36 h-36 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#034D9D] flex items-center justify-center shadow-sm">
//               {/* replace with your high-res image/svg */}
//               <img
//                 src="/analysis.jpg"
//                 alt="analysis"
//                 className="object-cover rounded-full"
//               />
//             </div>
//             <div
//               className={`mt-3 text-sm md:text-2xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
//             >
//               Analysis
//             </div>
//           </motion.div>

//           {/* Planning */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="absolute flex flex-col items-center"
//             style={{
//               left: "25%",
//               top: "15%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div className="w-36 h-36 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#034D9D] flex items-center justify-center shadow-sm">
//               <img
//                 src="/plan.jpg"
//                 alt="planning"
//                 className="object-contain rounded-full"
//               />
//             </div>
//             <div
//               className={`mt-3 text-sm md:text-2xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
//             >
//               Planning
//             </div>
//           </motion.div>

//           {/* Build */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="absolute flex flex-col items-center"
//             style={{
//               left: "40%",
//               top: "23%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div className="w-36 h-36 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#034D9D] backdrop-blur-sm flex items-center justify-center shadow-sm">
//               <img
//                 src="/build.png"
//                 alt="build"
//                 className="object-cover rounded-full"
//               />
//             </div>
//             <div
//               className={`mt-3 text-sm md:text-2xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
//             >
//               Build
//             </div>
//           </motion.div>

//           {/* large Our Work circle (right) */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="absolute flex flex-col items-center"
//             style={{
//               left: "65%",
//               top: "25%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div className="w-64 h-64 md:w-56 md:h-56 rounded-full border-2 border-dashed border-[#034D9D] flex items-center justify-center relative overflow-hidden">
//               {/* central artwork placeholder - replace with your vector/PNG to match original look */}
//               <img
//                 src="/ourwork1.png"
//                 alt="our work artwork"
//                 className="object-cover rounded-full"
//               />
//             </div>
//             <div
//               className={`mt-3 text-sm md:text-3xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
//             >
//               Our Work
//             </div>
//           </motion.div>

//           {/* right marker pin */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="absolute"
//             style={{
//               right: "0%",
//               top: "27%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#034D9D] backdrop-blur-md flex items-center justify-center">
//               <GrDeploy className="text-white w-6 h-6" />
//             </div>
//             <h1
//               className={`${shadowsIntoLight.className} text-xl font-semibold text-[#034D9D] tracking-wider mt-2`}
//             >
//               Deploy
//             </h1>
//           </motion.div>
//         </div>

//         <div>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-slate-600 text-center max-w-2xl mx-auto text-base font-normal leading-relaxed"
//           >
//             Delivering exceptional digital experiences with precision
//             craftsmanship, innovative solutions, and unparalleled attention to
//             detail for discerning clients.
//           </motion.p>

//           <div
//             // variants={textVariants}
//             className="flex items-center justify-center mt-6"
//           >
//             <AnimatedButton
//               text="Discover How We Drive Success"
//               bgColor="bg-[#034D9D]/85"
//               textColor="text-black"
//               hoverTextColor="text-white"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










"use client";

import React, { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // ✅ Added Variants
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiLock,
  FiCloud,
  FiTrendingUp,
} from "react-icons/fi";
import { Handlee } from "next/font/google";
import { GrDeploy, GrLocationPin } from "react-icons/gr";
import AnimatedButton from "./ui/AnimatedButton";

const shadowsIntoLight = Handlee({
  subsets: ["latin"],
  weight: "400", // only 400 is available
});

export default function OurWork() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "IT Security",
    "Web Development",
    "Cloud Solutions",
    "Digital Marketing",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Icon mapping for each service
  const serviceIcons: Record<string, JSX.Element> = {
    "IT Security": <FiLock className="w-5 h-5" />,
    "Web Development": <FiGlobe className="w-5 h-5" />,
    "Cloud Solutions": <FiCloud className="w-5 h-5" />,
    "Digital Marketing": <FiTrendingUp className="w-5 h-5" />,
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative bg-white py-14 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-r from-[#034D9D]/20 to-[#034D9D]/30 transform -skew-y-6 origin-top-left"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Ultra Premium Header */}
        <div className="flex flex-col items-center justify-center -mt-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center"
          >
            <div className="w-12 h-px bg-[#034D9D]/80"></div>
            <span className="mx-3 text-[#034D9D] font-medium tracking-widest text-sm uppercase">
              Excellence Delivered
            </span>
            <div className="w-12 h-px bg-[#034D9D]/80"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-slate-800 text-center mb-8"
          >
            Premium Digital Solutions for <br className="hidden md:block" />
            <span className="font-medium">Visionary Businesses</span>
          </motion.h2>

          {/* Luxury rotating text component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-black/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl shadow-[#034D9D]/10 border border-slate-200/60 mb-8 w-full max-w-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
              <div className="text-white text-lg md:text-xl font-light mb-4 md:mb-0 md:mr-4">
                We Specialize In
              </div>

              <div className="relative">
                <div className="flex items-center bg-gradient-to-r from-[#034D9D] to-[#0a63c9] rounded-xl py-3 px-6 text-white font-medium overflow-hidden">
                  <div className="mr-3 opacity-90">
                    {serviceIcons[texts[currentTextIndex]]}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-lg md:text-xl"
                    >
                      {texts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-white/80 rounded-full"></div>
                {/* <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-white/80 rounded-full"></div> */}
              </div>
            </div>

            {/* Premium badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#034D9D] to-[#0a63c9] text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg flex items-center">
              <FiCheck className="mr-1" /> EXPERTISE IN
            </div>
          </motion.div>
        </div>

        {/* timeline wrapper */}
        <div className="relative mt-12 md:-mt-16 h-[360px] md:h-[420px]">
          {/* long dashed path (behind) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 300 C 200 120, 360 120, 520 150 C 700 250, 750 280, 950 220 C 1050 180, 1120 160, 1160 150"
              stroke="#034D9D"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* left marker pin */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute"
            style={{
              left: "0%",
              top: "60%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#034D9D] backdrop-blur-md flex items-center justify-center">
              <GrLocationPin className="text-white w-6 h-6" />
            </div>
            <h1
              className={`${shadowsIntoLight.className} text-xl font-semibold text-[#034D9D] tracking-wider mt-2`}
            >
              WindHans
            </h1>
          </motion.div>

          {/* small step dots placed to match path */}
          {/* Analysis */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute flex flex-col items-center"
            style={{
              left: "10%",
              top: "26%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-36 h-36 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#034D9D] flex items-center justify-center shadow-sm">
              {/* replace with your high-res image/svg */}
              <img
                src="/analysis.jpg"
                alt="analysis"
                className="object-cover rounded-full"
              />
            </div>
            <div
              className={`mt-3 text-sm md:text-2xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
            >
              Analysis
            </div>
          </motion.div>

          {/* Planning */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute flex flex-col items-center"
            style={{
              left: "25%",
              top: "15%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-36 h-36 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#034D9D] flex items-center justify-center shadow-sm">
              <img
                src="/plan.jpg"
                alt="planning"
                className="object-contain rounded-full"
              />
            </div>
            <div
              className={`mt-3 text-sm md:text-2xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
            >
              Planning
            </div>
          </motion.div>

          {/* Build */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute flex flex-col items-center"
            style={{
              left: "40%",
              top: "23%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-36 h-36 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#034D9D] backdrop-blur-sm flex items-center justify-center shadow-sm">
              <img
                src="/build.png"
                alt="build"
                className="object-cover rounded-full"
              />
            </div>
            <div
              className={`mt-3 text-sm md:text-2xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
            >
              Build
            </div>
          </motion.div>

          {/* large Our Work circle (right) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute flex flex-col items-center"
            style={{
              left: "65%",
              top: "25%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-64 h-64 md:w-56 md:h-56 rounded-full border-2 border-dashed border-[#034D9D] flex items-center justify-center relative overflow-hidden">
              {/* central artwork placeholder - replace with your vector/PNG to match original look */}
              <img
                src="/ourwork1.png"
                alt="our work artwork"
                className="object-cover rounded-full"
              />
            </div>
            <div
              className={`mt-3 text-sm md:text-3xl text-[#034D9D] font-semibold ${shadowsIntoLight.className}`}
            >
              Our Work
            </div>
          </motion.div>

          {/* right marker pin */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute"
            style={{
              right: "0%",
              top: "27%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#034D9D] backdrop-blur-md flex items-center justify-center">
              <GrDeploy className="text-white w-6 h-6" />
            </div>
            <h1
              className={`${shadowsIntoLight.className} text-xl font-semibold text-[#034D9D] tracking-wider mt-2`}
            >
              Deploy
            </h1>
          </motion.div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 text-center max-w-2xl mx-auto text-base font-normal leading-relaxed"
          >
            Delivering exceptional digital experiences with precision
            craftsmanship, innovative solutions, and unparalleled attention to
            detail for discerning clients.
          </motion.p>

          <div
            // variants={textVariants}
            className="flex items-center justify-center mt-6"
          >
            <AnimatedButton
              text="Discover How We Drive Success"
              bgColor="bg-[#034D9D]/85"
              textColor="text-black"
              hoverTextColor="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
