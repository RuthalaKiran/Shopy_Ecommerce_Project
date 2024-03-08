import React from "react";
import image1 from "../../assets/category/gaming.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/speaker.png";
import Button from "../reused/Button";

const CategoryTwo = () => {
  return (
    <div className="py-2 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500 to-gray-200 text-white rounded-3xl relative h-[320px]
             flex items-end "
          >
            <div className="z-10 ">
              <div className="mb-4">
                <p className="text-gray-200 mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-primary"
                  textcolor="text-white"
                />
              </div>
            </div>
            <img
              src={image1}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2  right-0  "
            />
          </div>
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandgreen/90 to-brandgreen/70 text-white rounded-3xl relative h-[320px]
             flex items-start overflow-hidden "
          >
            <div className="">
              <div className="mb-4">
                <p className="text-gray-100 mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-white"
                  textcolor="text-brandgreen"
                />
              </div>
            </div>
            <img src={image2} alt="" className="w-[250px] sm:w-[300px]  absolute  bottom-0 right-0 " />
          </div>
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandblue/90 to-brandblue/70 text-white rounded-3xl relative h-[320px]
             flex items-start "
          >
            <div className="">
              <div className="mb-4">
                <p className="text-gray-400 mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-white"
                  textcolor="text-brandblue"
                />
              </div>
            </div>
            <img
              src={image3}
              alt=""
              className="w-[250px] sm:w-[200px] absolute right-0 bottom-5 "
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryTwo;
