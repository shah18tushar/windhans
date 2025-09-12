react bits - 
click spark
electric border
dome gallery




"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Domain from "@/components/Domain";
import OutsourcedService from "@/components/OutsourcedService";
import OurWork from "@/components/OurWork";
import CTA from "@/components/CTA";
import Journey from "@/components/Journey";
import CaseStudy from "@/components/CaseStudy";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if user has visited before using localStorage
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      setShowLoader(true);
      document.body.style.overflow = "hidden";
    }

    const handleUserInteraction = () => {
      if (showLoader) {
        setShowLoader(false);
        document.body.style.overflow = "unset";
        // Set flag in localStorage to remember user has visited
        localStorage.setItem("hasVisitedBefore", "true");
      }
    };

    // Only add event listeners if loader is shown
    if (!hasVisitedBefore) {
      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleUserInteraction();
        }
      });
    }

    // Clean up event listeners
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <Loader />
          <div className="absolute bottom-10 text-white text-center w-full">
            <p className="text-lg animate-pulse">
              Click anywhere or press Enter to continue
            </p>
          </div>
        </div>
      )}
      <div
        className={
          showLoader
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <Hero />
        <WhoWeAre />
        <OurWork />
        <Journey />
        <CaseStudy />
        <Domain />
        <OutsourcedService />
        <CTA />
      </div>
    </>
  );
}










"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="z-[9999] overflow-hidden">
      <div className="relative">
        <video
          src="/loadervideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          className="w-full h-screen object-cover overflow-hidden"
        />
      </div>

      <div className="absolute bottom-10 text-white text-center w-full">
        <p className="text-sm animate-pulse">
          Tap Anywhere or Press Enter
        </p>
      </div>
    </div>
  );
};

export default Loader;












































svvg image 


