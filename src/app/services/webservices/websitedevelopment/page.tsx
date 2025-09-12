"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import WebsiteDesignProcess from "./WebsiteDesignProcess";
import LeadingCompany from "./LeadingCompany";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <WebsiteDesignProcess />
      <LeadingCompany />
    </div>
  );
};

export default page;