import "../WorkCards/WorkCards.scss";
import { useTranslation } from "react-i18next";

const WorkCards = (works: any) => {
  const { i18n } = useTranslation();

  return (
    <div className="WorkCards">
      <div className="WorkCardsBody">
        {works.works.map((item: any) => (
          <div className="WorkImg" key={item.id}>
            <div
              className="WorkImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
            />
            {item.titleUkr.length < 17 ? (
              <div className="WorkImgText">
                <h1 className="WorkImgTitle">{i18n.language === "en" ? item.titleEng : item.titleUkr}</h1>
              </div>
            ) : (
              <div className="WorkImgTextBig">
                <h1 className="WorkImgTitleBig">{i18n.language === "en" ? item.titleEng : item.titleUkr}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkCards;
