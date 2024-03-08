import React from "react";
import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/watch.png";
import image3 from "../../assets/category/macbook.png";
import Button from "../reused/Button";

const CategoryOne = () => {
  return (
    <div className="py-8 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px]
             flex items-end "
          >
            <div className="">
              <div className="mb-4">
                <p className="text-gray-400 mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-primary"
                  textcolor="text-white"
                />
              </div>
            </div>
            <img src={image1} alt="" className="w-[320px] absolute bottom-0 right-0 " />
          </div>
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandyellow/90 to-brandyellow/70 text-white rounded-3xl relative h-[320px]
             flex items-end "
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
                  textcolor="text-brandyellow"
                />
              </div>
            </div>
            <img
              src={image2}
              alt=""
              className="w-[320px] absolute right-[-40px] top-14 md:right-[-50px] md:top-5 lg:top-15  "
            />
          </div>
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/70 text-white rounded-3xl relative h-[320px]
             flex items-end "
          >
            <div className="z-10 ">
              <div className="mb-4">
                <p className="text-gray-300 mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-white"
                  textcolor="text-primary"
                />
              </div>
            </div>
            <img
              src={image3}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2  right-0  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryOne;
