import { useTranslation } from "react-i18next";
import "../GelleryMain/GelleryMain.scss";

const GelleryMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="GelleryMain">
        <div
          className="GelleryMainBackground"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/GalleryMain.webp"})`,
            objectFit: "contain",
            backgroundSize: "cover",
            maxWidth: "2800px",
          }}
        ></div>
        <div className="GelleryMainData">
          <h1 className="GelleryMainTitle">{t("Gallery")}</h1>
        </div>
      </div>
    </>
  );
};

export default GelleryMain;
