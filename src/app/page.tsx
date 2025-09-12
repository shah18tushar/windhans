// "use client";

// import Hero from "@/components/Hero";
// import WhoWeAre from "@/components/WhoWeAre";
// import Domain from "@/components/Domain";
// import OutsourcedService from "@/components/OutsourcedService";
// import OurWork from "@/components/OurWork";
// import CTA from "@/components/CTA";
// import Journey from "@/components/Journey";
// import CaseStudy from "@/components/CaseStudy";
// import Loader from "@/components/ui/Loader";


// export default function Home() {
//   return (
//     <>
//       <div className="">
//         <Hero />
//         <WhoWeAre />
//         <OurWork />
//         <Journey />
//         <CaseStudy />
//         <Domain />
//         <OutsourcedService />
//         <CTA />
//       </div>
//     </>
//   );
// }





































// "use client";

// import { useState, useEffect } from "react";
// import Hero from "@/components/Hero";
// import WhoWeAre from "@/components/WhoWeAre";
// import Domain from "@/components/Domain";
// import OutsourcedService from "@/components/OutsourcedService";
// import OurWork from "@/components/OurWork";
// import CTA from "@/components/CTA";
// import Journey from "@/components/Journey";
// import CaseStudy from "@/components/CaseStudy";
// import Loader from "@/components/ui/Loader";

// export default function Home() {
//   const [showLoader, setShowLoader] = useState(false);

//   useEffect(() => {
//     // Check if user has visited before using localStorage
//     const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

//     if (!hasVisitedBefore) {
//       setShowLoader(true);
//       document.body.style.overflow = "hidden";
//     }

//     const handleUserInteraction = () => {
//       if (showLoader) {
//         setShowLoader(false);
//         document.body.style.overflow = "unset";
//         // Set flag in localStorage to remember user has visited
//         localStorage.setItem("hasVisitedBefore", "true");
//       }
//     };

//     // Only add event listeners if loader is shown
//     if (!hasVisitedBefore) {
//       document.addEventListener("click", handleUserInteraction);
//       document.addEventListener("keydown", (e) => {
//         if (e.key === "Enter") {
//           handleUserInteraction();
//         }
//       });
//     }

//     // Clean up event listeners
//     return () => {
//       document.removeEventListener("click", handleUserInteraction);
//       document.removeEventListener("keydown", handleUserInteraction);
//     };
//   }, [showLoader]);

//   return (
//     <>
//       {showLoader && (
//         <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
//           <Loader />
//           <div className="absolute bottom-10 text-white text-center w-full">
//             <p className="text-lg animate-pulse">
//               Click anywhere or press Enter to continue
//             </p>
//           </div>
//         </div>
//       )}
//       <div
//         className={
//           showLoader
//             ? "opacity-0"
//             : "opacity-100 transition-opacity duration-500"
//         }
//       >
//         <Hero />
//         <WhoWeAre />
//         <OurWork />
//         <Journey />
//         <CaseStudy />
//         <Domain />
//         <OutsourcedService />
//         <CTA />
//       </div>
//     </>
//   );
// }











"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Domain from "@/components/Domain";
import OutsourcedService from "@/components/OutsourcedService";
import OurWork from "@/components/OurWork";
import CTA from "@/components/CTA";
import Journey from "@/components/Journey";
import CaseStudy from "@/components/CaseStudy";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [isClosingLoader, setIsClosingLoader] = useState(false);

  useEffect(() => {
    // Check if user has visited before using localStorage
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      setShowLoader(true);
      document.body.style.overflow = "hidden";
    }

    const handleUserInteraction = () => {
      if (showLoader && !isClosingLoader) {
        // Start the closing animation
        setIsClosingLoader(true);

        // After the fade animation completes, hide the loader completely
        setTimeout(() => {
          setShowLoader(false);
          document.body.style.overflow = "unset";
          // Set flag in localStorage to remember user has visited
          localStorage.setItem("hasVisitedBefore", "true");
        }, 1500); // Match this with the CSS transition duration
      }
    };

    // Only add event listeners if loader is shown
    if (!hasVisitedBefore) {
      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleUserInteraction();
        }
      });
    }

    // Clean up event listeners
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [showLoader, isClosingLoader]);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <Loader isClosing={isClosingLoader} />
          <div
            className={`absolute bottom-10 text-white text-center w-full transition-opacity duration-1000 ${
              isClosingLoader ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-lg animate-pulse">
              Click anywhere or press Enter to continue
            </p>
          </div>
        </div>
      )}
      <div
        className={
          showLoader
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-1000 delay-500"
        }
      >
        <Hero />
        <WhoWeAre />
        <OurWork />
        <Journey />
        <CaseStudy />
        <Domain />
        <OutsourcedService />
        <CTA />
      </div>
    </>
  );
}
















