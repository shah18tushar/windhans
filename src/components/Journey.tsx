// "use client";

// import React, { useRef, useState } from "react";

// const YEARS = Array.from({ length: 11 }, (_, i) => 2015 + i);

// const contentByYear: Record<number, string> = {
//   2015: "",
//   2016: "",
//   2017: "",
//   2018: "",
//   2019: "",
//   2020: "",
//   2021: "",
//   2022: "",
//   2023: "",
//   2024: "",
//   2025: "",
// };

// export default function Journey(): JSX.Element {
//   const [selectedYear, setSelectedYear] = useState<number>(2015);
//   const clockRef = useRef<HTMLDivElement | null>(null);

//   // click handler -> detect angle from centre and map to year index
//   const onClockClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = clockRef.current;
//     if (!el) return;

//     const rect = el.getBoundingClientRect();
//     const cx = rect.left + rect.width / 2;
//     const cy = rect.top + rect.height / 2;

//     const x = e.clientX - cx;
//     const y = e.clientY - cy;
//     // atan2 returns angle from X-axis; add 90deg to make 0 point to top
//     const angleDeg = (Math.atan2(y, x) * 180) / Math.PI + 90;
//     const normalized = (angleDeg + 360) % 360;

//     const sectorAngle = 360 / YEARS.length; // e.g. ~32.727... deg for 11 items
//     // floor so each sector is contiguous and non-overlapping
//     const idx = Math.floor(normalized / sectorAngle) % YEARS.length;

//     setSelectedYear(YEARS[idx]);
//   };

//   const selectedIndex = YEARS.indexOf(selectedYear);
//   const sectorAngle = 360 / YEARS.length;
//   const handAngle = selectedIndex * sectorAngle; // 0deg -> top

//   // visual size - change w-96/h-96 to w-112/h-112 or whatever you prefer
//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8 p-8">
//       {/* left panel */}
//       <div className="md:w-1/2">
//         <h2 className="text-4xl font-bold" style={{ color: "#034D9D" }}>
//           {selectedYear}
//         </h2>
//         <p className="mt-4 text-gray-700">{contentByYear[selectedYear]}</p>
//       </div>

//       {/* right: clock */}
//       <div className="md:w-1/2 flex justify-center">
//         <div
//           ref={clockRef}
//           onClick={onClockClick}
//           role="button"
//           aria-label={`Year selector. Currently ${selectedYear}`}
//           className="relative w-96 h-96 rounded-full border-4 border-[#034D9D] shadow-lg flex items-center justify-center bg-gradient-to-b from-white to-slate-50"
//           style={{ minWidth: 320, minHeight: 320 }}
//         >
//           {/* year labels */}
//           {YEARS.map((y, i) => {
//             const theta = (2 * Math.PI * i) / YEARS.length - Math.PI / 2; // start at top
//             const radiusPercent = 38; // how far from center (in %)
//             const left = 50 + Math.cos(theta) * radiusPercent;
//             const top = 50 + Math.sin(theta) * radiusPercent;
//             const isActive = y === selectedYear;
//             return (
//               <div
//                 key={y}
//                 className={`absolute text-sm select-none transition-transform duration-150 ${
//                   isActive
//                     ? "text-[#034D9D] font-semibold scale-105"
//                     : "text-gray-700"
//                 }`}
//                 style={{
//                   left: `${left}%`,
//                   top: `${top}%`,
//                   transform: "translate(-50%, -50%)",
//                   cursor: "pointer",
//                   userSelect: "none",
//                 }}
//                 // allow clicking the label itself to select
//                 onClick={(ev) => {
//                   ev.stopPropagation(); // prevent double angle calculation
//                   setSelectedYear(y);
//                 }}
//                 aria-label={`Select ${y}`}
//                 title={`${y}`}
//               >
//                 {y}
//               </div>
//             );
//           })}

