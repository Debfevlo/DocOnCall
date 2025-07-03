
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Service",
      path: "/service",
      submenu: [
        { name: "Doctors", path: "/service/doctors" },
        { name: "Laboratory", path: "/service/lab" },
        { name: "Dental", path: "/service/dentist" },
        { name: "Nutrition", path: "/service/nutritionist" },
      ]
    },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4">
        
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-16 md:h-24 w-auto hover:scale-110" />
          </NavLink>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">

          {menu.map((link, index) => (
            <div key={index} className="relative group">

              {/* Main NavLink */}
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? " inline-block  border-b-2 border-b-[#00695f] font-medium"
                    : "over:text-[#00695f] hover:text-[#00695f] hover:font-bold hover:scale-105 transition-all inline-block"
                }
              >
                <div className="flex items-center space-x-2">
                  {link.name}
                  {link.submenu && <IoIosArrowDown />}
                </div>
              </NavLink>

              {/* Submenu (dropdown) */}
              {link.submenu && (
                <div className="absolute left-0 top-4 z-50 mt-2 hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-md shadow-lg  min-w-[180px]">
                  {link.submenu.map((sublink, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={sublink.path}
                      className="px-4 py-2 text-gray-700 text-sm hover:bg-[#00695f] hover:text-white hover:font-medium  transition-all"
                    >
                      {sublink.name}
                    </NavLink>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Sign In Button */}
        <div className="px-4">
          <button className="px-4 py-2 md:px-6 md:py-2 bg-[#00695f] text-white rounded-full hover:scale-105">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
