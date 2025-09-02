
 <div className="w-full lg:w-1/4 relative">
            {/* Gradient border container */}
            <div className="relative p-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-2xl shadow-2xl">
              <div className="bg-[#034D9D] rounded-2xl p-8 relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-300/20 rounded-full filter blur-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Ready to Scale?
                  </h3>

                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-white/90">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Free consultation & audit</span>
                    </div>

                    <div className="flex items-center text-white/90">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Custom solution design</span>
                    </div>

                    <div className="flex items-center text-white/90">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Implementation & training</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-blue-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 hover:from-cyan-300 hover:to-blue-300">
                      Start Free Consultation
                    </button>

                    <button className="w-full border-2 border-white/20 text-white font-semibold py-3 px-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/40">
                      View Case Studies
                    </button>
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-center space-x-4 text-white/60">
                      <div className="flex items-center text-xs">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                        Secure
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-1 animate-pulse"></span>
                        ISO Certified
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-1 animate-pulse"></span>
                        GDPR Compliant
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating action indicator */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-900 px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
              LIMITED OFFER
            </div>
          </div>















          <div id="1" className="w-full pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-full mb-8 shadow-lg shadow-red-700/30"
              >
                <div className="relative flex items-center">
                  <FiStar className="h-5 w-5 text-yellow-300 mr-3 animate-pulse" />
                  <span className="text-white font-semibold text-xs uppercase tracking-widest">
                    Exclusive Premium Excellence
                  </span>
                  <FiStar className="h-5 w-5 text-yellow-300 ml-3 animate-pulse" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl md:text-5xl font-medium text-white mb-8"
              >
                Experience The{" "}
                <span className="relative">
                  <span className="text-red-500">Ultimate Premium</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
                </span>{" "}
                Service
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Where{" "}
                <span className="text-red-500 font-medium">
                  cutting-edge technology
                </span>{" "}
                meets{" "}
                <span className="text-red-500 font-medium">
                  unparalleled luxury
                </span>
                . We deliver{" "}
                <span className=" text-red-500 font-medium">
                  elite IT solutions
                </span>{" "}
                for discerning clients who expect nothing but the absolute best.
              </motion.p>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-8 mb-0">
              {premiumStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-0 backdrop-blur-none flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-4 bg-red-700/30 rounded-full">
                    <stat.icon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>