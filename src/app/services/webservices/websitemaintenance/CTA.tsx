import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <div>
      {" "}
      {/* Call to Action */}
      <div className="text-center my-16">
        <h3 className="text-3xl font-light font-serif text-slate-800 mb-6">
          Ready to Work With Our Elite Team?
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Connect with our experts to discuss how we can transform your business
          with cutting-edge technology solutions.
        </p>
        <button className="group relative overflow-hidden bg-gradient-to-r from-[#034D9D] to-blue-700 hover:from-blue-700 hover:to-[#034D9D] text-white px-8 py-4 rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-1000">
          <span className="relative z-10 font-medium text-base flex items-center">
            Schedule a Executive Consultation
            <FaArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#034D9D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
    </div>
  );
};

export default CTA;
