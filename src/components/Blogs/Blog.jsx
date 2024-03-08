import React from "react";
import Header from "../reused/Header";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

const Blog = () => {
  const blogdata = [
    {
      id: 1,
      image: img1,
      date: "jan 20, 224 by Dildhad",
      question: "How to choose perfect smartwatch ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos, at corporis tenetur enim iure.",
      delay :"0"
    },
    {
      id: 2,
      image: img2,
      date: "jan 20, 224 by Satya",
      question: "How to choose perfect gadget ?",
      answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae aspernatur, facere ipsum odio saepe?",
      delay :"200"
    },
    {
      id: 3,
      image: img3,
      date: "jan 20, 224 by Sabir",
      question: "How to choose perfect VR headset ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aspernatur rem officiis ipsa ab modi.",
        delay :"400"
    },
  ];

  return (
    <div>
      <div className="container my-14 sm:my-10 md:my-0">
        <Header title="Recent News" subtitle="Explore Our Blogs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-2 sm:gap-4 md:gap-7 ">
            {
                blogdata.map((item,index)=>(
                    <div data-aos="fade-up" data-aos-delay={item.delay} key={index} className="mb-10 flex gap-2 flex-col">
                        <div className="overflow-hidden  rounded-2xl">
                            <img src={item.image} className="w-full  h-[230px] object-cover cursor-pointer  rounded-2xl scale-100 hover:scale-105 duration-500" alt="" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs">{item.date}</p>
                            <h1 className="font-bold leading-7 sm:leading-5 my-1 lg:leading-9">{item.question}</h1>
                            <p className="text-sm line-clamp-2">{item.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Blog;
