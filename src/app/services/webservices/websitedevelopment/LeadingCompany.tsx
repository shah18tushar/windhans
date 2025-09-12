"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handlee } from "next/font/google";

const shadowsIntoLight = Handlee({
  subsets: ["latin"],
  weight: "400", // only 400 is available
});

const LeadingCompany = () => {
  return (
    <section className="relative bg-white overflow-hidden py-24 px-4">
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top--20 right-0 w-[50vw] h-[50vw] bg-[#034D9D] opacity-10 rounded-t-full"></div> */}
        <div className="absolute -top-28 -right-20 w-[45vw] h-[40vw] bg-indigo-50 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 relative z-10">
        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-1/2 overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/image.jpg"
            alt="WindHans Technologies Nashik Office / Design Showcase"
            className="w-full h-[36rem] object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col space-y-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center mx-auto bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="">
              <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-3 py-1.5 border border-blue-400 rounded-full">
                Excellence Defined
              </span>
            </div>
          </motion.div>

          {/* Title & Description */}
          <h1 className="text-4xl text-center font-serif font-extralight text-[#034D9D] leading-tight">
            Leading Website Design Company in Nashik — The Innovation City
          </h1>
          <p className="text-lg text-center italic text-gray-700">
            Searching for the top website development company in Nashik? You’ve
            come to the right place. WindHans Technologies is a premium web
            design & development studio based near Nashik, crafting custom
            high-end websites tailored for personal brands through to large
            enterprises.
          </p>

          {/* Stats / Trust Items (REPLACED) */}
          <div className="mt-0 w-full">
            <div>
              <div className="max-w-md mx-auto border-l-4  border-[#034D9D] rounded-2xl py-2 bg-indigo-50 mb-6">
                <h1 className="text-center text-xl font-extralight font-serif text-[#034D9D] ">
                  We are proud to showcase our premium work
                </h1>
              </div>
              {/* Mini case study tiles */}
              <div className=" grid grid-cols-2 gap-4 w-full">
                <button
                  className="block p-3 rounded-xl hover:border hover:border-blue-500 hover:bg-indigo-50 backdrop-blur-md hover:shadow-2xl transition cursor-pointer"
                  aria-label="View case study — Retail redesign"
                >
                  <div className="text-sm font-semibold text-[#041a3a]">
                    Retail rebrand — Premium conversion lift
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Brand refresh, UI overhaul, performance optimisations —
                    delivered with style.
                  </div>
                </button>

                <button
                  className="block p-3 rounded-xl hover:border hover:border-blue-500 hover:bg-indigo-50 backdrop-blur-md hover:shadow-2xl transition cursor-pointer"
                  aria-label="View case study — Enterprise platform"
                >
                  <div className="text-sm font-semibold text-[#041a3a]">
                    Enterprise platform — Accessibility first
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Scalable architecture and WCAG-aware UX for wide audience
                    reach.
                  </div>
                </button>

                <button
                  className="block p-3 rounded-xl hover:border hover:border-blue-500 hover:bg-indigo-50 backdrop-blur-md hover:shadow-2xl transition cursor-pointer"
                  aria-label="View case study — Enterprise platform"
                >
                  <div className="text-sm font-semibold text-[#041a3a]">
                    Enterprise platform — Accessibility first
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Scalable architecture and WCAG-aware UX for wide audience
                    reach.
                  </div>
                </button>

                <button
                  className="block p-3 rounded-xl hover:border hover:border-blue-500 hover:bg-indigo-50 backdrop-blur-md hover:shadow-2xl transition cursor-pointer"
                  aria-label="View case study — Retail redesign"
                >
                  <div className="text-sm font-semibold text-[#041a3a]">
                    Retail rebrand — Premium conversion lift
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Brand refresh, UI overhaul, performance optimisations —
                    delivered with style.
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* CTA microcopy / small trust line */}
          <p
            className={`${shadowsIntoLight.className} text-center text-xl font-semibold text-[#034D9D] tracking-wider hover:cursor-pointer hover:text-3xl hover:underline underline-offset-4 decoration-1 duration-700 transition-all`}
          >
            …and achievements defining our excellence
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default LeadingCompany;






















// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const LeadingCompany = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden py-24 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 relative z-10 ">
//         {/* Left: Image - Clean without overlay */}
//         <motion.div
//           className="w-full lg:w-1/2 overflow-hidden relative"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 z-10"></div>
//           <img
//             src="/image.jpg"
//             alt="WindHans Technologies Nashik Office / Design Showcase"
//             className="w-full h-[40rem] object-cover shadow-2xl"
//           />
//         </motion.div>

//         {/* Right: Content with Premium Background Overlay */}
//         <motion.div
//           className="w-full lg:w-1/2 relative flex flex-col justify-center"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           {/* Ultra Premium Background Overlays - Right Section Only */}
//           <div className="absolute inset-0 overflow-hidden">
//             {/* Primary Luxury Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#034D9D]/95 via-[#1e40af]/90 to-[#0c4a6e]/95"></div>

//             {/* Sophisticated Geometric Patterns */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-2xl"></div>

//             {/* Elegant Glass Morphism Effects */}
//             <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-2xl rotate-45 border border-white/10"></div>
//             <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 backdrop-blur-sm rounded-xl rotate-12 border border-white/10"></div>

//             {/* Luxury Light Rays */}
//             <div className="absolute inset-0 opacity-30">
//               <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//               <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
//               <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
//             </div>

//             {/* Premium Dot Pattern */}
//             <div
//               className="absolute inset-0 opacity-10"
//               style={{
//                 backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
//                 backgroundSize: "60px 60px",
//               }}
//             ></div>
//           </div>

//           {/* Content Container with Glass Effect */}
//           <div className="relative z-20 p-12 lg:p-16 space-y-8">
//             {/* Premium Badge */}
//             <motion.div
//               className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
//               <span className="text-white/90 text-sm font-medium tracking-wide">
//                 PREMIUM WEB SOLUTIONS
//               </span>
//             </motion.div>

//             <motion.h1
//               className="text-4xl lg:text-5xl font-light text-white leading-tight tracking-wide"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               Leading Website Design Company in{" "}
//               <span className="font-medium bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
//                 Nashik
//               </span>
//               <br />
//               <span className="text-2xl lg:text-3xl text-white/80 font-extralight">
//                 The Innovation City
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-lg text-white/90 leading-relaxed font-light"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               Discover Nashik's premier web development studio. WindHans
//               Technologies crafts bespoke digital experiences that transcend
//               ordinary web design — delivering luxury-grade solutions for
//               discerning brands and enterprises.
//             </motion.p>

//             <motion.p
//               className="text-base text-white/80 leading-relaxed font-light"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.9 }}
//             >
//               Our artisanal approach ensures pixel-perfect precision,
//               lightning-fast performance, and exceptional user experiences.
//               Trusted by over{" "}
//               <span className="text-yellow-300 font-semibold">
//                 100+ elite clients
//               </span>
//               , we don't just build websites — we architect digital masterpieces
//               that elevate your brand to extraordinary heights.
//             </motion.p>

//             {/* Premium Stats with Glass Cards */}
//             <motion.div
//               className="grid grid-cols-3 gap-4 mt-8"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.0 }}
//             >
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">
//                   100+
//                 </div>
//                 <div className="text-xs text-white/80 font-light uppercase tracking-wide">
//                   Elite Clients
//                 </div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">
//                   &lt;1s
//                 </div>
//                 <div className="text-xs text-white/80 font-light uppercase tracking-wide">
//                   Load Time
//                 </div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">
//                   24/7
//                 </div>
//                 <div className="text-xs text-white/80 font-light uppercase tracking-wide">
//                   VIP Support
//                 </div>
//               </div>
//             </motion.div>

//             {/* Luxury Achievement Badges */}
//             <motion.div
//               className="flex flex-wrap gap-3 mt-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//             >
//               <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
//                 <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
//                 <span className="text-white/80 text-sm">
//                   Award Winning Design
//                 </span>
//               </div>
//               <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
//                 <span className="text-white/80 text-sm">ISO Certified</span>
//               </div>
//             </motion.div>

//             {/* Premium CTA Buttons */}
//             <motion.div
//               className="flex flex-wrap gap-4 mt-10"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//             >
//               <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl shadow-yellow-500/25 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//                 <span className="relative">Start Your Journey</span>
//               </button>
//               <button className="group relative backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//                 <span className="relative">View Masterpieces</span>
//               </button>
//             </motion.div>

//             {/* Exclusive Contact Info */}
//             <motion.div
//               className="flex items-center mt-8 pt-6 border-t border-white/10"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 1.3 }}
//             >
//               <div className="flex items-center text-white/80 text-sm">
//                 <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
//                 <span className="font-light">
//                   Available for exclusive consultations
//                 </span>
//                 <div className="ml-4 text-yellow-300 font-medium">
//                   +91-XXXX-XXXXXX
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LeadingCompany;