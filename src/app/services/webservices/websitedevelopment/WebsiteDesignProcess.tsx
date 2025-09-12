// "use client";

// import React from "react";

// const WebsiteDesignProcess = () => {
//   return (
//     <section className="bg-white py-16 lg:py-24 px-6 lg:px-20 flex lg:flex-row flex-col items-center">
//       {/* Image Column */}
//       <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
//         <img
//           src="/clients.png"
//           alt="Website design process"
//           className="w-full h-auto rounded-lg shadow-lg object-cover"
//         />
//         {/* Optional overlay or accent border */}
//         <div className="absolute top-0 left-0 w-1/2 h-1/4 border-t-4 border-l-4 border-[#034D9D] rounded-lg pointer-events-none"></div>
//       </div>

//       {/* Content Column */}
//       <div className="w-full lg:w-1/2 lg:pl-12">
//         <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#034D9D] mb-4">
//           Starting with Website Design After Domain Registration
//         </h2>
//         <p className="text-base lg:text-lg text-gray-700 mb-6">
//           Once your domain name is registered, the next crucial step is the
//           website development process.
//         </p>
//         <p className="text-base lg:text-lg text-gray-700 mb-6">
//           At <span className="font-semibold">WindHans Technologies</span>, we
//           understand that web design is time-consuming as it requires creating
//           responsive development compatible with various devices, including
//           mobile phones, laptops, and tablets. Our team ensures that your
//           website provides an optimal user interface (UI) across all platforms.
//           With over <span className="font-semibold">70%</span> of people
//           accessing websites via mobile devices or tablets, we prioritize
//           mobile-friendly designs.
//         </p>

//         {/* Optional Stat / Highlight */}
//         <div className="flex items-center mb-6">
//           <div className="text-4xl font-bold text-[#034D9D] mr-4">70%+</div>
//           <div className="text-base text-gray-700">
//             of users access via mobile & tablets
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button className="bg-[#034D9D] text-white px-6 py-3 rounded-md font-medium hover:bg-[#023c7a] transition">
//           Let’s Build Your Site
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WebsiteDesignProcess;













"use client";

import React, { useEffect, useState } from "react";
import { PiPaintBrushBold } from "react-icons/pi";


const WebsiteDesignProcess = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 70) {
      const timer = setTimeout(() => setCounter(counter + 1), 30);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-2 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 items-start relative z-10">
        {/* Content Column */}
        <div className="w-full lg:col-span-8">
          <div className="">
            <div className="flex gap-2 justify-center items-center mb-2">
              <h2 className="text-3xl font-serif font-extralight text-[#034D9D]">
                Crafting Digital Excellence After Domain Registration
              </h2>

              <PiPaintBrushBold className="text-3xl text-[#034D9D]" />
            </div>

            <p className="text-sm text-center max-w-2xl mx-auto text-gray-700 mb-6 leading-relaxed">
              Once your domain is secured, the journey to digital excellence
              begins. Our design process transforms your vision into an
              immersive experience that captivates and converts
            </p>

            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl mb-8 border border-blue-500">
              <h3 className="font-serif text-xl text-[#034D9D] mb-1">
                Elevating user experiences with expert UI/UX Design
              </h3>
              <p className="text-gray-700 mb-0 text-sm">
                Our work is always geared towards a well-balanced use of
                content, pictures and technology which fit together. We strive
                to interpret your business goals into a meaningful and
                aesthetically pleasing online presence.
              </p>

              <h3 className="font-serif text-xl text-[#034D9D] mb-1 mt-3">
                Comprehensive Brand Identity Designing Solutions
              </h3>
              <p className="text-gray-700 mb-0 text-sm">
                Crafting compelling strategies for fostering genuine connections
                with your target audience. We develop cohesive visual identities
                that resonate deeply and communicate your unique value
                proposition.
              </p>

              <h3 className="font-serif text-xl text-[#034D9D] mb-1 mt-3">
                Performance-Driven Web Designs & Visual Storytelling
              </h3>
              <p className="text-gray-700 mb-0 text-sm">
                Combining speed, design, and purpose — we deliver visually
                impressive web solutions that load fast, perform flawlessly, and
                make your brand stand out with confidence.
              </p>

              {/* <h3 className="font-serif text-xl text-[#034D9D] mb-1 mt-3">
                Visual Excellence Across Every Device Screen
              </h3>
              <p className="text-gray-700 mb-0 text-sm">
                At WindHans Technologies, we believe great web design means
                seamless responsiveness across all devices. Our team delivers
                optimal performance and stunning visuals on mobile, tablet, and
                desktop alike.
              </p> */}
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:col-span-4 mb-12 lg:mb-0 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
            <img
              src="/startimg.png"
              alt="Website design process"
              className="w-full h-full object-contain"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-80"></div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#034D9D] rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#034D9D] rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#034D9D] rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#034D9D] rounded-br-2xl"></div>
          </div>

          {/* Enhanced Stat Card */}
          <div className="relative mt-8 bg-gradient-to-br from-slate-900 to-blue-900 p-4 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <pattern id="circuit" x="0" y="0" width="0.05" height="0.05">
                  <path d="M0,0 L10,10" stroke="white" strokeWidth="0.5" />
                  <circle cx="5" cy="5" r="2" fill="white" />
                </pattern>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#circuit)"
                />
              </svg>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>

            <div className="flex items-center relative z-10">
              <div className="text-3xl font-bold mr-3 text-white">
                {counter}%+
              </div>
              <div className="text-sm text-blue-100 leading-tight">
                Users access websites via mobile & tablets, making responsive
                design non-negotiable for business success
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-600/30 rounded-full blur-md"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gold-500/20 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesignProcess;