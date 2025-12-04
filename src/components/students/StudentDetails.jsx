import React from "react";

import { IoCloseCircleOutline } from "react-icons/io5";

export default function StudentDetails({ onClose, student }) {
  return (
    <div className="flex justify-center">
      <div className="relative grid grid-cols-2 w-2xl rounded-md shadow-md p-12 bg-white ">
        <div
          onClick={onClose}
          className="absolute  right-3 top-3 text-red-400 hover:bg-red-400 hover:rounded-2xl hover:text-white cursor-pointer"
        >
          <IoCloseCircleOutline size={25} />
        </div>
        <h2 className="col-span-2 text-2xl font-mono mb-4 border-b flex justify-center">
          Student Details
        </h2>
        <div className="col-span-2 flex justify-between mb-4 space-y-1">
          <div>
            <p>
              <span className="font-semibold">Name:</span> {student.name}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {student.gender}
            </p>
            <p>
              <span className="font-semibold">Area:</span> {student.area}
            </p>
          </div>

          <div className="mr-3.5">
            <p>
              <span className="font-semibold">ID:</span> {student.id}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {student.age}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {student.phoneNo}
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text- font-semibold  space-y-1 ">
            Enrolled Course
          </h1>
          {student.courses.length === 0 && (
            <p className="mt-3 text-gray-500">No courses enrolled</p>
          )}

          <div className="grid grid-cols-2 gap-4 mt-3">
            {student.courses.map((course, index) => {
              const percentage = Math.round(
                (course.sessionsAttended / course.sessionsHeld) * 100
              );

              return (
                <div
                  key={index}
                  className="rounded-lg p-4 shadow-md bg-gray hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-semibold mb-2">{course.name}</h4>

                  <p>
                    <span className="font-semibold">Sessions Held:</span>{" "}
                    {course.sessionsHeld}
                  </p>

                  <p>
                    <span className="font-semibold">Sessions Attended:</span>{" "}
                    {course.sessionsAttended}
                  </p>

                  <p>
                    <span className="font-semibold">Attendance:</span>{" "}
                    {percentage}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
