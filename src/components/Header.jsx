import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGift, faShoppingBag, faUser, faGear } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="px-4 md:px-36 py-4 bg-white shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center">

          <div className="flex justify-between items-center text-gray-600">
            <img src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png" alt="logo" className="h-12" />
            <p><span className="text-md font-semibold mt-2 md:mt-0 md:ml-4 mr-2 underline hover:text-orange-500">Patna</span> RMS Colony Road No. 1 Kankarbagh Patna -20</p>
          </div>

          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
            <a className="p-2 lg:px-4 md:mx-2 text-orange-500"><FontAwesomeIcon icon={faSearch} className="mr-4" />Search</a>
            <Link to="/offer" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:text-orange-500 transition-colors duration-300"><FontAwesomeIcon icon={faGift} className="mr-4" />Offers</Link>
            <Link to="/help" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:text-orange-500 transition-colors duration-300"><FontAwesomeIcon icon={faGear} className="mr-4" />Help</Link>
            <Link to="/signin" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:text-orange-500 transition-colors duration-300"><FontAwesomeIcon icon={faUser} className="mr-4" />Sign In</Link>
            <Link to="/cart" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:text-orange-500 transition-colors duration-300"><FontAwesomeIcon icon={faShoppingBag} className="mr-4" />Cart</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
