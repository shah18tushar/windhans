// "use client";

// import React from "react";

// const WindHansTechVisual: React.FC = () => {
//   return (
//     <div className="flex justify-center items-start min-h-screen font-['Inter'] overflow-hidden">
//       <div className="relative w-[600px] h-[480px] bg-gradient-to-br from-[#034D9D] via-[#1e40af] to-[#0369a1] rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(3,77,157,0.4),0_10px_40px_rgba(14,165,233,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">
//         {/* Animated Background Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] opacity-60 animate-gridFlow"></div>

//         {/* Premium Glass Buildings */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[320px]">
//           <div className="absolute w-[120px] h-[280px] left-1/2 transform -translate-x-1/2 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(14,165,233,0.3)]">
//             <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
//           </div>
//           <div className="absolute w-[80px] h-[200px] left-20 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t-md">
//             <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
//           </div>
//           <div className="absolute w-[70px] h-[160px] right-20 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t-md">
//             <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
//           </div>
//           <div className="absolute w-[60px] h-[120px] left-5 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t">
//             <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
//           </div>
//           <div className="absolute w-[55px] h-[100px] right-5 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t">
//             <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
//           </div>
//         </div>

//         {/* Floating Tech Icons */}
//         <div className="absolute inset-0">
//           <div className="absolute w-14 h-14 top-20 left-14 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float">
//             <div className="text-white text-2xl font-bold opacity-80">⚡</div>
//           </div>
//           <div className="absolute w-14 h-14 top-28 right-20 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float animation-delay-2000">
//             <div className="text-white text-2xl font-bold opacity-80">🔧</div>
//           </div>
//           <div className="absolute w-14 h-14 top-48 left-28 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float animation-delay-4000">
//             <div className="text-white text-2xl font-bold opacity-80">💎</div>
//           </div>
//           <div className="absolute w-14 h-14 top-14 right-32 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float animation-delay-1000">
//             <div className="text-white text-2xl font-bold opacity-80">🚀</div>
//           </div>
//         </div>

//         {/* Central Premium Badge */}
//         <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-36 h-16 bg-[rgba(255,255,255,0.15)] border-2 border-[rgba(255,255,255,0.25)] rounded-2xl backdrop-blur-lg flex items-center justify-center animate-badgePulse shadow-[0_15px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
//           <div className="text-white text-sm font-bold text-center text-shadow-md tracking-wide">
//             WINDHANS
//             <br />
//             TECH
//           </div>
//         </div>

//         {/* Data Streams */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute w-0.5 h-20 left-[15%] top-1/5 bg-gradient-to-b from-transparent via-[rgba(96,165,250,0.8)] to-transparent rounded animate-dataStream"></div>
//           <div className="absolute w-0.5 h-20 right-1/5 top-[30%] bg-gradient-to-b from-transparent via-[rgba(96,165,250,0.8)] to-transparent rounded animate-dataStream animation-delay-2000"></div>
//           <div className="absolute w-0.5 h-20 left-[70%] top-[15%] bg-gradient-to-b from-transparent via-[rgba(96,165,250,0.8)] to-transparent rounded animate-dataStream animation-delay-1000"></div>
//         </div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0">
//           <div className="absolute w-1 h-1 left-1/5 bg-blue-400 rounded-full animate-particleFloat opacity-70"></div>
//           <div className="absolute w-1 h-1 left-2/5 bg-blue-400 rounded-full animate-particleFloat animation-delay-3000 opacity-70"></div>
//           <div className="absolute w-1 h-1 left-3/5 bg-blue-400 rounded-full animate-particleFloat animation-delay-6000 opacity-70"></div>
//           <div className="absolute w-1 h-1 left-4/5 bg-blue-400 rounded-full animate-particleFloat animation-delay-9000 opacity-70"></div>
//         </div>

