"use client";

import React, { useState } from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";

interface TechItem {
  name: string;
  slug: string;
  description: string;
  experience: string;
}

interface CategoryData {
  title: string;
  icon: string;
  color: string;
  gradient: string;
  techs: TechItem[];
  description: string;
}

type TechnologyCategories = {
  frontend: CategoryData;
  backend: CategoryData;
  mobile: CategoryData;
  database: CategoryData;
  cloud: CategoryData;
  tools: CategoryData;
  testing: CategoryData;
};

type CategoryKey = keyof TechnologyCategories;

const technologiesData: TechnologyCategories = {
  frontend: {
    title: "Frontend Excellence",
    icon: "💎",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description:
      "Crafting exceptional user experiences with modern frontend frameworks",
    techs: [
      {
        name: "React",
        slug: "react",
        description: "Advanced component architecture",
        experience: "5+ years",
      },
      {
        name: "Next.js",
        slug: "nextdotjs",
        description: "Full-stack production framework",
        experience: "4+ years",
      },
      {
        name: "TypeScript",
        slug: "typescript",
        description: "Enterprise-grade type safety",
        experience: "4+ years",
      },
      {
        name: "JavaScript",
        slug: "javascript",
        description: "Modern ES6+ development",
        experience: "6+ years",
      },
      {
        name: "HTML5",
        slug: "html5",
        description: "Semantic web standards",
        experience: "6+ years",
      },
      {
        name: "CSS3",
        slug: "css3",
        description: "Advanced styling & animations",
        experience: "6+ years",
      },
    ],
  },
  backend: {
    title: "Backend Infrastructure",
    icon: "🏗️",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description:
      "Robust server-side solutions for enterprise-scale applications",
    techs: [
      {
        name: "Node.js",
        slug: "nodedotjs",
        description: "High-performance runtime",
        experience: "5+ years",
      },
      {
        name: "Express",
        slug: "express",
        description: "Scalable web framework",
        experience: "5+ years",
      },
      {
        name: "Java",
        slug: "java",
        description: "Enterprise application development",
        experience: "4+ years",
      },
      {
        name: "Nginx",
        slug: "nginx",
        description: "Load balancing & reverse proxy",
        experience: "3+ years",
      },
    ],
  },
  mobile: {
    title: "Mobile Solutions",
    icon: "📲",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description: "Cross-platform mobile applications for iOS and Android",
    techs: [
      {
        name: "Flutter",
        slug: "flutter",
        description: "Cross-platform excellence",
        experience: "3+ years",
      },
      {
        name: "Dart",
        slug: "dart",
        description: "Modern mobile programming",
        experience: "3+ years",
      },
      {
        name: "Android",
        slug: "android",
        description: "Native Android development",
        experience: "4+ years",
      },
    ],
  },
  database: {
    title: "Data Architecture",
    icon: "🏛️",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description:
      "Scalable database solutions for mission-critical applications",
    techs: [
      {
        name: "PostgreSQL",
        slug: "postgresql",
        description: "Advanced relational database",
        experience: "5+ years",
      },
      {
        name: "Prisma",
        slug: "prisma",
        description: "Type-safe database toolkit",
        experience: "3+ years",
      },
      {
        name: "Firebase",
        slug: "firebase",
        description: "Real-time database solutions",
        experience: "4+ years",
      },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines",
    techs: [
      {
        name: "AWS",
        slug: "amazonaws",
        description: "Enterprise cloud services",
        experience: "4+ years",
      },
      {
        name: "Vercel",
        slug: "vercel",
        description: "Global edge deployment",
        experience: "3+ years",
      },
      {
        name: "Docker",
        slug: "docker",
        description: "Containerization & orchestration",
        experience: "3+ years",
      },
    ],
  },
  tools: {
    title: "Development Ecosystem",
    icon: "🛠️",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description:
      "Professional development tools for efficient project delivery",
    techs: [
      {
        name: "Git",
        slug: "git",
        description: "Advanced version control",
        experience: "6+ years",
      },
      {
        name: "GitHub",
        slug: "github",
        description: "Collaborative development",
        experience: "5+ years",
      },
      {
        name: "GitLab",
        slug: "gitlab",
        description: "Complete DevOps platform",
        experience: "4+ years",
      },
      {
        name: "VS Code",
        slug: "visualstudiocode",
        description: "Professional code editor",
        experience: "5+ years",
      },
      {
        name: "Android Studio",
        slug: "androidstudio",
        description: "Android development IDE",
        experience: "4+ years",
      },
      {
        name: "Figma",
        slug: "figma",
        description: "Professional design system",
        experience: "4+ years",
      },
      {
        name: "Jira",
        slug: "jira",
        description: "Agile project management",
        experience: "5+ years",
      },
      {
        name: "SonarQube",
        slug: "sonarqube",
        description: "Code quality assurance",
        experience: "3+ years",
      },
    ],
  },
  testing: {
    title: "Quality Assurance",
    icon: "🔬",
    color: "from-slate-800 via-blue-900 to-slate-800",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
    description:
      "Comprehensive testing strategies for bulletproof applications",
    techs: [
      {
        name: "Jest",
        slug: "jest",
        description: "JavaScript testing framework",
        experience: "4+ years",
      },
      {
        name: "Cypress",
        slug: "cypress",
        description: "End-to-end testing suite",
        experience: "3+ years",
      },
      {
        name: "Testing Library",
        slug: "testinglibrary",
        description: "Component testing utilities",
        experience: "3+ years",
      },
    ],
  },
};

const allSlugs = Object.values(technologiesData)
  .flatMap((category) => category.techs)
  .map((tech) => tech.slug);

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const images = allSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="bg-white relative overflow-hidden pb-16">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Executive Header */}
        <div className="text-center mb-10">
          <h2 className="text-6xl font-extralight font-serif tracking-wider mb-4">
            <span className="bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              Enterprise
            </span>
            <br />
            <span className="bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Leveraging industry-leading technologies and frameworks to deliver
            <span className="font-semibold text-gray-900">
              {" "}
              mission-critical solutions
            </span>{" "}
            for Fortune 500 companies and enterprise clients worldwide.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#034D9D]"></div>
            <div className="mx-4">
              <div className="w-3 h-3 border-2 border-[#034D9D] rotate-45 bg-gradient-to-br from-blue-500 to-blue-500"></div>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#034D9D]"></div>
          </div>
        </div>

        <div className="grid xl:grid-cols-[1fr_400px] gap-6 items-start">
          {/* Technology Showcase */}
          <div className="space-y-4">
            {/* Category Navigation */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-0">
              <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-2">
                {Object.entries(technologiesData).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key as CategoryKey)}
                    className={`relative group p-4 cursor-pointer rounded-2xl transition-all duration-500 ${
                      activeCategory === key
                        ? `bg-gradient-to-br ${category.color} text-white shadow-xl transform scale-105`
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="text-xs font-semibold text-center leading-tight">
                        {category.title.split(" ")[0]}
                      </span>
                    </div>
                    {activeCategory === key && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Category Display */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${technologiesData[activeCategory].color} py-4 px-4`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-xl">
                      {technologiesData[activeCategory].icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-0">
                      {technologiesData[activeCategory].title}
                    </h3>
                    <p className="text-white/90 text-sm font-medium leading-relaxed">
                      {technologiesData[activeCategory].description}
                    </p>
                  </div>
                  <div className="text-right text-white/90">
                    <div className="text-2xl font-semibold">
                      {technologiesData[activeCategory].techs.length}
                    </div>
                    <div className="text-sm font-light">Technologies</div>
                  </div>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="p-4">
                <div className="grid lg:grid-cols-3 gap-6">
                  {technologiesData[activeCategory].techs.map(
                    (tech: TechItem, index: number) => (
                      <div
                        key={tech.slug}
                        className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-3 hover:shadow-2xl hover:border-gray-300 transition-all duration-500"
                        style={{
                          animationDelay: `${index * 150}ms`,
                        }}
                        onMouseEnter={() => setHoveredTech(tech.slug)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        {/* Premium Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex items-start gap-2">
                          <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                            <img
                              src={`https://cdn.simpleicons.org/${tech.slug}/${tech.slug}`}
                              alt={tech.name}
                              className="w-4 h-4"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                              }}
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                                {tech.name}
                              </h4>
                              <span className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                                {tech.experience}
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed font-medium text-xs">
                              {tech.description}
                            </p>
                          </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div
                          className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                            hoveredTech === tech.slug
                              ? `border-2 border-gradient-to-r ${technologiesData[
                                  activeCategory
                                ].color
                                  .replace("from-", "border-")
                                  .replace("via-", "border-")
                                  .replace("to-", "border-")}`
                              : "border-0"
                          }`}
                        ></div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Executive Dashboard */}
          {/* Technology Cloud */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 p-4 px-8 text-white">
              <h4 className="text-xl font-medium text-center">
                Technology Ecosystem
              </h4>
              <p className="text-gray-300 text-sm text-center">
                Interactive visualization of our complete tech stack
              </p>
            </div>

            <div className="pt-10 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative">
              <div className="flex items-center justify-center">
                <IconCloud images={images} />
              </div>

              {/* Floating Stats */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">
                      {allSlugs.length}+ Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;