// "use client";

// import React from "react";

// const Loader = () => {
//   return (
//     <div className="z-[9999] overflow-hidden">
//       <div className="relative">
//         <video
//           src="/loadervideo.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           controls={false}
//           className="w-full h-screen object-cover overflow-hidden"
//         />
//       </div>

//       <div className="absolute bottom-10 text-white text-center w-full">
//         <p className="text-sm animate-pulse">Tap Anywhere or Press Enter</p>
//       </div>
//     </div>
//   );
// };

// export default Loader;







"use client";

import React from "react";

type LoaderProps = {
  isClosing?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isClosing }) => {
  return (
    <div className="z-[9999] overflow-hidden">
      <div className="relative">
        <video
          src="/loadervideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          className={`w-full h-screen object-cover overflow-hidden transition-opacity duration-[1500ms] ease-out ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div
        className={`absolute bottom-10 text-white text-center w-full transition-opacity duration-1000 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-sm animate-pulse">Tap Anywhere or Press Enter</p>
      </div>
    </div>
  );
};

export default Loader;







// "use client";

// import React from "react";

// const Loader = ({ isClosing }) => {
//   return (
//     <div className="z-[9999] overflow-hidden">
//       <div className="relative">
//         <video
//           src="/loadervideo.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           controls={false}
//           className={`w-full h-screen object-cover overflow-hidden transition-opacity duration-[1500ms] ease-out ${
//             isClosing ? "opacity-0" : "opacity-100"
//           }`}
//         />
//       </div>

//       <div
//         className={`absolute bottom-10 text-white text-center w-full transition-opacity duration-1000 ${
//           isClosing ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <p className="text-sm animate-pulse">Tap Anywhere or Press Enter</p>
//       </div>
//     </div>
//   );
// };

// export default Loader;