<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Premium gradients -->
    <linearGradient id="mainBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000"/>
      <stop offset="30%" style="stop-color:#0a0a0a"/>
      <stop offset="70%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#16213e"/>
    </linearGradient>
    
    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#034D9D;stop-opacity:0.8"/>
      <stop offset="50%" style="stop-color:#0ea5e9;stop-opacity:0.6"/>
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.4"/>
    </linearGradient>
    
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#034D9D"/>
      <stop offset="50%" style="stop-color:#0ea5e9"/>
      <stop offset="100%" style="stop-color:#60a5fa"/>
    </linearGradient>
    
    <radialGradient id="centerGlow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" style="stop-color:#034D9D;stop-opacity:0.3"/>
      <stop offset="70%" style="stop-color:#0ea5e9;stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:transparent"/>
    </radialGradient>
    
    <!-- Glass effect -->
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.1)"/>
      <stop offset="100%" style="stop-color:rgba(255,255,255,0.02)"/>
    </linearGradient>
    
    <!-- Premium metallic accent -->
    <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e5e7eb"/>
      <stop offset="20%" style="stop-color:#f8fafc"/>
      <stop offset="40%" style="stop-color:#e5e7eb"/>
      <stop offset="60%" style="stop-color:#f8fafc"/>
      <stop offset="80%" style="stop-color:#e5e7eb"/>
      <stop offset="100%" style="stop-color:#cbd5e1"/>
    </linearGradient>

    <!-- Blur filters for premium effects -->
    <filter id="blur1">
      <feGaussianBlur stdDeviation="3"/>
    </filter>
    <filter id="blur2">
      <feGaussianBlur stdDeviation="8"/>
    </filter>
    <filter id="blur3">
      <feGaussianBlur stdDeviation="15"/>
    </filter>

    <!-- Drop shadow for depth -->
    <filter id="dropShadow">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#034D9D" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Main background -->
  <rect width="100%" height="100%" fill="url(#mainBg)"/>
  
  <!-- Background glow effects -->
  <ellipse cx="150" cy="100" rx="120" ry="80" fill="url(#centerGlow)" filter="url(#blur3)"/>
  <ellipse cx="450" cy="300" rx="100" ry="60" fill="url(#centerGlow)" filter="url(#blur3)"/>
  
  <!-- Premium geometric elements -->
  
  <!-- Main luxury building/tower representation -->
  <g transform="translate(80, 50)">
    <!-- Base structure with glass effect -->
    <rect x="0" y="150" width="120" height="200" fill="url(#glass)" rx="8"/>
    <rect x="5" y="155" width="110" height="190" fill="rgba(3, 77, 157, 0.1)" rx="6"/>
    
    <!-- Building floors with premium lighting -->
    <g opacity="0.8">
      <rect x="15" y="170" width="90" height="3" fill="url(#accentGlow)"/>
      <rect x="15" y="190" width="90" height="3" fill="url(#accentGlow)" opacity="0.7"/>
      <rect x="15" y="210" width="90" height="3" fill="url(#accentGlow)" opacity="0.5"/>
      <rect x="15" y="230" width="90" height="3" fill="url(#accentGlow)" opacity="0.7"/>
      <rect x="15" y="250" width="90" height="3" fill="url(#accentGlow)"/>
      <rect x="15" y="270" width="90" height="3" fill="url(#accentGlow)" opacity="0.6"/>
      <rect x="15" y="290" width="90" height="3" fill="url(#accentGlow)" opacity="0.4"/>
      <rect x="15" y="310" width="90" height="3" fill="url(#accentGlow)" opacity="0.8"/>
      <rect x="15" y="330" width="90" height="3" fill="url(#accentGlow)"/>
    </g>
    
    <!-- Premium windows grid -->
    <g opacity="0.6">
      <rect x="25" y="175" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="38" y="175" width="8" height="12" fill="rgba(96, 165, 250, 0.5)" rx="1"/>
      <rect x="51" y="175" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="64" y="175" width="8" height="12" fill="rgba(96, 165, 250, 0.4)" rx="1"/>
      <rect x="77" y="175" width="8" height="12" fill="rgba(96, 165, 250, 0.6)" rx="1"/>
      
      <rect x="25" y="195" width="8" height="12" fill="rgba(96, 165, 250, 0.4)" rx="1"/>
      <rect x="38" y="195" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="51" y="195" width="8" height="12" fill="rgba(96, 165, 250, 0.7)" rx="1"/>
      <rect x="64" y="195" width="8" height="12" fill="rgba(96, 165, 250, 0.2)" rx="1"/>
      <rect x="77" y="195" width="8" height="12" fill="rgba(96, 165, 250, 0.5)" rx="1"/>
      
      <rect x="25" y="235" width="8" height="12" fill="rgba(96, 165, 250, 0.6)" rx="1"/>
      <rect x="38" y="235" width="8" height="12" fill="rgba(96, 165, 250, 0.4)" rx="1"/>
      <rect x="51" y="235" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="64" y="235" width="8" height="12" fill="rgba(96, 165, 250, 0.8)" rx="1"/>
      <rect x="77" y="235" width="8" height="12" fill="rgba(96, 165, 250, 0.2)" rx="1"/>
      
      <rect x="25" y="275" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="38" y="275" width="8" height="12" fill="rgba(96, 165, 250, 0.7)" rx="1"/>
      <rect x="51" y="275" width="8" height="12" fill="rgba(96, 165, 250, 0.4)" rx="1"/>
      <rect x="64" y="275" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="77" y="275" width="8" height="12" fill="rgba(96, 165, 250, 0.6)" rx="1"/>
      
      <rect x="25" y="315" width="8" height="12" fill="rgba(96, 165, 250, 0.5)" rx="1"/>
      <rect x="38" y="315" width="8" height="12" fill="rgba(96, 165, 250, 0.4)" rx="1"/>
      <rect x="51" y="315" width="8" height="12" fill="rgba(96, 165, 250, 0.7)" rx="1"/>
      <rect x="64" y="315" width="8" height="12" fill="rgba(96, 165, 250, 0.3)" rx="1"/>
      <rect x="77" y="315" width="8" height="12" fill="rgba(96, 165, 250, 0.8)" rx="1"/>
    </g>
  </g>
  
  <!-- Secondary premium structures -->
  <g transform="translate(250, 80)">
    <rect x="0" y="120" width="80" height="200" fill="url(#glass)" rx="6"/>
    <rect x="3" y="123" width="74" height="194" fill="rgba(14, 165, 233, 0.08)" rx="4"/>
    
    <!-- Accent lighting -->
    <rect x="10" y="140" width="60" height="2" fill="url(#accentGlow)" opacity="0.6"/>
    <rect x="10" y="170" width="60" height="2" fill="url(#accentGlow)" opacity="0.8"/>
    <rect x="10" y="200" width="60" height="2" fill="url(#accentGlow)" opacity="0.4"/>
    <rect x="10" y="230" width="60" height="2" fill="url(#accentGlow)" opacity="0.7"/>
    <rect x="10" y="260" width="60" height="2" fill="url(#accentGlow)" opacity="0.9"/>
    <rect x="10" y="290" width="60" height="2" fill="url(#accentGlow)" opacity="0.5"/>
  </g>
  
  <g transform="translate(380, 120)">
    <rect x="0" y="80" width="60" height="200" fill="url(#glass)" rx="4"/>
    <rect x="2" y="82" width="56" height="196" fill="rgba(59, 130, 246, 0.06)" rx="3"/>
    
    <!-- Premium accent strips -->
    <rect x="8" y="100" width="44" height="1.5" fill="url(#accentGlow)" opacity="0.7"/>
    <rect x="8" y="130" width="44" height="1.5" fill="url(#accentGlow)" opacity="0.5"/>
    <rect x="8" y="160" width="44" height="1.5" fill="url(#accentGlow)" opacity="0.8"/>
    <rect x="8" y="190" width="44" height="1.5" fill="url(#accentGlow)" opacity="0.6"/>
    <rect x="8" y="220" width="44" height="1.5" fill="url(#accentGlow)" opacity="0.9"/>
    <rect x="8" y="250" width="44" height="1.5" fill="url(#accentGlow)" opacity="0.4"/>
  </g>
  
  <!-- Floating premium elements and particles -->
  <g opacity="0.6">
    <!-- Luxury floating geometric shapes -->
    <circle cx="480" cy="120" r="3" fill="url(#accentGlow)" opacity="0.8"/>
    <circle cx="520" cy="80" r="2" fill="url(#accentGlow)" opacity="0.6"/>
    <circle cx="500" cy="160" r="2.5" fill="url(#accentGlow)" opacity="0.7"/>
    <circle cx="460" cy="180" r="1.8" fill="url(#accentGlow)" opacity="0.9"/>
    <circle cx="540" cy="140" r="2.2" fill="url(#accentGlow)" opacity="0.5"/>
    
    <!-- Premium hexagonal elements -->
    <g transform="translate(480, 200)">
      <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="rgba(3, 77, 157, 0.3)" stroke="url(#accentGlow)" stroke-width="0.5"/>
    </g>
    <g transform="translate(460, 240)">
      <polygon points="8,0 16,4 16,12 8,16 0,12 0,4" fill="rgba(14, 165, 233, 0.2)" stroke="url(#accentGlow)" stroke-width="0.3"/>
    </g>
  </g>
  
  <!-- Premium data visualization elements -->
  <g transform="translate(50, 320)" opacity="0.7">
    <!-- Luxury progress bars -->
    <rect x="0" y="0" width="80" height="4" fill="rgba(255,255,255,0.1)" rx="2"/>
    <rect x="0" y="0" width="68" height="4" fill="url(#accentGlow)" rx="2"/>
    
    <rect x="0" y="12" width="80" height="4" fill="rgba(255,255,255,0.1)" rx="2"/>
    <rect x="0" y="12" width="52" height="4" fill="url(#accentGlow)" rx="2"/>
    
    <rect x="0" y="24" width="80" height="4" fill="rgba(255,255,255,0.1)" rx="2"/>
    <rect x="0" y="24" width="74" height="4" fill="url(#accentGlow)" rx="2"/>
    
    <rect x="0" y="36" width="80" height="4" fill="rgba(255,255,255,0.1)" rx="2"/>
    <rect x="0" y="36" width="45" height="4" fill="url(#accentGlow)" rx="2"/>
  </g>
  
  <!-- Digital circuit pattern overlay -->
  <g opacity="0.15" stroke="url(#accentGlow)" stroke-width="0.5" fill="none">
    <path d="M 350 50 L 380 50 L 380 80 L 420 80"/>
    <path d="M 400 80 L 400 110 L 450 110"/>
    <path d="M 350 120 L 390 120 L 390 150"/>
    <circle cx="380" cy="50" r="2" fill="url(#accentGlow)"/>
    <circle cx="380" cy="80" r="2" fill="url(#accentGlow)"/>
    <circle cx="400" cy="110" r="2" fill="url(#accentGlow)"/>
    <circle cx="390" cy="150" r="2" fill="url(#accentGlow)"/>
  </g>
  
  <!-- Premium edge lighting effects -->
  <rect x="0" y="0" width="100%" height="1" fill="url(#accentGlow)" opacity="0.3"/>
  <rect x="0" y="399" width="100%" height="1" fill="url(#accentGlow)" opacity="0.3"/>
  <rect x="0" y="0" width="1" height="100%" fill="url(#accentGlow)" opacity="0.2"/>
  <rect x="599" y="0" width="1" height="100%" fill="url(#accentGlow)" opacity="0.2"/>
  
  <!-- Subtle corner accents -->
  <g opacity="0.4">
    <polyline points="0,0 20,0 20,20" stroke="url(#accentGlow)" stroke-width="1" fill="none"/>
    <polyline points="580,0 600,0 600,20" stroke="url(#accentGlow)" stroke-width="1" fill="none"/>
    <polyline points="0,380 0,400 20,400" stroke="url(#accentGlow)" stroke-width="1" fill="none"/>
    <polyline points="580,400 600,400 600,380" stroke="url(#accentGlow)" stroke-width="1" fill="none"/>
  </g>
  
  <!-- Dynamic glow overlay -->
  <rect width="100%" height="100%" fill="url(#centerGlow)" opacity="0.3"/>
</svg>