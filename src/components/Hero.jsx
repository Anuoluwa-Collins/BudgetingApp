import { PlayCircleIcon } from "lucide-react";
import laptop from "../assets/laptop.jpg";
import { Link } from "react-router"; 

const Hero = () => {
  return (
    <div className="px-6 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Take control of your <br />
            <span className="text-green-800">financial future</span>
          </h1>
          <p className="mt-4 text-gray-600">
            BudgetMaster simplifies your financial planning with intelligent
            insights, automated saving goals, and a beautifully designed
            experience.
          </p>
          <div className="flex flex-col sm:flex-row mt-6 gap-4 justify-center">
            <Link to="/Register">
            <button className="p-3 rounded bg-green-800 text-white hover:bg-green-900 transition">
              Get Started - It&apos;s Free
            </button>
            </Link>
            <button className="p-3 flex  border rounded hover:bg-gray-200 transition justify-center">
              How to Get Started <PlayCircleIcon className="ml-2" />
            </button>
          </div>
        </div>


        <div className="md:w-1/2 flex justify-center">
          <img
            src={laptop}
            alt="Laptop"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>


      <div className="mt-12 text-center">
        <h4 className="text-gray-500 uppercase tracking-wide text-sm">
          TRUSTED BY INDIVIDUALS AND BUSINESSES WORLDWIDE
        </h4>
        <ol className="flex flex-wrap justify-center gap-4 mt-4 text-gray-700 font-semibold">
          <li>Google</li>
          <li>Microsoft</li>
          <li>Shopify</li>
          <li>Airbnb</li>
          <li>Spotify</li>
        </ol>
      </div>
    </div>
  );
};

export default Hero;
