"use client";

import React from "react";
import FlowingMenu, { MenuItemProps } from "./FlowingMenu";
import CurvedLoop from "./ui/CurvedLoop";
import AnimatedButton from "./ui/AnimatedButton";

const demoItems: MenuItemProps[] = [
  {
    link: "#",
    text: "E-Commerce Platform",
    image: "https://picsum.photos/600/400?random=1",
    projectName: "ShopSphere Pro",
    companyName: "RetailTech Solutions",
    description:
      "A comprehensive e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment integration that increased sales by 45%.",
    clientComment:
      "The platform exceeded our expectations. Sales increased by 45% within the first quarter, and customer engagement improved significantly.",
  },
  {
    link: "#",
    text: "Healthcare Management",
    image: "https://picsum.photos/600/400?random=2",
    projectName: "MediFlow Connect",
    companyName: "HealthFirst Medical Group",
    description:
      "An integrated healthcare management system streamlining patient records, appointment scheduling, and telemedicine consultations with HIPAA compliance.",
    clientComment:
      "This system revolutionized our workflow. Patient satisfaction scores improved by 60% and our administrative efficiency doubled.",
  },
  {
    link: "#",
    text: "Fintech Mobile App",
    image: "https://picsum.photos/600/400?random=3",
    projectName: "WealthWise Mobile",
    companyName: "SecureBank Financial",
    description:
      "A secure mobile banking application with biometric authentication, investment tracking, and AI-driven financial insights for modern banking needs.",
    clientComment:
      "Our customers love the intuitive interface and advanced security features. Mobile transactions increased by 80% since launch.",
  },
  {
    link: "#",
    text: "IoT Dashboard",
    image: "https://picsum.photos/600/400?random=4",
    projectName: "SmartFactory Analytics",
    companyName: "Industrial Automation Corp",
    description:
      "Real-time IoT monitoring dashboard for manufacturing processes with predictive maintenance alerts and comprehensive performance analytics.",
    clientComment:
      "The predictive maintenance feature alone saved us $2M annually. Production efficiency improved by 35% across all facilities.",
  },
  {
    link: "#",
    text: "EdTech Platform",
    image: "https://picsum.photos/600/400?random=5",
    projectName: "LearnSphere Academy",
    companyName: "EduTech Innovations",
    description:
      "An interactive learning management system with virtual classrooms, progress tracking, and adaptive learning algorithms for personalized education.",
    clientComment:
      "Student engagement increased by 70% and completion rates improved significantly. Teachers love the comprehensive analytics dashboard.",
  },
];

