import React from "react";
import { FaLeaf } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "../reused/Button";

const Popup = ({ orderpopup, handlepopup }) => {
  return (
    <div>
      {orderpopup ? (
        <div
          className="h-screen w-screen fixed top-0 left-0 bg-black/50 dark:bg-black/25 z-50
        backdrop-blur-sm "
        >
          <div
            className=" max-w-[300px] sm:w-[300px] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
           p-4 shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200
           flex flex-col gap-4 rounded-lg"
          >
            <div className="flex items-center justify-between ">
              <h1>Order Now</h1>
              <IoMdClose
                onClick={handlepopup}
                className="text-2xl cursor-pointer"
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-full pl-2 p-1  focus:outline-orange-500 focus:outline-offset-2 dark:bg-gray-800 dark:outline-none dark:border-gray-500 dark:focus:border-gray-200 "
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-full pl-2 p-1  focus:outline-orange-500 focus:outline-offset-2 dark:bg-gray-800 dark:outline-none dark:border-gray-500 dark:focus:border-gray-200"
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded-full pl-2 p-1  focus:outline-orange-500 focus:outline-offset-2 dark:bg-gray-800 dark:outline-none dark:border-gray-500 dark:focus:border-gray-200"
            />
            <div className="text-center">
              <Button text={"Order Now"} bgcolor={"bg-primary"} textcolor={"text-white"} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Popup;
