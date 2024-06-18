import { useTranslation } from "react-i18next";
import "../AboutUsYears/AboutUsYears.scss";
import { useEffect, useState } from "react";

const AboutUsYears = () => {
  const { t } = useTranslation();
  let [items, setItems] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setItems([1, 2, 3, 4]);
      }
      if (window.innerWidth <= 600) {
        setItems([1, 2]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 600) {
      setItems([1, 2, 3, 4]);
    }
    if (width <= 600) {
      setItems([1, 2]);
    }
  }, []);

  return (
    <div className="AboutUsYears">
      <div className="AboutUsYearsBody">
        {items.map((item, index) => (
          <div className="AboutUsYearsItem" key={index}>
            <div
              className="AboutUsYearsItemImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutUsYears.webp"})` }}
            ></div>
            <div className="AboutUsYearsItemData">
              <h1 className="AboutUsYearsItemNumber">30+</h1>
              <div className="AboutUsYearsItemText">
                <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
                <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div>
        <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div>
        <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsYears;
