"use client";

import React from "react";
import Image from "next/image";

type CareersBannerProps = {
  imageSrc?: string; // supply a high-res isometric/team illustration or studio photo
  className?: string;
};

export default function CareersBanner({
  imageSrc = "/Job.gif",
  className = "",
}: CareersBannerProps) {
  return (
    <section
      aria-label="Careers hero"
      className={`relative overflow-hidden ${className}`}
    >
      {/* 1) Heavy dark + brand-blue vignette for luxury depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #03040a 0%, #071028 22%, #0a2340 40%, #034D9D 55%, rgba(2,10,25,0.85) 85%)",
        }}
      />

      {/* 2) Decorative blurred accents (gold + blue) */}
      <div
        aria-hidden
        className="absolute -left-36 top-6 w-96 h-96 rounded-full blur-3xl opacity-20 hidden sm:block"
        style={{
          background:
            "radial-gradient(circle at 28% 30%, rgba(255,211,107,0.95), rgba(255,211,107,0.03) 40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-10 -bottom-8 w-80 h-80 rounded-full blur-2xl opacity-16 hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(3,77,157,0.95), rgba(3,77,157,0.03) 40%)",
        }}
      />

      {/* subtle grain / texture — small opacity for high-end tactile feel */}
      <div className="absolute inset-0 -z-5 bg-[url('/img1.png')] bg-repeat opacity-[13%] pointer-events-none" />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Premium Glass Morphism Top Bar */}
        <div className="absolute top-4 left-0 right-0 z-30 backdrop-blur-xl bg-gradient-to-r from-white/5 to-white/2 border-b border-white/10 rounded-4xl">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Elite Careers Portal
            </div>
            <div className="flex gap-4 text-xs text-white/50">
              <span>Live Openings: 12</span>
              <span>•</span>
              <span>Take Your Place Now...!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: content — lg:col-span-7 (as requested) */}
          <div className="lg:col-span-7 text-white">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFD36B] to-[#034D9D] animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFD36B] via-white to-[#FFD36B] bg-clip-text text-transparent">
                WindHans Technologies
              </span>
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#034D9D]/20 to-[#FFD36B]/20 border border-[#FFD36B]/30 text-[#FFD36B] text-xs font-semibold">
                NOW HIRING
              </div>
            </div>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extralight font-serif leading-tight">
              <span className="lg:text-5xl"> We Are Looking For </span> <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #ffd36b 0%, #fff2d0 60%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Wind Hans Family
              </span>
            </h1>

            <p className="mt-6 text-lg font-light text-white max-w-2xl">
              Wind Hans Team values the individual and strives to deliver an
              appropriate work-life balance because a motivated and happy person
              can add untold value to our clients and colleagues.
            </p>
            <p className="mt-4 text-lg font-light text-white max-w-2xl">
              We are always on the lookout for talent to join us - Especially
              for people who can use their creativity to drive value for our
              clients worldwide.
            </p>
            {/* CTAs: rich gradient + subtle gold outline */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-2xl transition-transform transform hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #034D9D 0%, #0666B3 100%)",
                  boxShadow: "0 12px 40px rgba(3,77,157,0.28)",
                  color: "white",
                }}
              >
                View Openings
                <span> {">"} </span>
              </a>

              <a className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/5 transition">
                Join Talent Network
              </a>
            </div>
          </div>

          {/* RIGHT: illustration/photo — remaining (lg:col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 lg:h-[460px] overflow-visible">
              <Image
                src={imageSrc}
                alt="WindHans team"
                fill
                className="object-fill rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* soft bottom vignette to ground the hero */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,12,0) 0%, rgba(2,6,12,0.95) 85%)",
        }}
      />
    </section>
  );
}