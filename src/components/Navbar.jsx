import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header id="home" className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce]">
      {/* logo section  */}
      <div>
        <span className=" text-xl font-bold"><img src="	https://www.farm.com.sa/images/FrontEnd/New-Farm-Logo.png" alt="img-logo" width={78} /></span>
      </div>

      {/* nav section  */}
      <nav className=" hidden md:flex flex-row gap-6">
        <a href="#Home" className="navHover">
          Home
        </a>
        <a href="#Menu" className="navHover">
          Menu
        </a>
        <a href="#About" className="navHover">
          About Us
        </a>
        <a href="#Subscription" className="navHover">
          Subscription
        </a>
        <a href="#Recipes" className="navHover">
          Recipes
        </a>
        <a href="#Contact" className="navHover">
          Contact
        </a>

        {/* icons */}
        <div className=" hidden lg:flex gap-2 ml-8">
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FiSearch />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <IoIosContact />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FaShoppingCart />
          </span>
        </div>
      </nav>

      {/* responsive */}

      <button className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300">
        Shop Now
      </button>
    </header>
  );
};

export default Navbar;
