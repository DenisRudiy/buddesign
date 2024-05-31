import { useTranslation } from "react-i18next";
import "../Adventages/Adventages.scss";

const Adventages = () => {
  const { t } = useTranslation();
  return (
    <div className="Adventages">
      <h2 className="AdventagesTitle">{t("AdventagesTitle")}</h2>
      <div className="AdventagesCards">
        <div className="AdventagesItem">
          <div className="AdventagesItemTitle">{t("AdventagesItemTitle1")}</div>
          <ul className="AdventagesItemList">
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot1_1")}</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot1_2")}</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot1_2")}</p>
            </li>
          </ul>
        </div>
        <div className="AdventagesItem">
          <div className="AdventagesItemTitle">{t("AdventagesItemTitle2")}</div>
          <ul className="AdventagesItemList">
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot2_1")}</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot2_2")}</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot2_3")}</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot2_4")}</p>
            </li>
          </ul>
        </div>
        <div className="AdventagesItem">
          <div className="AdventagesItemTitle">{t("AdventagesItemTitle3")}</div>
          <ul className="AdventagesItemList">
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot3_1")}</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>{t("AdventagesItemListDot3_2")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Adventages;
