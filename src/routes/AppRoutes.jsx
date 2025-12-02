import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Students from "../pages/students";
import Overview from "../pages/overview";
import Reports from "../pages/reports";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="students" element={<Students />} />
        <Route path="reports" element={<Reports />}/>
      </Route>
    </Routes>
  );
}
