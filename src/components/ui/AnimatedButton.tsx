"use client";

import { motion } from "framer-motion";
import { LuMoveRight } from "react-icons/lu";

interface AnimatedButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  className?: string;
}

const AnimatedButton = ({
  text = "View all Blogs",
  bgColor = "bg-blue-400",
  textColor = "text-gray-900",
  hoverTextColor = "text-white",
  className = ""
}: AnimatedButtonProps) => {
  return (
    <motion.button
      className={`relative px-6 py-2 text-sm font-medium overflow-hidden cursor-pointer rounded-full group ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Background that will expand */}
      <motion.div
        className={`absolute inset-y-0 left-0 z-0 rounded-full ${bgColor}`}
        variants={{
          rest: { 
            width: "40%",
            borderRadius: "9999px",
          },
          hover: { 
            width: "100%",
            borderRadius: "9999px",
          }
        }}
        transition={{ 
          duration: 0.7, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Text and Arrow with color transition */}
      <div className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-700 ${textColor} group-hover:${hoverTextColor}`}>
        <span>{text}</span>
        <LuMoveRight className="w-5 h-5 transition-all duration-700 group-hover:translate-x-2" />
      </div>
    </motion.button>
  );
};

export default AnimatedButton;