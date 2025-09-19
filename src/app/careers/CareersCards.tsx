// "use client";

// import React, { useState } from "react";

// const THEME = "#034D9D";

// // Define types for jobs and categories
// type Job = {
//   id: string;
//   title: string;
//   description: string;
//   tags: string[];
//   applyUrl: string;
// };

// type JobCategory =
//   | "development"
//   | "design"
//   | "marketing"
//   | "customer-service"
//   | "operations"
//   | "finance"
//   | "management";

// type JobData = {
//   [K in JobCategory]: Job[];
// };

// const jobData: JobData = {
//   development: [
//     {
//       id: "dev-1",
//       title: "Frontend Developer",
//       description:
//         "Build responsive UIs for enterprise apps using React, Tailwind and best practices.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   design: [
//     {
//       id: "design-1",
//       title: "Product Designer",
//       description:
//         "Design delightful user experiences and high-fidelity prototypes.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   marketing: [
//     {
//       id: "mkt-1",
//       title: "Marketing Specialist",
//       description: "Drive demand generation, campaigns and analytics.",
//       tags: ["Hybrid", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   "customer-service": [
//     {
//       id: "cs-1",
//       title: "Customer Support Engineer",
//       description: "Help customers onboard and solve technical issues.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   operations: [
//     {
//       id: "ops-1",
//       title: "Operations Manager",
//       description: "Streamline processes, manage vendors and optimize cost.",
//       tags: ["Hybrid", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   finance: [
//     {
//       id: "fin-1",
//       title: "Finance Analyst",
//       description: "Work on budgeting, forecasting and vendor payments.",
//       tags: ["Office", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   management: [
//     {
//       id: "mgmt-1",
//       title: "Engineering Manager",
//       description:
//         "Lead engineering teams and own delivery of high-quality software.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
// };

// const categories = [
//   { id: "all", label: "View all" },
//   { id: "development", label: "Development" },
//   { id: "design", label: "Design" },
//   { id: "marketing", label: "Marketing" },
//   { id: "customer-service", label: "Customer Service" },
//   { id: "operations", label: "Operations" },
//   { id: "finance", label: "Finance" },
//   { id: "management", label: "Management" },
// ];

// type CategoryId = (typeof categories)[number]["id"];

// const JobCard: React.FC<{ job: Job }> = ({ job }) => (
//   <article className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-6 border-t">
//     <div className="sm:flex-1">
//       <h3 className="text-xl font-semibold">{job.title}</h3>
//       <p className="mt-2 text-gray-600">{job.description}</p>

//       <div className="mt-3 flex flex-wrap gap-3">
//         {job.tags.map((t: string) => (
//           <span
//             key={t}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm text-gray-700"
//           >
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>

//     <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center">
//       <a
//         href={job.applyUrl}
//         className="inline-flex items-center gap-2 text-[#034D9D] font-medium hover:underline underline-offset-4"
//         aria-label={`Apply for ${job.title}`}
//       >
//         Apply Now
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 12h14M12 5l7 7-7 7"
//           />
//         </svg>
//       </a>
//     </div>
//   </article>
// );

// export default function CareersCards() {
//   const [selected, setSelected] = useState<CategoryId>("all");

//   // compute which jobs to show
//   const allJobs: Job[] = Object.values(jobData).flat();
//   const visibleJobs: Job[] =
//     selected === "all" ? allJobs : jobData[selected as JobCategory] ?? [];

//   return (
//     <section className="bg-white text-gray-900">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//           {/* LEFT: sticky content on large screens */}
//           <aside className="lg:col-span-3 mb-8 lg:mb-0">
//             <div className="lg:sticky lg:top-24 self-start">
//               {/* <span
//                 className="inline-block text-sm font-semibold px-3 py-1 rounded-full border"
//                 style={{ borderColor: THEME, color: THEME }}
//               >
//                 We're hiring!
//               </span> */}

//               <h2 className="mt-6 text-[50px] font-light font-serif text-[#034D9D] leading-tight">
//                 Our <br /> Open Roles
//               </h2>

//               <p className="mt-4 text-gray-600">
//                 Explore current openings across product, engineering, design and
//                 more. Join WindHans Technologies and help build enterprise-grade
//                 solutions.
//               </p>

