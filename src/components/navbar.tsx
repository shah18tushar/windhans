"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { FiClock } from "react-icons/fi"
import { BsBuilding } from "react-icons/bs"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import HeaderNav from "./ui/HeaderNav"
import ClickSpark from "./ui/ClickSpark"

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = React.useState(false)

  // Mobile / tablet
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)

  return (
    <>
      <div>
        <HeaderNav />
      </div>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between md:justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="" className="w-full h-14" />
            </div>

            {/* Desktop Menu */}
            <NavigationMenu viewport={false} className="hidden md:flex h-full">
              <NavigationMenuList className="flex items-center space-x-8 h-full">
                {/* Home */}
                <NavigationMenuItem>
                  <ClickSpark
                    sparkColor="#034D9D"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="/"
                        className="text-[#034D9D] hover:text-blue-600 hover:bg-white"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </ClickSpark>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <ClickSpark
                    sparkColor="#034D9D"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="/aboutus"
                        className="text-[#034D9D] hover:text-blue-600 hover:bg-white"
                      >
                        About Us
                      </Link>
                    </NavigationMenuLink>{" "}
                  </ClickSpark>
                </NavigationMenuItem>

                {/* Services (mega menu trigger) */}
                <NavigationMenuItem
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                  className="relative h-full flex items-center"
                >
                  <button
                    aria-expanded={servicesDropdown}
                    className={`px-3 py-2 text-sm font-medium flex items-center h-full rounded-t-xl cursor-pointer
                    ${
                      servicesDropdown
                        ? "bg-[#034D9D] text-white"
                        : "text-[#034D9D] hover:bg-[#034D9D] hover:text-white hover:rounded-t-lg"
                    }`}
                  >
                    Services
                  </button>
                </NavigationMenuItem>

                {/* Case Study */}
                <NavigationMenuItem>
                  <ClickSpark
                    sparkColor="#034D9D"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="/casestudy"
                        className="text-[#034D9D] hover:text-blue-600 hover:bg-white"
                      >
                        Case Study
                      </Link>
                    </NavigationMenuLink>
                  </ClickSpark>
                </NavigationMenuItem>

                {/* Careers */}
                <NavigationMenuItem>
                  <ClickSpark
                    sparkColor="#034D9D"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="/careers"
                        className="text-[#034D9D] hover:text-blue-600 hover:bg-white"
                      >
                        Careers
                      </Link>
                    </NavigationMenuLink>
                  </ClickSpark>
                </NavigationMenuItem>

                {/* Team */}
                <NavigationMenuItem>
                  <ClickSpark
                    sparkColor="#034D9D"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="/ourteam"
                        className="text-[#034D9D] hover:text-blue-600 hover:bg-white"
                      >
                        Team
                      </Link>
                    </NavigationMenuLink>
                  </ClickSpark>
                </NavigationMenuItem>

                {/* Contact Us */}
                <NavigationMenuItem>
                  <ClickSpark
                    sparkColor="#034D9D"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="/contactus"
                        className="text-[#034D9D] hover:text-blue-600 hover:bg-white"
                      >
                        Contact Us
                      </Link>
                    </NavigationMenuLink>
                  </ClickSpark>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile / Tablet menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-expanded={mobileOpen}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                {mobileOpen ? (
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Services Mega Menu (keep original design). Hidden on mobile/tablet */}
        <AnimatePresence>
          {servicesDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
              className="hidden md:block absolute left-0 top-full w-full bg-white shadow-lg z-50 rounded-t-4xl border-t-4 border-[#034D9D]"
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 md:gap-8 py-6">
                  {/* Column 1 - Video and Text (HIDE on mobile & tablet) */}
                  <div className="hidden lg:block lg:col-span-2">
                    <div className="relative w-full mb-0 flex items-center justify-center">
                      <video
                        src="globe.mp4"
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

                  {/* Column 2 - Web Services */}
                  <div className="col-span-1">
                    <h3 className="font-bold text-[#034D9D] mb-4 text-sm">
                      Web Services
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/services/webservices/domainservices"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Domain Registration
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/webservices/websitedevelopment"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Website Development
                        </Link>
                      </li>
                      {/* <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Responsive Website
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Corporate Web Design
                        </a>
                      </li> */}
                      <li>
                        <Link
                          href="/services/webservices/websitemaintenance"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Website Maintenance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 - Mobile Application */}
                  <div className="col-span-1">
                    <h3 className="font-bold text-[#034D9D] mb-4 text-sm">
                      Mobile Application
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Android App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          iOS App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Mobile App Maintenance
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Mobile App Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Custom App Development
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  {/* Column 4 - Web Hosting / E-Mail */}
                  <div className="col-span-1">
                    <h3 className="font-bold text-[#034D9D] mb-4 text-sm">
                      Web Hosting / E-Mail
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Web Hosting
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Cloud Hosting
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Email Support
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          IT Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          IOT / Server Setup
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  {/* Column 5 - Software Services */}
                  <div className="col-span-1">
                    <h3 className="font-bold text-[#034D9D] mb-4 text-sm">
                      Software Services
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Customize Software
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          IoT Dashboard Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#034D9D] text-xs font-medium"
                        >
                          Embedded Softwares
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE / TABLET MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="md:hidden absolute left-0 top-full w-full bg-white border-t border-gray-100 z-50 shadow-xl overflow-hidden"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="px-4 py-3 space-y-1"
              >
                <Link
                  href="#"
                  className="block px-2 py-3 text-[#034D9D] font-medium border-b border-gray-100"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-3 text-[#034D9D] font-medium border-b border-gray-100"
                >
                  About Us
                </Link>

                {/* Services (no video on mobile/tablet) */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full flex items-center justify-between px-2 py-3 text-left text-[#034D9D] font-medium"
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? (
                      <FaChevronUp className="text-[#034D9D]" />
                    ) : (
                      <FaChevronDown className="text-[#034D9D]" />
                    )}
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-3 pb-2"
                      >
                        {/* Grid without video */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-[#034D9D] mb-2 text-sm">
                              Web Services
                            </h4>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Domain Registration
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Website Development
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Responsive Website
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Corporate Web Design
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Website Maintenance
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-[#034D9D] mb-2 text-sm">
                              Mobile Application
                            </h4>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Android App Development
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  iOS App Development
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Mobile App Maintenance
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Mobile App Design
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Custom App Development
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-[#034D9D] mb-2 text-sm">
                              Web Hosting / E-Mail
                            </h4>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Web Hosting
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Cloud Hosting
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Email Support
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  IT Security
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  IOT / Server Setup
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-[#034D9D] mb-2 text-sm">
                              Software Services
                            </h4>
                            <ul className="space-y-2">
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Customize Software
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  IoT Dashboard Development
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block text-gray-600 text-sm"
                                >
                                  Embedded Softwares
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="#"
                  className="block px-2 py-3 text-[#034D9D] font-medium border-b border-gray-100"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-3 text-[#034D9D] font-medium border-b border-gray-100"
                >
                  Contact Us
                </Link>

                {/* Ultra-Premium Company Info and Social Media Section */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {/* Premium Company Info */}
                  <div className="mb-8 bg-gradient-to-r from-[#034D9D] to-blue-700 p-5 rounded-xl text-white">
                    <div className="flex items-center mb-4">
                      <BsBuilding className="text-2xl mr-3 text-white opacity-90" />
                      <h3 className="text-xl font-bold">
                        WindHans Technologies
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="mt-1 mr-3 text-white opacity-80" />
                        <div>
                          <h4 className="font-medium text-white opacity-90">
                            Corporate Headquarters
                          </h4>
                          <p className="text-sm opacity-80">
                            123 Business Avenue, Suite 500
                            <br />
                            Tech District, City 10001
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <FiClock className="mt-1 mr-3 text-white opacity-80" />
                        <div>
                          <h4 className="font-medium text-white opacity-90">
                            Business Hours
                          </h4>
                          <p className="text-sm opacity-80">
                            Mon-Fri: 9:00 AM - 6:00 PM
                            <br />
                            Sat-Sun: Closed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <FaPhoneAlt className="mr-3 text-white opacity-80" />
                        <a
                          href="tel:+11234567890"
                          className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                          +1 (123) 456-7890
                        </a>
                      </div>

                      <div className="flex items-center">
                        <HiOutlineMail className="text-lg mr-3 text-white opacity-80" />
                        <a
                          href="mailto:info@windhans.com"
                          className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                          info@windhans.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Premium Newsletter Signup */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-100 p-5 rounded-xl border border-gray-400">
                    <h4 className="text-sm font-semibold text-center text-[#034D9D] mb-3 uppercase tracking-wider">
                      Stay Updated
                    </h4>
                    <p className="text-gray-600 text-[11.8px] font-medium mb-4">
                      Subscribe to our exclusive newsletter for the latest
                      updates
                    </p>
                    <form className="flex">
                      <input
                        type="email"
                        placeholder="Your professional email"
                        className="flex-grow px-4 py-3 text-sm border border-gray-500 rounded-l-lg"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#034D9D] to-blue-700 text-white px-5 py-3 text-sm font-medium rounded-r-lg hover:opacity-90 transition-all shadow-md"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-gray-500 text-xs mt-2">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>

                  {/* Deluxe Social Media Icons */}
                  <div className="mt-8 mb-4">
                    {/* <h4 className="text-sm font-semibold text-center text-[#034D9D] mb-4 uppercase tracking-wider">Connect With Us</h4> */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                      >
                        <FaFacebookF className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                      >
                        <FaInstagram className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                      >
                        <FaLinkedinIn className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                      >
                        <FaTwitter className="text-lg" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                      >
                        <FaYoutube className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar

































