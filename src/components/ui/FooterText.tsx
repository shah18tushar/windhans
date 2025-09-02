"use client";

import React from "react";
import {
  FaWind,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

const FooterText = () => {
  return (
    <div className="relative py-1.5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden border-t border-blue-500/30 shadow-[0_-2px_25px_rgba(59,130,246,0.2)] backdrop-blur-md">
      {/* Marquee Container */}
      <div className="whitespace-nowrap flex animate-marquee">
        <div className="flex items-center space-x-14 text-md font-light uppercase tracking-[0.2em] px-10 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">
          <FaWind className="text-cyan-300 " />
          <span className="text-cyan-300">Wind Hans</span>

          <FaGlobe className="text-cyan-300 " />
          <span className="text-cyan-300">Web Development</span>

          <FaMobileAlt className="text-cyan-300 " />
          <span className="text-cyan-300">App Development</span>

          <FaPaintBrush className="text-cyan-300 " />
          <span className="text-cyan-300">UI/UX Design</span>

          <FaBullhorn className="text-cyan-300 " />
          <span className="text-cyan-300">Digital Marketing</span>

          <FaCloud className="text-cyan-300 " />
          <span className="text-cyan-300">Cloud Solutions</span>

          <FaSearch className="text-cyan-300 " />
          <span className="text-cyan-300">SEO Optimization</span>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex items-center space-x-14 text-md font-light uppercase tracking-[0.2em] px-10 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">
          <FaWind className="text-cyan-300 " />
          <span className="text-cyan-300">Wind Hans</span>

          <FaGlobe className="text-cyan-300 " />
          <span className="text-cyan-300">Web Development</span>

          <FaMobileAlt className="text-cyan-300 " />
          <span className="text-cyan-300">App Development</span>

          <FaPaintBrush className="text-cyan-300 " />
          <span className="text-cyan-300">UI/UX Design</span>

          <FaBullhorn className="text-cyan-300 " />
          <span className="text-cyan-300">Digital Marketing</span>

          <FaCloud className="text-cyan-300 " />
          <span className="text-cyan-300">Cloud Solutions</span>

          <FaSearch className="text-cyan-300 " />
          <span className="text-cyan-300">SEO Optimization</span>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 78s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default FooterText;