import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/hero/headphone.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/macbook.png";
import Button from "../reused/Button";

const herodata = [
  {
    id: 1,
    img: image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicinelit. Aut nostrum voluptatem, a officia magnam maiores?",
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicinelit. Aut nostrum voluptatem, a officia magnam maiores?",
  },
  {
    id: 3,
    img: image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicinelit. Aut nostrum voluptatem, a officia magnam maiores?",
  },
];

const Hero = ({ handlepopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asutoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="">
      <div className="container ">
        <div
          className="overflow-hidden dark:bg-gray-900 rounded-3xl  min-h-[550px]
       sm:min-h-[650px] hero-bg-color flex justify-center items-center"
        >
          <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
              {herodata.map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div
                      className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 
                text-center sm:text-left order-2 sm:order-1 relative z-10 "
                    >
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                      >
                        {item.subtitle}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      >
                        {item.title}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl uppercase text-white dark:text-white/5 sm:text[80px] md:text-[100px] xl:text-[150px] font-bold "
                      >
                        {item.title2}
                      </h1>
                      <div
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="500"
                        dtaa-aos-delay="300"
                      >
                        <Button
                          text="Shop By Category"
                          bgcolor="bg-primary"
                          textcolor="text-white"
                          handlepopup={handlepopup}
                        />
                      </div>
                    </div>
                    <div className="order-1 sm:order-2">
                      <div
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className=""
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                      sm:scale-105 lg:scale-105 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.25)] relative z-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
