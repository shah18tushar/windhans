"use client";

import React, { JSX, useState } from "react";
import {
  Globe,
  Server,
  Flag,
  ShieldCheck,
  Search,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FreedomChooseLuxury(): JSX.Element {
  const [ext, setExt] = useState<".com" | ".in">(".com");
  const [query, setQuery] = useState("");
  const [available, setAvailable] = useState<null | boolean>(null);

  const THEME = "#034D9D";

  const checkAvailability = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    // demo behaviour (replace with API)
    setAvailable(null);
    setTimeout(() => setAvailable(Math.random() > 0.5), 700);
  };

  const pros: Record<string, string[]> = {
    ".com": [
      "Global recognition and credibility",
      "Better for international audiences and eCommerce",
      "Highly memorable & trusted by users",
    ],
    ".in": [
      "Signals local presence in India",
      "Stronger local trust and relevance",
      "Often more name availability for branding",
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* === Deluxe Header Start === */}
       
        {/* === End Header === */}

        {/* outer card to add subtle elevation on white bg */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <div className="flex items-start gap-6">
                <div>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div
                        className="w-1 h-[5.4rem] rounded-full"
                        style={{ background: THEME }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light font-serif text-gray-700 ">
                        Freedom of Choice for your <br /> Domain Name and
                        Hosting Services
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Choose Right — Shine Bright
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 mx-6 text-gray-600 max-w-xl text-base">
                    Choose freely — bundle domain & hosting for instant
                    convenience, or separate them for portability. We support
                    all major TLDs, managed hosting tiers, migrations and
                    enterprise DNS control so your brand stays in your hands.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mx-6">
                    <div className="rounded-xl border border-gray-100 p-4 bg-gradient-to-tr from-white to-white/90 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="flex-none rounded-md bg-[#034D9D]/10 p-2 text-[#034D9D]">
                          <Server size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">
                            Flexible Hosting
                          </div>
                          <div className="text-xs text-gray-500">
                            Shared · VPS · Cloud · Dedicated
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-4 bg-gradient-to-tr from-white to-white/90 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="flex-none rounded-md bg-[#034D9D]/10 p-2 text-[#034D9D]">
                          <ShieldCheck size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">
                            Security & Privacy
                          </div>
                          <div className="text-xs text-gray-500">
                            WHOIS privacy · SSL · Backups
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-6 mx-6 text-sm text-gray-600 space-y-3">
                    <li>
                      • Register any TLD (.com / .in / .tech / .io) and manage
                      DNS with full control.
                    </li>
                    <li>
                      • Migration support, staging environments, email hosting,
                      CDN and performance tuning.
                    </li>
                    <li>
                      • Option: single provider convenience or best-of-breed
                      multi-vendor approach.
                    </li>
                  </ul>

                  <div className="mt-6 mx-6 flex flex-wrap gap-3">
                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0b5880] text-white text-sm font-medium shadow">
                      Explore Hosting Plans
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>

                    <button className="px-4 py-2 rounded-full border border-[#034D9D] text-sm text-gray-700 hover:shadow-sm">
                      Domain Services & Transfers
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white"
            >
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div
                        className="w-1 h-[5.4rem] rounded-full"
                        style={{ background: THEME }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light font-serif text-gray-700 ">
                        Choosing the Right Domain Extension:
                        <span className="block mt-0 text-2xl">
                          <span className="text-[#034D9D]">.com</span> or{" "}
                          <span className="text-[#034D9D]">.in</span>?
                        </span>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Choose Right — Shine Bright
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 mx-6 text-gray-600 text-base max-w-xl">
                    Quick decision flow: pick <strong>.com</strong> for global
                    recall and broad reach; pick <strong>.in</strong> to
                    emphasize your India presence and local trust. Often the
                    best approach is to secure both and mirror content to
                    improve brand protection.
                  </p>

                  {/* Toggle */}
                  <div className="mt-6 mx-6  flex items-center gap-10">
                    <div className="rounded-full bg-gray-100 p-1 flex items-center gap-1">
                      <button
                        onClick={() => setExt(".com")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                          ext === ".com"
                            ? "bg-[#034D9D] shadow-md text-white"
                            : "text-gray-600"
                        }`}
                      >
                        .com
                      </button>
                      <button
                        onClick={() => setExt(".in")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                          ext === ".in"
                            ? "bg-[#034D9D] shadow-md text-white"
                            : "text-gray-600"
                        }`}
                      >
                        .in
                      </button>
                    </div>

                    {/* <div className="text-xs text-gray-500">
                      Pro tip: register both to defend your brand
                    </div> */}
                  </div>

                  {/* Pros list */}
                  <div className="mt-6 mx-6 grid grid-cols-1 gap-3">
                    {pros[ext].map((p, i) => (
                      <motion.div key={i} className="flex items-center gap-3">
                        <div className=" text-[#034D9D]">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-700">{p}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 mx-6 flex flex-wrap gap-3">
                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#034D9D] to-[#0b5880] text-white text-sm font-medium shadow">
                      Register For .{ext.replace(".", "")}
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>

                    <button className="px-4 py-2 rounded-full border border-[#034D9D] text-sm text-gray-700 hover:shadow-sm">
                      Ask For Brand Protection
                    </button>
                  </div>

                  <div className="mt-4 mx-6 text-sm text-gray-700 italic">
                    Pro Tip : Register both now — Secure and defend your brand.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}