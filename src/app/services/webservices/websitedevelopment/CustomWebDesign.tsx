"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Palette,
  BarChart3,
  Target,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  Speech,
} from "lucide-react";

const CustomWebDesign = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-white mb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Section - Enhanced with premium elements */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#034D9D]/10 text-[#034D9D] mb-6 border border-[#034D9D]">
                <Sparkles className="h-4 w-4 mr-1.5" />
                Enterprise-Grade Solutions
              </div>

              <h2 className="text-4xl font-extralight font-serif text-gray-700 tracking-tight">
                Tailored Web Development For{" "}
                <span className="relative">
                  <span className="relative z-10">Corporate Excellence</span>
                  <span className="absolute bottom-5 left-10 w-96 h-12 skew-x-12 bg-[#034D9D]/20 -rotate-6 -z-0"></span>
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-950 leading-relaxed font-light">
              At Windhans Technologies, we architect digital excellence through
              bespoke web development solutions crafted exclusively for
              discerning corporate clients. Our approach transcends conventional
              development to deliver exceptional digital assets that embody your
              strategic vision.
            </p>

            <div className="space-y-3">
              <div className="flex items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-[#034D9D] to-[#0284C7] text-white">
                    <Target className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Strategic Business Analysis
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We conduct exhaustive analysis of your business ecosystem,
                    competitive landscape, and strategic objectives before
                    architecting your digital solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-[#034D9D] to-[#0284C7] text-white">
                    <Speech className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Bespoke Development
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We engineer entirely custom solutions from first principles,
                    ensuring your digital presence is distinctive, scalable, and
                    aligned with your corporate identity.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-[#034D9D] to-[#0284C7] text-white">
                    <Palette className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Premium UI/UX Design
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sophisticated interfaces that embody your corporate identity
                    and enhance user engagement
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced with premium elements */}
          <div
            className={`space-y-12 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="bg-indigo-50 p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
                {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#034D9D]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div> */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    {/* <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-[#034D9D] to-[#0284C7] text-white shadow-lg shadow-[#034D9D]/20 mr-4"> */}
                    <BarChart3 className="h-5 w-5 text-[#034D9D]" />
                    {/* </div> */}
                    <h3 className="text-2xl font-extralight font-serif text-gray-700">
                      Performance - Enhanced Web Design
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 text-base  leading-relaxed">
                    A strategically engineered website serves as your paramount
                    conversion instrument. Our elite development consortium
                    leverages cutting-edge technologies to create sophisticated
                    digital experiences that deliver measurable business
                    outcomes.
                  </p>

                  <div className="bg-indigo-100 p-6 rounded-2xl border border-[#034D9D]/50">
                    <h4 className="font-semibold text-[#034D9D] flex items-center mb-4 text-lg">
                      <Zap className="h-5 w-5 mr-2" />
                      Conversion-Optimized Architecture
                    </h4>
                    <p className="text-gray-700">
                      With meticulous methodology and strategic planning, our
                      web solutions effectively engage your target audience,
                      enhancing conversion metrics and ROI.
                    </p>
                  </div>

                  {/* Premium stats section */}
                  <div className="mt-8 bg-gradient-to-r from-[#034D9D] to-[#0284C7] p-6 rounded-2xl text-white">
                    <div className="grid grid-cols-3 divide-x divide-white/20">
                      <div className="text-center px-4">
                        <div className="text-3xl font-bold mb-1">98%</div>
                        <div className="text-sm opacity-80">
                          Client Retention
                        </div>
                      </div>
                      <div className="text-center px-4">
                        <div className="text-3xl font-bold mb-1">240%</div>
                        <div className="text-sm opacity-80">
                          Avg. ROI Increase
                        </div>
                      </div>
                      <div className="text-center px-4">
                        <div className="text-3xl font-bold mb-1">100+</div>
                        <div className="text-sm opacity-80">
                          Enterprise Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium stats section */}
            {/* <div className="bg-gradient-to-r from-[#034D9D] to-[#0284C7] p-6 rounded-2xl text-white">
              <div className="grid grid-cols-3 divide-x divide-white/20">
                <div className="text-center px-4">
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm opacity-80">Client Retention</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl font-bold mb-1">240%</div>
                  <div className="text-sm opacity-80">Avg. ROI Increase</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm opacity-80">Enterprise Clients</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWebDesign;