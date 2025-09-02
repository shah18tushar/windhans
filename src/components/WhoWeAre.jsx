"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HomeIcon, Server, Code, Shield, ArrowRight } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

const WhoWeAre = () => {
  const controls = useAnimation();

  // Enhanced animation variants with more sophisticated effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };

  // Setting up intersection observer hooks with improved thresholds
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  // Start animations when in view
  useEffect(() => {
    if (imageInView) controls.start("visible");
  }, [controls, imageInView]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image container with enhanced animations */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative order-2 lg:order-1 min-h-[400px] md:min-h-[480px]"
          >
            {/* Decorative elements */}
            <motion.div
              animate={floatingAnimation}
              className="absolute -top-6 -right-6 w-16 h-16 bg-[#034D9D] rounded-lg rotate-45 opacity-10"
            ></motion.div>
            <motion.div
              animate={{ ...floatingAnimation, y: [0, -15, 0] }}
              className="absolute bottom-20 right-10 w-10 h-10 bg-[#034D9D]/40 rounded-full opacity-20"
            ></motion.div>

            {/* Background shape */}
            <motion.div
              variants={imageVariants}
              className="absolute w-3/4 h-3/4 bg-gradient-to-tr from-[#034D9D]/10 to-[#034D9D]/5 rounded-2xl -z-10 top-8 left-8"
            ></motion.div>

            {/* Main image container */}
            <motion.div
              variants={imageVariants}
              className="relative w-full h-full bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${"/img1.png"})` }}
            >
              <motion.img
                src="/secondBannerImg.jpg"
                alt="Our workspace"
                className="w-3/4 h-auto object-cover transform translate-y-12 translate-x-12 shadow-2xl rounded-lg border-4 border-white"
              />

              {/* Animated stats badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-white py-3 px-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#034D9D]/20"></div>
                    <div className="w-8 h-8 rounded-full bg-[#034D9D]/30"></div>
                    <div className="w-8 h-8 rounded-full bg-[#034D9D]/40"></div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Trusted by</p>
                    <p className="font-bold text-[#034D9D]">500+ clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative circle */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#034D9D] rounded-full opacity-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            ></motion.div>
          </motion.div>

          {/* Content container with enhanced animations */}
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="order-1 lg:order-2 max-w-xl"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-1.5 px-6 bg-[#034D9D]/20 text-[#034D9D] font-semibold rounded-full text-xs tracking-wide">
                WindHans - Welcome To IT Solutions
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-3xl font-normal mb-6 text-gray-700 leading-tight"
            >
              Let Us Be Your Next{" "}
              <p className="text-[#034D9D] relative lg:text-3xl font-semibold">
                Trusted Source In IT Services
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#034D9D] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "68%" }} // animates only when visible
                  viewport={{ once: true, amount: 0.6 }} // triggers when ~60% of h2 is visible
                  transition={{ duration: 3, ease: "easeIn", delay: 1.8 }}
                />
              </p>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-base text-gray-600 mb-6 leading-relaxed"
            >
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible Margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on. By offer scale
              an stuff. Blush be sorry no sight sang lose.
            </motion.p>

            {/* Enhanced features section */}
            <motion.div
              ref={featuresRef}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white/30 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#034D9D]"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-gradient-to-br from-[#034D9D] to-[#02387a] text-white rounded-full">
                    <Server size={15} />
                  </div>
                  <h3 className="font-bold text-base text-gray-700">
                    IT Consultancy
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Believe fat how six drawing pursuit minute exact dear open to
                  reaching out.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/30 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#034D9D]"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-gradient-to-br from-[#034D9D] to-[#02387a] text-white rounded-full">
                    <Shield size={15} />
                  </div>
                  <h3 className="font-bold text-base text-gray-700">
                    Cyber Security
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Same do seen head am part it dear open to travelling so
                  especially prosperous.
                </p>
              </motion.div>
            </motion.div>

            {/* Added call-to-action */}
            <div className="flex items-center justify-center mt-6">
              <AnimatedButton
                text="View Details"
                bgColor="bg-[#034D9D]/90"
                textColor="text-black"
                hoverTextColor="text-white"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background decorations */}
      <motion.div
        className="absolute top-0 right-0 -z-10 w-[36rem] h-[30rem] bg-[#034D9D]/10 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-70"
        animate={floatingAnimation}
      ></motion.div>
      {/* <motion.div
        className="absolute bottom-0 -right-10 -z-10 w-72 h-72 bg-[#034D9D]/30 rounded-full transform translate-y-1/3 opacity-70"
        animate={{
          y: [0, -35, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
      ></motion.div> */}

      {/* Digital circuit pattern overlay */}
      {/* <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[#034D9D]/50 to-transparent pointer-events-none"></div> */}
    </section>
  );
};
export default WhoWeAre;