//           {/* rotating single hand (PIN) - base is fixed in center */}
//           <div
//             // pointer itself should not block clicks (so pointer-events none)
//             style={{
//               position: "absolute",
//               left: "50%",
//               top: "50%",
//               width: 4,
//               height: "32%", // hand length relative to clock size
//               background: "#034D9D",
//               borderRadius: 6,
//               transformOrigin: "50% 100%", // rotate around bottom-center (the base)
//               transform: `translateX(-50%) translateY(-100%) rotate(${handAngle}deg)`,
//               boxShadow: "0 6px 14px rgba(3,77,157,0.18)",
//               transition: "transform 420ms cubic-bezier(0.22,1,0.36,1)",
//               pointerEvents: "none",
//               zIndex: 10,
//             }}
//           />

//           {/* center pin cap */}
//           <div
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//                        w-5 h-5 rounded-full bg-white border-2"
//             style={{
//               borderColor: "#034D9D",
//               zIndex: 20,
//               pointerEvents: "none",
//             }}
//           />
//           <p className="mt-16">WindHans Journey</p>
//         </div>
//       </div>
//     </div>
//   );
// }















"use client";

import React, { JSX, useRef, useState } from "react";

const YEARS = Array.from({ length: 11 }, (_, i) => 2015 + i);

const contentByYear: Record<number, string> = {
  2015: "WindHans Technologies was founded with a visionary mission to revolutionize the digital landscape through cutting-edge innovation. Our journey began with a carefully selected team of elite developers and architects, committed to delivering transformative solutions that redefine industry standards and drive exponential business growth.",
  2016: "Strategic expansion of our core engineering team and establishment of premier enterprise partnerships. We successfully architected and delivered 25+ mission-critical software solutions, specializing in highly scalable web applications and next-generation mobile platforms that consistently exceeded client expectations and industry benchmarks.",
  2017: "Pioneered our comprehensive cloud infrastructure services and launched revolutionary AI-powered analytics solutions. This pivotal year marked our triumphant entry into the Fortune 500 enterprise market, establishing WindHans as the most trusted and innovative technology partner in the industry.",
  2018: "Achieved prestigious ISO 27001 certification and inaugurated our state-of-the-art second development center. We spearheaded groundbreaking blockchain integration services and launched our proprietary enterprise project management platform, proudly serving an exclusive clientele of 150+ global industry leaders.",
  2019: "Introduced our revolutionary Machine Learning as a Service (MLaaS) platform and successfully expanded into lucrative European markets. Our world-class team grew to 200+ top-tier professionals, establishing strategic partnerships with the world's leading cloud infrastructure providers.",
  2020: "Masterfully navigated the global pandemic by accelerating comprehensive digital transformation initiatives for our prestigious clients. We launched industry-leading remote collaboration tools and seamlessly enabled 300+ businesses to transition to sophisticated digital-first operations with zero downtime.",
  2021: "Celebrated the remarkable milestone of $75M in annual revenue and launched our cutting-edge Innovation Labs. We introduced revolutionary low-code/no-code solutions and became a certified premier partner for major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform.",
  2022: "Expanded into elite cybersecurity services and launched our premium 24/7 managed services division. We established offices across five new international markets and created our Center of Excellence for emerging technologies including Web3, IoT, and quantum computing applications.",
  2023: "Proudly celebrated serving 750+ global clients and launched our groundbreaking AI-driven automation suite. We achieved complete carbon-neutral operations and introduced sustainable technology solutions, reinforcing our unwavering commitment to environmental stewardship and corporate responsibility.",
  2024: "Reached unicorn valuation status and launched the prestigious WindHans Academy for advanced technology education. We pioneered quantum-ready security solutions and established exclusive research partnerships with world-renowned universities for next-generation computing technologies.",
  2025: "Leading the global industry in quantum computing applications and sustainable technology solutions. We're expanding our international presence to 20 countries while maintaining our commitment to breakthrough innovation, environmental sustainability, and unparalleled client success.",
};

