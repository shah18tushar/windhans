// "use client";

// import React, { useState } from "react";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaFacebookF,
//   FaMapMarkerAlt,
//   FaUserTie,
//   FaPaperPlane,
// } from "react-icons/fa";
// import { FiArrowRight } from "react-icons/fi";
// import FooterText from "./ui/FooterText";
// import SlideButton from "./ui/SlideButton";

// const Footer = () => {

//  const [email, setEmail] = useState("");

//  const handleSubmit = () => {
//    // Your submit logic here, e.g.:
//    console.log("Submitting:", email);
//    // you might reset email or show a success message:
//    // setEmail("");
//  };



//   return (
//     <>
//       <div className="mt-20 relative overflow-hidden rounded-t-[4rem] max-w-7xl mx-auto">
//         {/* Background Image with subtle overlay */}
//         <div className="absolute inset-0 z-0">
//           <img src="/fbg.png" alt="" className="w-full h-full object-cover" />
//         </div>

//         {/* Footer Content Overlay */}
//         <div className="relative z-10 flex flex-col">
//           {/* Main Footer Content */}
//           <div className="flex-1 pt-10 pb-0">
//             <div className="container mx-auto px-8 lg:px-6">
//               {/* Top Section with CTA */}
//               <div className="flex flex-col lg:flex-row justify-between gap-16 mb-6">
//                 <div className="lg:w-2/5">
//                   <h2 className="text-4xl lg:text-2xl text-center font-light font-serif tracking-wide text-white mb-6 leading-tight">
//                     Elevate Your Digital <br />
//                     <span className="lg:text-2xl font-light">
//                       Transformation Journey
//                     </span>
//                   </h2>
//                   <p className="text-base text-center text-blue-100 max-w-lg opacity-90 mb-6 leading-relaxed">
//                     Partner with{" "}
//                     <span className="font-semibold text-white">
//                       WindHans Technologies
//                     </span>{" "}
//                     for exceptional technology solutions that drive growth and
//                     innovation.
//                   </p>

//                   {/* Newsletter Section */}
//                   {/* <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                     <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
//                       <FaPaperPlane className="text-blue-400" />
//                       Subscribe to our newsletter for insights & industry trends
//                     </h3>
//                     <div className="flex flex-col lg:flex-row items-center gap-3">
//                       <input
//                         type="email"
//                         placeholder="Your professional email"
//                         className="flex-1 bg-white/5 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent w-full"
//                       />
//                       <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg">
//                         Subscribe
//                         <FiArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div> */}

//                   <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                     <h3 className="text-sm font-medium text-white mb-4 flex justify-center items-center gap-2">
//                       <FaPaperPlane className="text-blue-400" />
//                       Subscribe to our newsletter for insights & industry trends
//                     </h3>
//                     <div className="flex flex-col lg:flex-row items-center gap-3">
//                       <input
//                         type="email"
//                         placeholder="Your professional email"
//                         className="flex-1 bg-white/5 border border-white/15 rounded-md px-4 py-1.5 text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent lg:w-[390px]"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                       <SlideButton
//                         disabled={!email}
//                         onComplete={handleSubmit}
//                         className="w-[170px]"
//                         label="Slide to Subscribe"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Main Footer Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:w-3/5">
//                   {/* Solutions Column */}
//                   <div>
//                     <h3 className="text-white font-medium text-lg mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-px after:bg-blue-500">
//                       Solutions
//                     </h3>
//                     <ul className="space-y-4">
//                       {[
//                         "Enterprise Software",
//                         "Cloud Infrastructure",
//                         "AI & Analytics",
//                         "Cybersecurity",
//                         "Digital Transformation",
//                       ].map((item) => (
//                         <li key={item}>
//                           <a
//                             href="#"
//                             className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3 group py-1"
//                           >
//                             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="group-hover:translate-x-1 transition-transform">
//                               {item}
//                             </span>
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Services Column */}
//                   <div>
//                     <h3 className="text-white font-medium text-lg mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-px after:bg-blue-500">
//                       Services
//                     </h3>
//                     <ul className="space-y-4">
//                       {[
//                         "IT Consulting",
//                         "Custom Development",
//                         "Managed Services",
//                         "UI/UX Design",
//                         "DevOps",
//                       ].map((item) => (
//                         <li key={item}>
//                           <a
//                             href="#"
//                             className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3 group py-1"
//                           >
//                             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="group-hover:translate-x-1 transition-transform">
//                               {item}
//                             </span>
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Contact Column */}
//                   <div className="">
//                     <h3 className="text-white font-medium text-lg mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-px after:bg-blue-500">
//                       Get In Touch
//                     </h3>