//         {/* Premium Glow Overlay */}
//         <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_70%,rgba(14,165,233,0.15)_0%,transparent_70%) pointer-events-none"></div>
//       </div>

//       <style jsx>{`
//         @keyframes gridFlow {
//           0% {
//             transform: translate(0, 0);
//           }
//           100% {
//             transform: translate(50px, 50px);
//           }
//         }
//         @keyframes windowGlow {
//           0% {
//             opacity: 0.6;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-15px) rotate(2deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(-1deg);
//           }
//           75% {
//             transform: translateY(-20px) rotate(1deg);
//           }
//         }
//         @keyframes badgePulse {
//           0%,
//           100% {
//             transform: translateX(-50%) scale(1);
//             box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3),
//               0 0 0 0 rgba(96, 165, 250, 0);
//           }
//           50% {
//             transform: translateX(-50%) scale(1.05);
//             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
//               0 0 0 10px rgba(96, 165, 250, 0.1);
//           }
//         }
//         @keyframes dataStream {
//           0% {
//             transform: translateY(-100px);
//             opacity: 0;
//           }
//           20% {
//             opacity: 1;
//           }
//           80% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(400px);
//             opacity: 0;
//           }
//         }
//         @keyframes particleFloat {
//           0% {
//             transform: translateY(500px);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100px);
//             opacity: 0;
//           }
//         }
//         .animate-gridFlow {
//           animation: gridFlow 25s linear infinite;
//         }
//         .animate-windowGlow {
//           animation: windowGlow 4s ease-in-out infinite alternate;
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//         .animate-badgePulse {
//           animation: badgePulse 6s ease-in-out infinite;
//         }
//         .animate-dataStream {
//           animation: dataStream 4s linear infinite;
//         }
//         .animate-particleFloat {
//           animation: particleFloat 12s linear infinite;
//         }
//         .animation-delay-1000 {
//           animation-delay: -1s;
//         }
//         .animation-delay-2000 {
//           animation-delay: -2s;
//         }
//         .animation-delay-3000 {
//           animation-delay: -3s;
//         }
//         .animation-delay-4000 {
//           animation-delay: -4s;
//         }
//         .animation-delay-6000 {
//           animation-delay: -6s;
//         }
//         .animation-delay-9000 {
//           animation-delay: -9s;
//         }
//         .text-shadow-md {
//           text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
//         }
//         .bg-radial-gradient {
//           background: radial-gradient(
//             circle at 50% 70%,
//             rgba(14, 165, 233, 0.15) 0%,
//             transparent 70%
//           );
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WindHansTechVisual;









// components/WindHansTechVisual.tsx
import React from 'react';

