import DropDown from "../components/DropDown";
import Sidebar from "../components/SideBar";

import SpreadSheet from "../components/SpreadSheet";
import { useMonth } from "../context/MonthContext";

const Calender = () => {
  const { selectedMonth, monthlyData } = useMonth();
  const dataObj = monthlyData[selectedMonth] ?? {};

  // Convert object to array
  const dataArray = Object.entries(dataObj).map(([category, values]) => ({
    category,
    budget: values?.budget ?? 0,
    actual: values?.actual ?? 0,
  }));

  console.log("Data for Charts:", dataArray); // Debugging

  return (
    <div className="flex ">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <h1>Budget Calendar - {selectedMonth}</h1>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <div className="border border-green-900 w-[30%] flex flex-col items-center justify-between p-4">
            <DropDown />
            <p className="bg-green-500 w-full text-center">
              -Your Monthly Budget-
            </p>
          </div>

          <div className="border border-green-900 flex flex-col items-center justify-between p-4 w-full">
            <SpreadSheet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
