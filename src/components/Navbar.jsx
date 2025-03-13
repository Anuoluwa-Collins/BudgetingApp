import { useState } from "react";
import { Link } from "react-router"; 
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="no-underline">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-green-800">
            Budgeter
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/Calculator" className="text-green-800 hover:text-green-600 no-underline" >
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/Calender" className="text-green-800 hover:text-green-600 no-underline" >
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/Pricing" className="text-green-800 hover:text-green-600 no-underline" >
              Pricing
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link to="/Login">
            <button className="border-2 border-green-800 text-black rounded-md px-4 py-2">
              Login
            </button>
          </Link>
          <Link to="/Register">
            <button className="rounded-md px-4 py-2 bg-green-800 text-white">
              Register
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-green-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/Calculator" className="text-green-800" onClick={() => setMenuOpen(false)}>
            Calculator
          </Link>
          <Link to="/Calender" className="text-green-800" onClick={() => setMenuOpen(false)}>
            Calendar
          </Link>
          
          <Link to="/Login">
            <button className="border-2 border-green-800 text-black rounded-md px-4 py-2 w-full">
              Login
            </button>
          </Link>
          <Link to="/Register">
            <button className="rounded-md px-4 py-2 bg-green-800 text-white w-full">
              Register
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
