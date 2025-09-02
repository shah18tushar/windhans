"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ServicesDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isMobile?: boolean;
}

const ServicesDropdownNavbar: React.FC<ServicesDropdownProps> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  isMobile = false,
}) => {
  if (!isOpen) return null;

  const services = [
    {
      title: "Web Services",
      items: [
        "Domain Registration",
        "Website Development",
        "Responsive Website",
        "Corporate Web Design",
        "Website Maintenance",
      ],
    },
    {
      title: "Mobile Application",
      items: [
        "Android App Development",
        "iOS App Development",
        "Mobile App Maintenance",
        "Mobile App Design",
        "Custom App Development",
      ],
    },
    {
      title: "Web Hosting / E-Mail",
      items: [
        "Web Hosting",
        "Cloud Hosting",
        "Email Support",
        "IT Security",
        "IOT / Server Setup",
      ],
    },
    {
      title: "Software Services",
      items: [
        "Customize Software",
        "IoT Dashboard Development",
        "Embedded Softwares",
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isMobile ? 0 : -8 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`${
            isMobile
              ? "block pl-3 pb-2"
              : "hidden md:block absolute left-0 top-full w-full bg-white shadow-lg z-50 rounded-t-4xl border-t-4 border-[#034D9D]"
          }`}
        >
          {isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    {service.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="block text-gray-600 text-sm hover:text-blue-600"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 md:gap-8 py-6">
                {/* Column 1 - Video and Text (HIDE on mobile & tablet) */}
                <div className="hidden lg:block lg:col-span-2">
                  <div className="relative w-full mb-0 flex items-center justify-center">
                    <video
                      src="file.mp4"
                      className="brightness-[0.7] rounded-lg"
                      autoPlay
                      muted
                      playsInline
                      loop
                      preload="auto"
                    />
                    <h1 className="absolute bottom-3 text-center text-white backdrop-blur-xs font-semibold font-serif text-4xl">
                      WindHans Services
                    </h1>
                  </div>
                </div>

                {/* Services columns */}
                {services.map((service, index) => (
                  <div key={index} className="col-span-1">
                    <h3 className="font-bold text-[#034D9D] mb-4 text-sm">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 text-xs font-medium"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesDropdownNavbar;