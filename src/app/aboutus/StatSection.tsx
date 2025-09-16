// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const StatSection = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [counted, setCounted] = useState({
//     uptime: 0,
//     loadTime: 0,
//     threats: 0,
//   });
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
//     // Counter animation for stats
//     const duration = 2000; // ms
//     const frameRate = 30;
//     const totalFrames = duration / (1000 / frameRate);

//     let currentFrame = 0;
//     let animationId: number;

//     const animateCounters = () => {
//       currentFrame++;

//       const progress = Math.min(currentFrame / totalFrames, 1);
//       const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out function

//       setCounted({
//         uptime: Math.min(99.9 * easeOut, 99.9),
//         loadTime: Math.min(47 * easeOut, 47),
//         threats: Math.min(62 * easeOut, 62),
//       });

//       if (currentFrame < totalFrames) {
//         animationId = requestAnimationFrame(animateCounters);
//       } else {
//         setAnimationComplete(true);
//       }
//     };

//     animationId = requestAnimationFrame(animateCounters);

//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set canvas size
//     const setCanvasSize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     setCanvasSize();

//     // Create particles for background animation
//     const particles: Array<{
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       color: string;
//       alpha: number;
//       targetAlpha: number;
//     }> = [];

//     // Create particles with enhanced properties
//     for (let i = 0; i < 50; i++) {
//       const colorType = i % 4;
//       let color;

//       switch (colorType) {
//         case 0:
//           color = "#034D9D"; // Primary brand color
//           break;
//         case 1:
//           color = "#4A7EBB"; // Lighter blue
//           break;
//         case 2:
//           color = "#88B0E0"; // Even lighter blue
//           break;
//         default:
//           color = "#D4E3F7"; // Very light blue for highlights
//       }

//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 3 + 1,
//         speedX: (Math.random() - 0.5) * 0.7,
//         speedY: (Math.random() - 0.5) * 0.7,
//         color: color,
//         alpha: 0,
//         targetAlpha: Math.random() * 0.5 + 0.3,
//       });
//     }

//     let animationFrameId: number;

//     // Animation function
//     const animate = () => {
//       if (!ctx) return;

//       // Clear canvas with dark gradient background
//       const gradient = ctx.createLinearGradient(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );
//       gradient.addColorStop(0, "#0A1929");
//       gradient.addColorStop(1, "#152642");

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Update and draw particles
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         // Fade in particles at the beginning
//         if (p.alpha < p.targetAlpha) {
//           p.alpha += 0.01;
//         }

//         // Update position
//         p.x += p.speedX;
//         p.y += p.speedY;

//         // Bounce off edges with damping
//         if (p.x <= 0 || p.x >= canvas.width) {
//           p.speedX *= -0.95;
//           p.x = p.x <= 0 ? 0 : canvas.width;
//         }
//         if (p.y <= 0 || p.y >= canvas.height) {
//           p.speedY *= -0.95;
//           p.y = p.y <= 0 ? 0 : canvas.height;
//         }

//         // Draw particle with glow effect
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

//         // Inner particle
//         ctx.fillStyle = p.color;
//         ctx.globalAlpha = p.alpha;
//         ctx.fill();

//         // Outer glow
//         const gradient = ctx.createRadialGradient(
//           p.x,
//           p.y,
//           0,
//           p.x,
//           p.y,
//           p.size * 3
//         );
//         gradient.addColorStop(
//           0,
//           `${p.color}${Math.round(p.alpha * 255)
//             .toString(16)
//             .padStart(2, "0")}`
//         );
//         gradient.addColorStop(1, `${p.color}00`);

//         ctx.fillStyle = gradient;
//         ctx.fillRect(
//           p.x - p.size * 3,
//           p.y - p.size * 3,
//           p.size * 6,
//           p.size * 6
//         );

//         // Draw connecting lines between nearby particles
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

//           if (distance < 120) {
//             const lineAlpha =
//               (1 - distance / 120) * 0.3 * Math.min(p.alpha, p2.alpha);

//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(3, 77, 157, ${lineAlpha})`;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       }

//       ctx.globalAlpha = 1;
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       setCanvasSize();

//       // Reset particles positions on resize
//       for (let i = 0; i < particles.length; i++) {
//         particles[i].x = Math.random() * canvas.width;
//         particles[i].y = Math.random() * canvas.height;
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="relative overflow-hidden py-16">
//       {/* Animated background canvas */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#034D9D]/10 to-[#034D9D]/30 z-1"></div>
  

//       {/* Decorative elements */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#034D9D]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#034D9D]/10 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        // <div className="text-center mb-12">
        //   <h2 className="text-4xl font-light text-white mb-4">
        //     Why Our Premium Clients <span className="text-[#4A7EBB]">Choosed Us?</span>
        //   </h2>
        //   <p className="text-base text-gray-300 max-w-2xl mx-auto">
        //     Our proven track record of delivering exceptional results speaks for
        //     itself. Here's how we maintain excellence in website maintenance.
        //   </p>
        // </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Uptime Stat */}
