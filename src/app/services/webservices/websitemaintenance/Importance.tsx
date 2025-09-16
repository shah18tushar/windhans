// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// const Importance = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set canvas size
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;

//     // Create particles for background animation
//     const particles: Array<{
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       color: string;
//     }> = [];

//     // Create particles
//     for (let i = 0; i < 40; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 3 + 1,
//         speedX: (Math.random() - 0.5) * 0.5,
//         speedY: (Math.random() - 0.5) * 0.5,
//         color: i % 3 === 0 ? "#034D9D" : i % 3 === 1 ? "#4A7EBB" : "#88B0E0",
//       });
//     }

//     // Animation function
//     const animate = () => {
//       if (!ctx) return;

//       // Clear canvas with slight transparency for trail effect
//       ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Update and draw particles
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         // Update position
//         p.x += p.speedX;
//         p.y += p.speedY;

//         // Bounce off edges
//         if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
//         if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;

//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();

//         // Draw connecting lines between nearby particles
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(3, 77, 157, ${1 - distance / 100})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative bg-white overflow-hidden py-16">
//       {/* Animated background canvas */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-12 gap-12 items-start">
//           {/* Left Content Section - col-span-7 */}
//           <div className="col-span-12 lg:col-span-7">
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#034D9D]/10 to-blue-100/50 backdrop-blur-sm border border-[#034D9D] mb-4">
//               <div className="w-1.5 h-1.5 bg-[#034D9D] rounded-full mr-2 animate-ping"></div>
//               <span className="text-xs font-semibold text-[#034D9D] tracking-wide">
//                 ENTERPRISE SOLUTION
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-5xl font-serif text-gray-900 mb-4 leading-tight">
//               The Critical Role of <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#034D9D] to-blue-600">
//                 Website Maintenance
//               </span>
//             </h2>

//             {/* Main Content */}
//             <div className="space-y-3 mb-4">
//               <p className="text-lg text-gray-900 leading-relaxed font-light">
//                 In today's digital landscape, your website is the cornerstone of
//                 your business presence. Regular maintenance isn't just
//                 recommended—it's essential for security, performance, and
//                 maintaining competitive advantage.
//               </p>

//               <div className="">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
//                   <svg
//                     className="w-6 h-6 text-[#034D9D] mr-3"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Security Protection
//                 </h3>
//                 <p className="text-gray-700 ml-9">
//                   Proactive updates and patches shield your digital assets from
//                   vulnerabilities, safeguarding against cyber threats and data
//                   breaches that could compromise your business.
//                 </p>
//               </div>

//               <div className="">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
//                   <svg
//                     className="w-6 h-6 text-[#034D9D] mr-3"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Performance Optimization
//                 </h3>
//                 <p className="text-gray-700 ml-9">
//                   Continuous monitoring and optimization ensure lightning-fast
//                   load times and seamless user experiences, directly impacting
//                   SEO rankings and conversion rates.
//                 </p>
//               </div>

//               <div className="">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
//                   <svg
//                     className="w-6 h-6 text-[#034D9D] mr-3"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Content Freshness
//                 </h3>
//                 <p className="text-gray-700 ml-9">
//                   Regular updates keep your content relevant and engaging,
//                   strengthening brand credibility and encouraging repeat visits
//                   from your audience.
//                 </p>
//               </div>
//             </div>