const CaseStudy = () => {
  const [hoveredItem, setHoveredItem] = React.useState<MenuItemProps | null>(
    null
  );

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,77,157,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(3,77,157,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#034D9D] to-transparent opacity-50"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#034D9D] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-10 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-6">
            <h1 className="text-7xl font-light">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-[#034D9D] bg-clip-text text-transparent">
                Wind's
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#034D9D] via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#034D9D]"></div>
              <div className="mx-4">
                <div className="w-3 h-3 border-2 border-[#034D9D] rotate-45 bg-gradient-to-br from-blue-500 to-blue-500 animate-pulse"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#034D9D]"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-md text-slate-300 leading-relaxed font-light">
                Discover our portfolio of transformative digital solutions that
                have redefined industry standards and delivered exceptional
                results for Fortune 500 companies
              </p>
            </div>

            {/* Luxury Stats */}
            <div className="flex justify-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#034D9D] mb-1">
                  500+
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">
                  Projects Delivered
                </div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#034D9D]/50 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#034D9D] mb-1">
                  98%
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">
                  Client Satisfaction
                </div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#034D9D]/50 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#034D9D] mb-1">
                  24/7
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">
                  Premium Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex gap-16 justify-center pb-0 px-4">
        {/* Left Section - Ultra Luxurious */}
        <div className="w-1/2 flex items-center justify-center">
          {hoveredItem ? (
            <div className="relative max-w-2xl">
              {/* Luxury Glass Card */}
              <div className="relative">
                {/* <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-3xl p-12 border border-[#034D9D]/20 shadow-[0_32px_64px_rgba(3,77,157,0.25)]"> */}
                {/* Glow Effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#034D9D]/5 via-transparent to-blue-600/5 rounded-3xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#034D9D]/20 via-blue-500/20 to-[#034D9D]/20 rounded-3xl blur-sm"></div> */}

                <div className="relative z-10 space-y-4 p-4">
                  {/* Project Title */}
                  <div className="space-y-2">
                    <h2 className="text-3xl font-medium tracking-wide leading-none">
                      <span className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-[#034D9D] bg-clip-text text-transparent">
                        {hoveredItem.projectName}
                      </span>
                    </h2>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-px bg-gradient-to-r from-[#034D9D] to-blue-400"></div>
                      <p className="text-lg text-slate-300 font-light tracking-wide">
                        for{" "}
                        <span className="bg-gradient-to-l from-cyan-400 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
                          {hoveredItem.companyName}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className=" flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-slate-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-300 tracking-wide">
                        Project Overview
                      </h3>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#034D9D] via-blue-500 to-cyan-400 rounded-full"></div>
                      <p className="text-sm text-slate-200 leading-relaxed pl-8">
                        {hoveredItem.description}
                      </p>
                    </div>
                  </div>

                  {/* Luxury Testimonial */}
                  <div className="relative mt-8">
                    <div className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br from-[#034D9D]/20 to-blue-600/20 rounded-full blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 backdrop-blur-sm rounded-2xl p-4 border border-[#034D9D] shadow-[0_16px_32px_rgba(3,77,157,0.15)]">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-normal text-emerald-400 mb-2 tracking-wide">
                            Executive Testimonial
                          </h4>
                          <div className="space-y-4">
                            <blockquote className="text-md text-slate-200 italic leading-relaxed font-light">
                              "{hoveredItem.clientComment}"
                            </blockquote>

                            {/* Premium Rating */}
                            <div className="flex items-center justify-end">
                              {/* <div className="flex items-center space-x-2">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className="w-5 h-5 fill-current drop-shadow-sm"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                  ))}
                                </div>

                              </div> */}
                              <div className="text-right">
                                <div className="text-[#034D9D] font-bold text-sm">
                                  C-Suite Executive
                                </div>
                                <div className="text-slate-400 text-xs">
                                  {hoveredItem.companyName}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center max-w-xl space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#034D9D]/20 via-blue-500/20 to-[#034D9D]/20 rounded-full blur-3xl"></div>
                <h2 className="relative text-5xl font-light mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                    Hover a Project
                  </span>
                </h2>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Hover over any project to reveal detailed insights, client
                testimonials, and success metrics from our premium portfolio
              </p>

              {/* Elegant Loading Animation */}
              <div className="flex items-center justify-center space-x-3 pt-8">
                <div className="w-3 h-3 bg-[#034D9D] rounded-full animate-bounce shadow-lg shadow-[#034D9D]/50"></div>
                <div
                  className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>

              <div className="inline-flex items-center space-x-2 text-slate-400 text-sm font-light tracking-widest">
                <span>PREMIUM EXPERIENCE</span>
                <div className="w-1 h-0.5 bg-[#034D9D] rounded-full"></div>
                <span>AWAITING SELECTION</span>
              </div>
              <div>
                <h1 className="text-sm font-light text-slate-400 italic">
                  {" "}
                  Click on a project to Check Out the Live Demo{" "}
                </h1>
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center">
          <div
            className="w-full"
            style={{ height: "32rem", position: "relative" }}
          >
            <FlowingMenu
              items={demoItems}
              onHover={(item) => setHoveredItem(item)}
              onLeave={() => setHoveredItem(null)}
            />
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <div className="flex items-center justify-center mt-6">
          <AnimatedButton
            text="View All Case Studies"
            bgColor="bg-cyan-600"
            textColor="text-white"
            hoverTextColor="text-white"
          />
        </div>
      </div>

      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ WindHans ✦ Technologies ✦"
        speed={1}
        curveAmount={300}
        direction="right"
        interactive={true}
        className="custom-text-style"
      /> */}
    </div>
  );
};

export default CaseStudy;