//               <a
//                 href="mailto:hr@windhans.com"
//                 className="inline-flex items-center mt-6 px-5 py-3 rounded-full border text-[#034D9D] font-medium hover:bg-[#034D9D] hover:text-white transition"
//                 style={{ borderColor: THEME }}
//               >
//                 Contact HR
//               </a>
//             </div>
//           </aside>

//           {/* RIGHT: tabs + job list */}
//           <div className="lg:col-span-9">
//             <div className="rounded-md p-6">
//               {/* Hero text */}
//               <div className="md:flex md:items-start md:justify-between">
//                 <div className="md:max-w-full">
//                   <p
//                     className="inline-block text-sm font-semibold px-3 py-1 mb-2 rounded-full border"
//                     style={{ borderColor: THEME, color: THEME }}
//                   >
//                     We're hiring!
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <h1 className="text-3xl lg:text-4xl font-light leading-tight">
//                       Be part of our mission
//                     </h1>
//                     <a
//                       className="inline-flex items-center px-5 py-2 rounded-full border text-[#034D9D] font-medium text-sm hover:bg-[#034D9D] hover:text-white transition cursor-pointer"
//                       style={{ borderColor: THEME }}
//                     >
//                       Direct Apply...!
//                     </a>
//                   </div>

//                   <p className="mt-3 text-gray-600">
//                     We're looking for passionate people to join us on our
//                     mission. We value flat hierarchies, clear communication, and
//                     full ownership and responsibility.
//                   </p>

//                   {/* TABS (category tabs) */}
//                   <div className="mt-6">
//                     <div
//                       role="tablist"
//                       aria-label="Job categories"
//                       className="flex flex-wrap gap-3 overflow-x-auto p-2"
//                     >
//                       {categories.map((c) => {
//                         const isSelected = selected === c.id;
//                         return (
//                           <button
//                             key={c.id}
//                             id={`tab-${c.id}`}
//                             role="tab"
//                             aria-selected={isSelected}
//                             aria-controls={`panel-${c.id}`}
//                             onClick={() => setSelected(c.id)}
//                             className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034D9D] ${
//                               isSelected
//                                 ? "bg-[#034D9D] text-white border border-[#034D9D]"
//                                 : "border text-gray-700"
//                             }`}
//                             style={
//                               isSelected
//                                 ? { borderColor: THEME }
//                                 : { borderColor: "#e5e7eb" }
//                             }
//                           >
//                             {c.label}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>

//               </div>

//               {/* Job Panels */}
//               <div
//                 id={`panel-${selected}`}
//                 role="tabpanel"
//                 aria-labelledby={`tab-${selected}`}
//                 className="mt-3"
//               >
//                 {visibleJobs.length === 0 ? (
//                   <p className="text-gray-600">
//                     No openings in this category right now.
//                   </p>
//                 ) : (
//                   <div>
//                     {visibleJobs.map((job) => (
//                       <JobCard key={job.id} job={job} />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// "use client";

// import React, { useState } from "react";
// import Form from "./Form";

// const THEME = "#034D9D";

// // Define types for jobs and categories
// type Job = {
//   id: string;
//   title: string;
//   description: string;
//   tags: string[];
//   applyUrl: string;
// };

// type JobCategory =
//   | "development"
//   | "design"
//   | "marketing"
//   | "customer-service"
//   | "operations"
//   | "finance"
//   | "management";

// type JobData = {
//   [K in JobCategory]: Job[];
// };

// const jobData: JobData = {
//   development: [
//     {
//       id: "dev-1",
//       title: "Frontend Developer",
//       description:
//         "Build responsive UIs for enterprise apps using React, Tailwind and best practices.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   design: [
//     {
//       id: "design-1",
//       title: "Product Designer",
//       description:
//         "Design delightful user experiences and high-fidelity prototypes.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   marketing: [
//     {
//       id: "mkt-1",
//       title: "Marketing Specialist",
//       description: "Drive demand generation, campaigns and analytics.",
//       tags: ["Hybrid", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   "customer-service": [
//     {
//       id: "cs-1",
//       title: "Customer Support Engineer",
//       description: "Help customers onboard and solve technical issues.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   operations: [
//     {
//       id: "ops-1",
//       title: "Operations Manager",
//       description: "Streamline processes, manage vendors and optimize cost.",
//       tags: ["Hybrid", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   finance: [
//     {
//       id: "fin-1",
//       title: "Finance Analyst",
//       description: "Work on budgeting, forecasting and vendor payments.",
//       tags: ["Office", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
//   management: [
//     {
//       id: "mgmt-1",
//       title: "Engineering Manager",
//       description:
//         "Lead engineering teams and own delivery of high-quality software.",
//       tags: ["100% remote", "Full-time"],
//       applyUrl: "#",
//     },
//   ],
// };

