// "use client";

// import React, { useState } from "react";
// import {
//   FaLinkedin,
//   FaTwitter,
//   FaEnvelope,
//   FaArrowRight,
//   FaArrowLeft,
// } from "react-icons/fa";

// const AllTeamMember = () => {
//   const [activeMember, setActiveMember] = useState(0);

//   const teamMembers = [
//     {
//       name: "Rajesh Kumar",
//       designation: "Chief Technology Officer",
//       experience: "14+ Years",
//       expertise: "Cloud Architecture & DevOps",
//       education: "M.Tech - Computer Science, IIT Delhi",
//       image: "/team1.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Priya Sharma",
//       designation: "VP of Product Development",
//       experience: "12+ Years",
//       expertise: "Product Strategy & UX",
//       education: "MS - Human Computer Interaction, Carnegie Mellon",
//       image: "/team2.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Amit Patel",
//       designation: "Head of AI Research",
//       experience: "15+ Years",
//       expertise: "Machine Learning & Neural Networks",
//       education: "PhD - Artificial Intelligence, MIT",
//       image: "/team3.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Neha Gupta",
//       designation: "Director of Engineering",
//       experience: "13+ Years",
//       expertise: "Software Architecture & Scalability",
//       education: "M.S. - Software Engineering, Stanford",
//       image: "/team4.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Vikram Singh",
//       designation: "Cybersecurity Lead",
//       experience: "11+ Years",
//       expertise: "Enterprise Security & Threat Intelligence",
//       education: "M.Tech - Cybersecurity, IIIT Hyderabad",
//       image: "/team5.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Ananya Desai",
//       designation: "Data Science Manager",
//       experience: "10+ Years",
//       expertise: "Predictive Analytics & Big Data",
//       education: "PhD - Data Science, UC Berkeley",
//       image: "/team6.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Sandeep Mishra",
//       designation: "Cloud Solutions Architect",
//       experience: "12+ Years",
//       expertise: "Multi-cloud Infrastructure & Migration",
//       education: "M.S. - Cloud Computing, Georgia Tech",
//       image: "/team7.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Divya Reddy",
//       designation: "UX/UI Design Lead",
//       experience: "9+ Years",
//       expertise: "Enterprise Design Systems",
//       education: "M.Des - Interaction Design, RISD",
//       image: "/team8.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Rahul Mehta",
//       designation: "Blockchain Specialist",
//       experience: "8+ Years",
//       expertise: "Distributed Ledger Technologies",
//       education: "M.S. - Cryptography, ETH Zurich",
//       image: "/team9.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Sanjana Iyer",
//       designation: "QA & Testing Manager",
//       experience: "11+ Years",
//       expertise: "Automation & Performance Testing",
//       education: "M.Tech - Software Systems, BITS Pilani",
//       image: "/team10.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Karan Malhotra",
//       designation: "DevOps Lead",
//       experience: "10+ Years",
//       expertise: "CI/CD Pipelines & Infrastructure",
//       education: "M.S. - Computer Engineering, UT Austin",
//       image: "/team11.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Meera Joshi",
//       designation: "Mobile Development Head",
//       experience: "9+ Years",
//       expertise: "iOS & Android Native Development",
//       education: "M.S. - Mobile Computing, USC",
//       image: "/team12.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Arjun Kapoor",
//       designation: "Business Development Director",
//       experience: "14+ Years",
//       expertise: "Strategic Partnerships & Alliances",
//       education: "MBA - International Business, INSEAD",
//       image: "/team13.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//     {
//       name: "Pooja Verma",
//       designation: "Technical Project Manager",
//       experience: "12+ Years",
//       expertise: "Agile Methodologies & Delivery",
//       education: "PMP, CSM, M.Tech - IT Project Management",
//       image: "/team14.jpg",
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//   ];

//   const nextMember = () => {
//     setActiveMember((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
//   };

//   const prevMember = () => {
//     setActiveMember((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
//   };

//   return (
//     <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-blue-50 to-slate-50 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-100/20 to-transparent rounded-full blur-2xl"></div>

