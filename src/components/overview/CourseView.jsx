import React, { useState, useEffect } from "react";
import students from "../../data/students.json";

import { IoCloseCircleOutline } from "react-icons/io5";
import { RiDeleteBin4Line } from "react-icons/ri";

export default function CourseView({ onClose, onDelete, course, onToggle }) {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [averageAttendance, setAverageAttendance] = useState(0);
  const buttonText = course.isActive ? "Stop Session " : "Start Session";
  const buttonColor = course.isActive
    ? "bg-red-500 hover:bg-red-700"
    : "bg-blue-500 hover:bg-blue-700";

  useEffect(() => {
    const enrolled = students
      .filter((s) => s.courses.some((c) => c.name === course.name))
      .map((s) => {
        const courseObj = s.courses.find((c) => c.name === course.name);
        return {
          name: s.name,
          sessionsAttended: courseObj.sessionsAttended,
          sessionsHeld: courseObj.sessionsHeld,
        };
      });
    setEnrolledStudents(enrolled);

    if (enrolled.length > 0) {
      const totalPercentage = enrolled.reduce((sum, student) => {
        return sum + (student.sessionsAttended / student.sessionsHeld) * 100;
      }, 0);
      const avg = Math.round(totalPercentage / enrolled.length);
      setAverageAttendance(avg);
    } else {
      setAverageAttendance(0);
    }
  }, [course.name]);

  return (
    <div className="overly absolute inset-0 flex items-center justify-center bg-gray-100 backdrop-blur-3xl">
      <div className="content relative bg-white w-xl max-h-[90vh] overflow-auto rounded-md shadow-lg p-4">
        <button
          onClick={() => onDelete(course.id)}
          title="Delete Course"
          className="absolute left-5 top-5 cursor-pointer"
        >
          <RiDeleteBin4Line size={25} />
        </button>
        <div
          onClick={onClose}
          className="absolute  right-3 top-3 text-red-400 hover:bg-red-400 hover:rounded-2xl hover:text-white cursor-pointer"
        >
          <IoCloseCircleOutline size={25} />
        </div>
        <div className="flex flex-col p-8  border-b-1 border-b-gray-300 rounded-b-lg ">
          <h1 className="flex items-center p-4 justify-center text-4xl font-bold">
            {course.name}
          </h1>
          <p>Starting Date: {course.date ?? "Not Set"}</p>
          <p className="mt-3.5 font-semibold">
            {course.days} {course.time}
          </p>
          <h3 className="mt-2.5">{course.location}</h3>
          <div className="flex justify-center ">
            <button
              onClick={() => onToggle(course.id)}
              className={`${buttonColor} text-white min-w-3xs  mt-5 rounded cursor-pointer`}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className="flex justify-around border-b-1 border-b-gray-300 rounded-b-lg">
          <div className="  m-3.5 p-2.5">
            Total Durs <b>11</b>
          </div>
          <div className="m-3.5 p-2.5">
            Avg_Attendance <b>{averageAttendance}%</b>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <table className="table-auto border-collapse border text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 w-2xs">
                  Student Name
                </th>
                <th className="border border-gray-300 p-2">Attendance (%)</th>
              </tr>
            </thead>
            <tbody>
              {enrolledStudents.map((enrolled) => (
                <tr>
                  <td className="border border-gray-300 p-2">
                    {enrolled.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {Math.round((enrolled.sessionsAttended / enrolled.sessionsHeld) * 100)}%
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td className="border border-gray-300 p-2">Tameem Parkar</td>
                <td className="border border-gray-300 p-2">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Awwab Dingankar</td>
                <td className="border border-gray-300 p-2">80%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Hashir Firfire</td>
                <td className="border border-gray-300 p-2">96%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Hussain Nore</td>
                <td className="border border-gray-300 p-2">100%</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
