// "use client";

// import AnimatedButton from "@/components/ui/AnimatedButton";
// import ClickSpark from "@/components/ui/ClickSpark";
// import Image from "next/image";
// import React from "react";

// // Replace this with your actual image in /public or pass imageSrc prop

// type AboutSectionProps = {
//   /** optional: pass a string path or StaticImageData */
//   imageSrc?: string | any;
// };

// const THEME = "#034D9D"; // Windhans theme color

// export default function AboutSection({ imageSrc }: AboutSectionProps) {
//   return (
//     <section className="bg-gradient-to-b from-black via-black to-black">
//       <div className="max-w-7xl mx-auto px-6 lg:pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* LEFT: Image */}
//           <div className="relative w-full overflow-hidden ">
//             <img
//               src="/abt.png"
//               alt="Windhans Technologies - office and product imagery"
//               className="object-cover w-full h-80 md:h-[420px]"
//             />
//           </div>

//           {/* RIGHT: Content */}
//           <div>
//             <div className="flex items-start gap-5">
//               <div className="flex-shrink-0">
//                 <div
//                   className="w-1 h-[5.4rem] rounded-full"
//                   style={{ background: THEME }}
//                 />
//               </div>
//               <div>
//                 <h3 className="text-2xl md:text-3xl lg:text-2xl font-light font-serif text-gray-700 ">
//                   Your Trusted Partner for <br /> Web, Mobile, and IoT
//                   Development
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   WindHans Technologies — Nashik, Maharashtra
//                 </p>
//               </div>
//             </div>

//             <p className="mt-6 text-gray-700 text-base max-w-xl mx-auto">
//               Windhans is a premier website development company based in Nashik,
//               Maharashtra. We specialize in website design, mobile-responsive
//               website development, custom software solutions, and IoT
//               infrastructure. Our services extend to Android and iOS application
//               development — delivering end-to-end digital solutions for
//               enterprise clients.
//             </p>

//             <p className="mt-4 text-gray-700 text-base max-w-xl mx-auto">
//               Our priority is to exceed client expectations in quality, scale,
//               and commitment. We've successfully delivered projects including
//               e-commerce platforms, ERP systems, Vendor Management platforms,
//               and tailored LMS & Gaming solutions.
//             </p>

//             {/* <div className="mt-6 space-y-3 max-w-xl">
//               <FeatureItem
//                 title="Enterprise web & mobile development"
//                 theme={THEME}
//               />
//               <FeatureItem
//                 title="Custom software, ERP & Vendor Management"
//                 theme={THEME}
//               />
//               <FeatureItem
//                 title="IoT infrastructure & cross-platform apps"
//                 theme={THEME}
//               />
//             </div> */}

//             <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
//               <AnimatedButton
//                 text="Talk to our Experts"
//                 bgColor="bg-[#034D9D]/85"
//                 textColor="text-black"
//                 hoverTextColor="text-white"
//               />
//             </div>

//             <p className="mt-6 text-sm text-gray-400">
//               Trusted by businesses — from startups to enterprises.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FeatureItem({ title, theme }: { title: string; theme: string }) {
//   return (
//     <div className="flex items-start gap-4">
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="flex-shrink-0 mt-1"
//       >
//         <rect
//           x="0.5"
//           y="0.5"
//           width="23"
//           height="23"
//           rx="6"
//           stroke={theme}
//           strokeOpacity="0.12"
//         />
//         <path
//           d="M7 12.5l2.5 2.5L17 8"
//           stroke={theme}
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//       <div className="text-gray-700 font-medium">{title}</div>
//     </div>
//   );
// }
















"use client";

import AnimatedButton from "@/components/ui/AnimatedButton";
import ClickSpark from "@/components/ui/ClickSpark";
import Image from "next/image";
import React from "react";

const THEME = "#034D9D";

type AboutSectionProps = {
  imageSrc?: string | any;
};

const AboutSection: React.FC<AboutSectionProps> = ({ imageSrc }) => {
  return (
    <section className="relative overflow-hidden pb-10">
      {/* Seamless gradient continuation from breadcrumb */}
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-950 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* LEFT: Enhanced Image Section */}
          <div className="relative group">
            {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" /> */}
            <div className="relative overflow-hidden">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" /> */}
              <img
                src="/startimg.png"
                alt="WindHans Technologies - premium office and innovation center"
                className="object-contain w-full h-80 lg:h-[480px] -mt-14"
              />
            </div>
          </div>

          {/* RIGHT: Enhanced Content Section */}
          <div className="space-y-8">
            {/* Header with enhanced styling */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <div
                    className="w-1 h-28 rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(180deg, ${THEME} 0%, #0ea5e9 100%)`,
                      boxShadow: `0 0 20px ${THEME}40`,
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-3xl  font-extralight text-white leading-tight tracking-wide">
                    Your Trusted Partner for{" "}
                    <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                      Digital Excellence
                    </span>
                  </h2>
                  <div className="flex items-center gap-3 mt-3">
                    {/* <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> */}
                    <p className="text-blue-400 text-sm font-medium tracking-wide">
                      WindHans Technologies — Nashik, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced content paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed">
                WindHans is a{" "}
                <span className="text-white font-semibold">
                  premier digital innovation company
                </span>{" "}
                based in Nashik, Maharashtra. We specialize in cutting-edge
                website design, mobile-responsive development, custom software
                solutions, and IoT infrastructure that transforms businesses.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                Our expertise extends to{" "}
                <span className="text-blue-400 font-medium">
                  Android and iOS application development
                </span>
                , delivering comprehensive digital ecosystems for enterprise
                clients. From e-commerce platforms to ERP systems, we craft
                solutions that exceed expectations.
              </p>
            </div>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <AnimatedButton
                text="Start Your Digital Journey"
                bgColor="bg-[#034D9D]"
                textColor="text-white"
                hoverTextColor="text-white"
              />
              <div className="text-gray-400 text-sm">
                ✨ Trusted by{" "}
                <span className="text-white font-semibold">500+</span>{" "}
                businesses worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;