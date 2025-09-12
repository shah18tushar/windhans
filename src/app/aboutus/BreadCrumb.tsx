// "use client";

// import React, { useMemo, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Home,
//   ChevronRight,
//   Building2,
//   Info,
//   PhoneCall,
//   CalendarCheck,
//   Award,
//   Users,
//   Headphones,
// } from "lucide-react";
// import ClickSpark from "@/components/ui/ClickSpark";

// // Brand & accent colors
// const BRAND = "#034D9D";
// const GOLD = "#D4AF37"; // tasteful gold accent

// export type Crumb = {
//   name: string;
//   href?: string;
//   icon?: React.ComponentType<{ className?: string }>;
// };

// export type MetaItem = {
//   label: string;
//   value: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   href?: string;
// };

// interface BreadCrumbProps {
//   items?: Crumb[];
//   title?: string;
//   subtitle?: string;
//   meta?: MetaItem[];
//   className?: string;
// }

// const defaultItems: Crumb[] = [
//   { name: "WindHans", icon: Building2 },
//   { name: "Home", href: "/", icon: Home },
//   { name: "About Us", icon: Info },
// ];

// const defaultMeta = (): MetaItem[] => {
//   const updated = new Intl.DateTimeFormat("en-IN", {
//     dateStyle: "medium",
//   }).format(new Date());
//   return [
//     { label: "ESTABLISHED", value: "2015", icon: Award },
//     { label: "CLIENTS", value: "150+", icon: Users },
//     { label: "EXPERIENCE", value: "10+ Years", icon: CalendarCheck },
//     { label: "SUPPORT", value: "24/7/365", icon: Headphones },
//     {
//       label: "Contact",
//       value: "+91 98462 63489",
//       icon: PhoneCall,
//     },
//   ];
// };

// export default function BreadCrumb({
//   items = defaultItems,
//   title = "Be Ready To Know Us",
//   //   title = "About WindHans Technologies",
//   subtitle = "Delivering enterprise-grade security and scalable cloud-first solutions.",
//   meta = defaultMeta(),
//   className = "",
// }: BreadCrumbProps) {
//   const [expanded, setExpanded] = useState(false);

