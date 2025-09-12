"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import BookingDomain from "./BookingDomain";
import FreedomChoose from "./Freedom_Choose";
import GenerateBusinessName from "./GenerateBusinessName";
import FAQ from "./FAQ";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <FreedomChoose />
      <BookingDomain />
      <GenerateBusinessName />
      <FAQ />
    </div>
  );
};

export default page;