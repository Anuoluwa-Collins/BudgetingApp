import Sidebar from "../components/SideBar";
import DashCards from "../components/DashCards";
import { useState, useEffect } from "react";
import {
  Coffee,
  DollarSign,
  FilmIcon,
  Gift,
  HouseIcon,
  Menu,
  MoveDown,
  MoveUp,
  ShoppingCart,
  X,
} from "lucide-react";

const DashBoard = () => {
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
      <div className="flex-1 p-4 md:p-6 w-full">
        <div className="mb-6 mt-12 md:mt-0">
          <h1 className="text-2xl font-bold">This Month</h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <DashCards
            name="Total budget"
            title="$5000"
            Logo={<DollarSign />}
            description="Monthly allocation"
          />
          <DashCards
            name="Expenses"
            title="$2356.98"
            Logo={<MoveUp color="green" />}
            description="46.3% of budget used"
          />
          <DashCards
            name="Remaing"
            title="$2608.65"
            Logo={<MoveDown color="Red" />}
            description="53.7% of budget remaining"
          />
        </div>

        {/* Recent Expenses */}
        <div className="bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold p-4">Recent Expenses</h3>
          <div className="overflow-x-auto">
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <HouseIcon color="green" />
                <p className="px-4">Housing</p>
              </div>
              <div className="flex items-center">
                <p className="px-4 text-gray-500 hidden sm:block">oct 1</p>
                <span className="font-medium">$1200.00</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <ShoppingCart color="green" />
                <p className="px-4">Groceries</p>
              </div>
              <div className="flex items-center">
                <p className="px-4 text-gray-500 hidden sm:block">oct 7</p>
                <span className="font-medium">$457.43</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <FilmIcon color="green" />
                <p className="px-4">Entertainment</p>
              </div>
              <div className="flex items-center">
                <p className="px-4 text-gray-500 hidden sm:block">oct 10</p>
                <span className="font-medium">$129.43</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <Coffee color="green" />
                <p className="px-4">Coffee</p>
              </div>
              <div className="flex items-center">
                <p className="px-4 text-gray-500 hidden sm:block">oct 10</p>
                <span className="font-medium">$129.43</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-4">
              <div className="flex items-center">
                <Gift color="green" />
                <p className="px-4">Gifts</p>
              </div>
              <div className="flex items-center">
                <p className="px-4 text-gray-500 hidden sm:block">oct 10</p>
                <span className="font-medium">$700.43</span>
              </div>
            </div>
            <hr />
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

export default DashBoard;
