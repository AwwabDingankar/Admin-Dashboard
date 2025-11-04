import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <>
      <nav>
        <div className="flex justify-between p-3.5 bg-gray-800 text-white shadow-md">
          <div className="font-bold">Admin Dashboard</div>
          <Link to="#" className="flex items-center p-1 rounded-md hover:bg-gray-700"><CgProfile className="mr-2" />Profile</Link>
        </div>
      </nav>
    </>
  );
}


