import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoryOne from "./components/Categories/CategoryOne";
import CategoryTwo from "./components/Categories/CategoryTwo";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";
import smartwatch from "./assets/category/smartwatch.png";
import Blog from "./components/Blogs/Blog";
import Pratners from "./components/Pratners/Pratners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const bannerdata = {
    discount: "30% OFF",
    title: "FINE SMILE",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in dolore, perferendis libero iste earum!",
    bgcolor: "#f42c37",
  };
  const bannerdata2 = {
    discount: "30% OFF",
    title: "HAPPY HOURS",
    date: "10 Jan to 28 Jan",
    image: smartwatch,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in dolore, perferendis libero iste earum!",
    bgcolor: "#9da86e",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [orderpopup, setorderpopup] = useState(false);

  const handlepopup = () => {
    setorderpopup(!orderpopup);
  };
  console.log(orderpopup);
  return (
    <div className="dark:bg-gray-900 dark:text-white duration-200 overflow-hidden bg-white">
      <Navbar handlepopup={handlepopup} />
      <Hero handlepopup={handlepopup} />
      <CategoryOne />
      <CategoryTwo />
      <Services />
      <Banner data={bannerdata} />
      <Products />
      <Banner data={bannerdata2} />
      <Blog />
      <Pratners />
      <Footer />
      <Popup orderpopup={orderpopup} handlepopup={handlepopup} />
    </div>
  );
};

export default App;
