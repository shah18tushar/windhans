"use client"

import React, { useEffect, useState } from 'react'
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaChevronRight,
  FaRegCalendarAlt,
  FaUserTie,
  FaGlobeAmericas,
  FaHeadset
} from 'react-icons/fa'
import { FiClock, FiAward } from 'react-icons/fi'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderNav = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [gradientIndex, setGradientIndex] = useState(0)

  const features = [
    "24/7 Technical Support",
    "Client-Centric Approach",
    "End-to-End IT Consulting",
    "ISO 9001 Certified",
    "Dedicated Account Managers",
  ]

    const gradients = [
    { 
      from: "#022a5c", 
      via: "#034D9D", 
      to: "#0266d1",
      angle: "145deg"
    },
    { 
      from: "#034D9D", 
      via: "#0266d1", 
      to: "#022a5c",
      angle: "120deg"
    },
    { 
      from: "#0266d1", 
      via: "#022a5c", 
      to: "#034D9D",
      angle: "160deg"
    }
  ]

  // Gradient animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length)
    }, 3000) // Change every 8 seconds to allow full transition
    return () => clearInterval(interval)
  }, [])

  // Custom typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const typeWriter = (text: string, i: number) => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        timeout = setTimeout(() => typeWriter(text, i + 1), 70)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    }

    const deleteText = (i: number) => {
      if (i >= 0) {
        setDisplayText(features[currentFeature].substring(0, i))
        timeout = setTimeout(() => deleteText(i - 1), 50)
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setIsTyping(true)
      }
    }

    if (isTyping) {
      typeWriter(features[currentFeature], 0)
    } else {
      deleteText(features[currentFeature].length)
    }

    return () => clearTimeout(timeout)
  }, [currentFeature, isTyping])

  useEffect(() => {
    const handleScroll = () => {
  const currentScrollY = window.scrollY
  // Always hide when scrolling down
  if (currentScrollY > lastScrollY) {
    setIsVisible(false)
  } 
  // Only show when scrolled to top (or very near top)
  else if (currentScrollY < 100) { // Adjust this threshold as needed
    setIsVisible(true)
  }
  setLastScrollY(currentScrollY)
}

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full border-b border-blue-400/30 shadow-xl relative overflow-hidden"
        >
          {/* Ultra-smooth gradient background */}
          <motion.div
            className="absolute inset-0"
            initial={{
              background: `linear-gradient(to right, ${gradients[0].from}, ${gradients[0].via}, ${gradients[0].to})`
            }}  
            animate={{
              background: `linear-gradient(to right, ${gradients[gradientIndex].from}, ${gradients[gradientIndex].via}, ${gradients[gradientIndex].to})`
            }}
            transition={{
              duration: 2, // Longer duration for smoother transition
              ease: "easeInOut"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-around gap-36 items-center py-3">
              {/* Left Section - Animated Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-1.5 border border-blue-300/20 backdrop-blur-sm"
              >
                <HiOutlineLightningBolt className="text-yellow-400 mr-2 animate-pulse" />
                <span className="text-sm text-white font-medium min-w-[200px] text-center">
                  {displayText}
                  <span className="ml-0.5 inline-block w-1 h-5 bg-white animate-blink align-middle"></span>
                </span>
                <HiOutlineLightningBolt className="text-yellow-400 ml-2 animate-pulse" />
              </motion.div>

              {/* Right Section - Enhanced Premium Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3 md:mb-0"
              >
                {/* Premium Phone Contact */}
                <div className="flex items-center group">
                  <motion.div 
                    className="bg-white/10 p-2 rounded-full mr-2 group-hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaHeadset className="text-blue-200 text-sm group-hover:text-white" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-blue-100/80 uppercase tracking-wider">Premium Support</span>
                    <a href="tel:+18005551234" className="text-sm text-white font-medium hover:text-blue-100 transition-colors flex items-center">
                      +1 (800) 555-1234
                      <span className="ml-1 text-xs bg-blue-500/30 px-1.5 py-0.5 rounded-full">24/7</span>
                    </a>
                  </div>
                </div>

                {/* Executive Email */}
                <div className="flex items-center group">
                  <motion.div 
                    className="bg-white/10 p-2 rounded-full mr-2 group-hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaUserTie className="text-blue-200 text-sm group-hover:text-white" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-blue-100/80 uppercase tracking-wider">Executive Contact</span>
                    <a href="mailto:executive@windhans.com" className="text-sm text-white font-medium hover:text-blue-100 transition-colors">
                      executive@windhans.com
                    </a>
                  </div>
                </div>

                {/* Global Headquarters */}
                <div className="flex items-center group">
                  <motion.div 
                    className="bg-white/10 p-2 rounded-full mr-2 group-hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <FaGlobeAmericas className="text-blue-200 text-sm group-hover:text-white" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-blue-100/80 uppercase tracking-wider">HEADQUATER</span>
                    <span className="text-sm text-white font-medium">
                      Nashik
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Feature Ticker */}
            <motion.div 
              className="md:hidden py-2 text-center overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 border border-blue-300/20">
                <FiAward className="text-yellow-400 mr-2" />
                <span className="text-xs text-white font-medium">
                  {features[currentFeature]}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default HeaderNav