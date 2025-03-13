import { useMonth } from "../context/MonthContext";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarChartComponent = () => {
  const { selectedMonth, monthlyData } = useMonth();
  const data = monthlyData[selectedMonth] || {};

  // Function to calculate total budget per category
  const getTotalBudget = (category) => {
    return data[category]?.reduce((sum, item) => sum + item.budget, 0) || 0;
  };

  // Transform data into an array for Recharts
  const barChartData = [
    { name: "Income", Budget: getTotalBudget("income") },
    { name: "Savings", Budget: getTotalBudget("savings") },
    { name: "Bills", Budget: getTotalBudget("bills") },
    { name: "Expenses", Budget: getTotalBudget("expenses") },
    { name: "Debt", Budget: getTotalBudget("debt") },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={barChartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Budget" fill="#15803d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
