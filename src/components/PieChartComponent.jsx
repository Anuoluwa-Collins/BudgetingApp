import { useMonth } from "../context/MonthContext";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const PieChartComponent = () => {
  const { selectedMonth, monthlyData } = useMonth();
  const data = monthlyData[selectedMonth] || {};

  // Define colors for each category
  const categoryColors = {
    income: "#4CAF50", // Green
    savings: "#2196F3", // Blue
    bills: "#FF9800", // Orange
    expenses: "#F44336", // Red
    debt: "#9C27B0", // Purple
  };

  // Function to calculate total budget for each category
  const getTotal = (category) => {
    const categoryData = Array.isArray(data[category]) ? data[category] : [];
    return categoryData.reduce((sum, item) => sum + (item.budget || 0), 0);
  };

  // Transform data for PieChart
  const pieChartData = Object.keys(data)
    .filter((category) => category !== "summary") // Exclude summary if necessary
    .map((category) => ({
      name: category,
      value: getTotal(category),
      color: categoryColors[category] || "#ccc", // Default color if missing
    }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          data={pieChartData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
