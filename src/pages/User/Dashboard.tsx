import { useState } from "react";
import DropdownUser from "../../components/Header/UserNavbar";
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import BlogsTable from "./_partials/BlogsTable";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <div className="w-60 bg-white p-3 mt-16">
        <ul>
          <li
            className={`cursor-pointer mb-2 p-2 pl-4 rounded-xl hover:bg-red-400 hover:text-white ${
              activeTab === "dashboard" ? "bg-red-400 text-white" : "text-black"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <div className="flex gap-x-2 items-center">
              <HomeIcon className="w-5 h-5" />
              Dashboard
            </div>
          </li>
          <li
            className={`cursor-pointer p-2 pl-4 rounded-xl ${
              activeTab === "user" ? "bg-red-400 text-white" : "text-black"
            }`}
            onClick={() => setActiveTab("user")}
          >
            <div className="flex gap-x-2 items-center">
              <UsersIcon className="w-5 h-5" />
              Blogs
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <header className="bg-blue-400 text-white py-4 px-6 flex justify-end items-center text-2xl font-bold shadow-md w-full z-10">
          <div className="flex items-center space-x-20">
            <DarkModeSwitcher />
            <DropdownUser />
          </div>
        </header>

        <div className="flex-1 bg-gray-100 overflow-y-auto p-4">
          <div className="text-3xl font-semibold">
            {activeTab === "dashboard" && <div>Dashboard</div>}
            {activeTab === "user" && <BlogsTable />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