//   // Collapse long breadcrumb trails (ux guidance: don't overwhelm). NN/g recommends concise trails.
//   const trail = useMemo(() => {
//     if (expanded || items.length <= 4) return items;
//     if (items.length > 4) {
//       return [
//         items[0],
//         { name: "...", href: undefined, icon: undefined },
//         ...items.slice(-2),
//       ];
//     }
//     return items;
//   }, [items, expanded]);

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: items.map((it, idx) => ({
//       "@type": "ListItem",
//       position: idx + 1,
//       name: it.name,
//       item: it.href || undefined,
//     })),
//   };

//   return (
//     <section
//       className={`relative isolate overflow-hidden bg-gradient-to-br from-black/80 via-blue-900 to bg-slate-900 ${className}`}
//       aria-label="Breadcrumb and page header"
//     >
//       <ClickSpark
//         sparkColor="#fff"
//         sparkSize={10}
//         sparkRadius={15}
//         sparkCount={8}
//         duration={400}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8 lg:pt-16 lg:pb-12">
//           {/* Breadcrumb trail: glass strip with gold accent and elegant chevrons */}

//           <motion.nav
//             initial={{ opacity: 0, y: 6 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.38, ease: "easeOut" }}
//             aria-label="Breadcrumb"
//           >
//             <div className="max-w-4xl mx-auto rounded-3xl bg-white/6 backdrop-blur-md ring-1 ring-white/10 px-3 py-2">
//               <ClickSpark
//                 sparkColor="#fff"
//                 sparkSize={10}
//                 sparkRadius={15}
//                 sparkCount={8}
//                 duration={400}
//               >
//                 <ol className="flex items-center justify-center gap-2 text-sm text-white/85 overflow-x-auto whitespace-nowrap">
//                   {trail.map((item, idx) => {
//                     const isLast =
//                       idx === trail.length - 1 ||
//                       (item.name === "..." && !expanded);
//                     const Icon = (item as any).icon;

//                     // clickable ellipsis to expand full trail
//                     if (item.name === "...") {
//                       return (
//                         <li key={`ell-${idx}`}>
//                           <button
//                             onClick={() => setExpanded(true)}
//                             className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-white/90 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
//                             aria-label="Expand breadcrumb"
//                           >
//                             …
//                           </button>
//                         </li>
//                       );
//                     }

//                     return (
//                       <li
//                         key={`${item.name}-${idx}`}
//                         className="flex items-center"
//                       >
//                         {!isLast ? (
//                           <Link
//                             href={item.href || "#"}
//                             className="inline-flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
//                           >
//                             {Icon ? (
//                               <Icon className="h-4 w-4 opacity-90" />
//                             ) : null}
//                             <span className="relative">
//                               <span className="underline-effect">
//                                 {item.name}
//                               </span>
//                             </span>
//                           </Link>
//                         ) : (
//                           <div className="inline-flex items-center gap-3 px-3 py-1 rounded-lg font-semibold text-white">
//                             {Icon ? <Icon className="h-5 w-5" /> : null}
//                             <div className="leading-tight">
//                               <div className="text-base sm:text-lg lg:text-sm tracking-tight">
//                                 {item.name}
//                               </div>
//                             </div>
//                           </div>
//                         )}

//                         {!isLast && (
//                           <ChevronRight className="mx-1 h-4 w-4 text-white/50" />
//                         )}
//                       </li>
//                     );
//                   })}
//                 </ol>
//               </ClickSpark>
//             </div>
//           </motion.nav>

//           {/* Hero title + deluxe metallic shimmer */}
//           <motion.header
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.48, ease: "easeOut", delay: 0.04 }}
//             className="mt-10 max-w-4xl mx-auto text-center"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
//               <span className="block text-white/70 font-extralight text-2xl sm:text-3xl lg:text-3xl mb-2 tracking-wide">
//                 {title}
//               </span>
//               <span
//                 className="block bg-clip-text text-transparent font-extralight font-serif mt-3"
//                 style={{
//                   backgroundImage: `linear-gradient(135deg, 
//                       #ffffff 0%, 
//                       #D4AF37 25%, 
//                       #034D9D 50%, 
//                       #D4AF37 75%, 
//                       #ffffff 100%
//                     )`,
//                   WebkitBackgroundClip: "text",
//                   backgroundClip: "text",
//                   backgroundSize: "300% auto",
//                   animation: "luxuryShimmer 8s linear infinite",
//                 }}
//               >
//                 Enterprise security • Cloud scale • Trusted delivery
//               </span>
//             </h1>
//           </motion.header>

//           {/* Interactive Info Highlight Bar */}
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.48, ease: "easeOut", delay: 0.08 }}
//             className="max-w-4xl mx-auto mt-10"
//             aria-label="Page highlights"
//           >
//             <div className="flex justify-center space-x-6 text-white/70 text-sm">
//               {meta.map((m, i) => {
//                 const Icon = m.icon;
//                 return (
//                   <div
//                     key={`${m.label}-${i}`}
//                     className="relative group px-8 py-3 cursor-default"
//                   >
//                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-slate-800/50 via-blue-700/30 to-slate-800/50 rounded-lg ring-1 ring-white/40 flex items-center justify-center space-x-2">
//                       <span className="text-white text-sm uppercase text-center tracking-wider block">
//                        <span className="mt-6 font-serif">{m.value}</span>
//                       </span>
//                       {/* <span className="text-white text-xs uppercase text-center tracking-wider block">
//                         {m.label} <br /> <span className="mt-6">{m.value}</span>
//                       </span> */}
//                     </div>
//                     <span className="flex items-center justify-center gap-2 text-white/50 group-hover:text-white transition-colors">
//                       {Icon && <Icon className="h-4 w-4 text-white/50" />}{" "}
//                       {m.label}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </ClickSpark>

//       {/* Decorative gilded hairline */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

//       {/* shimmer keyframes (scoped) */}
//       <style>{`

//          @keyframes luxuryShimmer {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }


