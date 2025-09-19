// "use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   address: string;
//   applyingFor: string;
//   experience: string;
//   reference: string;
//   resume: File | null;
//   termsAccepted: boolean;
// };

// const Form = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     applyingFor: "",
//     experience: "",
//     reference: "",
//     resume: null,
//     termsAccepted: false,
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       // Type guard for checkbox
//       const target = e.target as HTMLInputElement;
//       setFormData({ ...formData, [name]: target.checked });
//     } else if (type === "file") {
//       // Type guard for file input
//       const target = e.target as HTMLInputElement;
//       setFormData({ ...formData, [name]: target.files && target.files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // Do form validation here
//     console.log("Submitting", formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-semibold text-[#034D9D] mb-6">
//           Application Form
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="John"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//                 required
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="+91 9876543210"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="john.doe@example.com"
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Address
//             </label>
//             <textarea
//               name="address"
//               id="address"
//               rows={3}
//               value={formData.address}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="123, Street name, City, State, Zip"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="applyingFor"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Applying for the Post <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="applyingFor"
//               id="applyingFor"
//               required
//               value={formData.applyingFor}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="e.g. Senior Developer"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="experience"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Experience
//             </label>
//             <textarea
//               name="experience"
//               id="experience"
//               rows={3}
//               value={formData.experience}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="Describe your past experience..."
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="reference"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Reference
//             </label>
//             <input
//               type="text"
//               name="reference"
//               id="reference"
//               value={formData.reference}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="Name & contact of a reference"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="resume"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Upload Resume
//             </label>
//             <input
//               type="file"
//               name="resume"
//               id="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleChange}
//               className="mt-1 block w-full text-gray-700"
//             />
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               id="termsAccepted"
//               required
//               checked={formData.termsAccepted}
//               onChange={handleChange}
//               className="h-4 w-4 text-[#034D9D] border-gray-300 rounded focus:ring-[#034D9D] focus:ring-2"
//             />
//             <label
//               htmlFor="termsAccepted"
//               className="ml-2 block text-sm text-gray-700"
//             >
//               I accept the{" "}
//               <a href="#" className="text-[#034D9D] underline">
//                 Terms of Service
//               </a>
//               <span className="text-red-500">*</span>
//             </label>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#034D9D] hover:bg-[#023f86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034D9D] transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;










// "use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   address: string;
//   applyingFor: string;
//   experience: string;
//   reference: string;
//   resume: File | null;
//   termsAccepted: boolean;
// };

// const Form = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     applyingFor: "",
//     experience: "",
//     reference: "",
//     resume: null,
//     termsAccepted: false,
//   });

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       const target = e.target as HTMLInputElement;
//       setFormData({ ...formData, [name]: target.checked });
//     } else if (type === "file") {
//       const target = e.target as HTMLInputElement;
//       setFormData({ ...formData, [name]: target.files && target.files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // Do form validation here
//     console.log("Submitting", formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-semibold text-[#034D9D] mb-6">
//           Application Form
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="John"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//                 required
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="+91 9876543210"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//                 placeholder="john.doe@example.com"
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Address
//             </label>
//             <textarea
//               name="address"
//               id="address"
//               rows={3}
//               value={formData.address}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="123, Street name, City, State, Zip"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="applyingFor"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Applying for the Post <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="applyingFor"
//               id="applyingFor"
//               required
//               value={formData.applyingFor}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="e.g. Senior Developer"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="experience"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Experience
//             </label>
//             <textarea
//               name="experience"
//               id="experience"
//               rows={3}
//               value={formData.experience}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="Describe your past experience..."
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="reference"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Reference
//             </label>
//             <input
//               type="text"
//               name="reference"
//               id="reference"
//               value={formData.reference}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
//               placeholder="Name & contact of a reference"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="resume"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Upload Resume
//             </label>
//             <input
//               type="file"
//               name="resume"
//               id="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleChange}
//               className="mt-1 block w-full text-gray-700"
//             />
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               id="termsAccepted"
//               required
//               checked={formData.termsAccepted}
//               onChange={handleChange}
//               className="h-4 w-4 text-[#034D9D] border-gray-300 rounded focus:ring-[#034D9D] focus:ring-2"
//             />
//             <label
//               htmlFor="termsAccepted"
//               className="ml-2 block text-sm text-gray-700"
//             >
//               I accept the{" "}
//               <a href="#" className="text-[#034D9D] underline">
//                 Terms of Service
//               </a>
//               <span className="text-red-500">*</span>
//             </label>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#034D9D] hover:bg-[#023f86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034D9D] transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;




















"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  applyingFor: string;
  experience: string;
  reference: string;
  resume: File | null;
  termsAccepted: boolean;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    applyingFor: "",
    experience: "",
    reference: "",
    resume: null,
    termsAccepted: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else if (type === "file") {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.files && target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Do form validation here
    console.log("Submitting", formData);
  };

  return (
    <div className="flex items-center justify-center py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white  p-0">
        <h2 className="text-2xl font-semibold text-[#034D9D] mb-6">
          Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
              placeholder="123, Street name, City, State, Zip"
            />
          </div>

          <div>
            <label
              htmlFor="applyingFor"
              className="block text-sm font-medium text-gray-700"
            >
              Applying for the Post <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="applyingFor"
              id="applyingFor"
              required
              value={formData.applyingFor}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
              placeholder="e.g. Senior Developer"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience
            </label>
            <textarea
              name="experience"
              id="experience"
              rows={3}
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
              placeholder="Describe your past experience..."
            />
          </div>

          <div>
            <label
              htmlFor="reference"
              className="block text-sm font-medium text-gray-700"
            >
              Reference
            </label>
            <input
              type="text"
              name="reference"
              id="reference"
              value={formData.reference}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#034D9D] focus:border-[#034D9D]"
              placeholder="Name & contact of a reference"
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="mt-1 block w-full text-gray-700"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              required
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-[#034D9D] border-gray-300 rounded focus:ring-[#034D9D] focus:ring-2"
            />
            <label
              htmlFor="termsAccepted"
              className="ml-2 block text-sm text-gray-700"
            >
              I accept the{" "}
              <a href="#" className="text-[#034D9D] underline">
                Terms of Service
              </a>
              <span className="text-red-500">*</span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#034D9D] hover:bg-[#023f86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034D9D] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;