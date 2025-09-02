"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  ShoppingBag,
  Cpu,
  Cloud,
  Shield,
  Wifi,
  SmartphoneIcon,
} from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

export default function Domain() {
  const [isTimelineComplete, setIsTimelineComplete] = useState(false);

  const componentRef = useRef(null);
  const timelineRef = useRef(null);
  const leftSectionRef = useRef(null);

  const [sectionInViewRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [leftContentRef, leftContentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const setMultipleRefs = (el) => {
    componentRef.current = el;
    sectionInViewRef(el);
  };

  const setLeftSectionRefs = (el) => {
    leftSectionRef.current = el;
    leftContentRef(el);
  };

  const { scrollY } = useScroll();

  const timelineProgress = useTransform(scrollY, (value) => {
    if (!componentRef.current || !timelineRef.current) return 0;

    const { top } = componentRef.current.getBoundingClientRect();
    const timelineHeight = timelineRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;

    const scrollProgress = Math.min(
      100,
      Math.max(0, (-top / (timelineHeight - viewportHeight + 300)) * 100)
    );

    return `${scrollProgress}%`;
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeIn" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (!componentRef.current || !timelineRef.current) return;

    const handleScroll = () => {
      const componentRect = componentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const navbarHeight = 80;

      if (componentRect.top <= navbarHeight) {
        const timelineHeight = timelineRef.current.scrollHeight;
        const scrolledPastTimeline =
          -(componentRect.top - navbarHeight) >
          timelineHeight - windowHeight + 300;

        if (scrolledPastTimeline && !isTimelineComplete) {
          setIsTimelineComplete(true);
        } else if (!scrolledPastTimeline && isTimelineComplete) {
          setIsTimelineComplete(false);
        }

        if (!isTimelineComplete) {
          if (leftSectionRef.current) {
            leftSectionRef.current.style.position = "sticky";
            leftSectionRef.current.style.top = `${navbarHeight + 10}px`;
          }
        } else {
          if (leftSectionRef.current) {
            leftSectionRef.current.style.position = "relative";
            leftSectionRef.current.style.top = "0";
          }
        }
      } else {
        if (leftSectionRef.current) {
          leftSectionRef.current.style.position = "relative";
          leftSectionRef.current.style.top = "0";
        }
        setIsTimelineComplete(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTimelineComplete]);

  const domainServices = [
    {
      title: "AR / VR & Game Development",
      icon: <SmartphoneIcon />,
      href: "/ServiceTwo",
      description:
        "Immersive AR/VR solutions and interactive game development for enterprises and entertainment",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Artificial Intelligence (AI)",
      icon: <Cpu />,
      href: "/ServiceTwo",
      description:
        "AI-powered solutions for automation, insights, and decision-making to transform businesses",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Mobile App Development",
      icon: <SmartphoneIcon />,
      href: "/ServiceTwo",
      description:
        "Custom mobile applications for iOS and Android to engage users and enhance productivity",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Web Application Development",
      icon: <ShoppingBag />,
      href: "/ServiceTwo",
      description:
        "Modern, scalable, and secure web applications tailored to your business needs",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      icon: <ShoppingBag />,
      href: "/ServiceTwo",
      description:
        "Integrated ERP systems to streamline operations and maximize efficiency",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Internet of Things (IoT)",
      icon: <Wifi />,
      href: "/ServiceTwo",
      description:
        "Smart IoT solutions to connect devices, collect data, and optimize performance",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud />,
      href: "/ServiceTwo",
      description:
        "Secure and scalable cloud infrastructure for storage, hosting, and enterprise solutions",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
    {
      title: "Cyber Security",
      icon: <Shield />,
      href: "/ServiceTwo",
      description:
        "Advanced cybersecurity services to protect your business against evolving threats",
      color: "bg-[#034D9D]",
      textColor: "text-[#034D9D]",
    },
  ];

  return (
    <div className="">
      <motion.section
        ref={setMultipleRefs}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-16 md:py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            ref={setLeftSectionRefs}
            initial="hidden"
            animate={leftContentInView ? "visible" : "hidden"}
            variants={contentVariants}
            className="max-w-xl"
          >
            <div className="flex justify-center">
              <motion.div
                variants={textVariants}
                className="inline-block px-4 py-1 mb-4 bg-[#034D9D]/10 rounded-full"
              >
                <span className="text-[#034D9D] font-medium text-sm tracking-wide">
                  Team - Customer - Community
                </span>
              </motion.div>
            </div>

            <div className="flex items-center justify-center mb-4">
              <motion.h2
                variants={textVariants}
                className="relative inline-block text-xl font-semibold text-gray-700  px-5 text-center"
              >
                We Work In <span className="text-[#034D9D]">Domains</span>
                <motion.span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#034D9D] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }} // animates only when visible
                  viewport={{ once: true, amount: 0.6 }} // triggers when ~60% of h2 is visible
                  transition={{ duration: 2, ease: "easeIn", delay: 1.8 }}
                />
              </motion.h2>
            </div>

            <motion.p
              variants={textVariants}
              className="text-base text-gray-600 leading-relaxed mb-2 text-center"
            >
              While we are at the forefront of and specialize in design-build,
              we are very familiar with a number of delivery methods and are
              confident we can find the process that will best help you meet
              your goals.
            </motion.p>

            <div
              variants={textVariants}
              className="flex items-center justify-center mt-6"
            >
              <AnimatedButton
                text="Learn More About Our Approach"
                bgColor="bg-[#034D9D]/85"
                textColor="text-black"
                hoverTextColor="text-white"
              />
            </div>

            <div>
              <img
                src="/faq-2.png"
                alt="image"
                className="w-full h-[18.5rem] mt-2"
              />
            </div>
          </motion.div>

          <div ref={timelineRef} className="relative min-h-[800px]">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100">
              <motion.div
                className="absolute left-0 top-0 w-full bg-[#034D9D]"
                style={{ height: timelineProgress }}
              />

              <motion.div
                className="absolute w-6 h-6 -left-[11px] bg-white rounded-full border-2 border-[#034D9D] z-20"
                style={{
                  top: timelineProgress,
                  boxShadow: "0 0 15px rgba(3, 77, 157, 0.5)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 15px rgba(3, 77, 157, 0.5)",
                    "0 0 20px rgba(3, 77, 157, 0.7)",
                    "0 0 15px rgba(3, 77, 157, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <div className="absolute inset-0 m-auto w-2 h-2 bg-[#034D9D] rounded-full" />
              </motion.div>
            </div>

            <div className="space-y-24 pl-12 mt-6 mb-12">
              {domainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -left-12 top-10 h-[2px] bg-gradient-to-r from-slate-200 to-slate-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  />

                  <div className="absolute -left-[29px] top-[26px] z-10">
                    <div
                      className={`absolute inset-0 ${service.color} bg-opacity-20 rounded-xl animate-pulse`}
                    />
                  </div>

                  <div className="relative">
                    <a href={service.href} className="group block">
                      <motion.div
                        className="bg-white rounded-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 border border-slate-100 hover:border-[#034D9D]/40"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 ${service.color} rounded-t-2xl opacity-70`}
                        />

                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex gap-2">
                              {service.icon}
                              <h4 className="text-base font-semibold text-slate-800 group-hover:text-[#034D9D] transition-colors">
                                {service.title}
                              </h4>
                            </div>
                            <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                              {service.description}
                            </p>
                          </div>

                          <div
                            className={`flex-shrink-0 ${service.color} text-white p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="w-full h-[0.13rem] bg-slate-100 rounded-full mt-6 overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full ${service.color} relative`}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-20 bg-white bg-opacity-30 blur-sm" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}