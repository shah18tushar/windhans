// "use client";

// import React from "react";

// const CompanyLeader: React.FC = () => {
//   return (
//     <section className="bg-white py-12 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
//         {/* Left: Earth + Person */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <div className="relative w-[28rem] sm:w-[32rem] md:w-[40rem] lg:w-[48rem] aspect-square">
//             {/* 1. Earth background as circle */}
//             <img
//               src="/earth.png"
//               alt="Earth background"
//               className="absolute inset-0 w-[90%] h-[90%] object-cover rounded-full animate-spin [animation-duration:20s]"
//               style={{ display: "block" }}
//             />

//             {/* 3. Person overlapping, centered */}
//             <div className="absolute left-1/2 bottom-[4rem] -translate-x-1/2 w-[100%] ">
//               <img
//                 src="/self.png"
//                 alt="Company leader"
//                 className="w-full h-auto object-contain drop-shadow-xl"
//                 style={{ display: "block" }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right: Text / Info (no changes) */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center">
       
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyLeader;













"use client";

import React from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Award,
  GraduationCap,
  Building2,
  Globe,
  ChevronRight,
} from "lucide-react";
import { FaQuoteRight } from "react-icons/fa";

const CompanyLeader: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-6 lg:px-20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        {/* Left: Earth + Person (unchanged) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[28rem] sm:w-[32rem] md:w-[40rem] lg:w-[48rem] aspect-square">
            {/* 1. Earth background as circle */}
            <img
              src="/earth.png"
              alt="Earth background"
              className="absolute inset-0 w-[90%] h-[90%] object-cover rounded-full animate-spin [animation-duration:50s]"
              style={{ display: "block" }}
            />
            {/* 3. Person overlapping, centered */}
            <div className="absolute left-1/2 bottom-[4rem] -translate-x-1/2 w-[100%] ">
              <img
                src="/self.png"
                alt="Company leader"
                className="w-full h-auto object-contain drop-shadow-xl"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Right: Premium Leader Information */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex justify-center items-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-[#034D9D]/70">
                <Building2 className="w-4 h-4 text-[#034D9D] mr-2" />
                <span className="text-xs font-medium text-[#034D9D] tracking-wide">
                  OUR LEADERSHIP
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-extralight font-serif text-center bg-gradient-to-r from-slate-800 via-[#034D9D] to-slate-900 bg-clip-text text-transparent leading-tight">
                Hemant Nikam
              </h1>
              <div className="max-w-[24rem] mx-auto flex items-center mt-3 space-x-0">
                <div className="h-px  bg-gradient-to-r from-[#034D9D] to-transparent flex-1"></div>
                <span className="text-sm font-semibold text-[#034D9D] rounded-full">
                  Founder & CEO
                </span>
                <div className="h-px bg-gradient-to-l from-[#034D9D] to-transparent flex-1"></div>
              </div>
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Education Card */}
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-r from-[#034D9D] to-blue-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">Education</h3>
                <p className="text-sm text-slate-600">
                  MBA - Strategy & Innovation
                </p>
                <p className="text-xs text-slate-500">
                  Stanford Graduate School
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">
                  Experience
                </h3>
                <p className="text-sm text-slate-600">15+ Years Leadership</p>
                <p className="text-xs text-slate-500">
                  Technology & Innovation
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="relative bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/60 shadow-lg shadow-blue-50/30">
            <FaQuoteRight className="absolute -top-3 -left-3 w-6 h-6 text-[#034D9D]/30 rotate-180" />
            <p className="text-base text-slate-700 leading-relaxed text-center italic font-light">
              "Visionary technology leader with over 18 years of experience
              driving digital transformation for Fortune 500 companies.
              Expertise in leveraging cutting-edge solutions to solve complex
              business challenges and create sustainable value for global
              enterprises."
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <h3 className="text-sm uppercase tracking-widest text-gray-500">
              Connect With Hemant
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1a2.993 2.993 0 0 1 1.734 5.495c.465.837.75 1.787.766 2.805v8.7A5.5 5.5 0 0 1 17.5 24H7.5A5.5 5.5 0 0 1 2 18.5v-8.7c.016-1.018.3-1.968.766-2.805A2.993 2.993 0 0 1 4 1h16zm-5 10.5a1.5 1.5 0 0 1 1.5 1.5v5.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 8 18.5V13a1.5 1.5 0 0 1 1.5-1.5h6zM12 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLeader;













// "use client";

// import React, { useState } from "react";
// import {
//   FaLinkedin,
//   FaTwitter,
//   FaEnvelope,
//   FaAward,
//   FaGraduationCap,
//   FaBuilding,
//   FaGlobe,
//   FaChevronRight,
//   FaQuoteRight,
//   FaMedal,
//   FaHandshake,
//   FaRocket,
//   FaLightbulb,
// } from "react-icons/fa";

// const CompanyLeader: React.FC = () => {
//   const [activeAccomplishment, setActiveAccomplishment] = useState(0);

//   const accomplishments = [
//     {
//       icon: <FaMedal className="w-5 h-5" />,
//       title: "Industry Recognition",
//       description: "Recipient of Technology Innovation Award 2023",
//     },
//     {
//       icon: <FaHandshake className="w-5 h-5" />,
//       title: "Global Partnerships",
//       description: "Established 50+ strategic partnerships worldwide",
//     },
//     {
//       icon: <FaRocket className="w-5 h-5" />,
//       title: "Growth Leadership",
//       description: "Scaled company from startup to 200+ employees",
//     },
//     {
//       icon: <FaLightbulb className="w-5 h-5" />,
//       title: "Innovation Culture",
//       description: "Fostered culture resulting in 15+ patented technologies",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-6 lg:px-20 relative overflow-hidden">
//       {/* Premium background elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-2xl"></div>

//       {/* Subtle grid pattern for luxury effect */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-[#034D9D]/5 rounded-full"></div>
//       <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-[#034D9D]/20 to-blue-400/20 rounded-full"></div>

//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
//         {/* Left: Earth + Person (unchanged) */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <div className="relative w-[28rem] sm:w-[32rem] md:w-[40rem] lg:w-[48rem] aspect-square">
//             {/* 1. Earth background as circle */}
//             <img
//               src="/earth.png"
//               alt="Earth background"
//               className="absolute inset-0 w-[90%] h-[90%] object-cover rounded-full animate-spin [animation-duration:50s]"
//               style={{ display: "block" }}
//             />
//             {/* 3. Person overlapping, centered */}
//             <div className="absolute left-1/2 bottom-[4rem] -translate-x-1/2 w-[100%] ">
//               <img
//                 src="/self.png"
//                 alt="Company leader"
//                 className="w-full h-auto object-contain drop-shadow-xl"
//                 style={{ display: "block" }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right: Enhanced Premium Leader Information */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
//           {/* Header Section with improved styling */}
//           <div className="space-y-6">
//             <div className="flex justify-center items-center">
//               <div className="inline-flex items-center px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#034D9D]/30 shadow-lg shadow-blue-100/50">
//                 <FaBuilding className="w-4 h-4 text-[#034D9D] mr-2" />
//                 <span className="text-xs font-semibold text-[#034D9D] tracking-widest uppercase">
//                   EXECUTIVE LEADERSHIP
//                 </span>
//               </div>
//             </div>

//             <div className="text-center">
//               <h1 className="text-5xl font-light font-serif bg-gradient-to-r from-slate-900 via-[#034D9D] to-slate-800 bg-clip-text text-transparent leading-tight mb-2">
//                 Hemant Nikam
//               </h1>

//               <div className="max-w-[28rem] mx-auto flex items-center mt-4 space-x-3">
//                 <div className="h-px bg-gradient-to-r from-[#034D9D]/40 to-transparent flex-1"></div>
//                 <span className="text-sm font-medium text-[#034D9D] rounded-full px-3 py-1 bg-[#034D9D]/10">
//                   Founder & CEO
//                 </span>
//                 <div className="h-px bg-gradient-to-l from-[#034D9D]/40 to-transparent flex-1"></div>
//               </div>
//             </div>
//           </div>

//           {/* Key Information Cards with enhanced design */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Education Card */}
//             <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/70 shadow-lg shadow-blue-50/50 hover:shadow-blue-100/70 transition-all duration-300 hover:-translate-y-1 group">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-gradient-to-r from-[#034D9D] to-blue-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
//                   <FaGraduationCap className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-slate-800 mb-2 text-lg">
//                     Education
//                   </h3>
//                   <p className="text-md text-slate-700 font-medium">
//                     MBA - Strategy & Innovation
//                   </p>
//                   <p className="text-sm text-slate-500 mt-1">
//                     Stanford Graduate School of Business
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Experience Card */}
//             <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/70 shadow-lg shadow-blue-50/50 hover:shadow-blue-100/70 transition-all duration-300 hover:-translate-y-1 group">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
//                   <FaAward className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-slate-800 mb-2 text-lg">
//                     Experience
//                   </h3>
//                   <p className="text-md text-slate-700 font-medium">
//                     18+ Years Leadership
//                   </p>
//                   <p className="text-sm text-slate-500 mt-1">
//                     Technology & Digital Innovation
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Professional Summary with improved typography */}
//           <div className="relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-lg shadow-blue-50/30">
//             <FaQuoteRight className="absolute -top-3 -left-3 w-8 h-8 text-[#034D9D]/30 rotate-180" />
//             <p className="text-lg text-slate-700 leading-relaxed text-center italic font-light">
//               "Visionary technology leader with over 18 years of experience
//               driving digital transformation for Fortune 500 companies.
//               Expertise in leveraging cutting-edge solutions to solve complex
//               business challenges and create sustainable value for global
//               enterprises."
//             </p>
//           </div>

