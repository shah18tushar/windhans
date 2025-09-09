"use client";

import React, { useState } from "react";
import {
  Globe,
  Server,
  ShieldCheck,
  Key,
  Search,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";


export default function BookingDomain() {
  const [query, setQuery] = useState("");
  const [tld, setTld] = useState(".com");
  const [status, setStatus] = useState<
    null | "searching" | "available" | "taken"
  >(null);

  const tlds = [".com", ".in", ".tech", ".io", ".app"];

  function handleSearch(e?: React.FormEvent) {
    e?.preventDefault();
    if (!query.trim()) return;
    setStatus("searching");
    // visual demo only: replace with real API call
    setTimeout(() => {
      const available = Math.random() > 0.4;
      setStatus(available ? "available" : "taken");
    }, 700);
  }

  return (
    <section className="relative overflow-hidden py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Decorative blurred shapes for depth */}
      {/* <div className="pointer-events-none absolute -left-40 -top-24 w-[520px] h-[520px] rounded-full bg-white/6 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#034D9D]/40 to-[#061b2e]/20 blur-2xl" /> */}

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - Content */}
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl "
            >
              Establishing a Professional Online Presence <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                — Book Your Domain Now
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="mt-6 text-sm max-w-xl text-slate-100/90"
            >
              Owning a personalized domain projects a professional image and
              demonstrates a serious commitment to your brand. WindHans
              Technologies provides comprehensive domain services — fast, secure
              and delightfully simple.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8"
            >
              {/* Search input (visual) */}
              <form
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch"
              >
                <div className="flex-1 backdrop-blur-md bg-white/6 border border-white/10 rounded-2xl p-3 flex items-center shadow-lg">
                  <Search className="mr-3" />
                  <input
                    aria-label="Search domain"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="yourcompany"
                    className="bg-transparent outline-none placeholder:text-white/60 text-lg w-full"
                  />
                  <select
                    value={tld}
                    onChange={(e) => setTld(e.target.value)}
                    className="ml-3 bg-white/8 rounded-lg px-3 py-1 text-sm backdrop-blur-sm"
                  >
                    {tlds.map((x) => (
                      <option key={x} value={x} className="text-black">
                        {x}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  onClick={handleSearch}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#034D9D] to-[#0b5880] hover:from-[#063d66] hover:to-[#083c5a] transition rounded-2xl px-6 py-3 text-white font-semibold shadow-2xl"
                >
                  {status === "searching" ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                  ) : (
                    <Search />
                  )}
                  Search
                </button>
              </form>

              {/* result */}
              <div className="mt-4">
                {status === "available" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center gap-3 bg-white/6 border border-white/12 px-4 py-2 rounded-xl"
                  >
                    <CheckCircle className="text-[#34D399]" />
                    <div>
                      <div className="font-semibold">
                        {query || "yourcompany"}
                        {tld} is available
                      </div>
                      <div className="text-sm text-white/70">
                        Reserve it now — secure private registration & DNS
                        control.
                      </div>
                    </div>
                  </motion.div>
                )}

                {status === "taken" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center gap-3 bg-white/6 border border-white/12 px-4 py-2 rounded-xl"
                  >
                    <XCircle />
                    <div>
                      <div className="font-semibold">
                        {query || "yourcompany"}
                        {tld} is already registered
                      </div>
                      <div className="text-sm text-white/70">
                        We can help with transfer, backorder and premium domain
                        brokerage.
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* CTAs and trust */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
              <a className="inline-flex items-center gap-3 bg-cyan-600 text-slate-100 font-semibold px-5 py-2 rounded-2xl shadow-2xl text-sm">
                Get a Dedicated Account Manager
              </a>
              <a className="text-white/90 underline text-sm">Talk to Sales</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 items-center text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Secure processes • Privacy-first</span>
              </div>
              <div>•</div>
              <div>24/7 Domain Support</div>
              <div>•</div>
              <div>Enterprise-grade SLAs</div>
            </div>
          </div>

          {/* RIGHT - Visual / Mockup */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/6 backdrop-blur-md px-4 py-6">
              <div className="h-64 sm:h-72 w-full rounded-xl bg-[url('/domain1.gif')] bg-cover bg-center relative">
                {/* placeholder overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

                <div className="absolute bottom-2 left-2">
                  <div className="bg-white/6 backdrop-blur-md rounded-xl px-4 py-1.5 border border-white/10 shadow-md">
                    {/* <div className="text-sm text-white/90 font-semibold">
                      example
                    </div> */}
                    <div className="text-sm font-medium">
                      your-comapny-name{""}.com
                    </div>
                    <div className="text-xs text-white/70 mt-0.5">
                      Premium domain ready — Speak to our brokerage team
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="px-4 py-1.5 rounded-xl bg-white/4 backdrop-blur-sm border border-white/8">
                  <div className="text-xs font-medium text-white/80">
                    DNS & Control Panel
                  </div>
                  <div className="font-light text-xs mt-0.5 text-gray-300">
                    Full DNS zone management included
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-xl bg-white/4 backdrop-blur-sm border border-white/8">
                  <div className="text-xs font-medium text-white/80">
                    Domain Registrations
                  </div>
                  <div className="font-light text-xs mt-0.5 text-gray-300">
                    Register multiple or choose one premium
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-xl bg-white/4 backdrop-blur-sm border border-white/8">
                  <div className="text-xs font-medium text-white/80">
                    Privacy & Security
                  </div>
                  <div className="font-light text-xs mt-0.5 text-gray-300">
                    WHOIS privacy, Locking & SSL guidance
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-xl bg-white/4 backdrop-blur-sm border border-white/8">
                  <div className="text-xs font-medium text-white/80">
                    Transfers & Renewals
                  </div>
                  <div className="font-light text-xs mt-0.5 text-gray-300">
                    Hassle-free transfers , Auto-renewal
                  </div>
                </div>
              </div>

              {/* <div className="mt-6 flex items-center justify-around text-sm text-white/80">
                <div>Domain management • DNS • WHOIS privacy</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs px-2 py-1 rounded-md bg-white/6">
                    Enterprise
                  </div>
                  <div className="text-xs px-2 py-1 rounded-md bg-white/6">
                    Bulk
                  </div>
                </div>
              </div> */}
            </div>

            {/* Subtle floating badge */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute -top-4 right-6 bg-gradient-to-r from-cyan-600 to-cyan-600 text-slate-200 px-3 py-1.5 rounded-2xl shadow-xl font-medium text-xs"
            >
              Domain Registration
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}