//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#034D9D]/30 shadow-lg shadow-blue-100/50 mb-6">
//             <span className="text-xs font-semibold text-[#034D9D] tracking-widest uppercase">
//               EXPERT TEAM
//             </span>
//           </div>
//           <h2 className="text-4xl font-light font-serif bg-gradient-to-r from-slate-900 via-[#034D9D] to-slate-800 bg-clip-text text-transparent mb-4">
//             Our Distinguished Team
//           </h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             Meet the brilliant minds driving innovation and excellence at
//             Windhans Technologies. Our team combines decades of experience with
//             cutting-edge expertise to deliver exceptional solutions.
//           </p>
//         </div>

//         {/* Team Members Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/70 shadow-lg shadow-blue-50/30 hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
//             >
//               <div className="h-48 bg-gradient-to-r from-[#034D9D] to-blue-600 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4">
//                   <h3 className="text-white font-semibold text-lg">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-100 text-sm">{member.designation}</p>
//                 </div>
//               </div>
//               <div className="p-5">
//                 <div className="flex items-center mb-4">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#034D9D] to-blue-600 flex items-center justify-center mr-3">
//                     <span className="text-white text-xs font-bold">
//                       {member.experience.split("+")[0]}+
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-500">Experience</p>
//                     <p className="text-sm font-medium text-slate-800">
//                       {member.experience}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <p className="text-xs text-slate-500">Expertise</p>
//                   <p className="text-sm font-medium text-slate-800">
//                     {member.expertise}
//                   </p>
//                 </div>

//                 <div className="mb-4">
//                   <p className="text-xs text-slate-500">Education</p>
//                   <p className="text-sm font-medium text-slate-800 line-clamp-2">
//                     {member.education}
//                   </p>
//                 </div>

//                 <div className="flex space-x-3 pt-3 border-t border-slate-100">
//                   <a
//                     href={member.linkedin}
//                     className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//                   >
//                     <FaLinkedin className="w-3 h-3" />
//                   </a>
//                   <a
//                     href={member.twitter}
//                     className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//                   >
//                     <FaTwitter className="w-3 h-3" />
//                   </a>
//                   <a
//                     href={member.email}
//                     className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//                   >
//                     <FaEnvelope className="w-3 h-3" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Team Member Carousel */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/70 shadow-2xl shadow-blue-100/30 p-8 mb-16">
//           <div className="flex justify-between items-center mb-8">
//             <h3 className="text-2xl font-light text-slate-800">
//               Featured Team Member
//             </h3>
//             <div className="flex space-x-3">
//               <button
//                 onClick={prevMember}
//                 className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//               >
//                 <FaArrowLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={nextMember}
//                 className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//               >
//                 <FaArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center gap-8">
//             <div className="w-full lg:w-1/3">
//               <div className="bg-gradient-to-br from-[#034D9D] to-blue-700 rounded-2xl h-80 overflow-hidden relative">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                 <div className="absolute bottom-6 left-6">
//                   <h3 className="text-white text-2xl font-semibold">
//                     {teamMembers[activeMember].name}
//                   </h3>
//                   <p className="text-blue-100">
//                     {teamMembers[activeMember].designation}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full lg:w-2/3">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
//                   <h4 className="text-sm font-semibold text-[#034D9D] mb-2">
//                     Experience
//                   </h4>
//                   <p className="text-lg font-medium text-slate-800">
//                     {teamMembers[activeMember].experience}
//                   </p>
//                   <p className="text-sm text-slate-600 mt-1">in the industry</p>
//                 </div>

//                 <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
//                   <h4 className="text-sm font-semibold text-[#034D9D] mb-2">
//                     Area of Expertise
//                   </h4>
//                   <p className="text-lg font-medium text-slate-800">
//                     {teamMembers[activeMember].expertise}
//                   </p>
//                 </div>

//                 <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 md:col-span-2">
//                   <h4 className="text-sm font-semibold text-[#034D9D] mb-2">
//                     Education
//                   </h4>
//                   <p className="text-lg font-medium text-slate-800">
//                     {teamMembers[activeMember].education}
//                   </p>
//                 </div>

