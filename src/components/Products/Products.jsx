import React from "react";
import Header from "../reused/Header";
import ProductsCard from "./ProductsCard";

import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-9.jpg";
import img7 from "../../assets/product/p-7.jpg";

const Products = () => {
  const productsdata = [
    {
      id: 1,
      img: img1,
      title: "Boat Headphone",
      price: "4000",
      aosDelay: "0",
    },
    {
      id: 2,
      img: img2,
      title: "Boat Headphone",
      price: "2000",
      aosDelay: "200",
    },
    {
      id: 3,
      img: img3,
      title: "Boat Headphone",
      price: "3000",
      aosDelay: "300",
    },
    {
      id: 4,
      img: img4,
      title: "Boat Headphone",
      price: "4500",
      aosDelay: "400",
    },
  ];
  const productsdata2 = [
    {
      id: 1,
      img: img5,
      title: "Boat Headphone",
      price: "1200",
      aosDelay: "0",
    },
    {
      id: 2,
      img: img6,
      title: "Boat Headphone",
      price: "1500",
      aosDelay: "200",
    },
    {
      id: 3,
      img: img7,
      title: "Boat Headphone",
      price: "1800",
      aosDelay: "300",
    },
    {
      id: 4,
      img: img4,
      title: "Boat Headphone",
      price: "4000",
      aosDelay: "400",
    },
  ];

  return (
    <div>
      <div className="container mt-10 sm:mt-2">
        <Header title="Our Products" subtitle="Explore Our Products" />

        <ProductsCard products={productsdata} />
        <ProductsCard products={productsdata2} />
      </div>
    </div>
  );
};

export default Products;
