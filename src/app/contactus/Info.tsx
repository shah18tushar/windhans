// "use client";

// import { Globe } from "@/components/magicui/globe";
// import React from "react";

// const Info = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 items-start overflow-x-hidden">
//       {/* Left Section For Content */}
//       <div>Content</div>

//       {/* Right Section Animated Globe File */}
//       <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-[28rem]">
//         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
//            Mission
//         </span>
//         <Globe className="top-20" />
//         <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(255, 255, 255, 0.2),rgba(255,255,255,0))]" />
//       </div>
//     </div>
//   );
// };

// export default Info;









"use client";

import { Globe } from "@/components/magicui/globe";
import React from "react";

/**
 * Info - Contact page hero (left: premium content, right: globe)
 *
 * Notes:
 *  - Keep your global background white (this component assumes white bg).
 *  - Add Playfair Display (or another elegant serif) + Lato into your root layout/head for best results.
 *    Example (in app/layout.tsx or _document): <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
 */

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-start overflow-x-hidden bg-white">
      {/* Left Section For Content */}
      <div className="px-6 py-12 lg:py-16 lg:pl-12 max-w-3xl">
        <div className="relative">
          {/* Decorative vertical gold bar */}
          <div className="absolute -left-6 top-10">
            <div
              className="w-1 h-20 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #D4AF37 0%, #C8A165 60%, rgba(212,175,55,0.85) 100%)",
              }}
            />
          </div>

          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-serif">
            Contact • Connect • Collaborate
          </p>

          {/* Headline */}
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-4xl leading-tight mb-6"
            style={{ color: "#06182A" /* deep charcoal for body contrast */ }}
          >
            Handcrafted IT Solutions, <br />
            Engineered For{" "}
            <span className="text-[#034D9D]">Enterprise Excellence</span>
          </h2>

          {/* Lead paragraph */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            WindHans Technologies blends meticulous engineering,
            enterprise-grade security and cloud-scale delivery to craft digital
            experiences that feel premium — and perform. Work with a partner
            obsessed with quality and results.
          </p>

          {/* Key highlights row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center rounded-full p-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(3,77,157,0.06), rgba(212,175,55,0.06))",
                }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "#D4AF37",
                    boxShadow: "0 0 10px rgba(212,175,55,0.25)",
                  }}
                />
              </span>
              <span className="text-sm uppercase tracking-wide text-gray-700">
                Enterprise Security
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-full p-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "#D4AF37",
                    boxShadow: "0 0 10px rgba(212,175,55,0.18)",
                  }}
                />
              </span>
              <span className="text-sm uppercase tracking-wide text-gray-700">
                Cloud Scale
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-full p-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "#D4AF37",
                    boxShadow: "0 0 10px rgba(212,175,55,0.18)",
                  }}
                />
              </span>
              <span className="text-sm uppercase tracking-wide text-gray-700">
                Trusted Delivery
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <div className="leading-none">
              E-mail{" "}
              <a href="mailto:hello@windhans.com" className="underline">
                hello@windhans.com
              </a>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              We respond within 24 hours on business days
            </div>
          </div>

          {/* Feature cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl border border-gray-100 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Security
              </div>
              <h4 className="text-base font-semibold mb-1">
                Defense-grade controls
              </h4>
              <p className="text-sm text-gray-600">
                Encryption, audits and compliance baked into every engagement.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-100 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Scale
              </div>
              <h4 className="text-base font-semibold mb-1">
                Cloud-first architecture
              </h4>
              <p className="text-sm text-gray-600">
                Architectures that scale seamlessly as your business grows.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-100 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Delivery
              </div>
              <h4 className="text-base font-semibold mb-1">
                Predictable outcomes
              </h4>
              <p className="text-sm text-gray-600">
                Transparent processes and milestones that deliver on time.
              </p>
            </div>
          </div> */}

          {/* CTA + contact mini */}
          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium shadow-lg transition-transform transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(90deg,#034D9D 0%, rgba(3,77,157,0.9) 100%)",
                color: "white",
              }}
            >
              Get in touch
            </a>

            <div className="text-sm text-gray-600">
              <div className="leading-none">
                or email{" "}
                <a href="mailto:hello@windhans.com" className="underline">
                  hello@windhans.com
                </a>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                We respond within 24 hours on business days
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Right Section Animated Globe File - left exactly as original except minor responsive wrapper */}
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden -ml-20 pl-40 pb-40 pt-8 md:pb-[28rem]">
        <Globe className="top-0" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(255, 255, 255, 0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
};

export default Info;