//         .underline-effect {
//           position: relative;
//         }
//         .underline-effect::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           right: 0;
//           bottom: -4px;
//           height: 3px;
//           border-radius: 2px;
//           background: linear-gradient(90deg, ${GOLD}, rgba(255,255,255,0.8));
//           transform: scaleX(0);
//           transform-origin: left center;
//           transition: transform 220ms ease;
//           opacity: 0.95;
//         }
//         a:hover .underline-effect::after, a:focus-visible .underline-effect::after {
//           transform: scaleX(1);
//         }

//         /* small responsive tweaks */
//         @media (max-width: 640px) {
//           .underline-effect::after { bottom: -3px; height: 2px; }
//         }
//       `}</style>

//       {/* Structured data for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//     </section>
//   );
// }









// "use client";

// import React from "react";
// import Link from "next/link";

// const BG_IMAGE =
//   "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const overlayStyle: React.CSSProperties = {
//   /*
//     Two overlapping gradients:
//     1) top -> bottom (black -> transparent) to darken the top area
//     2) right -> left (black -> transparent) to create a right-side vignette
//   */
//   backgroundImage:
//     "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)",
// };

// const BreadCrumb: React.FC = () => {
//   return (
//     <header className="w-full" aria-hidden={false}>
//       <div className="relative w-full h-[36rem]">
//         {/* Background image: align to the right so the right->left gradient and focal point match */}
//         <img
//           src={BG_IMAGE}
//           alt="Coastal sunset landscape"
//           className="absolute inset-0 w-full h-full object-cover object-right"
//           loading="eager"
//         />

//         {/* Gradient overlay (two gradients combined) */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//         {/* Content container */}
//         <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
//           <nav className="text-sm md:text-base" aria-label="Breadcrumb">
//             <ol className="flex items-center gap-2 text-white/90">
//               <li>
//                 <Link href="/" className="hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li className="select-none text-white/50">/</li>
//               <li aria-current="page" className="font-semibold text-white">
//                 About Us
//               </li>
//             </ol>
//           </nav>

//           <h1 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-sm">
//             About Us
//           </h1>

//           <p className="mt-2 max-w-2xl text-white/90 hidden md:block">
//             Leading Website Design Company in Nashik — The Innovation City.
//             Crafting premium digital experiences.
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default BreadCrumb;
























"use client";

import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const THEME = "#034D9D";

const BreadCrumb: React.FC = () => {
  return (
    <header className="w-full relative overflow-hidden">
      <div className="relative w-full h-[40rem]">
        {/* Background image with enhanced positioning */}
        <div className="absolute inset-0">
          <img
            src={BG_IMAGE}
            alt="Coastal sunset landscape"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
            loading="eager"
          />

          {/* Enhanced multi-layer gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 100%),
                linear-gradient(to bottom, rgba(3,77,157,0.15) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%),
                radial-gradient(circle at 30% 40%, rgba(3,77,157,0.2) 0%, transparent 50%)
              `,
            }}
          />

          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-gradient-to-br from-gray-900 via-transparent to-gray-900" />
        </div>

        {/* Content container with enhanced positioning */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-start pt-28 px-6 lg:px-8">
          <div className=" p-8 max-w-3xl">
            <nav className="text-sm md:text-base mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-3 text-white/80">
                <li className="flex items-center gap-3">
                  <FaHome />
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    Home
                  </Link>
                </li>
                <li className="select-none text-white/40">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </li>
                <li aria-current="page" className="font-semibold text-white">
                  About Us
                </li>
              </ol>
            </nav>

            <h1 className="text-6xl font-light text-white mb-4 leading-tight">
              About{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${THEME} 0%, #0ea5e9 100%)`,
                }}
              >
                WindHans
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
              Leading Website Design Company in Nashik — The Innovation City.
              <br className="hidden md:block" />
              <span className="text-white/70">
                Crafting premium digital experiences that inspire.
              </span>
            </p>
          </div>
        </div>

        {/* Animated particles effect */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-48 left-[13.8rem] w-72 h-[4.8rem] bg-white/8 rounded-full animate-pulse" />
        </div> */}
      </div>
    </header>
  );
};

export default BreadCrumb;