// const categories = [
//   { id: "all", label: "View all" },
//   { id: "development", label: "Development" },
//   { id: "design", label: "Design" },
//   { id: "marketing", label: "Marketing" },
//   { id: "customer-service", label: "Customer Service" },
//   { id: "operations", label: "Operations" },
//   { id: "finance", label: "Finance" },
//   { id: "management", label: "Management" },
// ];

// type CategoryId = (typeof categories)[number]["id"];

// type ModalProps = {
//   open: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// };

// const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
//   if (!open) return null;
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
//       aria-modal="true"
//       role="dialog"
//     >
//       <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
//           aria-label="Close"
//         >
//           &times;
//         </button>
//         <div className="p-6">{children}</div>
//       </div>
//     </div>
//   );
// };

// const JobCard: React.FC<{ job: Job; onApply: () => void }> = ({
//   job,
//   onApply,
// }) => (
//   <article className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-6 border-t">
//     <div className="sm:flex-1">
//       <h3 className="text-xl font-semibold">{job.title}</h3>
//       <p className="mt-2 text-gray-600">{job.description}</p>

//       <div className="mt-3 flex flex-wrap gap-3">
//         {job.tags.map((t: string) => (
//           <span
//             key={t}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm text-gray-700"
//           >
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>

//     <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center">
//       <button
//         onClick={onApply}
//         className="inline-flex items-center gap-2 text-[#034D9D] font-medium hover:underline underline-offset-4"
//         aria-label={`Apply for ${job.title}`}
//         type="button"
//       >
//         Apply Now
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 12h14M12 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   </article>
// );

// export default function CareersCards() {
//   const [selected, setSelected] = useState<CategoryId>("all");
//   const [showForm, setShowForm] = useState(false);

//   // compute which jobs to show
//   const allJobs: Job[] = Object.values(jobData).flat();
//   const visibleJobs: Job[] =
//     selected === "all" ? allJobs : jobData[selected as JobCategory] ?? [];

//   const handleOpenForm = () => setShowForm(true);
//   const handleCloseForm = () => setShowForm(false);

//   return (
//     <section className="bg-white text-gray-900">
//       <div>
//         <Modal open={showForm} onClose={handleCloseForm}>
//           <Form />
//         </Modal>
//       </div>
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//           {/* LEFT: sticky content on large screens */}
//           <aside className="lg:col-span-3 mb-8 lg:mb-0">
//             <div className="lg:sticky lg:top-24 self-start">
//               <h2 className="mt-6 text-[50px] font-light font-serif text-[#034D9D] leading-tight">
//                 Our <br /> Open Roles
//               </h2>

//               <p className="mt-4 text-gray-600">
//                 Explore current openings across product, engineering, design and
//                 more. Join WindHans Technologies and help build enterprise-grade
//                 solutions.
//               </p>

//               <a
//                 href="mailto:hr@windhans.com"
//                 className="inline-flex items-center mt-6 px-5 py-3 rounded-full border text-[#034D9D] font-medium hover:bg-[#034D9D] hover:text-white transition"
//                 style={{ borderColor: THEME }}
//               >
//                 Contact HR
//               </a>
//             </div>
//           </aside>

//           {/* RIGHT: tabs + job list */}
//           <div className="lg:col-span-9">
//             <div className="rounded-md p-6">
//               {/* Hero text */}
//               <div className="md:flex md:items-start md:justify-between">
//                 <div className="md:max-w-full">
//                   <p
//                     className="inline-block text-sm font-semibold px-3 py-1 mb-2 rounded-full border"
//                     style={{ borderColor: THEME, color: THEME }}
//                   >
//                     We're hiring!
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <h1 className="text-3xl lg:text-4xl font-light leading-tight">
//                       Be part of our mission
//                     </h1>
//                     <button
//                       className="inline-flex items-center px-5 py-2 rounded-full border text-[#034D9D] font-medium text-sm hover:bg-[#034D9D] hover:text-white transition cursor-pointer"
//                       style={{ borderColor: THEME }}
//                       type="button"
//                       onClick={handleOpenForm}
//                     >
//                       Direct Apply...!
//                     </button>
//                   </div>