export default function Journey(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<number>(2015);
  const clockRef = useRef<HTMLDivElement | null>(null);

  // ORIGINAL CLICK LOGIC - EXACTLY AS YOU HAD IT
  const onClockClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = clockRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const x = e.clientX - cx;
    const y = e.clientY - cy;
    // atan2 returns angle from X-axis; add 90deg to make 0 point to top
    const angleDeg = (Math.atan2(y, x) * 180) / Math.PI + 90;
    const normalized = (angleDeg + 360) % 360;

    const sectorAngle = 360 / YEARS.length; // e.g. ~32.727... deg for 11 items
    // floor so each sector is contiguous and non-overlapping
    const idx = Math.floor(normalized / sectorAngle) % YEARS.length;

    setSelectedYear(YEARS[idx]);
  };

  const selectedIndex = YEARS.indexOf(selectedYear);
  const sectorAngle = 360 / YEARS.length;
  const handAngle = selectedIndex * sectorAngle; // 0deg -> top

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Revolutionary Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(3,77,157,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(147,51,234,0.1)_0%,transparent_70%)]"></div>

        {/* Floating Orbs */}
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#034D9D] rounded-full opacity-10 blur-3xl animate-pulse"></div> */}
        {/* <div
          className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500 rounded-full opacity-50 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div> */}
        {/* <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div> */}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #034D9D 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 py-20">
        {/* Spectacular Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#034D9D]/20 via-blue-600/10 to-purple-600/20 rounded-full border border-[#034D9D]/90 backdrop-blur-xl mb-8">
            {/* <div className="w-2 h-2 bg-[#034D9D] rounded-full animate-pulse mr-10"></div> */}
            <span className="text-blue-400 font-light text-sm uppercase tracking-[0.3em]">
              Our Evolution
            </span>
            {/* <div className="w-2 h-2 bg-[#034D9D] rounded-full animate-pulse"></div> */}
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font- font-serif tracking-wide mb-8 leading-none">
            <span className="block text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text">
              THE
            </span>
            <span className="block text-transparent bg-gradient-to-r from-[#034D9D] via-blue-400 to-[#034D9D] bg-clip-text mt-2">
              JOURNEY
            </span>
          </h1>

          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#034D9D]"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#034D9D] rounded-full shadow-lg shadow-[#034D9D]/50"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#034D9D]"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            A decade of{" "}
            <span className="text-[#034D9D] font-semibold">
              breakthrough innovation
            </span>{" "}
            and
            <span className="text-blue-400 font-semibold">
              {" "}
              exponential growth
            </span>{" "}
            that continues to
            <span className="text-white font-semibold">
              {" "}
              reshape the digital frontier
            </span>
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-stretch gap-16">
          {/* COMPLETELY NEW LEFT PANEL DESIGN */}
          <div className="xl:w-1/2">
            <div className="relative h-full">
              {/* Holographic Card Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#034D9D]/30 via-blue-500/20 to-[#034D9D]/30 rounded-3xl blur-2xl opacity-75 "></div>

              <div className="relative h-full overflow-hidden">
                {/* Animated Background Pattern */}
                {/* <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#034D9D]/20 to-transparent"></div>
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(45deg, transparent 49%, rgba(3,77,157,0.1) 50%, transparent 51%)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div> */}

                <div className="relative p-12 md:p-6 h-full flex flex-col">
                  {/* Dynamic Year Display */}
                  <div className="mb-0">
                    <div className="flex items-end gap-6 mb-6">
                      <div className="relative">
                        {/* Glowing Year Container */}

                        <div className="relative bg-gradient-to-br from-slate-950 via-blue-800 to-slate-950 py-1.5 px-8 rounded-xl shadow-2xl shadow-[#034D9D] border border-blue-400">
                          <span className="text-3xl font-medium tracking-wider font-serif text-white drop-shadow-2xl">
                            {selectedYear}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revolutionary Content Display */}
                  <div className="flex-1 mb-6">
                    <div className="relative">
                      {/* Animated Side Border */}
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-lg shadow-[#034D9D]/30"></div>

                      <div className="pl-6">
                        <p className="text-lg md:text-md text-gray-300 leading-relaxed font-light tracking-wide">
                          {contentByYear[selectedYear]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Futuristic Stats Grid */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40 rounded-2xl backdrop-blur-xl"></div>

                    <div className="relative grid grid-cols-3 gap-6 px-6 py-4 rounded-2xl border border-[#034D9D]/30">
                      {[
                        {
                          value:
                            selectedYear <= 2020
                              ? Math.floor((selectedYear - 2014) * 25) + "+"
                              : selectedYear <= 2023
                              ? Math.floor((selectedYear - 2014) * 75) + "+"
                              : "750+",
                          label: "Projects",
                        },
                        {
                          value:
                            selectedYear <= 2018
                              ? Math.floor((selectedYear - 2014) * 15) + "+"
                              : selectedYear <= 2023
                              ? Math.floor((selectedYear - 2014) * 40) + "+"
                              : "200+",
                          label: "Experts",
                        },
                        {
                          value:
                            selectedYear <= 2018
                              ? Math.floor((selectedYear - 2014) * 2) + ""
                              : selectedYear <= 2023
                              ? Math.floor((selectedYear - 2014) * 3) + ""
                              : "20",
                          label: "Countries",
                        },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="relative mb-2 transform group-hover:scale-110 transition-transform duration-300">
                            <div
                              className={`relative text-3xl md:text-4xl tracking-wider font-light font-serif text-white/70 ${stat}`}
                            >
                              {stat.value}
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-[0.15em]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPLETELY REDESIGNED CLOCK */}
          <div className="xl:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Outer Glow System */}
              <div className="absolute inset-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-transparent via-transparent to-purple-500/40 blur-3xl scale-125"></div>
              <div
                className="absolute inset-0 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#034D9D]/20 via-blue-500/10 to-transparent blur-2xl scale-110 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Main Clock - ORIGINAL FUNCTIONALITY PRESERVED */}
              <div
                ref={clockRef}
                onClick={onClockClick}
                role="button"
                aria-label={`Year selector. Currently ${selectedYear}`}
                className="relative w-96 h-96 cursor-pointer group"
                style={{ minWidth: 384, minHeight: 384 }}
              >
                {/* Holographic Clock Face */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/80 via-slate-900/90 to-black/80 backdrop-blur-2xl border-4 border-[#034D9D]/50 shadow-2xl shadow-[#034D9D]/30"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/5 via-[#034D9D]/5 to-white/5 border border-white/10 shadow-inner"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-black/40 via-slate-800/50 to-black/40 backdrop-blur-xl border border-[#034D9D]/20"></div>

                {/* Year Labels - EXACT ORIGINAL POSITIONING FOR 11 YEARS */}
                {YEARS.map((y, i) => {
                  const theta = (2 * Math.PI * i) / YEARS.length - Math.PI / 2; // start at top
                  const radiusPercent = 38; // how far from center (in %)
                  const left = 50 + Math.cos(theta) * radiusPercent;
                  const top = 50 + Math.sin(theta) * radiusPercent;
                  const isActive = y === selectedYear;

                  return (
                    <div key={y}>
                      <div
                        className={`absolute select-none transition-all duration-500 cursor-pointer ${
                          isActive ? "z-30" : "z-20"
                        }`}
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        // ORIGINAL CLICK HANDLER
                        onClick={(ev) => {
                          ev.stopPropagation();
                          setSelectedYear(y);
                        }}
                        aria-label={`Select ${y}`}
                        title={`${y}`}
                      >
                        {/* Holographic Year Badge */}
                        {isActive && (
                          <div className="absolute inset-0 bg-[#034D9D] rounded-2xl blur-2xl opacity-60 scale-125"></div>
                        )}
                        <div
                          className={`relative px-5 py-4 rounded-2xl font-black text-lg  transition-all duration-500 ${
                            isActive
                              ? "bg-gradient-to-br from-[#034D9D] via-blue-600 to-[#034D9D] text-white border-blue-400/50 shadow-[#034D9D]/60"
                              : "text-gray-300 border-gray-600/50 hover:border-[#034D9D]/70 hover:text-white hover:bg-gradient-to-br hover:from-[#034D9D]/20 hover:to-blue-600/20"
                          }`}
                        >
                          {y}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Ultra-Premium Hand - ORIGINAL ROTATION */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: 10,
                    height: "32%", // ORIGINAL HEIGHT
                    background:
                      "linear-gradient(to bottom, #034D9D 0%, #3b82f6 30%, #6366f1 70%, #034D9D 100%)",
                    borderRadius: 5,
                    transformOrigin: "50% 100%", // ORIGINAL ORIGIN
                    transform: `translateX(-50%) translateY(-100%) rotate(${handAngle}deg)`, // ORIGINAL TRANSFORM
                    boxShadow:
                      "0 0 30px rgba(3,77,157,0.8), 0 0 60px rgba(3,77,157,0.4), inset 0 0 20px rgba(255,255,255,0.2)",
                    transition: "transform 420ms cubic-bezier(0.22,1,0.36,1)", // ORIGINAL TIMING
                    pointerEvents: "none",
                    zIndex: 40,
                  }}
                />

                {/* Futuristic Center Hub */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                  style={{ zIndex: 50, pointerEvents: "none" }}
                >
                  <div className="absolute inset-0 bg-[#034D9D] rounded-full blur-xl opacity-60"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-black via-slate-800 to-black rounded-full border-4 border-[#034D9D] shadow-2xl shadow-[#034D9D]/50">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#034D9D] via-blue-600 to-[#034D9D] shadow-inner"></div>
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Premium Brand Display */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center font-serif">
                  <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 bg-clip-text mb-0.5">
                    WindHans
                  </h3>
                  <p className="text-xs text-gray-400 font-light uppercase tracking-[0.3em] mb-3">
                    Technologies
                  </p>
                  <div className="flex justify-center gap-1">
                    <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#034D9D] to-transparent"></div>
                    <div className="w-2 h-px bg-[#034D9D]"></div>
                    <div className="w-6 h-px bg-gradient-to-l from-transparent via-[#034D9D] to-transparent"></div>
                  </div>
                </div>

                {/* 11 Year Markers - FIXED TO MATCH YOUR 11 YEARS */}
                <div className="absolute inset-0 rounded-full opacity-40 pointer-events-none">
                  {YEARS.map((_, i) => (
                    <div key={i}>
                      <div
                        className="absolute bg-gradient-to-b from-[#034D9D] via-blue-500 to-[#034D9D] rounded-full shadow-lg"
                        style={{
                          width: i % 3 === 0 ? "4px" : "2px",
                          height: i % 3 === 0 ? "28px" : "18px",
                          left: "50%",
                          top: "8px",
                          transformOrigin: "50% 184px",
                          transform: `translateX(-50%) rotate(${
                            i * (360 / YEARS.length)
                          }deg)`, // FIXED: Uses YEARS.length (11) not 12
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

















// "use client";

// import React, { useRef, useState } from "react";

// const YEARS = Array.from({ length: 11 }, (_, i) => 2015 + i);

// const contentByYear: Record<number, string> = {
//   2015: "WindHans Technologies was founded with a vision to revolutionize the digital landscape. Our journey began with a small team of passionate developers committed to delivering cutting-edge solutions that transform businesses and drive innovation forward.",
//   2016: "Expanded our core development team and established our first enterprise partnerships. We successfully delivered 15+ custom software solutions, focusing on scalable web applications and mobile platforms that exceeded client expectations.",
//   2017: "Launched our cloud infrastructure services and introduced AI-powered analytics solutions. This year marked our entry into the enterprise market with Fortune 500 clients, establishing WindHans as a trusted technology partner.",
//   2018: "Achieved ISO 27001 certification and opened our second development center. We pioneered blockchain integration services and launched our proprietary project management platform, serving over 100+ clients globally.",
//   2019: "Introduced our Machine Learning as a Service (MLaaS) platform and expanded into European markets. Our team grew to 150+ professionals, and we established strategic partnerships with leading cloud providers.",
//   2020: "Navigated the global pandemic by accelerating digital transformation initiatives for our clients. We launched remote collaboration tools and helped 200+ businesses transition to digital-first operations seamlessly.",
//   2021: "Achieved a milestone of $50M in revenue and launched our Innovation Labs. We introduced low-code/no-code solutions and became a certified partner for major cloud platforms including AWS, Azure, and Google Cloud.",
//   2022: "Expanded into cybersecurity services and launched our 24/7 managed services division. We opened offices in three new countries and established our Center of Excellence for emerging technologies like Web3 and IoT.",
//   2023: "Celebrated serving 500+ clients globally and launched our AI-driven automation suite. We achieved carbon-neutral operations and introduced sustainable technology solutions, reinforcing our commitment to environmental responsibility.",
//   2024: "Reached unicorn valuation and launched WindHans Academy for tech education. We pioneered quantum-ready security solutions and established research partnerships with leading universities for next-generation computing technologies.",
//   2025: "Leading the industry in quantum computing applications and sustainable tech solutions. We're expanding our global footprint to 15 countries while maintaining our commitment to innovation, sustainability, and client success.",
// };

// export default function Journey(): JSX.Element {
//   const [selectedYear, setSelectedYear] = useState<number>(2015);
//   const clockRef = useRef<HTMLDivElement | null>(null);

//   const onClockClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = clockRef.current;
//     if (!el) return;

//     const rect = el.getBoundingClientRect();
//     const cx = rect.left + rect.width / 2;
//     const cy = rect.top + rect.height / 2;

//     const x = e.clientX - cx;
//     const y = e.clientY - cy;
//     const angleDeg = (Math.atan2(y, x) * 180) / Math.PI + 90;
//     const normalized = (angleDeg + 360) % 360;

//     const sectorAngle = 360 / YEARS.length;
//     const idx = Math.floor(normalized / sectorAngle) % YEARS.length;

//     setSelectedYear(YEARS[idx]);
//   };

//   const selectedIndex = YEARS.indexOf(selectedYear);
//   const sectorAngle = 360 / YEARS.length;
//   const handAngle = selectedIndex * sectorAngle;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#034D9D] rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#034D9D] rounded-full opacity-3 translate-x-1/3 translate-y-1/3"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#034D9D] to-blue-400 rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#034D9D] via-blue-600 to-[#034D9D] bg-clip-text text-transparent">
//             Our Journey
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             A decade of innovation, growth, and technological excellence that
//             has shaped the future of digital transformation
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#034D9D] to-transparent mx-auto mt-8"></div>
//         </div>

//         <div className="flex flex-col xl:flex-row items-center gap-16">
//           {/* Left Panel - Content */}
//           <div className="xl:w-1/2 space-y-8">
//             <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#034D9D] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
//                   <span className="text-2xl font-bold text-white">
//                     {selectedYear}
//                   </span>
//                 </div>
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-[#034D9D] mb-2">
//                     {selectedYear}
//                   </h2>
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-[#034D9D] rounded-full"></div>
//                     <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//                       Milestone Year
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#034D9D] to-blue-300 rounded-full"></div>
//                 <p className="text-lg leading-relaxed text-gray-700 pl-8 font-light">
//                   {contentByYear[selectedYear]}
//                 </p>
//               </div>

//               {/* Achievement Stats */}
//               <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-100">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#034D9D] mb-1">
//                     {selectedYear <= 2020
//                       ? Math.floor((selectedYear - 2014) * 15) + "+"
//                       : selectedYear <= 2023
//                       ? Math.floor((selectedYear - 2014) * 50) + "+"
//                       : "500+"}
//                   </div>
//                   <div className="text-sm text-gray-500 font-medium">
//                     Projects Delivered
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#034D9D] mb-1">
//                     {selectedYear <= 2018
//                       ? Math.floor((selectedYear - 2014) * 8) + "+"
//                       : selectedYear <= 2023
//                       ? Math.floor((selectedYear - 2014) * 25) + "+"
//                       : "15"}
//                   </div>
//                   <div className="text-sm text-gray-500 font-medium">
//                     Global Offices
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Panel - Premium Clock */}
//           <div className="xl:w-1/2 flex justify-center">
//             <div className="relative">
//               {/* Outer Glow Ring */}
//               <div className="absolute inset-0 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#034D9D]/20 via-blue-400/20 to-[#034D9D]/20 blur-xl scale-110"></div>

//               {/* Clock Container */}
//               <div
//                 ref={clockRef}
//                 onClick={onClockClick}
//                 role="button"
//                 aria-label={`Year selector. Currently ${selectedYear}`}
//                 className="relative w-96 h-96 rounded-full shadow-2xl cursor-pointer group transition-all duration-500 hover:scale-105"
//                 style={{ minWidth: 384, minHeight: 384 }}
//               >
//                 {/* Outer Ring */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-slate-50 to-blue-50 border-4 border-[#034D9D]/30 shadow-inner"></div>

//                 {/* Inner Ring */}
//                 <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white to-slate-100 border border-gray-200/50 shadow-lg"></div>

//                 {/* Premium Glass Effect */}
//                 <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/90 to-transparent backdrop-blur-sm border border-white/50"></div>

//                 {/* Year Labels */}
//                 {YEARS.map((y, i) => {
//                   const theta = (2 * Math.PI * i) / YEARS.length - Math.PI / 2;
//                   const radiusPercent = 35;
//                   const left = 50 + Math.cos(theta) * radiusPercent;
//                   const top = 50 + Math.sin(theta) * radiusPercent;
//                   const isActive = y === selectedYear;

//                   return (
//                     <div key={y} className="absolute">
//                       {/* Year Badge */}
//                       <div
//                         className={`absolute select-none transition-all duration-300 cursor-pointer ${
//                           isActive ? "scale-110 z-20" : "hover:scale-105 z-10"
//                         }`}
//                         style={{
//                           left: `${left}%`,
//                           top: `${top}%`,
//                           transform: "translate(-50%, -50%)",
//                         }}
//                         onClick={(ev) => {
//                           ev.stopPropagation();
//                           setSelectedYear(y);
//                         }}
//                         aria-label={`Select ${y}`}
//                         title={`${y}`}
//                       >
//                         <div
//                           className={`px-3 py-2 rounded-xl font-semibold text-sm shadow-lg border transition-all duration-300 ${
//                             isActive
//                               ? "bg-gradient-to-r from-[#034D9D] to-blue-600 text-white border-[#034D9D] shadow-xl shadow-[#034D9D]/30"
//                               : "bg-white/90 text-gray-700 border-gray-200/50 hover:bg-gradient-to-r hover:from-[#034D9D]/10 hover:to-blue-100 hover:border-[#034D9D]/30"
//                           }`}
//                         >
//                           {y}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {/* Premium Hand Design */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "50%",
//                     width: 6,
//                     height: "30%",
//                     background: "linear-gradient(to bottom, #034D9D, #1e40af)",
//                     borderRadius: 3,
//                     transformOrigin: "50% 100%",
//                     transform: `translateX(-50%) translateY(-100%) rotate(${handAngle}deg)`,
//                     boxShadow:
//                       "0 8px 32px rgba(3,77,157,0.4), 0 0 0 1px rgba(255,255,255,0.5)",
//                     transition:
//                       "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
//                     pointerEvents: "none",
//                     zIndex: 30,
//                   }}
//                 />

//                 {/* Center Hub */}
//                 <div
//                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//                              w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-100 
//                              border-4 border-[#034D9D] shadow-lg"
//                   style={{ zIndex: 40, pointerEvents: "none" }}
//                 >
//                   <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#034D9D] to-blue-600"></div>
//                 </div>

//                 {/* Company Name */}
//                 <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
//                   <div className="text-center">
//                     <h3 className="text-lg font-bold text-[#034D9D] mb-1">
//                       WindHans
//                     </h3>
//                     <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
//                       Technologies
//                     </p>
//                   </div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute inset-0 rounded-full opacity-30 pointer-events-none">
//                   {[...Array(12)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="absolute w-1 h-6 bg-gradient-to-b from-[#034D9D] to-transparent"
//                       style={{
//                         left: "50%",
//                         top: "8px",
//                         transformOrigin: "50% 184px",
//                         transform: `translateX(-50%) rotate(${i * 30}deg)`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }