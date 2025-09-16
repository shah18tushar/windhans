"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  RefreshCw,
  BarChart3,
  Server,
  Database,
  Search,
  Users,
  Bell,
  MessageSquare,
  Award,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Lock,
  Lightbulb,
} from "lucide-react";

const Services_Benefits = () => {
  const [activeService, setActiveService] = useState(0);
  // const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const services = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Advanced speed enhancements, intelligent caching systems, and database optimization for exceptional performance.",
      features: [
        "Core Web Vitals Optimization",
        "CDN Implementation",
        "Database Query Optimization",
        "Image Compression & Lazy Loading",
      ],
    },
    {
      icon: Shield,
      title: "Security Fortification",
      description:
        "Enterprise-grade security monitoring, vulnerability assessments, and proactive threat mitigation.",
      features: [
        "24/7 Security Monitoring",
        "Malware Scanning",
        "SSL Certificate Management",
        "Regular Security Audits",
      ],
    },
    {
      icon: RefreshCw,
      title: "Content Management",
      description:
        "Strategic content updates, CMS optimization, and editorial calendar management for sustained engagement.",
      features: [
        "Content Strategy Planning",
        "Regular Content Audits",
        "CMS Optimization",
        "Editorial Calendar Management",
      ],
    },
    {
      icon: Database,
      title: "Backup & Recovery",
      description:
        "Military-grade backup solutions with instant recovery capabilities and zero-downtime restoration.",
      features: [
        "Automated Daily Backups",
        "One-Click Restoration",
        "Version Control",
        "Disaster Recovery Planning",
      ],
    },
    {
      icon: Search,
      title: "SEO Excellence",
      description:
        "Advanced SEO strategies, technical optimization, and continuous monitoring for search dominance.",
      features: [
        "Technical SEO Audits",
        "Keyword Optimization",
        "Core Web Vitals",
        "Local SEO Management",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Comprehensive performance analytics, user behavior insights, and data-driven optimization strategies.",
      features: [
        "Performance Analytics",
        "User Behavior Tracking",
        "Conversion Rate Analysis",
        "Custom Reporting",
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Elite Expertise",
      subtitle: "Certified Professionals",
      description:
        "Our team of certified experts brings decades of enterprise-level experience, ensuring your digital assets receive world-class care.",
      metric: "99.9% Uptime",
    },
    {
      icon: Bell,
      title: "Proactive Intelligence",
      subtitle: "Predictive Maintenance",
      description:
        "AI-powered monitoring systems detect and resolve issues before they impact your business operations or user experience.",
      metric: "24/7 Monitoring",
    },
    {
      icon: Server,
      title: "Bespoke Solutions",
      subtitle: "Tailored Excellence",
      description:
        "Custom maintenance strategies designed specifically for your industry, scale, and business objectives.",
      metric: "100% Customized",
    },
    {
      icon: MessageSquare,
      title: "Executive Communication",
      subtitle: "Transparent Reporting",
      description:
        "Comprehensive monthly reports, executive briefings, and dedicated account management for complete transparency.",
      metric: "Weekly Reports",
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      subtitle: "Performance Driven",
      description:
        "Measurable improvements in site performance, user engagement, and conversion rates that directly impact your bottom line.",
      metric: "+40% Performance",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      subtitle: "Bank-Grade Protection",
      description:
        "Military-grade security protocols, compliance management, and risk mitigation strategies for complete peace of mind.",
      metric: "Zero Breaches",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white py-32 px-4 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-slate-50 to-gray-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-indigo-50 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(3,77,157) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full mb-8 shadow-sm">
            <Award className="text-[#034D9D] h-4 w-4 mr-2" />
            <span className="text-[#034D9D] font-semibold text-sm uppercase tracking-wider">
              Enterprise-Grade Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Premium Website
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(to right, #034D9D, #0D63BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Maintenance Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Elevate your digital presence with our sophisticated maintenance
            services, designed exclusively for discerning enterprises who demand
            excellence.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>99.99% SLA Guarantee</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>

        {/* Interactive Services Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#034D9D]">Comprehensive</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six pillars of excellence that form the foundation of our premium
              maintenance offering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeService === index
                    ? "border-[#034D9D] shadow-2xl shadow-blue-100 scale-105"
                    : "border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl"
                }`}
                onClick={() => setActiveService(index)}
              >
                {/* Premium gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    activeService === index ? "opacity-100" : ""
                  }`}
                ></div>

                <div className="relative p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                      activeService === index
                        ? "bg-gradient-to-br from-[#034D9D] to-[#0D63BF] shadow-lg"
                        : "bg-gray-50 group-hover:bg-gray-100"
                    }`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${
                        activeService === index
                          ? "text-white"
                          : "text-[#034D9D]"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1 h-1 bg-[#034D9D] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Active indicator */}
                  {activeService === index && (
                    <div className="absolute top-6 right-6">
                      <div className="w-3 h-3 bg-[#034D9D] rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-[#034D9D]">Enterprise Leaders</span>{" "}
              Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic advantages that deliver measurable value and competitive
              differentiation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Premium hover effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#034D9D] to-[#0D63BF] opacity-0 transition-opacity duration-500 ${
                    hoveredBenefit === index ? "opacity-100" : ""
                  }`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                        hoveredBenefit === index
                          ? "bg-white bg-opacity-20"
                          : "bg-gray-50 group-hover:bg-gray-100"
                      }`}
                    >
                      <benefit.icon
                        className={`h-7 w-7 transition-colors duration-300 ${
                          hoveredBenefit === index
                            ? "text-white"
                            : "text-[#034D9D]"
                        }`}
                      />
                    </div>

                    <div
                      className={`text-right transition-colors duration-300 ${
                        hoveredBenefit === index
                          ? "text-white"
                          : "text-[#034D9D]"
                      }`}
                    >
                      <div className="text-sm font-medium opacity-80">
                        {benefit.subtitle}
                      </div>
                      <div className="text-lg font-bold">{benefit.metric}</div>
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      hoveredBenefit === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      hoveredBenefit === index
                        ? "text-white text-opacity-90"
                        : "text-gray-600"
                    }`}
                  >
                    {benefit.description}
                  </p>

                  <div
                    className={`mt-6 flex items-center transition-all duration-300 ${
                      hoveredBenefit === index ? "text-white" : "text-[#034D9D]"
                    }`}
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-16 border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#034D9D] to-[#0D63BF] rounded-2xl mb-8 shadow-lg">
              <Globe className="text-white h-10 w-10" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your
              <span className="text-[#034D9D]"> Digital Excellence?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Join the ranks of industry leaders who trust WindHans Technologies
              with their most critical digital assets. Experience the difference
              that premium maintenance makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#034D9D] to-[#0D63BF] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-200 transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center">
                  Schedule Executive Consultation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="group bg-white text-[#034D9D] px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-[#034D9D] hover:bg-[#034D9D] hover:text-white transition-all duration-300">
                <span className="flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  View Case Studies
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_Benefits;
