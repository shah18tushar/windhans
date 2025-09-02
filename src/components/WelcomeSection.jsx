"use client";

import React from "react";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";


const WelcomeSection = () => {
  return (
    <section className="bg-white">
      {/* Main container with flex layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col lg:flex-row gap-4 relative">
          {/* Left Section */}
          <div className="flex-1 flex flex-col">
            {/* Left image */}
            <div className="overflow-hidden mb-10">
              <img
                src="/img1.jpg"
                alt="Professional at desk"
                className="h-[320px] w-full object-fill"
              />
            </div>

            {/* Left content */}
            <div>
              <div className="flex items-center justify-center">
                <motion.h1
                  className="relative inline-block text-[#034D9D] font-medium text-center text-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  Breaking Barriers - Building Smarter Futures
                  <motion.span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#034D9D] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }} // adjust width to match how much of text you want underlined
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 3, ease: "easeOut", delay: 1.8 }}
                  />
                </motion.h1>
              </div>

              {/* <h1 className="text-[#034D9D] underline underline-offset-4 font-medium text-center text-sm">
                Breaking Barriers - Building Smarter Futures
              </h1> */}

              <h2 className="mt-6 leading-tight tracking-tight  text-center text-gray-700">
                <span className="font-light text-3xl">
                  Innovate Without Limits
                </span>
                <br />
                <span className="font-normal text-4xl">
                  Redefining IT Excellence
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-[15px] text-center leading-relaxed">
                Dolor sit amet, consectetur adipiscing elitm sed do eiusmod temp
                sed incididunt ut labore etsu dolore magna aliquatenim minim
                veniam quis ipsum nostrud exer citation ullamco laboris nisi ut
                aliquip ex ea consequat.
              </p>

              {/* Feature cards */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="rounded-lg bg-white border-b-[3px] border-[#034D9D] shadow-sm p-6 text-center">
                  <div className="mx-auto flex items-center justify-center mb-4">
                    <img
                      src="/welFeature1.png"
                      alt="Wind Hans Technologies logo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-3" />
                  <p className="text-xs font-medium text-gray-800 leading-tight">
                    Business
                    <br />
                    Intelligence
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-lg bg-white border-b-[3px] border-[#034D9D] shadow-sm p-6 text-center">
                  <div className="mx-auto  flex items-center justify-center mb-4">
                    <img
                      src="/welFeature2.png"
                      alt="Wind Hans Technologies logo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-3" />
                  <p className="text-xs font-medium text-gray-800 leading-tight">
                    Desktop
                    <br />
                    Softwares
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-lg bg-white border-b-[3px] border-[#034D9D] shadow-sm p-6 text-center">
                  <div className="mx-auto  flex items-center justify-center mb-4">
                    <img
                      src="/welFeature3.png"
                      alt="Wind Hans Technologies logo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="w-8 h-px bg-gray-300 mx-auto mb-3" />
                  <p className="text-xs font-medium text-gray-800 leading-tight">
                    Dynamic
                    <br />
                    Consulting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col">
            {/* Right image */}
            <div className="overflow-hidden mb-10">
              <img
                src="/img2.jpg"
                alt="Team in discussion"
                className="h-[445px] w-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="pl-4">
              <h3 className="text-2xl font-semibold text-[#034D9D] mb-4">
                Company Mission And Vision
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Magna aliquatenim minim veniam quis ipsum nostrud exer citation
                ullamco laboris aliquip ex ea commodo ipsum consequat duis aute
                irure dolorn.
              </p>

              <ul className="space-y-3">
                {[
                  "We are committed to providing quality IT Services",
                  "Our benefits are endless for local IT Companies & Startups",
                  "Really know the true needs and expectations of customers",
                  "Talented & experienced management solutions for IT",
                  "Processes of achieving the excellence and continue improvements",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FiCheck className="mt-0.5 flex-shrink-0 w-4 h-4 text-[#034D9D]" />
                    <span className="ml-3 text-gray-600 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Overlapping circular logo (desktop/tablet) */}
          <div className="hidden lg:flex absolute left-1/2 top-[270px] -translate-x-1/2 z-10">
            <div className="rounded-full bg-white p-3">
              <img
                src="/logo.png"
                alt="Wind Hans Technologies logo"
                className="w-16 h-16 rounded-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Logo for mobile (below images) */}
        <div className="lg:hidden flex justify-center mt-6">
          <div className="rounded-full bg-white p-3 shadow-lg">
            <img
              src="/logo.png"
              alt="Wind Hans Technologies logo"
              className="w-16 h-16 rounded-full object-contain"
            />
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>
    </section>
  );
};
export default WelcomeSection;