//             {/* Stats Section */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
//               <div className="text-center">
//                 <div className="text-2xl font-semibold text-[#034D9D] mb-2">
//                   99.9%
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Uptime Guarantee
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-semibold text-[#034D9D] mb-2">
//                   47%
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Faster Load Time
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-semibold text-[#034D9D] mb-2">
//                   62%
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Threats Prevented
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-semibold text-[#034D9D] mb-2">
//                   24/7
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Monitoring
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image Section - col-span-5 */}
//           <div className="col-span-12 lg:col-span-5">
//             <div className="relative">
//               {/* Main image container */}
//               <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform scale-105 transition-transform duration-700">
//                 <div className="">
//                   {/* Replace with your actual image */}
//                   <Image
//                     src="/Website_Maintenance.gif"
//                     alt="Website Maintenance Dashboard"
//                     width={600}
//                     height={700}
//                     className="w-full h-full object-cover "
//                   />
//                 </div>

//                 {/* Overlay elements */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 "></div>
//               </div>
//             </div>

//             {/* Additional info panel */}
//             <div className="mt-12 bg-gradient-to-t from-black/10 to-transparent backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">
//                 Our Maintenance Process
//               </h4>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-xs font-bold">1</span>
//                   </div>
//                   <span className="text-gray-700">
//                     Comprehensive Security Audit
//                   </span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-xs font-bold">2</span>
//                   </div>
//                   <span className="text-gray-700">
//                     Performance Optimization
//                   </span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-xs font-bold">3</span>
//                   </div>
//                   <span className="text-gray-700">
//                     Content & Feature Updates
//                   </span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
//                     <span className="text-white text-xs font-bold">4</span>
//                   </div>
//                   <span className="text-gray-700">Continuous Monitoring</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom styles for animations and effects */}
//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }
//         @keyframes pulse-medium {
//           0%,
//           100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s infinite;
//         }
//         .animate-pulse-medium {
//           animation: pulse-medium 4s infinite;
//         }
//         .shadow-soft {
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05),
//             0 1px 8px rgba(0, 0, 0, 0.03);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Importance;















"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Importance = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create particles for background animation
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      targetAlpha: number;
    }> = [];

    // Create particles with enhanced properties
    for (let i = 0; i < 80; i++) {
      const colorType = i % 4;
      let color;

      switch (colorType) {
        case 0:
          color = "#034D9D"; // Primary brand color
          break;
        case 1:
          color = "#4A7EBB"; // Lighter blue
          break;
        case 2:
          color = "#88B0E0"; // Even lighter blue
          break;
        default:
          color = "#D4E3F7"; // Very light blue for highlights
      }

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.9,
        speedY: (Math.random() - 0.5) * 0.9,
        color: color,
        alpha: 0,
        targetAlpha: Math.random() * 0.7 + 0.3,
      });
    }

    // Create floating shapes for more visual interest
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      rotation: number;
      rotationSpeed: number;
      type: string;
      color: string;
    }> = [];

    for (let i = 0; i < 8; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 20,
        speed: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        type: Math.random() > 0.5 ? "circle" : "square",
        color: `rgba(3, 77, 157, ${Math.random() * 0.03 + 0.02})`,
      });
    }

    // Animation function
    const animate = () => {
      if (!ctx) return;

      // Clear canvas with a subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(250, 250, 252, 0.8)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid lines for luxury effect
      ctx.strokeStyle = "rgba(3, 77, 157, 0.03)";
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw floating shapes
      for (let i = 0; i < shapes.length; i++) {
        const s = shapes[i];

        // Update position and rotation
        s.y -= s.speed;
        s.rotation += s.rotationSpeed;

        // Reset if off screen
        if (s.y < -s.size) {
          s.y = canvas.height + s.size;
          s.x = Math.random() * canvas.width;
        }

        // Draw shape
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.fillStyle = s.color;

        if (s.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-s.size / 2, -s.size / 2, s.size, s.size);
        }

        ctx.restore();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Fade in particles at the beginning
        if (p.alpha < p.targetAlpha) {
          p.alpha += 0.01;
        }

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off edges with damping
        if (p.x <= 0 || p.x >= canvas.width) {
          p.speedX *= -0.95;
          p.x = p.x <= 0 ? 0 : canvas.width;
        }
        if (p.y <= 0 || p.y >= canvas.height) {
          p.speedY *= -0.95;
          p.y = p.y <= 0 ? 0 : canvas.height;
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Inner particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Outer glow
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        gradient.addColorStop(
          0,
          `${p.color}${Math.round(p.alpha * 255)
            .toString(16)
            .padStart(2, "0")}`
        );
        gradient.addColorStop(1, `${p.color}00`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          p.x - p.size * 2,
          p.y - p.size * 2,
          p.size * 4,
          p.size * 4
        );

        // Draw connecting lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

          if (distance < 120) {
            const lineAlpha =
              (1 - distance / 120) * 0.4 * Math.min(p.alpha, p2.alpha);

            ctx.beginPath();
            ctx.strokeStyle = `rgba(3, 77, 157, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Reset particles positions on resize
      for (let i = 0; i < particles.length; i++) {
        particles[i].x = Math.random() * canvas.width;
        particles[i].y = Math.random() * canvas.height;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden py-16">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#034D9D]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#034D9D]/5 rounded-full blur-3xl animate-pulse-medium"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left Content Section - col-span-7 */}
          <div className="col-span-12 lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#034D9D]/10 to-blue-100/50 backdrop-blur-sm border border-[#034D9D] mb-4">
              <div className="w-1.5 h-1.5 bg-[#034D9D] rounded-full mr-2 animate-ping"></div>
              <span className="text-xs font-semibold text-[#034D9D] tracking-wide">
                ENTERPRISE SOLUTION
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-serif text-gray-900 mb-4 leading-tight">
              The Critical Role of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#034D9D] to-blue-600">
                Website Maintenance
              </span>
            </h2>

            {/* Main Content */}
            <div className="space-y-3 mb-4">
              <p className="text-lg text-gray-900 leading-relaxed font-light">
                In today's digital landscape, your website is the cornerstone of
                your business presence. Regular maintenance isn't just
                recommended—it's essential for security, performance, and
                maintaining competitive advantage.
              </p>

              <div className="">
                <h3 className="text-base font-semibold text-gray-900 mb-1 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#034D9D] mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Performance Optimization
                </h3>
                <p className="text-gray-700 ml-9 text-sm font-semibold">
                  Continuous monitoring and optimization ensure lightning-fast
                  load times and seamless user experiences, directly impacting
                  SEO rankings and conversion rates.
                </p>
              </div>

              <div className="">
                <h3 className="text-base font-semibold text-gray-900 mb-1 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#034D9D] mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continuous Monitoring
                </h3>
                <p className="text-gray-700 ml-9 text-sm font-semibold">
                  We continuously monitor your website’s performance, uptime,
                  and security to ensure smooth functionality, detect issues
                  early, and maintain a seamless user experience.
                </p>
              </div>

              <div className="">
                <h3 className="text-base font-semibold text-gray-900 mb-1 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#034D9D] mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Content Freshness
                </h3>
                <p className="text-gray-700 ml-9 text-sm font-semibold">
                  Regular updates keep your content relevant and engaging,
                  strengthening brand credibility and encouraging repeat visits
                  from your audience.
                </p>
              </div>

              <div className="">
                <h3 className="text-base font-semibold text-gray-900 mb-1 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#034D9D] mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Security Protection
                </h3>
                <p className="text-gray-700 ml-9 text-sm font-semibold">
                  Proactive updates and patches shield your digital assets from
                  vulnerabilities, safeguarding against cyber threats and data
                  breaches that could compromise your business.
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Section - col-span-5 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform scale-105 transition-transform duration-700">
                <div className="">
                  {/* Replace with your actual image */}
                  <Image
                    src="/Website_Maintenance.gif"
                    alt="Website Maintenance Dashboard"
                    width={600}
                    height={700}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 "></div>
              </div>
            </div>

            {/* Additional info panel */}
            <div className="mt-12 bg-gradient-to-t from-black/10 to-transparent backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Our Maintenance Process
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-gray-700">
                    Comprehensive Security Audit
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-700">
                    Performance Optimization
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-700">
                    Content & Feature Updates
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[#034D9D] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span className="text-gray-700">Continuous Monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations and effects */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes pulse-medium {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 4s infinite;
        }
        .shadow-soft {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05),
            0 1px 8px rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </div>
  );
};

export default Importance;