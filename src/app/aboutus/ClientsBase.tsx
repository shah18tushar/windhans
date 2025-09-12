// "use client";

// import React, { useState, useEffect } from "react";

// const THEME = "#034D9D";

// const ClientsBase = () => {


//   return (
//     <section className="bg-white relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-3 py-6 grid grid-cols-[40%_60%] gap-6 items-center relative z-10">
//         {/* LEFT: Text content */}
//         <div className="">
//           <img
//             src="/cli.gif"
//             alt="WindHans professional"
//             className="w-full max-w-full h-[350px] object-contain"
//           />
//         </div>

//         {/* RIGHT: Visual element */}
//         <div className="bg-black/20">right section</div>
//       </div>
//     </section>
//   );
// };


// export default ClientsBase;











// ClientsBase.jsx
// Single-file React component using Tailwind CSS.
// Notes for use:
// - Add this file to a React/Next.js project that already has Tailwind set up.
// - Add these assets to your public/ folder (or update paths):
//   /clients.png
//   /logos/nari.png
//   /logos/govt.svg
//   /logos/defence.svg
//   /logos/pwd.svg
//   /logos/private.svg
//   /logos/overseas.svg
// - For a luxury serif heading, include Playfair Display in your global HTML or Tailwind config
//   (e.g. <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">)

"use client";
import AnimatedButton from "@/components/ui/AnimatedButton";
import React from "react";

const THEME = "#034D9D"; // Your provided theme color

const logos = [
    { src: "/sgslogo.png", alt: "Public Works Department (PWD)" },
  { src: "/logo.png", alt: "NARI (National AIDS Research Institute)" },
  { src: "/ECRSlogo.png", alt: "Government Organizations" },
  { src: "/logo2.jpg", alt: "Defense Department" },
  { src: "/logo.png", alt: "NARI (National AIDS Research Institute)" },
  { src: "/ECRSlogo.png", alt: "Government Organizations" },
  { src: "/logo2.jpg", alt: "Defense Department" },
  { src: "/sgslogo.png", alt: "Public Works Department (PWD)" },
];

export default function ClientsBase() {
  return (
    <section className="bg-white relative overflow-visible py-16">
      {/* Decorative faint pattern (keeps BG white but adds premium texture) */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 opacity-5"
        width="100%"
        height="100%"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#f9fafb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 items-start">
          {/* RIGHT: Visual element (image + logo cluster) */}
          <div className="order-1 relative">
            <div className="overflow-hidden">
              {/* Main image (keeps white BG but adds visual richness) */}
              <img
                src="/cli.gif"
                alt="WindHans — Clients and partnerships"
                className="w-full h-[380px] object-contain"
              />

              {/* Floating card with logo grid */}
              <div className="absolute left-6 right-6 -bottom-32 backdrop-blur-md p-4 flex flex-wrap gap-4 justify-between">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="w-28 h-12 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-105"
                  >
                    {/* logos are intentionally rendered slightly muted to feel premium */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-9 object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* small decorative trophy-ish icon */}
            <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-md">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M7 3h10"
                  stroke="#EFBF04"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 21h8"
                  stroke="#EFBF04"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 9v6"
                  stroke="#034D9D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* LEFT: Text content (1/3 on large, full width on small) */}
          <div className="order-2">
            <div className="mb-2">
              <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-3 py-1.5 border border-blue-400 rounded-full">
                Diverse Client Base
              </span>
            </div>

            <h2
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
              style={{ color: THEME, fontFamily: "'Playfair Display', serif" }}
            >
              Distinguished & Sophisticated Clientele Spanning Key Industries
            </h2>

            {/* gold accent bar */}
            <div
              className="mt-1 w-[90%] h-0.5 rounded-full"
              style={{ background: "linear-gradient(90deg,#EFBF04,#FFD873)" }}
            />

            <p className="mt-4 text-gray-700 text-base leading-relaxed">
              We serve a wide range of industries, from small businesses to
              large corporations. Our clients come from sectors such as
              transport, healthcare, education, manufacturing, finance, and
              e-commerce.{" "}
              <span className="font-medium">
                One of our notable clients is the National AIDS Research
                Institute (NARI)
              </span>
              , a government research institute — for which we developed a
              website and a job application portal to streamline recruitment and
              improve efficiency.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "Transport",
                "Healthcare",
                "Education",
                "Manufacturing",
                "Finance",
                "E-commerce",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 border border-blue-400 text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <AnimatedButton
                text="View full client roster"
                bgColor="bg-[#034D9D]/85"
                textColor="text-black"
                hoverTextColor="text-white"
              />
            </div>

            <p className="mt-4 text-xs text-gray-600 text-center">
              Clients shown with permission. Contact us to request case studies
              and detailed references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}