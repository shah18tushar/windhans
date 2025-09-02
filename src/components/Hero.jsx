"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, Zap, Cloud, Cpu, Shield } from "lucide-react";

const heroContent = [
  {
    video:
      "https://video.wixstatic.com/video/11062b_8585b81392db43fd9386b680ca9a1490/720p/mp4/file.mp4",
    title: "Digital Transformation Experts",
    subtitle:
      "We architect innovative solutions that propel businesses into the future",
    highlight: "Innovation",
    icon: <Zap className="w-8 h-8" />,
    stats: [
      { value: "200+", label: "Successful Projects" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    video: "./a.mp4",
    title: "Cloud Infrastructure Specialists",
    subtitle:
      "Scalable, secure cloud solutions tailored to your business needs",
    highlight: "Scale",
    icon: <Cloud className="w-8 h-8" />,
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
  },
  {
    video: "./b.mp4",
    title: "AI & Machine Learning",
    subtitle:
      "Harness the power of intelligent automation for competitive advantage",
    highlight: "Intelligence",
    icon: <Cpu className="w-8 h-8" />,
    stats: [
      { value: "3x", label: "Operational Efficiency" },
      { value: "85%", label: "Accuracy Improvement" },
    ],
  },
  {
    video: "./c.mp4",
    title: "Cybersecurity Solutions",
    subtitle: "Enterprise-grade protection for your digital assets",
    highlight: "Security",
    icon: <Shield className="w-8 h-8" />,
    stats: [
      { value: "24/7", label: "Threat Monitoring" },
      { value: "100%", label: "Compliance" },
    ],
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const contentRef = useRef(null);

  // Handle video loading and playback
  useEffect(() => {
    const preloadNextVideo = () => {
      if (nextVideoRef.current) {
        nextVideoRef.current.load();
        nextVideoRef.current.currentTime = 0;
      }
    };

    if (activeVideoRef.current) {
      activeVideoRef.current
        .play()
        .catch((error) => console.log("Video play failed:", error));
    }

    preloadNextVideo();
  }, [activeIndex]);

  // Auto-rotate videos
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        transition();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [nextIndex, isHovered]);

  const transition = () => {
    if (!activeVideoRef.current || !nextVideoRef.current) return;

    setTransitionPhase(1);
    setTransitioning(true);

    const playNextVideo = async () => {
      try {
        if (nextVideoRef.current) {
          await nextVideoRef.current.play();
          nextVideoRef.current.style.opacity = "0";
        }
      } catch (error) {
        console.log("Failed to play next video:", error);
      }
    };

    playNextVideo();

    setTimeout(() => {
      setTransitionPhase(2);
      if (nextVideoRef.current) {
        nextVideoRef.current.style.opacity = "0.8";
      }
    }, 500);

    setTimeout(() => {
      setActiveIndex(nextIndex);
      setNextIndex((nextIndex + 1) % heroContent.length);
      setTransitioning(false);
      setTransitionPhase(0);
    }, 1500);
  };

  const getVideoStyles = (isActive) => {
    const baseStyles =
      "absolute inset-0 w-full h-full object-cover transition-all duration-1000";

    if (!transitioning) {
      return `${baseStyles} ${isActive ? "opacity-100" : "opacity-0"}`;
    }

    if (isActive) {
      switch (transitionPhase) {
        case 1:
          return `${baseStyles} opacity-100 blur-sm`;
        case 2:
          return `${baseStyles} opacity-50 blur-sm`;
        default:
          return baseStyles;
      }
    } else {
      switch (transitionPhase) {
        case 1:
          return `${baseStyles} opacity-0`;
        case 2:
          return `${baseStyles} opacity-80 blur-sm`;
        default:
          return baseStyles;
      }
    }
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0 ">
        <video
          ref={activeVideoRef}
          key={`video-${activeIndex}`}
          className={getVideoStyles(true)}
          src={heroContent[activeIndex].video}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        />
        <video
          ref={nextVideoRef}
          key={`video-${nextIndex}`}
          className={getVideoStyles(false)}
          src={heroContent[nextIndex].video}
          muted
          playsInline
          loop
          preload="auto"
        />
      </div>

      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#034D9D]/40 via-[#034D9D]/20 to-transparent" />

      {/* Content Section */}
      <div className="relative h-full flex items-center px-8 md:px-16 lg:px-16">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`max-w-4xl transition-all duration-1000 ${
            transitioning
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          {/* Highlight Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="text-[#00C6FF]">
              {heroContent[activeIndex].icon}
            </div>
            <span className="text-[#00C6FF] font-bold text-xl md:text-2xl uppercase tracking-wider">
              {heroContent[activeIndex].highlight}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-5xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            {heroContent[activeIndex].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl"
          >
            {heroContent[activeIndex].subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {heroContent[activeIndex].stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-[#00C6FF] font-bold text-3xl">
                  {stat.value}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00C6FF] to-[#034D9D] text-white rounded-full flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full flex items-center gap-2 text-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Ultra Premium Deluxe Dot Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-10 h-6">
        {heroContent.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setNextIndex((index + 1) % heroContent.length);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center"
            aria-label={`Navigate to slide ${index + 1}`}
          >
            {/* Active state - expanding pill */}
            <motion.div
              className="relative overflow-hidden cursor-pointer"
              initial={false}
              animate={{
                width: activeIndex === index ? 32 : 8,
                height: 8,
                borderRadius: activeIndex === index ? "50%" : "50%",
                transition: {
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                },
              }}
            >
              {/* Glowing core */}
              <motion.div
                className="absolute inset-0 bg-[#00C6FF]"
                animate={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  boxShadow:
                    activeIndex === index
                      ? "0 0 10px rgba(0, 198, 255, 0.8), 0 0 20px rgba(0, 198, 255, 0.5)"
                      : "none",
                  transition: { duration: 1 },
                }}
              />
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Hero;