//           {/* Accomplishments Carousel */}
//           <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/70 shadow-lg shadow-blue-50/50">
//             <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
//               Key Accomplishments
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {accomplishments.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
//                     activeAccomplishment === index
//                       ? "bg-gradient-to-br from-[#034D9D]/10 to-blue-400/10 border-[#034D9D]/30 shadow-inner"
//                       : "bg-white/50 border-slate-200/50 hover:bg-[#034D9D]/5"
//                   }`}
//                   onMouseEnter={() => setActiveAccomplishment(index)}
//                 >
//                   <div
//                     className={`flex items-center space-x-3 ${
//                       activeAccomplishment === index
//                         ? "text-[#034D9D]"
//                         : "text-slate-600"
//                     }`}
//                   >
//                     <div
//                       className={`p-2 rounded-lg ${
//                         activeAccomplishment === index
//                           ? "bg-[#034D9D] text-white"
//                           : "bg-slate-100 text-slate-600"
//                       }`}
//                     >
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-sm">{item.title}</h4>
//                       <p className="text-xs text-slate-500 mt-1">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Social links with premium styling */}
//           <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/70 shadow-lg shadow-blue-50/50">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <h3 className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-2">
//                   Connect With Hemant
//                 </h3>
//                 <p className="text-xs text-slate-400 max-w-md">
//                   For speaking engagements, partnership opportunities, or
//                   industry insights
//                 </p>
//               </div>

//               <div className="flex space-x-3">
//                 <a
//                   href="#"
//                   className="w-12 h-12 rounded-xl bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] border border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-[#034D9D]/20 hover:-translate-y-1 group"
//                 >
//                   <FaLinkedin className="w-5 h-5 text-slate-600 group-hover:text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-12 h-12 rounded-xl bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] border border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-[#034D9D]/20 hover:-translate-y-1 group"
//                 >
//                   <FaTwitter className="w-5 h-5 text-slate-600 group-hover:text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-12 h-12 rounded-xl bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] border border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-[#034D9D]/20 hover:-translate-y-1 group"
//                 >
//                   <FaEnvelope className="w-5 h-5 text-slate-600 group-hover:text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="flex justify-center mt-2">
//             <button className="group flex items-center space-x-2 bg-gradient-to-r from-[#034D9D] to-blue-700 hover:from-blue-700 hover:to-[#034D9D] text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5">
//               <span className="font-medium">Schedule Executive Meeting</span>
//               <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyLeader;