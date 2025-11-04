import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 bg-gray-100">
            <Outlet />
          </main>   
        </div>
      </div>
    </>
  );
}
