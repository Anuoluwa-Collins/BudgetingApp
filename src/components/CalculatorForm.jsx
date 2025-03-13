import { useState } from "react";

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    grossIncome: "",
    per: "",
    taxYear: "",
    age: "",
    blind: false,
    liveInScotland: false,
    taxCode: "",
    pensionContributions: "",
    studentLoan: false,
    studentLoanType: "",
    excludeNI: false,
    otherDeductions: "",
    taxAllowance: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [calculationResult, setCalculationResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      grossIncome: "",
      per: "",
      taxYear: "",
      age: "",
      blind: false,
      liveInScotland: false,
      taxCode: "",
      pensionContributions: "",
      studentLoan: false,
      studentLoanType: "",
      excludeNI: false,
      otherDeductions: "",
      taxAllowance: "",
    });
  };

  const calculateSum = () => {
    // Extract all numeric values from the form
    const numericValues = [
      parseFloat(formData.grossIncome) || 0,
      parseFloat(formData.age) || 0,
      parseFloat(formData.pensionContributions) || 0,
      parseFloat(formData.otherDeductions) || 0,
      parseFloat(formData.taxAllowance) || 0,
    ];

    // Sum all values and divide by 5
    const sum = numericValues.reduce((acc, val) => acc + val, 0);
    return sum / 5;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate 2-second calculation time
    setTimeout(() => {
      const result = calculateSum();
      setCalculationResult(result);
      setIsLoading(false);
      setShowModal(true);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          How much tax will I pay?
          <hr />
        </h1>
        <p className="text-gray-600">Enter Your Details:</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="grossIncome"
              className="block text-sm text-gray-700 mb-1"
            >
              Gross (pre-tax) Income
            </label>
            <input
              id="grossIncome"
              name="grossIncome"
              type="text"
              value={formData.grossIncome}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              placeholder="£"
            />
          </div>

          <div>
            <label htmlFor="per" className="block text-sm text-gray-700 mb-1">
              Per
            </label>
            <select
              id="per"
              name="per"
              value={formData.per}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            >
              <option value="">Select</option>
              <option value="year">Year</option>
              <option value="month">Month</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="taxYear"
              className="block text-sm text-gray-700 mb-1"
            >
              Tax Year
            </label>
            <input
              id="taxYear"
              name="taxYear"
              type="date"
              value={formData.taxYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm text-gray-700 mb-1">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              placeholder="Enter age"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              name="blind"
              checked={formData.blind}
              onChange={handleChange}
              className="mr-2 text-green-800 focus:ring-green-800"
            />
            Blind
          </label>

          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              name="liveInScotland"
              checked={formData.liveInScotland}
              onChange={handleChange}
              className="mr-2 text-green-800 focus:ring-green-800"
            />
            I live in Scotland
          </label>
        </div>

        <div>
          <label htmlFor="taxCode" className="block text-sm text-gray-700 mb-1">
            Tax code
          </label>
          <input
            id="taxCode"
            name="taxCode"
            type="text"
            value={formData.taxCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            placeholder="Enter tax code"
          />
        </div>

        <div>
          <label
            htmlFor="pensionContributions"
            className="block text-sm text-gray-700 mb-1"
          >
            Pension Contributions with tax relief
          </label>
          <input
            id="pensionContributions"
            name="pensionContributions"
            type="text"
            value={formData.pensionContributions}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            placeholder="£/month"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              name="studentLoan"
              checked={formData.studentLoan}
              onChange={handleChange}
              className="mr-2 text-green-800 focus:ring-green-800"
            />
            Repay Student Loan
          </label>

          {formData.studentLoan && (
            <select
              name="studentLoanType"
              value={formData.studentLoanType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            >
              <option value="">Select Loan Type</option>
              <option value="plan1">Plan 1 (Eng & Wales 2012)</option>
              <option value="plan2">Plan 2 (Eng & Wales 2017)</option>
            </select>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            name="excludeNI"
            checked={formData.excludeNI}
            onChange={handleChange}
            className="mr-2 text-green-800 focus:ring-green-800"
          />
          Exclude National Insurance
        </div>

        <div>
          <label
            htmlFor="otherDeductions"
            className="block text-sm text-gray-700 mb-1"
          >
            Other Allowances/Deductions
          </label>
          <input
            id="otherDeductions"
            name="otherDeductions"
            type="text"
            value={formData.otherDeductions}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            placeholder="£/month"
          />
        </div>

        <div>
          <label
            htmlFor="taxAllowance"
            className="block text-sm text-gray-700 mb-1"
          >
            Tax-free Allowance
          </label>
          <input
            id="taxAllowance"
            name="taxAllowance"
            type="text"
            value={formData.taxAllowance}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            placeholder="£"
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex-grow px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            disabled={isLoading}
          >
            Reset
          </button>

          <button
            type="submit"
            className={`flex-grow px-4 py-2 text-white rounded-md transition-colors flex items-center justify-center ${
              isLoading ? "bg-green-600" : "bg-green-800 hover:bg-green-950"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="animate-spin inline-block mr-2 h-4 w-4 border-t-2 border-r-2 border-white rounded-full"></span>
                Calculating...
              </>
            ) : (
              "Calculate"
            )}
          </button>
        </div>
      </form>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Calculation Result
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                your spendable amount is:
              </p>
              <p className="text-2xl font-bold text-green-800 mt-2">
                £{calculationResult.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-950 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
