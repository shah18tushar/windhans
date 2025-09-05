"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, Clock, Globe } from "lucide-react";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative my-20"
      style={{
        backgroundImage: "url('/img1.png')",
      }}
    >
      {/* Blue overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#044182] via-[#1b357c] to-[#193591] opacity-95"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact Form */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-extralight font-serif text-white mb-4">
                  Let's Get In Touch!
                </h1>
                <p className="text-lg text-blue-100">
                  Have a project or a question? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all py-2"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all py-2"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="inquiry"
                  placeholder="Your inquiry about"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all py-2"
                  required
                />

                <textarea
                  name="description"
                  placeholder="Please describe what you need."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all py-2 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Send Message
                  <ExternalLink size={18} />
                </button>
              </form>
            </div>

            {/* Right side - Company Info */}

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full border border-gray-100">
                {/* Company Logo/Header */}
                <div className="text-center mb-6">
                  <div className="flex flex-col items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#034D9D] rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-xl">W</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#034D9D]">
                      Windhans Technologies
                    </h2>
                    <p className="text-gray-500 text-sm mt-0">
                      IT Services & Solutions
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {/* Phone */}
                    <div className="flex items-start gap-4 text-gray-700">
                      <div className="mt-0.5">
                        <Phone size={18} className="text-[#034D9D]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <a
                          href="tel:+912012345678"
                          className="text-sm font-medium text-[#034D9D] hover:text-blue-700 transition-colors block mt-1"
                        >
                          +91 20 1234 5678
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 text-gray-700">
                      <div className="mt-0.5">
                        <Mail size={18} className="text-[#034D9D]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a
                          href="mailto:contact@windhans.com"
                          className="text-[#034D9D] hover:text-blue-700 transition-colors break-all block mt-1"
                        >
                          contact@windhans.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="mt-0.5">
                      <MapPin size={18} className="text-[#034D9D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-sm leading-relaxed">
                        123 Tech Park, Innovation Road,
                        <br />
                        Pune, Maharashtra 411014
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 text-gray-700">
                    <div className="mt-0.5">
                      <Clock size={18} className="text-[#034D9D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <p className="text-sm mt-1">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-300 mt-2">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#034D9D] hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                      <MapPin size={16} />
                      Get directions on Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;


