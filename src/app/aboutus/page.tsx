"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import AboutSection from "./InfoSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "./WhyChooseUs";
import ClientsBase from "./ClientsBase";
import CTA from "@/components/CTA";
import Technologies from "./Technologies";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <AboutSection />
      <WhyChooseUs />
      <ClientsBase />
      <WelcomeSection />
      <Technologies />
      <CTA />
    </div>
  );
};

export default page;
