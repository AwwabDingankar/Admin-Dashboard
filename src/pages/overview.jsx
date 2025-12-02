import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Course from "../components/overview/Course";
import CreateCourse from "../components/overview/CreateCourse";
import CourseView from "../components/overview/CourseView";

export default function Overview() {
  const [courses, setCourses] = useLocalStorage("courses", [
        {
          id: 1,
          name: "Qawaid Al-Muslah",
          days: "1st & 3rd Thursday",
          time: "After Isha",
          location: "Masjid Al-Falah Kondhwa",
          isActive: false,
        },
      ]);

  const [coursesView, setCoursesView] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  };

  const openCourseView = (id) => {
    setCurrentId(id);
    setCoursesView(true);
  };

  const removeCourse = () => {
    setCourses((prev) => prev.filter((c) => c.id !== currentId));
    setCoursesView(false);
  };

  const toggleCourseActive = () => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === currentId
          ? { ...course, isActive: !course.isActive }
          : course
      )
    );
  };

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  grid-rows-3 gap-4">
        {courses.map((c) => (
          <Course key={c.id} data={c} onSelect={() => openCourseView(c.id)} />
        ))}

        <CreateCourse onCreate={addCourse} />

        {coursesView && (
          <CourseView
            onClose={() => setCoursesView(false)}
            onDelete={removeCourse}
            onToggle={toggleCourseActive}
            course={courses.find((c) => c.id === currentId)}
          />
        )}
      </div>
    </>
  );
}