//                 <div className="md:col-span-2 flex justify-between items-center pt-6 border-t border-slate-100">
//                   <h4 className="text-sm font-semibold text-[#034D9D]">
//                     Connect with {teamMembers[activeMember].name.split(" ")[0]}
//                   </h4>
//                   <div className="flex space-x-3">
//                     <a
//                       href={teamMembers[activeMember].linkedin}
//                       className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//                     >
//                       <FaLinkedin className="w-4 h-4" />
//                     </a>
//                     <a
//                       href={teamMembers[activeMember].twitter}
//                       className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//                     >
//                       <FaTwitter className="w-4 h-4" />
//                     </a>
//                     <a
//                       href={teamMembers[activeMember].email}
//                       className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white"
//                     >
//                       <FaEnvelope className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center">
//           <h3 className="text-2xl font-light text-slate-800 mb-6">
//             Ready to Work With Our Experts?
//           </h3>
//           <button className="group flex items-center space-x-2 bg-gradient-to-r from-[#034D9D] to-blue-700 hover:from-blue-700 hover:to-[#034D9D] text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5 mx-auto">
//             <span className="font-medium">Schedule a Consultation</span>
//             <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllTeamMember;










"use client";

import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
  FaArrowLeft,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";
import { LuAward } from "react-icons/lu";

