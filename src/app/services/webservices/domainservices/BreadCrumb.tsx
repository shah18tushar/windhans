// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { IoEarth } from "react-icons/io5";


// interface BreadCrumbProps {
//   /** Custom className for additional styling */
//   className?: string;
// }

// // Enhanced breadcrumb configuration with path mapping
// const BREADCRUMB_CONFIG = [
//   { label: "Home", href: "/", path: "/" },
//   {
//     label: "Domain Registration",
//     href: "/services/webservices/domainservices",
//     path: "/services/webservices/domainservices",
//   },
//   {
//     label: "Website Development",
//     href: "/services/webservices/websitedevelopment",
//     path: "/services/webservices/websitedevelopment",
//   },
//   {
//     label: "Responsive Website",
//     href: "#",
//     path: "/services/webservices/responsivewebsite", // Future route
//   },
//   {
//     label: "Corporate Web Design",
//     href: "#",
//     path: "/services/webservices/corporatewebdesign", // Future route
//   },
//   {
//     label: "Website Maintenance",
//     href: "#",
//     path: "/services/webservices/websitemaintenance", // Future route
//   },
// ];

// export default function BreadCrumb({ className = "" }: BreadCrumbProps) {
//   const pathname = usePathname();

//   // Find which breadcrumb matches current path
//   const currentPageIndex = BREADCRUMB_CONFIG.findIndex(
//     (item) => item.path === pathname
//   );

//   // Always show all breadcrumbs
//   const activeBreadcrumbs = BREADCRUMB_CONFIG;

//   return (
//     <section
//       className={`relative w-full px-4 pt-4 pb-16 bg-gradient-to-br from-black/90 via-blue-900 to-slate-900 overflow-hidden ${className}`}
//     >
//       {/* Luxury background effects */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

//       {/* Premium geometric patterns */}
//       <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
//         <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-72 h-72 opacity-5">
//         <div className="w-full h-full bg-gradient-to-tr from-cyan-400 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       {/* Breadcrumb Header */}
//       <div className="max-w-7xl mb-4 flex items-center gap-4">
//         <IoEarth className="w-8 h-8 text-white/80" />
//         <h1 className="text-3xl font-extralight font-serif text-start text-white/80">
//           Web Services
//         </h1>
//       </div>

//       {/* Ultra Premium Breadcrumb Navigation */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <nav aria-label="Breadcrumb" className="text-xs">
//           <ol className="flex flex-wrap items-center gap-1">
//             {activeBreadcrumbs.map((crumb, idx) => {
//               const isCurrentPage = idx === currentPageIndex;
//               const isClickable = crumb.href !== "#" && !isCurrentPage;

//               return (
//                 <li key={`${crumb.label}-${idx}`} className="flex items-center">
//                   {/* Breadcrumb Item */}
//                   <div className="flex items-center group">
//                     {isClickable ? (
//                       <Link
//                         href={crumb.href}
//                         className="relative px-4 py-2.5 rounded-xl transition-all duration-300 ease-out
//                                      text-gray-300 hover:text-white
//                                      bg-white/5 hover:bg-white/10
//                                      border border-white/10 hover:border-white/20
//                                      backdrop-blur-sm
//                                      shadow-lg hover:shadow-xl
//                                      transform hover:scale-105 hover:-translate-y-0.5
//                                      font-medium tracking-wide
//                                      before:absolute before:inset-0 before:rounded-xl
//                                      before:bg-gradient-to-r before:from-blue-600/20 before:to-purple-600/20
//                                      before:opacity-0 before:transition-opacity before:duration-300
//                                      hover:before:opacity-100"
//                       >
//                         <span className="relative z-10 flex items-center gap-2">
//                           {idx === 0 && (
//                             <svg
//                               className="w-4 h-4"
//                               fill="currentColor"
//                               viewBox="0 0 20 20"
//                             >
//                               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                             </svg>
//                           )}
//                           {crumb.label}
//                         </span>
//                       </Link>
//                     ) : isCurrentPage ? (
//                       // Current page - highlighted and non-clickable
//                       <div
//                         className="relative px-4 py-2.5 rounded-xl
//                                         text-white font-bold tracking-wide
//                                         bg-gradient-to-r from-blue-600/30 to-purple-600/30
//                                         border border-white/30
//                                         backdrop-blur-md
//                                         shadow-2xl
//                                         ring-2 ring-white/20
//                                         transform scale-105"
//                       >
//                         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm"></div>
//                         <span
//                           className="relative z-10 flex items-center gap-2"
//                           aria-current="page"
//                         >
//                           <svg
//                             className="w-4 h-4 text-yellow-300"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           {crumb.label}
//                           <span className="sr-only"> (current page)</span>
//                         </span>
//                       </div>
//                     ) : (
//                       // Non-clickable items (routes not created yet)
//                       <div
//                         className="relative px-4 py-2.5 rounded-xl transition-all duration-300
//                                      text-gray-400 cursor-not-allowed
//                                      bg-white/3 border border-white/5
//                                      backdrop-blur-sm shadow-md
//                                      font-medium tracking-wide opacity-60"
//                       >
//                         <span className="relative z-10 flex items-center gap-2">
//                           <svg
//                             className="w-4 h-4 text-gray-500"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           {crumb.label}
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Premium Chevron Separator */}
//                   {idx < activeBreadcrumbs.length - 1 && (
//                     <div className="mx-3 flex items-center">
//                       <div className="relative">
//                         <svg
//                           className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-gray-300 transform group-hover:scale-110"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           aria-hidden="true"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               );
//             })}
//           </ol>
//         </nav>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* LEFT: Premium breadcrumb + content */}
//           <div className="lg:col-span-7 space-y-6">
//             {/* Premium Heading Section */}
//             <div className="space-y-4">
//               <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100 leading-tight tracking-tight">
//                 Professional Web Solutions
//                 <span className="block text-2xl lg:text-4xl mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                   for Modern Businesses
//                 </span>
//               </h1>

