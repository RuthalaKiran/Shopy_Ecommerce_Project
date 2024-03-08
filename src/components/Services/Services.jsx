import { data } from "autoprefixer";
import React from "react";
import {
  FaCarSide,
  FaHeadphones,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const servicedata = [
    {
      id: 1,
      icon: <FaCarSide  className="text-4xl md:text-5xl text-red-600" />,
      title: "Free Shipping",
      description: "Free Shipping On All Order",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-4xl md:text-5xl text-red-600" />,
      title: "Safe Money",
      description: "30 Days Money Back",
    },
    {
      id: 3,
      icon: <FaWallet className="text-4xl md:text-5xl text-red-600" />,
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      id: 4,
      icon: <FaHeadphones className="text-4xl md:text-5xl text-red-600" />,
      title: "Online Supoort 24/7",
      description: "Technical Support 24/7",
    },
  ];

  return (
    <div>
      <div className=" mb-10 mt-10 container py-10">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 gap-y-10">
          {servicedata.map((item, index) => (
            <div key={index} className=" pl-5 flex items-start  flex-col md:flex-row gap-3">
                {item.icon}
                <div>
                    <h1 className="font-bold lg:text-md ">{item.title}</h1>
                    <h1 className="text-sm text-gray-500">{item.description}</h1>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
