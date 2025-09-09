"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  Globe,
  AlertTriangle,
  Star,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

export default function KeyPointsLuxury(): JSX.Element {
  const THEME = "#034D9D";
  const GOLD = "#FFD36F";

  const keyPoints = [
    {
      icon: <ShieldCheck color={THEME} size={24} />,
      title: "Authorized Registrar",
      desc: "Choose a reputable, accredited registrar. Consult the Spwebconnect Technical Team for expert guidance.",
    },
    {
      icon: <CheckCircle color={THEME} size={24} />,
      title: "Simplicity Matters",
      desc: "Keep domain names short, simple, meaningful—easy to recall and effortless to type.",
    },
    {
      icon: <Globe color={THEME} size={24} />,
      title: "Prefer .com Extension",
      desc: "Use .com when available—universally recognized and lends credibility.",
    },
    {
      icon: <AlertTriangle color={THEME} size={24} />,
      title: "Avoid Slang & Characters",
      desc: "Stay away from slang, numbers, or special characters—they weaken brand recall.",
    },
    {
      icon: <Star color={THEME} size={24} />,
      title: "Legal Clarity & Uniqueness",
      desc: "Avoid trademarked or similar names; ensure uniqueness to protect your brand.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-light font-serif text-slate-900 mb-10">
          Key Points to Consider When Buying a Domain Name
        </h2>

        <div className="relative">
          {/* Decorative gold line */}
          <ul className="space-y-8">
            {keyPoints.map((pt, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="flex-none">{pt.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {pt.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{pt.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
{/* 
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-3xl border border-[#034D9D] px-6 py-2 text-[#034D9D] font-semibold transition hover:bg-[#034D9D] hover:text-white">
            Consult Our Domain Experts
          </button>
        </div> */}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#034D9D] to-blue-700 rounded-3xl shadow-2xl shadow-blue-500/30 p-10 mt-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-light font-serif text-white mb-2">
              50+
            </div>
            <div className="text-blue-100 text-sm uppercase tracking-widest">
              Projects Delivered
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light font-serif text-white mb-2">
              100+
            </div>
            <div className="text-blue-100 text-sm uppercase tracking-widest">
              Years Combined
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light font-serif text-white mb-2">
              15+
            </div>
            <div className="text-blue-100 text-sm uppercase tracking-widest">
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light font-serif text-white mb-2">
              98%
            </div>
            <div className="text-blue-100 text-sm uppercase tracking-widest">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
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
    </motion.section>
  );
}