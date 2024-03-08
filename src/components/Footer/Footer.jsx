import React from "react";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <hr className=" md:hidden bg-primary dark:bg-gray-900" />
      <div className="container">
        <div className="grid md:grid-cols-3 pb-5 pt-0 md:pt-5">
          <div className=" col-span-2 md:col-span-1 py-8 px-4 flex justify-center items-center  gap-3 flex-col">
            <div className="flex items-center gap-5 mr-5 md:mr-5">
              <a href="#">
                <img src={logo} className="w-10" alt="" />
              </a>
              <a
                href="#"
                className="tracking-wide text-primary font-bold text-xl"
              >
                SHOPY
              </a>
            </div>
            <h1 className="font-bold dark:text-gray-300 text-gray-700 text-lg flex items-center gap-2">
              Made With React{" "}
              <span className="text-2xl mb-1 animate-pulse duration-100">
                ❤️
              </span>
            </h1>
          </div>
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 place-items-center">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                <ul className="space-y-3 ">
                  <li><a href="#" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Home</a></li>
                  <li><a href="/#about" className="text-gray-600 hover:text-black duration-200  hover:dark:text-white">About</a></li>
                  <li><a href="/#contact" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Contact</a></li>
                  <li><a href="/#blog" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Blogs</a></li>
                </ul>
              </div>
              <div className="py-8 px-4 hidden sm:block">
                <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                <ul className="space-y-3 ">
                  <li><a href="#" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Home</a></li>
                  <li><a href="/#about" className="text-gray-600 hover:text-black duration-200  hover:dark:text-white">About</a></li>
                  <li><a href="/#contact" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Contact</a></li>
                  <li><a href="/#blog" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Blogs</a></li>
                </ul>
              </div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                <ul className="space-y-3 ">
                  <li><a href="#" className="text-gray-600 hover:text-black duration-200 hover:dark:text-white">Rajahmundry</a></li>
                  <li><a href="/#about" className="text-gray-600 hover:text-black duration-200  hover:dark:text-white">+91 1234567890</a></li>
                  <li><a href="/#contact" className="text-gray-600  flex gap-10">
                    <FaFacebook className="text-2xl hover:text-black duration-200 hover:dark:text-white "/>
                    <FaLinkedin className="text-2xl hover:text-black duration-200 hover:dark:text-white"/>  
                  </a></li>
                  <li><a href="/#contact" className="text-gray-600  flex gap-10">
                    <FaInstagram className="text-2xl hover:text-black duration-200 hover:dark:text-white"/> 
                    <FaTwitterSquare className="text-2xl hover:text-black duration-200 hover:dark:text-white"/>  
                  </a></li>
                 
                </ul>
              </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
