import React, { useEffect, useState } from "react";
import PhoneIcon from "../icons/PhoneIcon";
import "../styles/App.scss";

const Phone = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY || document.documentElement.scrollTop;
      setScrollHeight(height);
    };

    window.addEventListener("scroll", handleScroll);
    // console.log(scrollHeight);
    if (scrollHeight < 160 || scrollHeight >= 2270) {
      const phone = document.querySelector(".PhoneColor") as HTMLElement;
      const phoneBtn = document.querySelector(".PhoneButton") as HTMLElement;
      if (phone) {
        phone.style.fill = "white";
        phoneBtn.style.borderColor = "white";
      }
    }
    if ((scrollHeight >= 160 && scrollHeight < 2270) || (scrollHeight >= 4350 && scrollHeight < 5270)) {
      const phone = document.querySelector(".PhoneColor") as HTMLElement;
      const phoneBtn = document.querySelector(".PhoneButton") as HTMLElement;
      if (phone) {
        phone.style.fill = "black";
        phoneBtn.style.borderColor = "black";
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);
  return (
    <div className="Phone">
      <button className="PhoneButton">
        <PhoneIcon size={35}></PhoneIcon>
      </button>
    </div>
  );
};

export default Phone;