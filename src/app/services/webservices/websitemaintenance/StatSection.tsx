"use client";

import React, { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode; // icon can be any renderable React node
  value: string | number; // or more precise type if always string
  label: string;
  desc?: string;
};

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, desc }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/8">
        {icon}
      </div>
      <div className="flex items-center gap-4">
        <div>
          <div className="text-2xl md:text-3xl font-semibold">{value}</div>
          <div className="text-xs text-slate-300">{label}</div>
        </div>
      </div>
      {desc && <p className="mt-1 text-sm text-slate-200/90 text-center">{desc}</p>}
    </div>
  );
};

const StatSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extralight drop-shadow-lg">
            Continuous Monitoring
          </h2>
          <p className="mt-4 text-sm text-gray-300 max-w-lg mx-auto">
            Proactive upkeep to keep your site secure, fast, and immaculately
            available, always staying one step ahead of issues.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
            }
            value="99.99%"
            label="Uptime"
            desc="High availability backed by proactive monitoring and immediate alerts."
          />

          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14.6L15 11V7a4 4 0 10-8 0v4l-3.6 3.6a2 2 0 000 2.828L7 17h8z"
                />
              </svg>
            }
            value="24/7"
            label="Monitoring"
            desc="Real-time checks and incident response to minimize disruptions."
          />

          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v4a1 1 0 001 1h3v2a4 4 0 004 4h2a4 4 0 004-4v-2h3a1 1 0 001-1V7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 7V5a5 5 0 0110 0v2"
                />
              </svg>
            }
            value="Daily"
            label="Backups"
            desc="Automated restore points to recover quickly from failures or data loss."
          />

          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c.6 0 1-.4 1-1V6a1 1 0 10-2 0v4c0 .6.4 1 1 1z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.6 13.2a9 9 0 11-17.2 0A7.5 7.5 0 0112 3.5a7.5 7.5 0 018.6 9.7z"
                />
              </svg>
            }
            value="Monthly"
            label="Security Scans"
            desc="Regular vulnerability scans and patching to reduce attack surface."
          />
        </div>
      </div>
    </div>
  );
};

export default StatSection;









