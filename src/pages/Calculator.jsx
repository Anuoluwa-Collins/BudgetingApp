import CalculatorForm from "../components/CalculatorForm";
import Sidebar from "../components/SideBar";
import { PiggyBank, Menu, X } from "lucide-react";
import { useState } from "react";

const Calculator = () => {
   const [showSidebar, setShowSidebar] = useState(false);
  
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    return (
      <div className="flex flex-col md:flex-row relative">
        {/* Mobile menu toggle */}
        <div className="md:hidden fixed top-4 left-4 z-20">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-800 text-white rounded-md"
          >
            {showSidebar ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Sidebar - hidden on mobile by default, shown when toggled */}
        <div
          className={`${
            showSidebar ? "block" : "hidden"
          } md:block fixed md:static w-full md:w-1/4 z-10 h-screen bg-white md:bg-transparent`}
        >
          <Sidebar />
        </div>
      <div className="w-full md:w-3/4">
        <div className="flex flex-col md:flex-row w-full">
          <div className="bg-green-700 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-4">
              Income Tax <br /> Calculator
            </h1>
            <p className="text-center mb-6">
              Tools & Calculator <br />
              to slash your bills
            </p>
            <PiggyBank className="text-white" size={100} />
          </div>
          <div className="w-full md:w-1/2">
            <CalculatorForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;