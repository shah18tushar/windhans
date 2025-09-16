"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import Importance from "./Importance";
import StatSection from "./StatSection";
import Services_Benefits from "./Services_Benefits";
import CTA from "./CTA";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <Importance />
      <StatSection />
      <CTA />
      {/* <Services_Benefits /> */}
    </div>
  );
};

export default page;
