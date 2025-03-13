import Sidebar from "../components/SideBar";
import DashCards from "../components/DashCards";
import { useState } from "react";
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
        } md:block fixed md:static  md:w-1/4 z-10 h-screen bg-white md:bg-transparent`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:p-6 mt-12 md:mt-0">
        <div className="mb-6">
          
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
    </div>
  );
};

export default DashBoard;
