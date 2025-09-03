// "use client";

// import Hero from "@/components/Hero";
// import AboutUs from "@/components/AboutUs";
// import WelcomeSection from "@/components/WelcomeSection";
// import WhoWeAre from "@/components/WhoWeAre";
// import Domain from "@/components/Domain";
// import OutsourcedService from "@/components/OutsourcedService";
// import OurWork from "@/components/OurWork";
// import CTA from "@/components/CTA";
// import FullScreenLoader from "@/components/ui/Loader";


// export default function Home() {
//   return (
//     <>
//     <div className="">
//       <Hero/>
//       <WhoWeAre />
//       <OurWork/>
//       <Domain />
//       <OutsourcedService />
//       <WelcomeSection />
//       <CTA />
//       <AboutUs/>
//       <FullScreenLoader />
//     </div>
     
//     </>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WelcomeSection from "@/components/WelcomeSection";
import WhoWeAre from "@/components/WhoWeAre";
import Domain from "@/components/Domain";
import OutsourcedService from "@/components/OutsourcedService";
import OurWork from "@/components/OurWork";
import CTA from "@/components/CTA";
import FullScreenLoader from "@/components/ui/Loader";
import Journey from "@/components/Journey";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <div className="">
          <Hero />
          <WhoWeAre />
          <OurWork />
          <Journey />
          <CaseStudy />
          <Domain />
          <OutsourcedService />
          <WelcomeSection />
          <CTA />
          {/* <AboutUs /> */}
        </div>
      )}
    </>
  );
}