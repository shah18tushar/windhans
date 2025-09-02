"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Trophy, PenTool } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 max-w-6xl mx-auto bg-contain bg-no-repeat bg-center mb-8 opacity-30"
        style={{ backgroundImage: "url('/logobg.jpg')" }}
      ></div>

      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#034D9D]/40 via-[#034D9D]/20 to-transparent opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-14">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-20 h-[1.3px] bg-gradient-to-r from-transparent to-[#034D9D] mr-4"></div>
            <h2 className="text-[#034D9D] text-lg font-semibold tracking-widest uppercase">
              About Wind Hans
            </h2>
            <div className="w-20 h-[1.3px] bg-gradient-to-l from-transparent to-[#034D9D] ml-4"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold font-serif  text-gray-700 leading-tight">
            Crafting Innovation, Powering Success
          </h3>
          <p className="text-lg font-medium text-gray-700 mt-4 max-w-4xl mx-auto">
            Wind Hans Technologies delivers advanced AR/VR, AI, mobile apps, web
            apps, ERP, IoT, cloud, and cybersecurity solutions, empowering
            businesses with next-gen technology, scalability, security, and
            innovative strategies for sustainable growth.
          </p>
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#034D9D] to-transparent mx-auto mt-4"></div>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Sparkles,
              title: "Projects Completed",
              value: "1000+",
              description: "Delivering seamless tech solutions",
            },
            {
              icon: Users,
              title: "Happy Clients",
              value: "500+",
              description: "Building lasting partnerships",
            },
            {
              icon: Trophy,
              title: "Client Retention",
              value: "95%",
              description: "Trusted by businesses worldwide",
            },
            {
              icon: PenTool,
              title: "Custom Solutions",
              value: "Tailored",
              description: "Personalized strategies for success",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-sm hover:backdrop-blur-xs shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:border-b-2 border-[#034D9D]"
            >
              <stat.icon className="w-12 h-12 text-[#034D9D] mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </h4>
              <p className="text-gray-700 font-semibold">{stat.title}</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
























// "use client";

// import { motion } from "framer-motion";
// import { Users, Sparkles, Trophy, PenTool } from "lucide-react";
// import { useRef } from "react";
// import { useInView } from "framer-motion";

// const AboutUs = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.1 });

//   const stats = [
//     {
//       icon: Sparkles,
//       title: "Projects Completed",
//       value: "1000+",
//       description: "Delivering seamless tech solutions",
//       color: "bg-[#034D9D]/10",
//     },
//     {
//       icon: Users,
//       title: "Happy Clients",
//       value: "500+",
//       description: "Building lasting partnerships",
//       color: "bg-[#034D9D]/10",
//     },
//     {
//       icon: Trophy,
//       title: "Client Retention",
//       value: "95%",
//       description: "Trusted by businesses worldwide",
//       color: "bg-[#034D9D]/10",
//     },
//     {
//       icon: PenTool,
//       title: "Custom Solutions",
//       value: "Tailored",
//       description: "Personalized strategies for success",
//       color: "bg-[#034D9D]/10",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden py-28 bg-gradient-to-br from-[#f8faff] to-[#e6f0ff]"
//     >
//       {/* Floating particles background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-[#034D9D]/10"
//             initial={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               width: Math.random() * 10 + 5,
//               height: Math.random() * 10 + 5,
//               opacity: Math.random() * 0.5 + 0.1,
//             }}
//             animate={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               transition: {
//                 duration: Math.random() * 20 + 10,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               },
//             }}
//           />
//         ))}
//       </div>

//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAzNEQ5RCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
//       </div>

//       {/* 3D floating elements */}
//       <motion.div
//         className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#034D9D]/10 filter blur-3xl"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.1, 0.15, 0.1],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#034D9D]/10 filter blur-3xl"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.1, 0.15, 0.1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//       />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h2
//             className="text-[#034D9D] text-lg font-semibold tracking-widest uppercase mb-3"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             About Wind Hans
//           </motion.h2>
//           <motion.h3
//             className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             <span className="relative inline-block">
//               <span className="relative z-10">Crafting Innovation,</span>
//               <span className="absolute bottom-1 left-0 w-full h-3 bg-[#034D9D]/20 -rotate-1 -z-0"></span>
//             </span>
//             <br />
//             <span className="relative inline-block mt-2">
//               <span className="relative z-10">Powering Success</span>
//               <span className="absolute bottom-1 left-0 w-full h-3 bg-[#034D9D]/20 rotate-1 -z-0"></span>
//             </span>
//           </motion.h3>
//           <motion.p
//             className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Wind Hans Technologies delivers cutting-edge software solutions,
//             cloud computing, and digital transformation, empowering businesses
//             with next-gen technology and seamless scalability.
//           </motion.p>
//           <motion.div
//             className="w-20 h-1.5 bg-gradient-to-r from-[#034D9D] to-[#4DA8FF] mx-auto mt-6 rounded-full"
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
//           />
//         </motion.div>

//         {/* Key Highlights */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="relative group"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-br from-[#034D9D] to-[#4DA8FF] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
//               <div className="relative bg-white/80 backdrop-blur-md hover:backdrop-blur-lg shadow-xl rounded-xl p-8 text-center transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-white/30 overflow-hidden">
//                 <div
//                   className={`absolute top-0 left-0 w-full h-1 ${stat.color}`}
//                 ></div>
//                 <div className="relative z-10">
//                   <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#034D9D]/10 text-[#034D9D] group-hover:bg-[#034D9D]/20 transition-colors duration-300">
//                     <stat.icon className="w-8 h-8" />
//                   </div>
//                   <h4 className="text-3xl font-bold text-gray-900 mb-2">
//                     {stat.value}
//                   </h4>
//                   <p className="text-gray-700 font-semibold mb-2">
//                     {stat.title}
//                   </p>
//                   <p className="text-gray-600 text-sm">{stat.description}</p>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#034D9D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating decorative elements */}
//         <motion.div
//           className="absolute -left-10 top-1/3 w-6 h-6 rounded-full bg-[#034D9D]"
//           animate={{
//             y: [0, -15, 0],
//             opacity: [0.6, 1, 0.6],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute -right-10 bottom-1/4 w-4 h-4 rounded-full bg-[#4DA8FF]"
//           animate={{
//             y: [0, 15, 0],
//             opacity: [0.6, 1, 0.6],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutUs;