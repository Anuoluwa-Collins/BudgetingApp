import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="p-5">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600">
          Choose the plan that best fits your needs. All plans include a 7-day
          free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border shadow-md rounded-lg p-6 flex flex-col items-start bg-white">
          <h4 className="text-xl font-semibold">Free</h4>
          <h4 className="text-2xl font-bold text-green-800">$0</h4>
          <p className="text-gray-600 mb-4">
            Basic budgeting tools to get started
          </p>
          <button className="w-full  text-green-700 bg-green-200 p-2 rounded hover:bg-green-900">
            Get Started
          </button>
          <p className="mt-4 font-semibold">What&apos;s included:</p>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <Check color="green" />
              Up to 3 budget categories
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Basic expense tracking
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Monthly spending reports
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Single device
            </li>
          </ul>
        </div>

        <div className="border shadow-md rounded-lg p-6 flex flex-col items-start bg-white">
          <h4 className="text-xl font-semibold">Pro</h4>
          <h4 className="text-2xl font-bold text-green-800">$9.99 /month</h4>
          <p className="text-gray-600 mb-4">
            Advanced features for personal finance management
          </p>
          <button className="w-full text-white bg-green-700 p-2 rounded hover:bg-green-800">
            7-Day Free Trial
          </button>
          <p className="mt-4 font-semibold">What&apos;s included:</p>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <Check color="green" />
              Unlimited budget categories
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Advanced expense analytics
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Savings goals
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Bill reminders
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Export financial data
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Multi-device sync
            </li>
          </ul>
        </div>

        <div className="border shadow-md rounded-lg p-6 flex flex-col items-start bg-white">
          <h4 className="text-xl font-semibold">Business</h4>
          <h4 className="text-2xl font-bold text-green-800">$19.99 /month</h4>
          <p className="text-gray-600 mb-4">
            For businesses managing finances & teams
          </p>
          <button className="w-full text-green-700 bg-green-200 p-2 rounded hover:bg-green-900">
            Get Started
          </button>
          <p className="mt-4 font-semibold">What&apos;s included:</p>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <Check color="green" />
              All Pro features
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Team expense tracking
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Multi-user access
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Business financial reports
            </li>
            <li className="flex items-center gap-2">
              <Check color="green" />
              Dedicated support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
