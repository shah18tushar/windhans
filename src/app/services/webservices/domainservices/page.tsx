"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import BookingDomain from "./BookingDomain";
import FreedomChoose from "./Freedom_Choose";
import KeyPoints from "./KeyPoints";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <FreedomChoose />
      <BookingDomain />
      <KeyPoints />
    </div>
  );
};

export default page;