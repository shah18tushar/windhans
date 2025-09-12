"use client";

import React, { useRef, useState } from "react";

const GenerateBusinessName = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSteps, setShowSteps] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDomainDialog, setShowDomainDialog] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [domainOptions, setDomainOptions] = useState<string[]>([]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleGenerateClick = () => {
    setShowSteps(false);
    setTimeout(() => {
      setShowSearch(true);
    }, 300);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleFindDomains = (name: string) => {
    setSelectedName(name);
    const baseName = name.toLowerCase().replace(/\s+/g, "");
    const domains = [
      `${baseName}.com`,
      `${baseName}.net`,
      `${baseName}.io`,
      `${baseName}.co`,
      `${baseName.replace("construction", "construct")}.com`,
      `${baseName.replace("builders", "build")}.com`,
    ];
    setDomainOptions(domains);
    setShowDomainDialog(true);
  };

  const constructionNames = [
    "BuildMaster Construction",
    "SolidStructure Builders",
    "PrecisionCraft Contractors",
    "EverStone Construction",
    "FoundationFirst Builders",
  ];

  const DomainDialog = () => {
    if (!showDomainDialog) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
        <div className="h-[85vh] bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-blue-900/95 backdrop-blur-xl rounded-2xl max-w-3xl w-full px-8 pt-6 border border-white/20 shadow-2xl shadow-black/40 animate-in duration-300 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-semibold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Premium Domains Matches With "{selectedName}"
              </h3>
            </div>
            <button
              onClick={() => setShowDomainDialog(false)}
              className="text-slate-400 hover:text-white transition-all duration-200 hover:rotate-90 p-2 cursor-pointer"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 mb-6 custom-scrollbar">
            <div className="space-y-4">
              {domainOptions.map((domain, index) => (
                <div
                  key={index}
                  className="group flex justify-between items-center p-4 bg-gradient-to-r from-slate-700/30 via-slate-800/30 to-blue-800/20 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                    <span className="font-mono text-white/90 group-hover:text-white transition-colors truncate">
                      {domain}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 flex-shrink-0 ml-4">
                    Check Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add custom scrollbar styles */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Premium background effects */}

      <div className="relative text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-sm font-medium text-cyan-300">
                AI-Powered Business Naming
              </span>
            </div>

            <h1 className="text-4xl font-light font-serif">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Generate Memorable Business Names
              </span>
            </h1>

            <p className="text-base text-blue-200/80 max-w-lg mx-auto font-light leading-relaxed">
              Transform your vision into the perfect brand identity with our
              premium AI-powered naming system
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Domain Matching</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% Free</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left Section - Enhanced Premium Design */}
            <div className="lg:w-7/12">
              {/* Premium Steps Section */}
              {showSteps && (
                <div className="space-y-8 transition-all duration-500">
                  {[
                    {
                      num: 1,
                      title: "Tell us about your business vision",
                      desc: "In your prompt, include your industry and the products or servicesoffer Mention your location if you want to be instantly recognized as a local business.",
                    },
                    {
                      num: 2,
                      title: "Define your brand's unique personality",
                      desc: "Provide some extra details that give the vibe of your business. Is your brand playful and bold, or polished and professional? What do you want customers to feel when they visit your site? Describing your brand's personality helps our name suggestions align with your business vision.",
                    },
                    {
                      num: 3,
                      title: "Highlight what sets you apart",
                      desc: "Your unique value proposition becomes the foundation for names that aren't just catchy, but strategically positioned for market success and brand recognition.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="group">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-9 h-9 font-serif rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-lg font-medium shadow-lg shadow-blue-500/30">
                            {step.num}
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-lg font-semibold text-blue-100 group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                            {step.title}
                          </h3>
                          <p className="text-blue-100 leading-relaxed text-sm group-hover:text-blue-100/90 transition-colors duration-300">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Premium Search Section */}
              {showSearch && !showResults && (
                <div className="transition-all duration-500 animate-in slide-in-from-left">
                  <div className="px-8">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-1">
                        Let's Create Your Perfect Name
                      </h2>
                      <p className="text-blue-200/70 text-xs">
                        Fill in the details below to get personalized
                        suggestions
                      </p>
                    </div>

                    <form onSubmit={handleSearch} className="space-y-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-blue-200 mb-3">
                          Industry & Focus
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 py-3 px-6 group-hover:border-white/30"
                          placeholder="e.g., Construction, Technology, Healthcare, Consulting"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          required
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-blue-200 mb-3">
                          Products & Services
                        </label>
                        <textarea
                          rows={1}
                          className="w-full bg-transparent border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 py-3 px-6 group-hover:border-white/30"
                          placeholder="Describe what your business offers - be specific about your unique value"
                          required
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-blue-200 mb-3">
                          Location (Optional)
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 py-3 px-6 group-hover:border-white/30"
                          placeholder="City, State, or Region for local branding"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative flex items-center justify-center space-x-3">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          <span>Generate Premium Names</span>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Premium Results Section */}
              {showResults && (
                <div className="transition-all duration-500 animate-in slide-in-from-right">
                  <div className="">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 mb-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-sm font-medium">
                          Generated Successfully
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      {constructionNames.map((name, index) => (
                        <div
                          key={index}
                          className="group px-6 py-2 bg-gradient-to-r from-slate-700/30 via-slate-800/30 to-blue-800/20 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-7 h-7 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-xl flex items-center justify-center border border-cyan-400/20">
                                <span className="text-cyan-300 font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                  {name}
                                </h3>
                              </div>
                            </div>
                            <button
                              onClick={() => handleFindDomains(name)}
                              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-xs font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 flex items-center space-x-2"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                                />
                              </svg>
                              <span>Find Domains</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => {
                          setShowResults(false);
                          setShowSearch(true);
                        }}
                        className="px-8 py-3 bg-slate-700/50 hover:bg-slate-700/80 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30 flex items-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        <span>Try Different Keywords</span>
                      </button>
                      <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 flex items-center space-x-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span>Save Favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Premium Generate Button */}
              {showSteps && (
                <div className="mt-12">
                  <button
                    onClick={handleGenerateClick}
                    className="group w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 rounded-2xl text-2xl font-bold tracking-wide transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center space-x-4">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>Start Generating Names</span>
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Section - Ultra Premium Video Player */}
            <div className="lg:w-5/12">
              <div className=" backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl shadow-black/20">
                <div className="aspect-video bg-gradient-to-br from-slate-800/80 to-blue-900/80 rounded-2xl overflow-hidden border border-white/20 relative shadow-2xl">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    poster="/logo.png"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Ultra Premium Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handlePlayPause}
                        className="text-white hover:text-cyan-400 transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-white/10"
                      >
                        {isPlaying ? (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 9v6m4-6v6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                      </button>

                      <div className="flex items-center space-x-4">
                        <div className="text-white/80 text-sm font-mono">
                          02:45
                        </div>
                        <button className="text-white hover:text-cyan-400 transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 01115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Video Description */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    How Our AI Naming Engine Works
                  </h3>
                  <p className="text-blue-200/70 leading-relaxed text-sm">
                    Watch how our advanced AI analyzes market trends, linguistic
                    patterns, and brand psychology to create memorable,
                    market-ready business names that resonate with your target
                    audience.
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>AI Technology</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>Secure Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Domain Dialog */}
      <DomainDialog />
    </div>
  );
};

export default GenerateBusinessName;