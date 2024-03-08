import React from "react";
import Button from "../reused/Button";

const ProductsCard = ({ products }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {products.map((item, index) => (
          <div key={index} className="group">
            <div data-aos="fade-up" data-aos-delay={item.aosDelay} className="relative">
              <img
                src={item.img}
                alt=""
                className="h-[180px] w-[260px] object-cover
                             rounded-md  "
              />
              <div
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
               w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 "
              >
                <Button
                  text="Add to Cart"
                  bgcolor="bg-primary"
                  textcolor={"text-white"}
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="0" data-aos-delay={item.aosDelay} className="leading-7">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">{`₹ ${item.price}`}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