//                   <p className="mt-3 text-gray-600">
//                     We're looking for passionate people to join us on our
//                     mission. We value flat hierarchies, clear communication, and
//                     full ownership and responsibility.
//                   </p>

//                   {/* TABS (category tabs) */}
//                   <div className="mt-6">
//                     <div
//                       role="tablist"
//                       aria-label="Job categories"
//                       className="flex flex-wrap gap-3 overflow-x-auto p-2"
//                     >
//                       {categories.map((c) => {
//                         const isSelected = selected === c.id;
//                         return (
//                           <button
//                             key={c.id}
//                             id={`tab-${c.id}`}
//                             role="tab"
//                             aria-selected={isSelected}
//                             aria-controls={`panel-${c.id}`}
//                             onClick={() => setSelected(c.id)}
//                             className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034D9D] ${
//                               isSelected
//                                 ? "bg-[#034D9D] text-white border border-[#034D9D]"
//                                 : "border text-gray-700"
//                             }`}
//                             style={
//                               isSelected
//                                 ? { borderColor: THEME }
//                                 : { borderColor: "#e5e7eb" }
//                             }
//                           >
//                             {c.label}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Job Panels */}
//               <div
//                 id={`panel-${selected}`}
//                 role="tabpanel"
//                 aria-labelledby={`tab-${selected}`}
//                 className="mt-3"
//               >
//                 {visibleJobs.length === 0 ? (
//                   <p className="text-gray-600">
//                     No openings in this category right now.
//                   </p>
//                 ) : (
//                   <div>
//                     {visibleJobs.map((job) => (
//                       <JobCard
//                         key={job.id}
//                         job={job}
//                         onApply={handleOpenForm}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















"use client";

import React, { useState } from "react";
import Form from "./Form";

const THEME = "#034D9D";

// Define types for jobs and categories
type Job = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  applyUrl: string;
};

type JobCategory =
  | "development"
  | "design"
  | "marketing"
  | "customer-service"
  | "operations"
  | "finance"
  | "management";

type JobData = {
  [K in JobCategory]: Job[];
};

const jobData: JobData = {
  development: [
    {
      id: "dev-1",
      title: "Frontend Developer",
      description:
        "Build responsive UIs for enterprise apps using React, Tailwind and best practices.",
      tags: ["100% remote", "Full-time"],
      applyUrl: "#",
    },
  ],
  design: [
    {
      id: "design-1",
      title: "Product Designer",
      description:
        "Design delightful user experiences and high-fidelity prototypes.",
      tags: ["100% remote", "Full-time"],
      applyUrl: "#",
    },
  ],
  marketing: [
    {
      id: "mkt-1",
      title: "Marketing Specialist",
      description: "Drive demand generation, campaigns and analytics.",
      tags: ["Hybrid", "Full-time"],
      applyUrl: "#",
    },
  ],
  "customer-service": [
    {
      id: "cs-1",
      title: "Customer Support Engineer",
      description: "Help customers onboard and solve technical issues.",
      tags: ["100% remote", "Full-time"],
      applyUrl: "#",
    },
  ],
  operations: [
    {
      id: "ops-1",
      title: "Operations Manager",
      description: "Streamline processes, manage vendors and optimize cost.",
      tags: ["Hybrid", "Full-time"],
      applyUrl: "#",
    },
  ],
  finance: [
    {
      id: "fin-1",
      title: "Finance Analyst",
      description: "Work on budgeting, forecasting and vendor payments.",
      tags: ["Office", "Full-time"],
      applyUrl: "#",
    },
  ],
  management: [
    {
      id: "mgmt-1",
      title: "Engineering Manager",
      description:
        "Lead engineering teams and own delivery of high-quality software.",
      tags: ["100% remote", "Full-time"],
      applyUrl: "#",
    },
  ],
};

const categories = [
  { id: "all", label: "View all" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "customer-service", label: "Customer Service" },
  { id: "operations", label: "Operations" },
  { id: "finance", label: "Finance" },
  { id: "management", label: "Management" },
];