const WindHansTechVisual: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f172a] font-['Inter'] overflow-hidden">
      <div className="relative w-[600px] h-[480px] bg-gradient-to-br from-[#034D9D] via-[#1e40af] to-[#0369a1] rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(3,77,157,0.4),0_10px_40px_rgba(14,165,233,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] opacity-60 animate-gridFlow"></div>
        
        {/* Premium Glass Buildings */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[320px]">
          <div className="absolute w-[120px] h-[280px] left-1/2 transform -translate-x-1/2 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(14,165,233,0.3)]">
            <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
          </div>
          <div className="absolute w-[80px] h-[200px] left-20 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t-md">
            <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
          </div>
          <div className="absolute w-[70px] h-[160px] right-20 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t-md">
            <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
          </div>
          <div className="absolute w-[60px] h-[120px] left-5 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t">
            <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
          </div>
          <div className="absolute w-[55px] h-[100px] right-5 bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-t">
            <div className="absolute inset-2 bg-[linear-gradient(transparent_8px,rgba(96,165,250,0.8)_8px,rgba(96,165,250,0.8)_12px,transparent_12px),linear-gradient(90deg,transparent_8px,rgba(96,165,250,0.6)_8px,rgba(96,165,250,0.6)_12px,transparent_12px)] bg-[length:20px_25px] rounded-[inherit] animate-windowGlow"></div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0">
          <div className="absolute w-14 h-14 top-20 left-14 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float">
            <div className="text-white text-2xl font-bold opacity-80">⚡</div>
          </div>
          <div className="absolute w-14 h-14 top-28 right-20 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float animation-delay-2000">
            <div className="text-white text-2xl font-bold opacity-80">🔧</div>
          </div>
          <div className="absolute w-14 h-14 top-48 left-28 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float animation-delay-4000">
            <div className="text-white text-2xl font-bold opacity-80">💎</div>
          </div>
          <div className="absolute w-14 h-14 top-14 right-32 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur flex items-center justify-center shadow-lg animate-float animation-delay-1000">
            <div className="text-white text-2xl font-bold opacity-80">🚀</div>
          </div>
        </div>

        {/* Central Premium Badge */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-36 h-16 bg-[rgba(255,255,255,0.15)] border-2 border-[rgba(255,255,255,0.25)] rounded-2xl backdrop-blur-lg flex items-center justify-center animate-badgePulse shadow-[0_15px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <div className="text-white text-sm font-bold text-center text-shadow-md tracking-wide">
            WINDHANS<br/>TECH
          </div>
        </div>

        {/* Data Streams */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-0.5 h-20 left-[15%] top-1/5 bg-gradient-to-b from-transparent via-[rgba(96,165,250,0.8)] to-transparent rounded animate-dataStream"></div>
          <div className="absolute w-0.5 h-20 right-1/5 top-[30%] bg-gradient-to-b from-transparent via-[rgba(96,165,250,0.8)] to-transparent rounded animate-dataStream animation-delay-2000"></div>
          <div className="absolute w-0.5 h-20 left-[70%] top-[15%] bg-gradient-to-b from-transparent via-[rgba(96,165,250,0.8)] to-transparent rounded animate-dataStream animation-delay-1000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute w-1 h-1 left-1/5 bg-blue-400 rounded-full animate-particleFloat opacity-70"></div>
          <div className="absolute w-1 h-1 left-2/5 bg-blue-400 rounded-full animate-particleFloat animation-delay-3000 opacity-70"></div>
          <div className="absolute w-1 h-1 left-3/5 bg-blue-400 rounded-full animate-particleFloat animation-delay-6000 opacity-70"></div>
          <div className="absolute w-1 h-1 left-4/5 bg-blue-400 rounded-full animate-particleFloat animation-delay-9000 opacity-70"></div>
        </div>

        {/* Premium Glow Overlay */}
        <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_70%,rgba(14,165,233,0.15)_0%,transparent_70%) pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes gridFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes windowGlow {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          75% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes badgePulse {
          0%, 100% { 
            transform: translateX(-50%) scale(1);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(96, 165, 250, 0);
          }
          50% { 
            transform: translateX(-50%) scale(1.05);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 10px rgba(96, 165, 250, 0.1);
          }
        }
        @keyframes dataStream {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }
        @keyframes particleFloat {
          0% {
            transform: translateY(500px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
        .animate-gridFlow {
          animation: gridFlow 25s linear infinite;
        }
        .animate-windowGlow {
          animation: windowGlow 4s ease-in-out infinite alternate;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-badgePulse {
          animation: badgePulse 6s ease-in-out infinite;
        }
        .animate-dataStream {
          animation: dataStream 4s linear infinite;
        }
        .animate-particleFloat {
          animation: particleFloat 12s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: -1s;
        }
        .animation-delay-2000 {
          animation-delay: -2s;
        }
        .animation-delay-3000 {
          animation-delay: -3s;
        }
        .animation-delay-4000 {
          animation-delay: -4s;
        }
        .animation-delay-6000 {
          animation-delay: -6s;
        }
        .animation-delay-9000 {
          animation-delay: -9s;
        }
        .text-shadow-md {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at 50% 70%, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default WindHansTechVisual;