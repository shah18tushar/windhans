"use client";

import React from "react";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#034D9D] via-[#034D9D] to-[#034D9D] py-6 rounded-3xl max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Background decorative elements - Enhanced */}
      <div className="absolute top-0 left-16 w-72 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      {/* <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-300 rounded-full filter blur-2xl opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-48 bg-indigo-300 rounded-full filter blur-3xl opacity-10 animate-pulse delay-2000"></div> */}

      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-32 right-1/3 w-1 h-1 bg-cyan-300/40 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-24 right-1/4 w-3 h-3 bg-blue-200/20 rounded-full animate-pulse delay-1500"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section - Image (KEPT AS IS - PERFECT) */}
          <div className="w-full lg:w-1/4 flex">
            <div className="relative max-w-md">
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-2xl transform -rotate-3"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/contact.png"
                  alt="24/7 Support Team"
                  className="w-full h-72 object-cover p-1"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#034D9D] to-transparent p-6">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-500"></div>
                    </div>
                    <div className="text-white">
                      <p className="font-semibold">Expert Team</p>
                      <p className="text-sm opacity-90">Ready to help you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Section - Premium Content */}
          <div className="w-full lg:w-1/2 text-center relative">
            <div className="relative p-0">
              {/* Premium badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full text-xs font-bold text-blue-900 mb-6 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                ENTERPRISE READY
                <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
              </div>

              <h2 className="text-4xl lg:text-3xl font-medium tracking-wide font-serif text-white/80 mb-4 leading-tight">
                Transform Your
                <span className="text-cyan-400 block">Business Today</span>
              </h2>

              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Trusted by 500+ companies to drive powerful innovation and
                growth with our cutting-edge IT solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-300">99.9%</div>
                  <div className="text-xs text-white/60">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">24/7</div>
                  <div className="text-xs text-white/60">Technical Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">500+</div>
                  <div className="text-xs text-white/60">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Premium CTA */}

          <div className="w-full lg:w-1/4 flex flex-col justify-center">
            <div className="transition-all duration-700 ease-out transform delay-150">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Let's Transform Your Business
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Get in touch with our experts for a free consultation
                </p>

                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-1000 transform hover:shadow-cyan-500/30 flex items-center justify-center">
                    <span>Schedule a Call</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>

                  <button className="w-full bg-transparent hover:bg-white/5 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center">
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-white/70 text-xs flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Response within 2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
















