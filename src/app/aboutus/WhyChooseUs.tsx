"use client";

import React, { useState, useEffect } from "react";

const THEME = "#034D9D";
const THEME_GRADIENT = "linear-gradient(135deg, #034D9D 0%, #0284C7 100%)";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pb-6 grid grid-cols-[60%_40%] gap-6 items-center relative z-10">
        {/* LEFT: Text content */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-2">
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-3 py-1.5 border border-blue-400 rounded-full">
              Excellence Defined
            </span>
          </div>
          <h2 className="text-4xl lg:text-4xl font-serif font-light text-gray-700 mt-6 mb-8 leading-tight">
            Why{" "}
            <span className="relative whitespace-nowrap">
              Choose
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-blue-500"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 C50,0 150,10 200,5"
                  stroke="currentColor"
                  fill="transparent"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
            WindHans ?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4 border-l-2 max-w-2xl border-blue-400 pl-6 py-0">
            What sets WindHans apart is our dedication to providing{" "}
            <span className="font-semibold text-gray-900 bg-blue-50 px-1">
              economical
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-900 bg-blue-50 px-1">
              reliable
            </span>{" "}
            services without compromising on quality or innovation. With deep
            expertise across mobile, web, and custom software—including
            specialties like ERP systems, AR/VR, IoT, and Unity-based game
            development—our global team enhances business efficiency and
            delivers scalable, high-performance solutions.
          </p>

          <ul className="space-y-3  max-w-2xl">
            <PremiumFeatureItem
              text="Highly skilled development team across languages & frameworks"
              theme={THEME}
              index={0}
            />
            <PremiumFeatureItem
              text="Proficiency in ASP.NET, Flutter & native mobile development"
              theme={THEME}
              index={1}
            />
            <PremiumFeatureItem
              text="Visually appealing, functional, and user-friendly website and app builds"
              theme={THEME}
              index={2}
            />
          </ul>
          <div className="mt-4 flex items-center">
            <div className="flex -space-x-4 mr-4 ">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center shadow-md"
                >
                  <span className="text-xs font-bold text-gray-700">W+</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-blue-600">200+</span> projects
              delivered worldwide
            </p>
          </div>
        </div>

        {/* RIGHT: Visual element */}
        <div
          className={`relative transition-all duration-700 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-700/10 z-10"></div> */}
            <img
              src="/Questions.gif"
              alt="WindHans professional team or technology"
              className="w-full max-w-[400px] h-[550px] object-contain"
            />
          </div>

          {/* Floating stats card */}
          <div className="absolute bottom-12 -left-6 bg-gradient-to-r from-white via-gray-50 to-gray-100 p-3 w-64">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-700 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">99%</h3>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function PremiumFeatureItem({
  text,
  theme,
  index,
}: {
  text: string;
  theme: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-start p-2 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-sm border border-transparent hover:border-blue-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative flex-shrink-0 mr-5 z-50">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300  ${
            isHovered ? "" : ""
          }`}
          style={{
            background: isHovered ? THEME_GRADIENT : "rgba(3, 77, 157, 0.08)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isHovered ? "text-white" : ""}
            style={{ color: isHovered ? "#fff" : theme }}
          >
            <path
              d="M8 12L11 15L16 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {index < 2 && (
          <div className="absolute z-10 top-7 left-[13px] w-0.5 h-9 bg-blue-100"></div>
        )}
      </div>
      <div className="text-gray-600 font-medium text-base leading-relaxed">
        {text}
      </div>
    </li>
  );
}

export default WhyChooseUs;