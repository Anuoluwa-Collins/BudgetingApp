import { useState } from "react";
import { Link } from "react-router";
import MiniNav from "../components/MiniNav";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    // Simulate a 2-second loading time
    setTimeout(() => {
      setIsLoading(false);
      // Normally we would navigate programmatically here after successful login
      // But since we're using Link component, we'll maintain that behavior
      window.location.href = "/DashBoard";
    }, 2000);
  };

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
            {isLoading ? (
              <button
                type="button"
                className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center"
                disabled
              >
                <span className="inline-block h-4 w-4 mr-2 border-t-2 border-r-2 border-white rounded-full animate-spin"></span>
                Logging in...
              </button>
            ) : (
              <button
                type="button"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </form>
          <p className="text-center text-gray-600 mt-4">
            Dont have an account
            <Link to="/Register" className="text-blue-600 hover:underline ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
