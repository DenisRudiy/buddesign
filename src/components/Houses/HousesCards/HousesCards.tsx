import { Link } from "react-router-dom";
import "../HousesCards/HousesCards.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const HousesCards = ({ houses }: any) => {
  const { i18n } = useTranslation();
  const [scrollConst, setScrollConst] = useState(720);

  const scrollToTop = () => {
    window.scrollTo({
      top: scrollConst,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) {
        setScrollConst(1000);
      }
      if (window.innerWidth <= 1440 && window.innerWidth >= 650) {
        setScrollConst(820);
      }
      if (window.innerWidth <= 650) {
        setScrollConst(700);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 1440) {
      setScrollConst(1000);
    }
    if (width <= 1440 && width >= 650) {
      setScrollConst(820);
    }
    if (width <= 650) {
      setScrollConst(700);
    }
  }, []);
  return (
    <div className="HousesCards">
      <div className="HousesCardsBody">
        {houses.map((item: any) => (
          <Link to={`${item.id}`} onClick={scrollToTop}>
            <div className="HousesImg" key={item.id}>
              <div
                className="HousesImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/houses2.png"})` }}
              />
              <div className="HousesImgText ">
                <h2 className="HousesImgTitle"> {i18n.language === "en" ? item.titleEng : item.titleUkr}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HousesCards;
