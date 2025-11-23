import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

export default function CreateCourse({ onCreate }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    date: "",
    days: "",
    time: "",
    location: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = { ...form, id: uuidv4() };
    onCreate(newArray);
    setShowForm(false);
    setForm({
      id: "",
      name: "",
      date: "",
      days: "",
      time: "",
      location: "",
    });
  };

  return (
    <>
      {!showForm ? (
        <div
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center bg-white rounded-md shadow-md hover:bg-gray-200 min-h-53 cursor-pointer"
        >
          <button className="flex flex-col items-center cursor-pointer ">
            <IoIosAdd size={40} />
            Add Course
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 backdrop-blur-3xl">
          <form
            onSubmit={handleSubmit}
            className="relative bg-white p-6 rounded-md shadow-md max-w-lg"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 cursor-pointer bg-red-500 hover:bg-red-700 text-white px-2 pb-1  rounded-lg"
            >
              close
            </button>
            <h2 className="text-xl font-bold mb-4">Create New Course</h2>
            <label htmlFor="" className="font-semibold">
              Course Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Course Name"
              className="border rounded-md p-2 w-full mb-3"
            />
            <label htmlFor="" className="font-semibold">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="Starting Date"
              className="border rounded-md p-2 w-full mb-3"
            />
            <label htmlFor="" className="font-semibold">
              Days
            </label>
            <input
              type="text"
              name="days"
              value={form.days}
              onChange={handleChange}
              placeholder="enter days"
              className="border rounded-md p-2 w-full mb-3"
            />
            <label htmlFor="" className="font-semibold">
              Time
            </label>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="enter time"
              className="border rounded-md p-2 w-full mb-3"
            />
            <label htmlFor="" className="font-semibold">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="border rounded-md p-2 w-full mb-3"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white my-6 px-4 py-2 rounded-md cursor-pointer w-full"
            >
              Create
            </button>
          </form>
        </div>
      )}
    </>
  );
}
