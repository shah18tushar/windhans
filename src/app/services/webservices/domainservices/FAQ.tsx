"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Key Points to Consider When Buying a Domain Name?",
    answer: (
      <ul className="space-y-4">
        <li className="group flex items-start space-x-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 hover:border-blue-200 transition-all duration-300">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0066CC] shadow-lg shadow-blue-500/30 mt-1.5 group-hover:shadow-blue-500/50 transition-all duration-300"></div>
          <div>
            <strong className="text-[#034D9D] font-semibold text-base block mb-0">
              Authorized Registrar
            </strong>
            <p className="text-gray-700 leading-relaxed">
              Choose a reputable, accredited registrar. Consult the WindHans's
               Technical Team for expert guidance.
            </p>
          </div>
        </li>
        <li className="group flex items-start space-x-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 hover:border-blue-200 transition-all duration-300">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0066CC] shadow-lg shadow-blue-500/30 mt-1.5 group-hover:shadow-blue-500/50 transition-all duration-300"></div>
          <div>
            <strong className="text-[#034D9D] font-semibold text-base block mb-0">
              Simplicity Matters
            </strong>
            <p className="text-gray-700 leading-relaxed">
              Keep domain names short, simple, meaningful—easy to recall and
              effortless to type.
            </p>
          </div>
        </li>
        <li className="group flex items-start space-x-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 hover:border-blue-200 transition-all duration-300">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0066CC] shadow-lg shadow-blue-500/30 mt-1.5 group-hover:shadow-blue-500/50 transition-all duration-300"></div>
          <div>
            <strong className="text-[#034D9D] font-semibold text-base block mb-0">
              Prefer .com Extension
            </strong>
            <p className="text-gray-700 leading-relaxed">
              Use .com when available—universally recognized and lends
              credibility.
            </p>
          </div>
        </li>
        <li className="group flex items-start space-x-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 hover:border-blue-200 transition-all duration-300">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0066CC] shadow-lg shadow-blue-500/30 mt-1.5 group-hover:shadow-blue-500/50 transition-all duration-300"></div>
          <div>
            <strong className="text-[#034D9D] font-semibold text-base block mb-0">
              Avoid Slang & Characters
            </strong>
            <p className="text-gray-700 leading-relaxed">
              Stay away from slang, numbers, or special characters—they weaken
              brand recall.
            </p>
          </div>
        </li>
        <li className="group flex items-start space-x-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 hover:border-blue-200 transition-all duration-300">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0066CC] shadow-lg shadow-blue-500/30 mt-1.5 group-hover:shadow-blue-500/50 transition-all duration-300"></div>
          <div>
            <strong className="text-[#034D9D] font-semibold text-base block mb-0">
              Legal Clarity & Uniqueness
            </strong>
            <p className="text-gray-700 leading-relaxed">
              Avoid trademarked or similar names; ensure uniqueness to protect
              your brand.
            </p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    question: "Should I add Domain Privacy Protection?",
    answer: (
      <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border border-emerald-100/50 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-emerald-700 font-semibold text-base">
            Highly Recommended
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed text-base">
          Yes—WHOIS privacy protection shields your personal contact from public
          databases, reducing spam and identity risks. Opt for registrars
          offering this feature for enhanced security and peace of mind.
        </p>
      </div>
    ),
  },
  {
    question: "What about renewal costs and transparency?",
    answer: (
      <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-50/80 to-orange-50/80 border border-amber-100/50 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-amber-700 font-bold text-base">
            Important Consideration
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed text-base">
          Renewal fees can differ vastly from the initial cost. Compare both
          clearly, and choose registrars with transparent renewal pricing—no
          hidden surprises. Always read the fine print before committing.
        </p>
      </div>
    ),
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-16 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0066CC] shadow-2xl shadow-blue-500/30 mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-6xl font-serif bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 leading-tight">
            <span className="block bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#034D9D] to-[#0066CC] rounded-full mx-auto mb-6 shadow-lg shadow-blue-500/30"></div>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden backdrop-blur-sm transform-gpu"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                boxShadow:
                  openIndex === idx
                    ? "0 25px 50px -12px rgba(3, 77, 157, 0.25), 0 0 0 1px rgba(3, 77, 157, 0.1), inset 0 1px 0 rgba(255,255,255,0.9)"
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
              }}
            >
              <button
                className="w-full px-10 py-4 cursor-pointer flex justify-between items-center transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-50/30 group-hover:to-indigo-50/30"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-semibold text-gray-800 text-left group-hover:text-[#034D9D] transition-all duration-500 leading-relaxed">
                  {item.question}
                </span>

                <div className="flex-shrink-0 ml-6 relative w-10 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-[#034D9D] group-hover:to-[#0066CC] transition-all duration-500 flex items-center justify-center shadow-lg">
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-600 group-hover:bg-white transition-all duration-500 ${
                        openIndex === idx
                          ? "rotate-90 opacity-0 scale-0"
                          : "rotate-0 opacity-100 scale-100"
                      }`}
                    ></span>
                    <span
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-600 group-hover:bg-white transition-all duration-500 ${
                        openIndex === idx
                          ? "rotate-180 scale-100"
                          : "rotate-0 scale-100"
                      }`}
                    ></span>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-out ${
                  openIndex === idx
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-10 pb-10">
                  <div
                    className="pt-4 text-gray-700 text-base leading-relaxed"
                    style={{
                      animation:
                        openIndex === idx ? "slideInUp 0.7s ease-out" : "none",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-light font-serif text-slate-800 mb-6">
            Ready to Work With Our Elite Team?
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Connect with our experts to discuss how we can transform your
            business with cutting-edge technology solutions.
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

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;