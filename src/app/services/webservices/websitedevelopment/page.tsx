"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import WebsiteDesignProcess from "./WebsiteDesignProcess";
import LeadingCompany from "./LeadingCompany";
import CustomWebDesign from "./CustomWebDesign";
import CTA from "@/components/CTA";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <WebsiteDesignProcess />
      <LeadingCompany />
      <CustomWebDesign />
      <CTA/>
    </div>
  );
};

export default page;