// context/monthlyData.js

const initialMonthlyData = {
  January: {
    income: [{ name: "Total Income", budget: 5058, actual: 5380 }],
    savings: [{ name: "Total Savings", budget: 1500, actual: 1100 }],
    bills: [{ name: "Total Bills", budget: 1640, actual: 1530 }],
    expenses: [{ name: "Total Expenses", budget: 2900, actual: 1123 }],
    debt: [{ name: "Total Debt Payments", budget: 756, actual: 750 }],
    summary: { difference: { budget: -1738, actual: 877 } }
  },
  February: {
    income: [{ name: "Total Income", budget: 5200, actual: 5300 }],
    savings: [{ name: "Total Savings", budget: 1600, actual: 1200 }],
    bills: [{ name: "Total Bills", budget: 1700, actual: 1650 }],
    expenses: [{ name: "Total Expenses", budget: 2800, actual: 1100 }],
    debt: [{ name: "Total Debt Payments", budget: 800, actual: 780 }],
    summary: { difference: { budget: -1700, actual: 920 } }
  },
  March: {
    income: [{ name: "Total Income", budget: 5400, actual: 5500 }],
    savings: [{ name: "Total Savings", budget: 1800, actual: 1400 }],
    bills: [{ name: "Total Bills", budget: 1750, actual: 1700 }],
    expenses: [{ name: "Total Expenses", budget: 2700, actual: 1150 }],
    debt: [{ name: "Total Debt Payments", budget: 850, actual: 800 }],
    summary: { difference: { budget: -1650, actual: 950 } }
  },
  April: {
    income: [{ name: "Total Income", budget: 5300, actual: 5450 }],
    savings: [{ name: "Total Savings", budget: 1700, actual: 1350 }],
    bills: [{ name: "Total Bills", budget: 1720, actual: 1680 }],
    expenses: [{ name: "Total Expenses", budget: 2650, actual: 1200 }],
    debt: [{ name: "Total Debt Payments", budget: 820, actual: 790 }],
    summary: { difference: { budget: -1600, actual: 930 } }
  },
  May: {
    income: [{ name: "Total Income", budget: 5500, actual: 5600 }],
    savings: [{ name: "Total Savings", budget: 1900, actual: 1450 }],
    bills: [{ name: "Total Bills", budget: 1800, actual: 1750 }],
    expenses: [{ name: "Total Expenses", budget: 2600, actual: 1250 }],
    debt: [{ name: "Total Debt Payments", budget: 870, actual: 820 }],
    summary: { difference: { budget: -1550, actual: 970 } }
  },
  June: {
    income: [{ name: "Total Income", budget: 5650, actual: 5700 }],
    savings: [{ name: "Total Savings", budget: 2000, actual: 1500 }],
    bills: [{ name: "Total Bills", budget: 1850, actual: 1800 }],
    expenses: [{ name: "Total Expenses", budget: 2500, actual: 1300 }],
    debt: [{ name: "Total Debt Payments", budget: 900, actual: 850 }],
    summary: { difference: { budget: -1500, actual: 990 } }
  },
  July: {
    income: [{ name: "Total Income", budget: 5800, actual: 5900 }],
    savings: [{ name: "Total Savings", budget: 2100, actual: 1550 }],
    bills: [{ name: "Total Bills", budget: 1900, actual: 1850 }],
    expenses: [{ name: "Total Expenses", budget: 2400, actual: 1350 }],
    debt: [{ name: "Total Debt Payments", budget: 930, actual: 870 }],
    summary: { difference: { budget: -1450, actual: 1010 } }
  },
  August: {
    income: [{ name: "Total Income", budget: 5900, actual: 6000 }],
    savings: [{ name: "Total Savings", budget: 2200, actual: 1600 }],
    bills: [{ name: "Total Bills", budget: 1950, actual: 1900 }],
    expenses: [{ name: "Total Expenses", budget: 2300, actual: 1400 }],
    debt: [{ name: "Total Debt Payments", budget: 950, actual: 890 }],
    summary: { difference: { budget: -1400, actual: 1030 } }
  },
  September: {
    income: [{ name: "Total Income", budget: 6000, actual: 6100 }],
    savings: [{ name: "Total Savings", budget: 2300, actual: 1650 }],
    bills: [{ name: "Total Bills", budget: 2000, actual: 1950 }],
    expenses: [{ name: "Total Expenses", budget: 2250, actual: 1450 }],
    debt: [{ name: "Total Debt Payments", budget: 970, actual: 910 }],
    summary: { difference: { budget: -1350, actual: 1050 } }
  },
  October: {
    income: [{ name: "Total Income", budget: 6100, actual: 6200 }],
    savings: [{ name: "Total Savings", budget: 2400, actual: 1700 }],
    bills: [{ name: "Total Bills", budget: 2050, actual: 2000 }],
    expenses: [{ name: "Total Expenses", budget: 2200, actual: 1500 }],
    debt: [{ name: "Total Debt Payments", budget: 990, actual: 930 }],
    summary: { difference: { budget: -1300, actual: 1070 } }
  },
  November: {
    income: [{ name: "Total Income", budget: 6200, actual: 6300 }],
    savings: [{ name: "Total Savings", budget: 2500, actual: 1750 }],
    bills: [{ name: "Total Bills", budget: 2100, actual: 2050 }],
    expenses: [{ name: "Total Expenses", budget: 2150, actual: 1550 }],
    debt: [{ name: "Total Debt Payments", budget: 1010, actual: 950 }],
    summary: { difference: { budget: -1250, actual: 1090 } }
  },
  December: {
    income: [{ name: "Total Income", budget: 6300, actual: 6400 }],
    savings: [{ name: "Total Savings", budget: 2600, actual: 1800 }],
    bills: [{ name: "Total Bills", budget: 2150, actual: 2100 }],
    expenses: [{ name: "Total Expenses", budget: 2100, actual: 1600 }],
    debt: [{ name: "Total Debt Payments", budget: 1030, actual: 970 }],
    summary: { difference: { budget: -1200, actual: 1110 } }
  }
};

export default initialMonthlyData;