const AllTeamMember = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "leadership", name: "Executive Leadership" },
    { id: "technology", name: "Technology" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business Development" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "Chief Technology Officer",
      experience: "14+ Years",
      expertise: "Cloud Architecture & DevOps",
      education: "M.Tech - Computer Science, IIT Delhi",
      department: "leadership",
      achievements: [
        "AWS Certified",
        "Google Cloud Architect",
        "Published Author",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "VP of Product Development",
      experience: "12+ Years",
      expertise: "Product Strategy & UX",
      education: "MS - Human Computer Interaction, Carnegie Mellon",
      department: "leadership",
      achievements: ["Ex-Microsoft", "10+ Patents", "Forbes 30 Under 30"],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 3,
      name: "Amit Patel",
      designation: "Head of AI Research",
      experience: "15+ Years",
      expertise: "Machine Learning & Neural Networks",
      education: "PhD - Artificial Intelligence, MIT",
      department: "technology",
      achievements: [
        "TED Speaker",
        "NeurIPS Best Paper",
        "Open Source Contributor",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 4,
      name: "Neha Gupta",
      designation: "Director of Engineering",
      experience: "13+ Years",
      expertise: "Software Architecture & Scalability",
      education: "M.S. - Software Engineering, Stanford",
      department: "technology",
      achievements: [
        "Ex-Google",
        "Scaled to 10M+ Users",
        "Women in Tech Award",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 5,
      name: "Vikram Singh",
      designation: "Cybersecurity Lead",
      experience: "11+ Years",
      expertise: "Enterprise Security & Threat Intelligence",
      education: "M.Tech - Cybersecurity, IIIT Hyderabad",
      department: "technology",
      achievements: [
        "CISSP Certified",
        "Black Hat Speaker",
        "Security Researcher",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 6,
      name: "Ananya Desai",
      designation: "Data Science Manager",
      experience: "10+ Years",
      expertise: "Predictive Analytics & Big Data",
      education: "PhD - Data Science, UC Berkeley",
      department: "technology",
      achievements: [
        "Kaggle Grandmaster",
        "PhD from UC Berkeley",
        "AI Ethics Board",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 7,
      name: "Sandeep Mishra",
      designation: "Cloud Solutions Architect",
      experience: "12+ Years",
      expertise: "Multi-cloud Infrastructure & Migration",
      education: "M.S. - Cloud Computing, Georgia Tech",
      department: "technology",
      achievements: ["Multi-Cloud Expert", "Cost Optimization", "Mentor"],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 8,
      name: "Divya Reddy",
      designation: "UX/UI Design Lead",
      experience: "9+ Years",
      expertise: "Enterprise Design Systems",
      education: "M.Des - Interaction Design, RISD",
      department: "design",
      achievements: [
        "Award Winning Designer",
        "Design System Architect",
        "Accessibility Expert",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 9,
      name: "Rahul Mehta",
      designation: "Blockchain Specialist",
      experience: "8+ Years",
      expertise: "Distributed Ledger Technologies",
      education: "M.S. - Cryptography, ETH Zurich",
      department: "technology",
      achievements: [
        "Ethereum Core Contributor",
        "DeFi Pioneer",
        "Web3 Advocate",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 10,
      name: "Sanjana Iyer",
      designation: "QA & Testing Manager",
      experience: "11+ Years",
      expertise: "Automation & Performance Testing",
      education: "M.Tech - Software Systems, BITS Pilani",
      department: "technology",
      achievements: [
        "Testing Framework Inventor",
        "Quality Evangelist",
        "Conference Speaker",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 11,
      name: "Karan Malhotra",
      designation: "DevOps Lead",
      experience: "10+ Years",
      expertise: "CI/CD Pipelines & Infrastructure",
      education: "M.S. - Computer Engineering, UT Austin",
      department: "technology",
      achievements: [
        "Kubernetes Expert",
        "CI/CD Optimization",
        "Infrastructure as Code",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 12,
      name: "Meera Joshi",
      designation: "Mobile Development Head",
      experience: "9+ Years",
      expertise: "iOS & Android Native Development",
      education: "M.S. - Mobile Computing, USC",
      department: "technology",
      achievements: [
        "App Store Features",
        "Performance Optimization",
        "Cross-Platform",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 13,
      name: "Arjun Kapoor",
      designation: "Business Development Director",
      experience: "14+ Years",
      expertise: "Strategic Partnerships & Alliances",
      education: "MBA - International Business, INSEAD",
      department: "business",
      achievements: [
        "$100M+ Deals Closed",
        "Global Partnerships",
        "Market Expansion",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      id: 14,
      name: "Pooja Verma",
      designation: "Technical Project Manager",
      experience: "12+ Years",
      expertise: "Agile Methodologies & Delivery",
      education: "PMP, CSM, M.Tech - IT Project Management",
      department: "technology",
      achievements: [
        "Agile Coach",
        "Delivery Excellence",
        "Stakeholder Management",
      ],
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  ];

  const filteredMembers =
    activeDepartment === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeDepartment);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-5 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-[#034D9D]/80 shadow-lg shadow-blue-100/50 mb-3">
            <span className="text-xs font-semibold text-[#034D9D] tracking-widest uppercase">
              ELITE PROFESSIONALS
            </span>
          </div>
          <h2 className="text-5xl font-light font-serif bg-gradient-to-r from-slate-900 via-[#034D9D] to-slate-800 bg-clip-text text-transparent mb-3 leading-relaxed">
            Our Distinguished Team
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds driving innovation and excellence at
            Windhans Technologies. Our team combines decades of experience with
            cutting-edge expertise to deliver exceptional solutions.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 shadow-lg shadow-blue-50/30 p-2 flex">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeDepartment === dept.id
                    ? "bg-gradient-to-r from-[#034D9D] to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-600 hover:text-[#034D9D]"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200/70 shadow-2xl shadow-blue-100/20 hover:shadow-blue-200/40 transition-all duration-500 overflow-hidden group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Member Header with Gradient */}
              <div className="relative h-20 bg-gradient-to-br from-[#034D9D] to-blue-700 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-0 right-0 w-30 h-30 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white font-extralight font-serif text-lg">
                    {member.name}
                  </h3>
                  <p className="text-blue-100 text-xs font-medium mt-0">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6">
                {/* Experience & Education */}

                <div className="flex items-center gap-6 mb-5">
                  <div className="flex items-center ">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mr-3 shadow-lg shadow-emerald-500/30">
                      <FaGraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Education</p>
                      <p className="text-sm font-semibold text-slate-800 line-clamp-1">
                        Top Tier
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#034D9D] to-blue-600 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/30">
                      <LuAward className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Experience</p>
                      <p className="text-sm font-semibold text-slate-800">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-5">
                  <p className="text-xs text-slate-500 mb-1">
                    Area of Expertise
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    {member.expertise}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <p className="text-xs text-slate-500 mb-2">
                    Notable Achievements
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.slice(0, 2).map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-blue-50 text-[#034D9D] px-3 py-1 rounded-full flex items-center"
                      >
                        <FaStar className="w-3 h-3 mr-1 text-amber-500" />
                        {achievement}
                      </span>
                    ))}
                    {/* {member.achievements.length > 2 && (
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        +{member.achievements.length - 2} more
                      </span>
                    )} */}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex justify-between items-center pt-5 border-t border-slate-300">
                  <span className="text-xs text-slate-500">
                    Connect with {member.name.split(" ")[0]}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.email}
                      className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-[#034D9D] hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <FaEnvelope className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#034D9D] to-blue-700 rounded-3xl shadow-2xl shadow-blue-500/30 p-10 mb-20">
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
    </section>
  );
};

export default AllTeamMember;