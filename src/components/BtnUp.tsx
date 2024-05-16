import { useEffect, useState } from "react";
import ArrowUp from "../icons/ArrowUp";

const BtnUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY || document.documentElement.scrollTop;
      setScrollHeight(height);
    };

    window.addEventListener("scroll", handleScroll);
    console.log(scrollHeight);
    if (scrollHeight >= 1400) {
      setIsShow(true);
    } else if (scrollHeight < 1400) {
      setIsShow(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isShow ? (
        <div className="BtnUp">
          <button className="BtnUpButton" onClick={scrollToTop}>
            <ArrowUp></ArrowUp>
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BtnUp;
