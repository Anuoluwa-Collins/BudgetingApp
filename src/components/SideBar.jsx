import { Link } from "react-router";
import {
  Home,
  LayoutDashboard,
  Calendar,
  Calculator,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className=" bg-gray-900 text-white p-12 flex flex-col gap-6 ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <Home size={24} /> Future Edge
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link
          to="/Dashboard"
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md"
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link
          to="/Calender"
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md"
        >
          <Calendar size={20} /> Calendar
        </Link>
        <Link
          to="/Calculator"
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md"
        >
          <Calculator size={20} /> Calculator
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <Link
          to="/"
          className="flex items-center gap-2 p-2 bg-red-600 hover:bg-red-700 rounded-md"
        >
          <LogOut size={20} /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
