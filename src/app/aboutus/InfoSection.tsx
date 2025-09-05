"use client";

import AnimatedButton from "@/components/ui/AnimatedButton";
import ClickSpark from "@/components/ui/ClickSpark";
import Image from "next/image";
import React from "react";

// Replace this with your actual image in /public or pass imageSrc prop

type AboutSectionProps = {
  /** optional: pass a string path or StaticImageData */
  imageSrc?: string | any;
};

const THEME = "#034D9D"; // Windhans theme color

export default function AboutSection({ imageSrc }: AboutSectionProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image */}
          <div className="relative w-full overflow-hidden ">
            <img
              src="/abt.png"
              alt="Windhans Technologies - office and product imagery"
              className="object-cover w-full h-80 md:h-[420px]"
            />
          </div>

          {/* RIGHT: Content */}
          <div>
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0">
                <div
                  className="w-1 h-[5.4rem] rounded-full"
                  style={{ background: THEME }}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-light font-serif text-gray-700 ">
                  Your Trusted Partner for <br /> Web, Mobile, and IoT
                  Development
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  WindHans Technologies — Nashik, Maharashtra
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 text-base max-w-xl mx-auto">
              Windhans is a premier website development company based in Nashik,
              Maharashtra. We specialize in website design, mobile-responsive
              website development, custom software solutions, and IoT
              infrastructure. Our services extend to Android and iOS application
              development — delivering end-to-end digital solutions for
              enterprise clients.
            </p>

            <p className="mt-4 text-gray-700 text-base max-w-xl mx-auto">
              Our priority is to exceed client expectations in quality, scale,
              and commitment. We've successfully delivered projects including
              e-commerce platforms, ERP systems, Vendor Management platforms,
              and tailored LMS & Gaming solutions.
            </p>

            {/* <div className="mt-6 space-y-3 max-w-xl">
              <FeatureItem
                title="Enterprise web & mobile development"
                theme={THEME}
              />
              <FeatureItem
                title="Custom software, ERP & Vendor Management"
                theme={THEME}
              />
              <FeatureItem
                title="IoT infrastructure & cross-platform apps"
                theme={THEME}
              />
            </div> */}

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <AnimatedButton
                text="Talk to our Experts"
                bgColor="bg-[#034D9D]/85"
                textColor="text-black"
                hoverTextColor="text-white"
              />
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Trusted by businesses — from startups to enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, theme }: { title: string; theme: string }) {
  return (
    <div className="flex items-start gap-4">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 mt-1"
      >
        <rect
          x="0.5"
          y="0.5"
          width="23"
          height="23"
          rx="6"
          stroke={theme}
          strokeOpacity="0.12"
        />
        <path
          d="M7 12.5l2.5 2.5L17 8"
          stroke={theme}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="text-gray-700 font-medium">{title}</div>
    </div>
  );
}
