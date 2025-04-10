import { Nav1 } from "@/components/ui/NavComponents/Nav1";
import { Nav2 } from "@/components/ui/NavComponents/Nav2";
import { Nav3 } from "@/components/ui/NavComponents/Nav3";
import React from "react";

function Navbar() {
  return (
    <div className="bg-yellow-500">
      <div className=" container mx-auto">
        <Nav1></Nav1>
        <Nav2></Nav2>
      </div>
      <div className="bg-white">
       <div className="container mx-auto">
       <Nav3></Nav3>
       </div>
      </div>
    </div>
  );
}

export default Navbar;
