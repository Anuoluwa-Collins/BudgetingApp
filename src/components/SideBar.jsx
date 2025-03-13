import { useState } from "react";
import { Link } from "react-router";
import {
  Home,
  LayoutDashboard,
  Calendar,
  Calculator,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard"); // Default selected page
  const menuItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "calendar",
      icon: <Calendar size={20} />,
      label: "Calendar",
      path: "/Calender",
    },
    {
      id: "calculator",
      icon: <Calculator size={20} />,
      label: "Calculator",
      path: "/calculator",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-teal-900 text-white w-full md:w-full p-4 overflow-y-auto">
      <Link to="/" className="no-underline text-white">
        <div className="flex items-center mb-6 px-2">
          <Home className="mr-2" size={24} />
          <h1 className="text-xl font-bold">Budgeter</h1>
        </div>
      </Link>

      <div className="flex-1">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-md transition-colors ${
                    selectedPage === item.id
                      ? "bg-green-800 text-white"
                      : "text-gray-300 hover:bg-green-950"
                  }`}
                  onClick={() => setSelectedPage(item.id)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <Link
          to="/"
          className="flex items-center p-2 text-gray-300 rounded-md hover:bg-red-600 transition-colors"
        >
          <LogOut className="mr-3" size={20} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
