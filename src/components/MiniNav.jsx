
import { Link } from "react-router"; 


const MiniNav = () => {
  return (
    <div>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="no-underline">
            <h1 className="text-3xl md:text-4xl font-bold uppercase text-green-800">
              Budgeter
            </h1>
          </Link>

            <Link to="/login">
              <button className="border-2 border-green-800 text-black rounded-md px-4 py-2">
                Login
              </button>
            </Link>

          
        </div>

      
      </nav>
    </div>
  );
}

export default MiniNav