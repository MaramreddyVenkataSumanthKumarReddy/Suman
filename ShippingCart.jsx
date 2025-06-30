import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { itemCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase().trim();

    if (term === "mens" || term === "men") {
      navigate("/mens");
    } else if (term === "womens" || term === "women") {
      navigate("/womens");
    } else if (term === "kids" || term === "kid") {
      navigate("/kids");
    } else {
      alert("Category not found");
    }

    setSearchTerm("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <img src="images/logo.jpg" alt="Logo" className="h-12 w-12 object-contain" />
            <Link to="/" className="text-xl font-bold text-white">
            </Link>
          </div>
          
          {/* Hamburger button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Search form - now always visible but full width on mobile */}
        <form
          onSubmit={handleSearch}
          className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center flex-1 max-w-lg mx-4 mt-4 md:mt-0 w-full md:w-auto`}
        >
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1 rounded-l text-black w-full bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-4 py-1 rounded-r border-l border-gray-300 hover:bg-gray-100"
            >
              Go
            </button>
          </div>
        </form>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex space-x-4 text-white w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/mens" className="hover:underline">Mens</Link>
            <Link to="/womens" className="hover:underline">Womens</Link>
            <Link to="/kids" className="hover:underline">Kids</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/cart" className="flex items-center hover:underline">
              Cart
              {itemCount > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;