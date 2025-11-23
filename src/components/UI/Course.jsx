import React, { useState } from "react";
import CourseView from "./CourseView";


export default function Course({ data , onSelect}) {

  return (
    <div
      onClick={onSelect}
      className="bg-white p-4 rounded-md shadow-md hover:bg-gray-200  cursor-pointer"
    >
      <h2 className="text-lg text-center font-bold">{data.name}</h2>
      <div className="flex flex-col items-center justify-center m-10 rounded-md shadow-md ">
        <p>{data.days}</p>
        <p>{data.time}</p>
      </div>
      <div className="flex justify-center">
        <p>
          Status:{" "}
          <span className={data.isActive ? "text-green-500" : "text-red-500"}>
            {data.isActive ? "Active" : "InActive"}
          </span>
        </p>
      </div>
    </div>
  );
}