type CategoryId = (typeof categories)[number]["id"];

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white max-w-3xl w-full mx-4"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
};

const JobCard: React.FC<{ job: Job; onApply: () => void }> = ({
  job,
  onApply,
}) => (
  <article className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-6 border-t">
    <div className="sm:flex-1">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="mt-2 text-gray-600">{job.description}</p>

      <div className="mt-3 flex flex-wrap gap-3">
        {job.tags.map((t: string) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center">
      <button
        onClick={onApply}
        className="inline-flex items-center gap-2 text-[#034D9D] font-medium hover:underline underline-offset-4"
        aria-label={`Apply for ${job.title}`}
        type="button"
      >
        Apply Now
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </article>
);

export default function CareersCards() {
  const [selected, setSelected] = useState<CategoryId>("all");
  const [showForm, setShowForm] = useState(false);

  // compute which jobs to show
  const allJobs: Job[] = Object.values(jobData).flat();
  const visibleJobs: Job[] =
    selected === "all" ? allJobs : jobData[selected as JobCategory] ?? [];

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <section className="bg-white text-gray-900">
      <div>
        <Modal open={showForm} onClose={handleCloseForm}>
          <Form />
        </Modal>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* LEFT: sticky content on large screens */}
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-24 self-start">
              <h2 className="mt-6 text-[50px] font-light font-serif text-[#034D9D] leading-tight">
                Our <br /> Open Roles
              </h2>

              <p className="mt-4 text-gray-600">
                Explore current openings across product, engineering, design and
                more. Join WindHans Technologies and help build enterprise-grade
                solutions.
              </p>

              <a
                href="mailto:hr@windhans.com"
                className="inline-flex items-center mt-6 px-5 py-3 rounded-full border text-[#034D9D] font-medium hover:bg-[#034D9D] hover:text-white transition"
                style={{ borderColor: THEME }}
              >
                Contact HR
              </a>
            </div>
          </aside>

          {/* RIGHT: tabs + job list */}
          <div className="lg:col-span-9">
            <div className="rounded-md p-6">
              {/* Hero text */}
              <div className="md:flex md:items-start md:justify-between">
                <div className="md:max-w-full">
                  <p
                    className="inline-block text-sm font-semibold px-3 py-1 mb-2 rounded-full border"
                    style={{ borderColor: THEME, color: THEME }}
                  >
                    We're hiring!
                  </p>
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl lg:text-4xl font-light leading-tight">
                      Be part of our mission
                    </h1>
                    <button
                      className="inline-flex items-center px-5 py-2 rounded-full border text-[#034D9D] font-medium text-sm hover:bg-[#034D9D] hover:text-white transition cursor-pointer"
                      style={{ borderColor: THEME }}
                      type="button"
                      onClick={handleOpenForm}
                    >
                      Direct Apply...!
                    </button>
                  </div>

                  <p className="mt-3 text-gray-600">
                    We're looking for passionate people to join us on our
                    mission. We value flat hierarchies, clear communication, and
                    full ownership and responsibility.
                  </p>

                  {/* TABS (category tabs) */}
                  <div className="mt-6">
                    <div
                      role="tablist"
                      aria-label="Job categories"
                      className="flex flex-wrap gap-3 overflow-x-auto p-2"
                    >
                      {categories.map((c) => {
                        const isSelected = selected === c.id;
                        return (
                          <button
                            key={c.id}
                            id={`tab-${c.id}`}
                            role="tab"
                            aria-selected={isSelected}
                            aria-controls={`panel-${c.id}`}
                            onClick={() => setSelected(c.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034D9D] ${
                              isSelected
                                ? "bg-[#034D9D] text-white border border-[#034D9D]"
                                : "border text-gray-700"
                            }`}
                            style={
                              isSelected
                                ? { borderColor: THEME }
                                : { borderColor: "#e5e7eb" }
                            }
                          >
                            {c.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Panels */}
              <div
                id={`panel-${selected}`}
                role="tabpanel"
                aria-labelledby={`tab-${selected}`}
                className="mt-3"
              >
                {visibleJobs.length === 0 ? (
                  <p className="text-gray-600">
                    No openings in this category right now.
                  </p>
                ) : (
                  <div>
                    {visibleJobs.map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        onApply={handleOpenForm}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}