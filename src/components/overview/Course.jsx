import React, { useState } from "react";
import CourseView from "./CourseView";


export default function Course({ data , onSelect}) {

  return (
    <div
  onClick={onSelect}
  className="bg-white rounded-xl  shadow-md hover:shadow-lg hover:border-gray-300 transition cursor-pointer"
>
  <div className="flex justify-between items-center p-4">
    <h2 className="text-lg font-bold">{data.name}</h2>

    <span
      className={`px-3 py-1 text-xs rounded-full ${
        data.isActive
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }`}
    >
      {data.isActive ? "Active" : "Inactive"}
    </span>
  </div>
</div>

  );
}
