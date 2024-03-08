import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import logo from "../../assets/logo.png"

const Navbar = ({handlepopup}) => {
  const menulinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blog",
    },
  ];

  const dropdownlinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
         duration-200 relative z-40 "
    >
      <div className="py-4 ">
        <div className="container flex justify-between items-center">
          <div className="flex items-center fap-5">
            <a href="#"><img src={logo} className="w-9 sm:w-11 lg:w-14 ml-2 mr-5" alt="" /></a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menulinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white rounded-md shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {dropdownlinks.map((item, index) => (
                        <li key={index} >
                          <a href={item.link} className="text-gray-500  dark:hover:text-white duration-200 p-2 w-full inline-block hover:bg-primary/20 rounded-md font-semibold">{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 group-hover:text-primary duration-200 " />
            </div>
            <button className="relative p-3 " onClick={handlepopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 right-0 flex items-center justify-center text-xs">
                3
              </div>
            </button>
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
