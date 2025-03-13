import { Link } from "react-router";
import MiniNav from "../components/MiniNav";

const Login = () => {
  return (
    <div>
      <MiniNav />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-semibold text-center">Welcome Back</h3>
        <p className="text-gray-500 text-center mb-4">
          Enter your credentials to access your account
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              />
            </div>
            <Link to="/Calender">
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
            Login
          </button>
            </Link>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Dont have an account
          <Link to="/Register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Login;
