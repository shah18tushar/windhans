"use client";

import React from "react";
import CTA from "../services/webservices/websitemaintenance/CTA";

const CaseStudyCards = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Cloud Telephony System",
      client: "Global Financial Services Inc.",
      frontDesc:
        "End-to-end cloud transformation for financial data processing",
      backDesc:
        "Designed and implemented a secure, scalable cloud infrastructure that reduced operational costs by 35% and improved system reliability by 99.9%. Migrated 200+ services to AWS with zero downtime.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Python", "Angular"],
      image: "/sgslogo.png",
    },
    {
      id: 2,
      title: "AI-Powered Customer Analytics",
      client: "RetailTech Solutions",
      frontDesc: "Machine learning platform for customer behavior prediction",
      backDesc:
        "Developed a custom AI solution that analyzes customer data to predict purchasing patterns with 92% accuracy. The system processes 5TB of data daily and has increased conversion rates by 27%.",
      technologies: ["TensorFlow", "Python", "BigQuery", "React" , "Node.js"],
      image: "/logo2.jpg",
    },
    {
      id: 3,
      title: "Healthcare Data Security System",
      client: "MediSafe Hospitals",
      frontDesc: "HIPAA-compliant data protection and management system",
      backDesc:
        "Implemented a comprehensive healthcare data security solution that ensures HIPAA compliance while enabling seamless data access for authorized personnel. Reduced data breach risks by 80%.",
      technologies: ["Node.js", "MongoDB", "HIPAA Compliance", "Encryption"],
      image: "/logo.png",
    },
    {
      id: 4,
      title: "E-commerce Platform Optimization",
      client: "StyleCart Fashion",
      frontDesc: "High-performance online shopping experience redesign",
      backDesc:
        "Revamped the entire e-commerce platform to handle 10x more traffic during peak seasons. Improved page load times by 65% and increased mobile conversion rates by 43%.",
      technologies: ["Next.js", "GraphQL", "Redis", "TypeScript"],
      image: "/logo2.jpg",
    },
    {
      id: 5,
      title: "IoT Fleet Management Solution",
      client: "LogiTrack Transport",
      frontDesc: "Real-time tracking and analytics for logistics company",
      backDesc:
        "Built an IoT ecosystem connecting 500+ vehicles with real-time monitoring, predictive maintenance alerts, and route optimization. Reduced fuel consumption by 18% and improved delivery times.",
      technologies: ["IoT Sensors", "React Native", "WebSockets", "PostgreSQL"],
      image: "/ECRSlogo.png",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-[linear-gradient(155deg,#020510_0%,#0A1026_25%,#15234E_45%,#0A142D_65%,#020510_100%)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header Section */}
          <div className="text-center mb-10 relative">
            <div className="relative inline-block mb-5">
              <h1 className="text-5xl md:text-6xl font-light font-serif text-white mb-1 relative z-10">
                We Build{" "}
                <span className="font-normal bg-clip-text text-transparent bg-[linear-gradient(120deg,#a8c0ff_0%,#3f2b96_100%)]">
                  Brands
                </span>{" "}
                For The Brave
              </h1>

              {/* Subtle underline effect */}
              <div className="absolute -bottom-2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <p className="text-lg text-blue-100/90 font-light tracking-wide leading-relaxed relative z-10">
                Discover how{" "}
                <span className="font-medium text-blue-200">
                  Windhans Technologies
                </span>{" "}
                has empowered businesses through cutting-edge digital
                transformation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="w-full h-[340px] group border border-white/40 rounded-2xl"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    transformStyle: "preserve-3d",
                    transition:
                      "transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute w-full h-full flex flex-col overflow-hidden rounded-2xl shadow-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Image with overlay */}
                    <div className="relative h-3/5">
                      {/* Display the image */}
                      <img
                        src={study.image}
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-fill z-0 rounded-t-2xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 p-6 flex flex-col gap-6">
                      <div>
                        <h3 className="text-base font-medium text-white mb-1">
                          {study.title}
                        </h3>
                        <p className="text-slate-300 text-xs mb-0">
                          {study.frontDesc}
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-slate-400 text-xs">Client</p>
                          <p className="text-white text-sm font-medium">
                            {study.client}
                          </p>
                        </div>
                        <div className="text-white text-sm">View Details →</div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Fixed with proper 3D positioning */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-5 overflow-y-auto flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                    }}
                  >
                    <h3 className="text-lg font-extralight font-serif text-white mb-3">
                      {study.title}
                    </h3>
                    {/* <div className="mb-3">
                    <p className="text-slate-400 text-sm">Client</p>
                    <p className="text-white font-medium text-xs">
                      {study.client}
                    </p>
                  </div> */}

                    <div className="mb-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {study.backDesc}
                      </p>
                    </div>

                    <div className="mb-3">
                      <p className="text-slate-400 text-sm mb-2">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-600">
                      <button className="bg-[#034D9D] hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors w-full cursor-pointer">
                        View Full Case Study
                      </button>
                    </div>
                  </div>
                </div>
                {/* Hover effect */}
                <style jsx>{`
                  .group:hover div:first-child {
                    transform: rotateY(180deg);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default CaseStudyCards;