//               <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed font-light">
//                 From premium domain registration through enterprise-grade
//                 website maintenance — we craft secure, responsive and
//                 high-performance digital experiences{" "}
//                 <span className="text-blue-300 font-medium">
//                   tailored for exponential growth
//                 </span>
//                 .
//               </p>
//             </div>

//             {/* Luxury Feature Tags */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               {[
//                 "Enterprise Security",
//                 "Peak Performance",
//                 "24/7 Premium Support",
//               ].map((tag, idx) => (
//                 <div
//                   key={tag}
//                   className="group relative overflow-hidden px-6 py-3 rounded-2xl
//                            bg-gradient-to-r from-white/10 to-white/5
//                            border border-white/20 hover:border-white/40
//                            backdrop-blur-md shadow-lg hover:shadow-2xl
//                            transition-all duration-300 hover:scale-105 cursor-default"
//                   style={{ animationDelay: `${idx * 100}ms` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <span className="relative z-10 text-white font-semibold tracking-wide flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg"></div>
//                     {tag}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: Enhanced GIF Container */}
//           <div className="lg:col-span-5">
//             <div className="relative group">
//               {/* Premium frame effect */}
//               {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div> */}

//               {/* <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm bg-white/5 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105"> */}
//               {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"></div> */}
//               <img
//                 src="/domain.gif"
//                 alt="Premium web solutions animation"
//                 loading="lazy"
//                 className="relative z-10 w-full h-full object-cover rounded-2xl"
//                 draggable={false}
//               />

//               {/* Overlay gradient for premium effect */}
//               {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoEarth,
  IoRocket,
  IoStatsChart,
  IoShieldCheckmark,
} from "react-icons/io5";

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
  {
    label: "Responsive Website",
    href: "#",
    path: "/services/webservices/responsivewebsite",
  },
  {
    label: "Corporate Web Design",
    href: "#",
    path: "/services/webservices/corporatewebdesign",
  },
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

  return (
    <section
      className={`relative w-full px-4 pt-4 pb-16 bg-gradient-to-br from-black/90 via-blue-900 to-slate-900 overflow-hidden ${className}`}
    >
      {/* Luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      {/* Premium geometric patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-5">
        <div className="w-full h-full bg-gradient-to-tr from-cyan-400 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5
                  ? "rgba(59, 130, 246, 0.6)"
                  : "rgba(168, 85, 247, 0.6)"
              })`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto mb-4 flex items-center gap-4">
        <div className="relative">
          <IoEarth className="w-10 h-10 text-white/90" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        <h1 className="text-4xl font-light font-serif text-start text-white/90 tracking-wide">
          Web Services
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
                        <svg
                          className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-gray-300 transform group-hover:scale-110"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
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
              <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100 font-extralight ">
                Enterprise - Focused
                <span className="block text-3xl mt-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-extralight">
                  Web Solutions For Market Leadership
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
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                {
                  text: "<1s Load Time",
                  desc: "Top search rankings",
                  icon: <IoStatsChart />,
                },
                {
                  text: "SEO Optimized",
                  desc: "Top search rankings",
                  icon: <IoStatsChart />,
                },
                {
                  text: "Peak Performance",
                  desc: "Top search rankings",
                  icon: <IoRocket />,
                },
                {
                  text: "Enterprise Security",
                  desc: "Top search rankings",
                  icon: <IoShieldCheckmark />,
                },
              ].map((tag, idx) => (
                <div
                  key={tag.text}
                  className="group relative overflow-hidden px-6 py-3.5 rounded-2xl
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
                    {/* {tag.desc} */}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Enhanced GIF Container */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-90"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm bg-white/5 group-hover:border-white/40 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 z-10"></div>
                <img
                  src="/domain.gif"
                  alt="Premium web solutions animation"
                  loading="lazy"
                  className="relative z-0 w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />

                {/* Floating elements overlay */}
                <div className="absolute top-4 right-4 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <IoRocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <IoShieldCheckmark className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}