//                     <div className="space-y-6 mb-6">
//                       <div className="flex items-start gap-4">
//                         <div className="bg-blue-600/20 p-2 rounded-md">
//                           <FaEnvelope className="w-4 h-4 text-blue-400" />
//                         </div>
//                         <div>
//                           <p className="text-blue-300 text-xs font-medium mb-1 uppercase tracking-wider">
//                             Business Inquiries
//                           </p>
//                           <p className="text-white font-light text-sm">
//                             hello@windhans.com
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-4">
//                         <div className="bg-blue-600/20 p-2 rounded-md">
//                           <FaUserTie className="w-4 h-4 text-blue-400" />
//                         </div>
//                         <div>
//                           <p className="text-blue-300 text-xs font-medium mb-1 uppercase tracking-wider">
//                             Careers
//                           </p>
//                           <p className="text-white font-light text-sm">
//                             careers@windhans.com
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-4">
//                         <div className="bg-blue-600/20 p-2 rounded-md">
//                           <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
//                         </div>
//                         <div>
//                           <p className="text-blue-300 text-xs font-medium mb-1 uppercase tracking-wider">
//                             Headquarters
//                           </p>
//                           <p className="text-white font-light text-sm">
//                             Nashik, Innovation City
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="border-t border-white/20 mx-16 my-0"></div>

//               {/* Bottom Section */}
//               <div className="flex flex-col lg:flex-row justify-around items-center gap-6 p-4">
//                 {/* Left: Copyright */}
//                 <div className="flex items-center gap-4">
//                   <p className="text-sm text-gray-400 font-light">
//                     © 2025 WindHans Technologies. Excellence in Innovation.
//                   </p>
//                 </div>

//                 {/* Center: Legal Links */}
//                 <div className="flex items-center gap-6 text-sm">
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-light"
//                   >
//                     Terms
//                   </a>
//                   <span className="text-gray-600">|</span>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-light"
//                   >
//                     Privacy
//                   </a>
//                   <span className="text-gray-600">|</span>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-light"
//                   >
//                     Cookies
//                   </a>
//                 </div>

//                 {/* Right: Social Media */}
//                 <div className="flex items-center gap-2">
//                   {[
//                     { icon: FaLinkedin, label: "LinkedIn" },
//                     { icon: FaTwitter, label: "Twitter" },
//                     { icon: FaFacebookF, label: "Facebook" },
//                     { icon: FaInstagram, label: "Instagram" },
//                     { icon: FaYoutube, label: "YouTube" },
//                   ].map((social, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
//                       aria-label={social.label}
//                     >
//                       <social.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <FooterText />
//       </div>
//     </>
//   );
// };

// export default Footer;



















"use client";

import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaMapMarkerAlt,
  FaUserTie,
  FaPaperPlane,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import FooterText from "./ui/FooterText";
