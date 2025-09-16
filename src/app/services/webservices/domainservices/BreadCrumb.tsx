"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoEarth,
  IoRocket,
  IoStatsChart,
  IoShieldCheckmark,
} from "react-icons/io5";
import { BsSearchHeart } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

interface BreadCrumbProps {
  className?: string;
}

const BREADCRUMB_CONFIG = [
  { label: "Home", href: "/", path: "/" },
  {
    label: "Domain Registration",
    href: "/services/webservices/domainservices",
    path: "/services/webservices/domainservices",
  },
  {
    label: "Website Development",
    href: "/services/webservices/websitedevelopment",
    path: "/services/webservices/websitedevelopment",
  },
  // {
  //   label: "Responsive Website",
  //   href: "#",
  //   path: "/services/webservices/responsivewebsite",
  // },
  // {
  //   label: "Corporate Web Design",
  //   href: "#",
  //   path: "/services/webservices/corporatewebdesign",
  // },
  {
    label: "Website Maintenance",
    href: "#",
    path: "/services/webservices/websitemaintenance",
  },
];

export default function BreadCrumb({ className = "" }: BreadCrumbProps) {
  const pathname = usePathname();
  const currentPageIndex = BREADCRUMB_CONFIG.findIndex(
    (item) => item.path === pathname
  );
  const activeBreadcrumbs = BREADCRUMB_CONFIG;

  // Fix hydration error: Generate random particles only on client
  const [particles, setParticles] = useState<
    Array<{
      top: string;
      left: string;
      width: string;
      height: string;
      background: string;
      animationDuration: string;
      animationDelay: string;
    }>
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: 65 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 60}%`,
      width: `${Math.random() * 10 + 2}px`,
      height: `${Math.random() * 10 + 2}px`,
      background: `radial-gradient(circle, ${
        Math.random() > 0.5
          ? "rgba(59, 130, 246, 0.6)"
          : "rgba(168, 85, 247, 0.6)"
      })`,
      animationDuration: `${Math.random() * 5 + 3}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setParticles(arr);
  }, []);

  return (
    <section
      className={`relative w-full px-4 pt-4 pb-16 bg-gradient-to-br from-black/90 via-blue-900 to-slate-900 overflow-hidden ${className}`}
    >
      {/* Luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-60">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-caret-blink"
            style={style}
          />
        ))}
      </div>

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto my-2 mb-6 flex items-center gap-4">
        <div className="relative">
          <IoEarth className="w-10 h-10 text-white/90" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
        <h1 className="text-3xl font-extralight font-serif text-start text-white/90 tracking-wide">
          Web Services - Domain Registration
        </h1>
      </div>

      {/* Ultra Premium Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <nav aria-label="Breadcrumb" className="text-xs">
          <ol className="flex flex-wrap items-center gap-1">
            {activeBreadcrumbs.map((crumb, idx) => {
              const isCurrentPage = idx === currentPageIndex;
              const isClickable = crumb.href !== "#" && !isCurrentPage;

              return (
                <li key={`${crumb.label}-${idx}`} className="flex items-center">
                  <div className="flex items-center group">
                    {isClickable ? (
                      <Link
                        href={crumb.href}
                        className="relative px-4 py-2.5 rounded-xl transition-all duration-300 ease-out
                                     text-gray-300 hover:text-white
                                     bg-white/5 hover:bg-white/10
                                     border border-white/10 hover:border-white/20
                                     backdrop-blur-sm
                                     shadow-lg hover:shadow-xl
                                     transform hover:scale-105 hover:-translate-y-0.5
                                     font-medium tracking-wide
                                     before:absolute before:inset-0 before:rounded-xl
                                     before:bg-gradient-to-r before:from-blue-600/20 before:to-purple-600/20
                                     before:opacity-0 before:transition-opacity before:duration-300
                                     hover:before:opacity-100"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {idx === 0 && (
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                          )}
                          {crumb.label}
                        </span>
                      </Link>
                    ) : isCurrentPage ? (
                      <div
                        className="relative px-4 py-2.5 rounded-xl
                                        text-white font-bold tracking-wide
                                        bg-gradient-to-r from-blue-600/30 to-purple-600/30
                                        border border-white/30
                                        backdrop-blur-md
                                        shadow-2xl
                                        ring-2 ring-white/20
                                        transform scale-105"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm"></div>
                        <span
                          className="relative z-10 flex items-center gap-2"
                          aria-current="page"
                        >
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {crumb.label}
                          <span className="sr-only"> (current page)</span>
                        </span>
                      </div>
                    ) : (
                      <div
                        className="relative px-4 py-2.5 rounded-xl transition-all duration-300
                                     text-gray-400 cursor-not-allowed
                                     bg-white/3 border border-white/5
                                     backdrop-blur-sm shadow-md
                                     font-medium tracking-wide opacity-60"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {crumb.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {idx < activeBreadcrumbs.length - 1 && (
                    <div className="mx-3 flex items-center">
                      <div className="relative">
                        <ImPointRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-gray-300 transform group-hover:scale-110"></ImPointRight>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Premium breadcrumb + content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Premium Heading Section */}
            <div className="space-y-4">
              <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100 font-extralight">
                Enterprise - Focused
                <span className="block text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-extralight leading-relaxed">
                  Domain Registration For Market Leadership
                </span>
              </h1>

              <p className="text-base text-gray-300 max-w-2xl leading-relaxed font-light">
                From premium domain registration through enterprise-grade
                website maintenance — we craft secure, responsive and
                high-performance digital experiences{" "}
                <span className="text-blue-300 font-medium">
                  tailored for exponential growth
                </span>
                .
              </p>
            </div>

            {/* Luxury Feature Tags */}
            <div className="max-w-2xl grid grid-cols-2 gap-4">
              {[
                {
                  text: "<1s Load Time",
                  desc: "Lightning-fast engagement, fewer drop-offs",
                  icon: <IoStatsChart />,
                },
                {
                  text: "SEO Optimized",
                  desc: "Top search rankings with lasting credibility",
                  icon: <BsSearchHeart />,
                },
                {
                  text: "Peak Performance",
                  desc: "Reliable high-speed under heavy load",
                  icon: <IoRocket />,
                },
                {
                  text: "Enterprise Security",
                  desc: "Robust security, builds enterprise trust",
                  icon: <IoShieldCheckmark />,
                },
              ].map((tag, idx) => (
                <div
                  key={tag.text}
                  className="group relative overflow-hidden px-6 py-2 rounded-2xl
                 bg-gradient-to-r from-white/10 to-white/5
                 border border-white/20 hover:border-white/40
                 backdrop-blur-md shadow-lg hover:shadow-2xl
                 transition-all duration-500 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-white font-medium text-sm tracking-wide flex items-center gap-2">
                    {tag.icon}
                    {tag.text}
                  </span>
                  {/* Render the description below */}
                  <p className="relative z-10 text-white italic text-xs opacity-70 mt-1">
                    {tag.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Enhanced GIF Container */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm bg-white/5 group-hover:border-white/40 transition-all duration-500">
                <img
                  src="/domain.gif"
                  alt="Premium web solutions animation"
                  loading="lazy"
                  className="relative z-0 w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
