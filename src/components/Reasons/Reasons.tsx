import { useTranslation } from "react-i18next";
import BillIcon from "../../icons/BillIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import TimerIcon from "../../icons/TimerIcon";
import "./Reasons.scss";

const Reasons = () => {
  const { t } = useTranslation();
  return (
    <div className="Reasons" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h1 className="ReasonsTitle">{t("reasons")}</h1>
      <div className="ReasonsCards">
        <div className="ReasonsCard">
          <TimerIcon></TimerIcon>
          <h2 className="ReasonsCardTitle">{t("reason1")}</h2>
        </div>
        <div className="ReasonsCard">
          <BillIcon></BillIcon>
          <h2 className="ReasonsCardTitle">{t("reason2")}</h2>
        </div>
        <div className="ReasonsCard">
          <CalendarIcon></CalendarIcon>
          <h2 className="ReasonsCardTitle">{t("reason3")}</h2>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
