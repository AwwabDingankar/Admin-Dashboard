import React, { useState } from "react";
import CourseView from "./Course-View";

export default function Course() {
  const [showCourseView, setShowCourseView] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = {
    onClose: () => setShowCourseView(false),
    onStart: () => setIsActive(true),
    onStop: () => setIsActive(false),
    isActive
  };

  return (
    <div>
      <div
        onClick={() => setShowCourseView(true)}
        className="bg-white p-4 rounded-md shadow-md hover:bg-gray-200  cursor-pointer"
      >
        <h2 className="text-lg text-center font-bold">Qawaid Al-Muslah</h2>
        <div className="flex flex-col items-center justify-center m-10 rounded-md shadow-md ">
          <p>1st & 3rd Thursday </p>
          <p>After Isha</p>
        </div>
        <div className="flex justify-center">
          <p>Status: <span className={isActive ? "text-green-500" : "text-red-500"}>{isActive ? "Active" : "InActive"}</span></p>
        </div>
      </div>
      {showCourseView && <CourseView {...handleClick} />}
    </div>
  );
}
