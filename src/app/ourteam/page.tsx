"use client";

import React from "react";
import BreadCrumb from "./BreadCrumb";
import CompanyLeader from "./CompanyLeader";
import TeamMembers from "./TeamLeader"; 
import AllTeamMember from "./AllTeamMember"; 

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <CompanyLeader />
      <TeamMembers />
      <AllTeamMember />
    </div>
  );
};

export default page;