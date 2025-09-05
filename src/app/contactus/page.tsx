"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import ContactCard from "./ContactCard";
import Info from "./Info";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <Info />
      <ContactCard />
    </div>
  );
};

export default page;