import { useState } from "react";
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

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
            <div className="flex gap-x-2 items-center  ">
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
            <div className="flex gap-x-2 items-center  ">
              <UsersIcon className="w-5 h-5" />
              User
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className=" bg-gray-200 w-full">
        <header className="bg-blue-600 text-white py-4 ml-53 px-6 text-2xl font-bold shadow-md w-full fixed top-0 left-0 z-10">
          Spell CMSssss
        </header>
        <div className="text-3xl font-semibold mt-20 ml-4">
          {activeTab === "dashboard" && <div>Dashboard</div>}
          {activeTab === "user" && <div>Nirmal Saru Magar</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