import SlideButton from "./ui/SlideButton";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  const images = ["/fbg.png", "/fbg1.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const handleSubmit = () => {
    console.log("Submitting:", email);
  };

  return (
    <>
      <style jsx>{`
        @keyframes smoothCrossfade {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 0;
          }
          85% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .fade-in {
          animation: smoothCrossfade 7s ease-in-out;
        }
      `}</style>

      <div className="mt-20 relative overflow-hidden rounded-t-[4rem]">
        {/* Background Images with blending transition */}
        <div className="absolute inset-0 z-0">
          {/* Current visible image */}
          <img
            key={`current-${currentImageIndex}`}
            src={images[currentImageIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-[7000ms]"
          />

          {/* Next image with fade animation */}
          <img
            key={`next-${nextImageIndex}`}
            src={images[nextImageIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover fade-in"
          />
        </div>

        {/* Footer Content Overlay */}
        <div className="relative z-10 flex flex-col">
          {/* Main Footer Content */}
          <div className="flex-1 pt-10 pb-0">
            <div className="container mx-auto px-8 lg:px-6">
              {/* Top Section with CTA */}
              <div className="flex flex-col lg:flex-row justify-between gap-16 mb-6">
                <div className="lg:w-2/5">
                  <h2 className="text-4xl lg:text-2xl text-center font-light font-serif tracking-wide text-white mb-6 leading-tight">
                    Elevate Your Digital <br />
                    <span className="lg:text-2xl font-light">
                      Transformation Journey
                    </span>
                  </h2>
                  <p className="text-base text-center text-blue-100 max-w-lg opacity-90 mb-6 leading-relaxed">
                    Partner with{" "}
                    <span className="font-semibold text-white">
                      WindHans Technologies
                    </span>{" "}
                    for exceptional technology solutions that drive growth and
                    innovation.
                  </p>

                  <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h3 className="text-sm font-medium text-white mb-4 flex justify-center items-center gap-2">
                      <FaPaperPlane className="text-blue-400" />
                      Subscribe to our newsletter for insights & industry trends
                    </h3>
                    <div className="flex flex-col lg:flex-row items-center gap-3">
                      <input
                        type="email"
                        placeholder="Your professional email"
                        className="flex-1 bg-white/5 border border-white/15 rounded-md px-4 py-1.5 text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent lg:w-[390px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <SlideButton
                        disabled={!email}
                        onComplete={handleSubmit}
                        className="w-[170px]"
                        label="Slide to Subscribe"
                      />
                    </div>
                  </div>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:w-3/5">
                  {/* Solutions Column */}
                  <div>
                    <h3 className="text-white font-medium text-lg mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-px after:bg-blue-500">
                      Solutions
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Enterprise Software",
                        "Cloud Infrastructure",
                        "AI & Analytics",
                        "Cybersecurity",
                        "Digital Transformation",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3 group py-1"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="group-hover:translate-x-1 transition-transform">
                              {item}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services Column */}
                  <div>
                    <h3 className="text-white font-medium text-lg mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-px after:bg-blue-500">
                      Services
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "IT Consulting",
                        "Custom Development",
                        "Managed Services",
                        "UI/UX Design",
                        "DevOps",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3 group py-1"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="group-hover:translate-x-1 transition-transform">
                              {item}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Column */}
                  <div className="">
                    <h3 className="text-white font-medium text-lg mb-8 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-px after:bg-blue-500">
                      Get In Touch
                    </h3>

                    <div className="space-y-6 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600/20 p-2 rounded-md">
                          <FaEnvelope className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-blue-300 text-xs font-medium mb-1 uppercase tracking-wider">
                            Business Inquiries
                          </p>
                          <p className="text-white font-light text-sm">
                            hello@windhans.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600/20 p-2 rounded-md">
                          <FaUserTie className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-blue-300 text-xs font-medium mb-1 uppercase tracking-wider">
                            Careers
                          </p>
                          <p className="text-white font-light text-sm">
                            careers@windhans.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600/20 p-2 rounded-md">
                          <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-blue-300 text-xs font-medium mb-1 uppercase tracking-wider">
                            Headquarters
                          </p>
                          <p className="text-white font-light text-sm">
                            Nashik, Innovation City
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20 mx-16 my-0"></div>

              {/* Bottom Section */}
              <div className="flex flex-col lg:flex-row justify-around items-center gap-6 p-4">
                {/* Left: Copyright */}
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-400 font-light">
                    © 2025 WindHans Technologies. Excellence in Innovation.
                  </p>
                </div>

                {/* Center: Legal Links */}
                <div className="flex items-center gap-6 text-sm">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-light"
                  >
                    Terms
                  </a>
                  <span className="text-gray-400">-</span>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-light"
                  >
                    Privacy
                  </a>
                  <span className="text-gray-400">-</span>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-light"
                  >
                    Cookies
                  </a>
                </div>

                {/* Right: Social Media */}
                <div className="flex items-center gap-2">
                  {[
                    { icon: FaLinkedin, label: "LinkedIn" },
                    { icon: FaTwitter, label: "Twitter" },
                    { icon: FaFacebookF, label: "Facebook" },
                    { icon: FaInstagram, label: "Instagram" },
                    { icon: FaYoutube, label: "YouTube" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FooterText />
      </div>
    </>
  );
};

export default Footer;