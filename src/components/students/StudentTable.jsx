import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import student from "../../data/students.json";
import StudentDetails from "./StudentDetails";

export default function StudentsTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsView, setDetailsView] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = student.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.gender.toLowerCase().includes(search.toLowerCase()) ||
      s.area.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toString().includes(search.toString()) ||
      s.gender.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {detailsView ? (
        <StudentDetails 
        onClose={() => setDetailsView(false)}
        student={selectedStudent} />
      ) : (
        <>
          <div className="flex justify-between">
            <div className="text-2xl font-semibold">
              <h1>Registered Students</h1>
            </div>
            <p className="mt-1 font-mono">
              (Total Students:{" "}
              <span className="font-semibold">{student.length}</span>)
            </p>
            <div className="flex text-gray-600 relative">
              {search ? (
                ""
              ) : (
                <FaSearch className="top-2 left-2 absolute" size={18} />
              )}
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="border px-1.5 py-1 rounded mb-1"
                placeholder="     search..."
              />
            </div>
          </div>
          <table className="border border-gray-400 w-full text-left bg-white ">
            <thead className="bg-gray-300">
              <tr>
                <th className="border px-3 py-2">Id</th>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Gender</th>
                <th className="border px-3 py-2">Age</th>
                <th className="border px-3 py-2">Area</th>
                <th className="border px-3 py-2">Phone No</th>
              </tr>
            </thead>

            <tbody>
              {currentStudents.map((s) => (
                <tr
                  key={s.id}
                  onClick={() => {
                    setDetailsView(true);
                    setSelectedStudent(s);
                  }}
                  className="hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                >
                  <td className="border px-3 py-2">{s.id}</td>
                  <td className="border px-3 py-2">{s.name}</td>
                  <td className="border px-3 py-2">{s.gender}</td>
                  <td className="border px-3 py-2">{s.age}</td>
                  <td className="border px-3 py-2">{s.area}</td>
                  <td className="border px-3 py-2">{s.phoneNo}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer hover:bg-gray-800 hover:text-white"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`${
                  currentPage === index + 1 ? "bg-gray-800 text-white" : ""
                } px-3 py-1 border rounded-4xl disabled:opacity-50`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => {
                goToPage(currentPage + 1);
              }}
              className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50 hover:bg-gray-800 hover:text-white"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
