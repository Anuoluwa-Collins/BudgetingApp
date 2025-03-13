/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import initialMonthlyData from "./monthlyData"; // Import the data

// Create Context
const MonthContext = createContext();

// Context Provider
export const MonthProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState("January"); // Default month
  // eslint-disable-next-line no-unused-vars
  const [monthlyData, setMonthlyData] = useState(initialMonthlyData);

  return (
    <MonthContext.Provider value={{ selectedMonth, setSelectedMonth, monthlyData }}>
      {children}
    </MonthContext.Provider>
  );
};

// Custom Hook for easy access to context
export const useMonth = () => useContext(MonthContext);