//           <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-white mb-2">
//                 {animationComplete ? "99.9%" : `${counted.uptime.toFixed(1)}%`}
//               </div>
//               <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
//                 Uptime Guarantee
//               </div>
//               <p className="text-gray-400 text-xs mt-3">
//                 Maximum reliability with minimal downtime for your business
//               </p>
//             </div>
//           </div>

//           {/* Load Time Stat */}
//           <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-white mb-2">
//                 {Math.round(counted.loadTime)}%
//               </div>
//               <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
//                 Faster Load Time
//               </div>
//               <p className="text-gray-400 text-xs mt-3">
//                 Optimized performance for better user experience and SEO
//               </p>
//             </div>
//           </div>

//           {/* Threats Prevented Stat */}
//           <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-white mb-2">
//                 {Math.round(counted.threats)}%
//               </div>
//               <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
//                 Threats Prevented
//               </div>
//               <p className="text-gray-400 text-xs mt-3">
//                 Proactive security measures that stop threats before they impact
//                 you
//               </p>
//             </div>
//           </div>

//           {/* Monitoring Stat */}
//           <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-white mb-2">24/7</div>
//               <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
//                 Monitoring
//               </div>
//               <p className="text-gray-400 text-xs mt-3">
//                 Round-the-clock surveillance to ensure your site is always
//                 performing optimally
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <button className="px-8 py-4 bg-gradient-to-r from-[#034D9D] to-[#4A7EBB] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//             Start Your Journey Today..!
//           </button>
//           <p className="text-gray-400 text-sm mt-4">
//             Join hundreds of satisfied clients who trust us with their online
//             presence
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatSection;













"use client";

import React, { useEffect, useRef, useState } from "react";

const StatSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counted, setCounted] = useState({
    uptime: 0,
    loadTime: 0,
    threats: 0,
  });
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  // Check if component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When 40% of the component is visible
        if (entry.intersectionRatio >= 0.4 && !hasAnimated) {
          setIsInViewport(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 40% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Counter animation
  useEffect(() => {
    if (!isInViewport || hasAnimated) return;

    const duration = 10000; // ms
    const frameRate = 60;
    const totalFrames = duration / (9000 / frameRate);

    let currentFrame = 0;
    let animationId: number;

    const animateCounters = () => {
      currentFrame++;

      const progress = Math.min(currentFrame / totalFrames, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out function

      setCounted({
        uptime: Math.min(99.9 * easeOut, 99.9),
        loadTime: Math.min(47 * easeOut, 47),
        threats: Math.min(62 * easeOut, 62),
      });

      if (currentFrame < totalFrames) {
        animationId = requestAnimationFrame(animateCounters);
      } else {
        setAnimationComplete(true);
        setHasAnimated(true);
      }
    };

    animationId = requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(animationId);
  }, [isInViewport, hasAnimated]);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();

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
    for (let i = 0; i < 50; i++) {
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
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color: color,
        alpha: 0,
        targetAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    let animationFrameId: number;

    // Animation function
    const animate = () => {
      if (!ctx) return;

      // Clear canvas with dark gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#0A1929");
      gradient.addColorStop(1, "#152642");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
          p.size * 3
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
          p.x - p.size * 3,
          p.y - p.size * 3,
          p.size * 6,
          p.size * 6
        );

        // Draw connecting lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

          if (distance < 120) {
            const lineAlpha =
              (1 - distance / 120) * 0.3 * Math.min(p.alpha, p2.alpha);

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
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();

      // Reset particles positions on resize
      for (let i = 0; i < particles.length; i++) {
        particles[i].x = Math.random() * canvas.width;
        particles[i].y = Math.random() * canvas.height;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-16">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#034D9D]/10 to-[#034D9D]/30 z-1"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#034D9D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#034D9D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            Why Our Premium Clients{" "}
            <span className="text-[#4A7EBB]">Choosed Us?</span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Our proven track record of delivering exceptional results speaks for
            itself. Here's how we maintain excellence in website maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Uptime Stat */}
          <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {!isInViewport
                  ? "0%"
                  : animationComplete
                  ? "99.9%"
                  : `${counted.uptime.toFixed(1)}%`}
              </div>
              <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
                Uptime Guarantee
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Maximum reliability with minimal downtime for your business
              </p>
            </div>
          </div>

          {/* Load Time Stat */}
          <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {!isInViewport ? "0%" : `${Math.round(counted.loadTime)}%`}
              </div>
              <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
                Faster Load Time
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Optimized performance for better user experience and SEO
              </p>
            </div>
          </div>

          {/* Threats Prevented Stat */}
          <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {!isInViewport ? "0%" : `${Math.round(counted.threats)}%`}
              </div>
              <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
                Threats Prevented
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Proactive security measures that stop threats before they impact
                you
              </p>
            </div>
          </div>

          {/* Monitoring Stat */}
          <div className="bg-gradient-to-br from-[#0A2342] to-[#152642] p-6 rounded-2xl border border-[#034D9D]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-[#88B0E0] font-medium uppercase tracking-wider">
                Monitoring
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Round-the-clock surveillance to ensure your site is always
                performing optimally
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-[#034D9D] to-[#4A7EBB] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Start Your Journey With WindHans Today..!
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Join hundreds of satisfied clients who trust us with their online
            presence
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatSection;