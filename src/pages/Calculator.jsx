import CalculatorForm from "../components/CalculatorForm";
import Sidebar from "../components/SideBar";
import { PiggyBank, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Always show sidebar on desktop
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      } else {
        // On initial mobile load, hide sidebar
        setShowSidebar(false);
      }
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile menu toggle */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-800 text-white rounded-md"
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar container */}
      <div
        className={`fixed md:sticky top-0 left-0 h-full bg-white shadow-lg md:shadow-none transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 md:w-1/4 z-10`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 w-full mt-12 md:mt-0">
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

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Calculator;
