"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronRight,
  ChevronLeft,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const TeamMembers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Hemant Nikam",
      position: "Chief Executive Officer",
      description:
        "Leading our technical vision with over 15 years of experience in software architecture and cloud infrastructure. Alex has led numerous enterprise-level digital transformation projects.",
      image: "/team1.jpg",
      //   image: team1,
      expertise: "Cloud Architecture",
      experience: "15+ years",
      social: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        facebook: "https://facebook.com/alexjohnson",
        instagram: "https://instagram.com/alexjohnson",
      },
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Lead Developer",
      description:
        "Expert in full-stack development with a passion for creating scalable applications. Sarah specializes in React and Node.js ecosystems and mentors our junior development team.",
      image: "/team2.jpg",
      expertise: "Full Stack",
      experience: "10+ years",
      social: {
        linkedin: "https://linkedin.com/in/sarahwilliams",
        facebook: "https://facebook.com/sarahwilliams",
        instagram: "https://instagram.com/sarahwilliams",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "DevOps Engineer",
      description:
        "Automation specialist focusing on CI/CD pipelines and infrastructure as code. Michael ensures our deployment processes are efficient, secure, and scalable for enterprise clients.",
      image: "/team3.jpg",
      expertise: "DevOps",
      experience: "8+ years",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        facebook: "https://facebook.com/michaelchen",
        instagram: "https://instagram.com/michaelchen",
      },
    },
  ];

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  // Auto scroll with pause on hover
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering && inView) {
      const timer = setTimeout(() => {
        nextMember();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isHovering, inView]);

  return (
    <div
      ref={ref}
      className=" w-full relative overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Premium background with subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#001a33]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,204,0.15),transparent_70%)]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_40%,transparent_100%)]" />
      </div>

      {/* Main container with smooth in-view animation */}
      <motion.div
        className="relative w-full h-screen flex"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Left content section (widened) */}
        <div className="w-[60%] h-full flex flex-col justify-center pl-16 lg:pl-24 pr-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Premium accent line with glow */}
              <div className="flex justify-center items-center space-x-4 text-sm">
                <motion.div
                  className="h-[2px] w-4 bg-gradient-to-r from-[#0066CC] to-[#66a3ff] shadow-[0_0_10px_rgba(0,102,204,0.7)]"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 1.5 }}
                />
                <span className="text-[#0066CC] font-medium tracking-wide text-xs">
                  TEAM LEADER {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(teamMembers.length).padStart(2, "0")}
                </span>
              </div>

              {/* Member name with premium styling */}
              <h2 className="text-2xl font-light text-center font-serif text-gray-300 tracking-wide leading-none">
                {teamMembers[activeIndex].name.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 + 0.2 }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </h2>

              {/* Position with enhanced styling */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-block text-[#0066CC]/90 tracking-[0.2em] text-xs font-medium uppercase bg-[#0066CC]/10 py-1 px-4 rounded-sm border-l-2 border-[#0066CC]/70"
                >
                  {teamMembers[activeIndex].position}
                </motion.div>
              </div>

              {/* Description with gradient text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-300  text-sm tracking-wide text-center  leading-relaxed"
              >
                {teamMembers[activeIndex].description}
              </motion.p>

              {/* Expertise and Experience with premium styling */}
              <motion.div
                className="grid grid-cols-2 gap-8 pt-"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-[#0066CC]/20 rounded-lg blur-sm group-hover:blur transition duration-500"></div>
                  <div className="relative w-full text-center bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#0066CC]/20">
                    <div className="text-lg font-bold text-[#0066CC] mb-2">
                      {teamMembers[activeIndex].expertise}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      Specialization
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-[#0066CC]/20 rounded-lg blur-sm group-hover:blur transition duration-500"></div>
                  <div className="relative text-center bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#0066CC]/20">
                    <div className="text-lg font-bold text-[#0066CC] mb-2">
                      {teamMembers[activeIndex].experience}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      Experience
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social media links */}
              <div className="flex justify-around items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="pt-2"
                >
                  <p className="text-gray-400 mb-4 text-sm tracking-wider uppercase">
                    Connect with {teamMembers[activeIndex].name.split(" ")[0]}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={teamMembers[activeIndex].social.linkedin}
                      className="p-3 bg-black/30 rounded-full border border-[#0066CC]/30 hover:bg-[#0066CC]/20 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-[#0066CC] group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a
                      href={teamMembers[activeIndex].social.facebook}
                      className="p-3 bg-black/30 rounded-full border border-[#0066CC]/30 hover:bg-[#0066CC]/20 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5 text-[#0066CC] group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a
                      href={teamMembers[activeIndex].social.instagram}
                      className="p-3 bg-black/30 rounded-full border border-[#0066CC]/30 hover:bg-[#0066CC]/20 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 text-[#0066CC] group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                </motion.div>
                {/* Navigation controls with premium styling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="pt-10 flex items-center space-x-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevMember}
                      className="p-2 rounded-full bg-gradient-to-r from-[#0066CC]/20 to-[#0066CC]/10 backdrop-blur-sm border border-[#0066CC]/30 hover:border-[#0066CC]/50 transition-all duration-300 shadow-lg group"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#0066CC] group-hover:text-white transition-colors duration-300" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextMember}
                      className="p-2 rounded-full bg-gradient-to-r from-[#0066CC]/20 to-[#0066CC]/10 backdrop-blur-sm border border-[#0066CC]/30 hover:border-[#0066CC]/50 transition-all duration-300 shadow-lg group"
                    >
                      <ChevronRight className="w-6 h-6 text-[#0066CC] group-hover:text-white transition-colors duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right image section (narrowed with improved fitting) */}
        <div className="w-[40%] h-full relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 2, ease: "easeIn" }}
              className="absolute inset-0 p-16 flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-xl group">
                {/* Premium frame with glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#003366] rounded-xl opacity-70 blur-md group-hover:opacity-100 transition duration-1000"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  transition={{ duration: 1 }}
                />

                <div className="absolute inset-0.5 rounded-xl overflow-hidden bg-black">
                  {/* Main image with portrait aspect ratio */}
                  <motion.div
                    className="w-full h-full relative overflow-hidden"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    <motion.img
                      src={teamMembers[activeIndex].image}
                      alt={teamMembers[activeIndex].name}
                      className="w-full h-full object-cover object-top transition-transform duration-1000"
                      initial={{ filter: "brightness(0.7) saturate(0.8)" }}
                      animate={{ filter: "brightness(1) saturate(1)" }}
                      transition={{ duration: 1.5 }}
                    />

                    {/* Enhanced premium overlay with depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 mix-blend-multiply transition-all duration-700" />

                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 via-transparent to-transparent opacity-70 transition-all duration-700" />
                  </motion.div>
                </div>

                {/* Decorative premium corner accents */}
                <div
                  className="absolute top-3 right-3 w-12 h-12 border-t-[3px] border-r-[3px] border-[#0066CC] rounded-tr-xl opacity-80
                           group-hover:w-16 group-hover:h-16 group-hover:opacity-100 transition-all duration-700"
                />
                <div
                  className="absolute bottom-3 left-3 w-12 h-12 border-b-[3px] border-l-[3px] border-[#0066CC] rounded-bl-xl opacity-80
                           group-hover:w-16 group-hover:h-16 group-hover:opacity-100 transition-all duration-700"
                />

                {/* Decorative dots pattern */}
                <div className="absolute top-6 left-6 grid grid-cols-3 gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-[#0066CC]"
                    ></div>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-[#0066CC]"
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Background animated elements for premium feel */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#0066CC]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-[#0066CC]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-10 w-56 h-56 bg-[#0066CC]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default TeamMembers;