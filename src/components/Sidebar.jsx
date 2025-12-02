import React from "react";
import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-gray-900 min-h-screen w-64">
        <nav>
          <div className="p-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-800" : ""
                } flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-700`
              }
            >
              <GrOverview className="mr-2" />
              Overview
            </NavLink>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-800" : ""
                } flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-700`
              }
            >
              <PiStudentFill className="mr-2" />
              Students
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-gray-800" : ""
                } flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-700`
              }
            >
              <TbReportSearch className="mr-2" />
              Reports
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
