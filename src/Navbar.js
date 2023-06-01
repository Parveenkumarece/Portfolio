import React from "react";
import SocialLinks from './SocialLinks';
import {Link, useNavigate} from "react-router-dom";
const Navbar = () => {
const handleClick=()=>{
  navigate('/');
}
let navigate=useNavigate();
  return (
    <nav className= "fixed w-full z-10 bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              
              <img className="h-8 w-8 rounded-full object-cover" onClick={handleClick} src="ProfilePhoto.jpg" alt="Logo" />
                
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <strong>
                  Home
                  </strong>
                </Link>

                <Link
                  to="about"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <strong>
                  About
                  </strong>
                </Link>

                <Link
                  to="projects"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <strong>
                  Projects
                  </strong>
                </Link>

                <Link
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="contact"
                ><strong>
                  Contact
                  </strong>
                </Link>
              </div>
            </div>
          </div>
        <SocialLinks/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
