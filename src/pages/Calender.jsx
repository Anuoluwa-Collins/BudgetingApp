import DropDown from "../components/DropDown";
import Sidebar from "../components/SideBar";
import SpreadSheet from "../components/SpreadSheet";
import { useMonth } from "../context/MonthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Calender = () => {
  const { selectedMonth, monthlyData } = useMonth();
  const dataObj = monthlyData[selectedMonth] ?? {};

  const dataArray = Object.entries(dataObj).map(([category, values]) => ({
    category,
    budget: values?.budget ?? 0,
    actual: values?.actual ?? 0,
  }));

  console.log("Data for Charts:", dataArray); // Debugging

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-800 text-white rounded-md"
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-white shadow-lg md:shadow-none transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 md:w-1/4 z-10`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <h1 className="text-xl font-semibold text-center mb-4">
          Budget - {selectedMonth}
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {/* Budget Section */}
          <div className="border border-green-900 w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col items-center">
            <DropDown />
            <p className="bg-green-500 text-white w-full text-center py-2">
              - Your Monthly Budget -
            </p>
          </div>

          {/* Spreadsheet Section */}
          <div className="border border-green-900 w-full p-4 flex flex-col">
            <SpreadSheet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
