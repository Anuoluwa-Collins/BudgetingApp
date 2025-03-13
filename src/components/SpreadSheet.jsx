import { useMonth } from "../context/MonthContext";
import PieChartComponent from "./PieChartComponent";
import BarChartComponent from "./BarChartComponent";

const SpreadSheet = () => {
  const { selectedMonth, monthlyData } = useMonth();
  const data = monthlyData[selectedMonth] || {};

  // Function to sum up budget and actual values for each category
  const getTotal = (category, key) => {
    const categoryData = Array.isArray(data[category]) ? data[category] : []; // Ensure it's an array
    return categoryData.reduce((sum, item) => sum + (item[key] || 0), 0);
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md w-full p-4 bg-white">
      <h2 className="text-center text-lg font-bold bg-green-900 text-white py-2">
        {selectedMonth} Summary
      </h2>
      <div className="mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-right">Budget</th>
              <th className="p-2 text-right">Actual</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((category, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{category}</td>
                <td className="p-2 text-right text-green-700">
                  ${getTotal(category, "budget").toLocaleString()}
                </td>
                <td className="p-2 text-right text-green-700">
                  ${getTotal(category, "actual").toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <PieChartComponent data={data} />
      </div>
      <div className="mt-4">
        <BarChartComponent data={data} />
      </div>
    </div>
  );
};

export default SpreadSheet;
