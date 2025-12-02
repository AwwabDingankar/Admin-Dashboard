import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';
import student from "../../data/students.json";

export default function StudentsTable() {
  const [search, setSearch] = useState("");

  const filteredStudents = student.filter((s) => (
    s.name.toLowerCase().includes(search.toLowerCase()) || s.gender.toLowerCase().includes(search.toLowerCase()) || s.area.toLowerCase().includes(search.toLowerCase()) || s.id.toString().includes(search.toString())
  ));

  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl font-semibold"><h1>Registered Students</h1></div>
        <div className="flex text-gray-600 relative">
          {search ?  "" : <FaSearch className="top-2 left-2 absolute" size={18}/>}
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="border px-1.5 py-1 rounded mb-1" placeholder="     search..." />
        </div>
      </div>
      <table className="border border-gray-400 w-full text-left bg-white ">
        <thead className="bg-gray-400">
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
          {filteredStudents.map((s) => (
            <tr key={s.id} className="hover:bg-gray-200 hover:cursor-pointer">
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
    </>
  );
}
