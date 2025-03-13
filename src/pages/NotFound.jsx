import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">This page does not exist</h1>
      <Link to="/">
        <button className="bg-green-500 text-white p-2 rounded-md">
          Go back to the home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
