import React, { useEffect, useState } from "react";
import lightbtn from "../../assets/website/light-mode-button.png";
import darkbtn from "../../assets/website/dark-mode-button.png";

const Darkmode = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const ele = document.documentElement;

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    if(theme === "dark"){
        ele.classList.add("dark");
    }
    else{
        ele.classList.remove("dark");
    }
  },[theme])

  return (
    <div
      className="relative"
      onClick={() => {
        settheme((prev) => (prev === "dark" ? "light" : "dark"));
      }}
    >
      <img
        src={lightbtn}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10  ${
          theme === "dark" ? "opacity-0" : "opacity-100 "
        } transition-all duration-300 `}
      />
      <img
        src={darkbtn}
        alt=""
        className={`w-12 cursor-pointer ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } transition-all duration-300 `}
      />
    </div>
  );
};

export default Darkmode;
