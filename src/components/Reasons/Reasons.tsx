import BillIcon from "../../icons/BillIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import TimerIcon from "../../icons/TimerIcon";
import "./Reasons.scss";

const Reasons = () => {
  return (
    <div className="Reasons" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h1 className="ReasonsTitle">Причини співпраці з нами</h1>
      <div className="ReasonsCards">
        <div className="ReasonsCard">
          <TimerIcon></TimerIcon>
          <h2 className="ReasonsCardTitle">Виконання робіт у встановлені терміни</h2>
        </div>
        <div className="ReasonsCard">
          <BillIcon></BillIcon>
          <h2 className="ReasonsCardTitle">Висока якість та особлива увага деталям</h2>
        </div>
        <div className="ReasonsCard">
          <CalendarIcon></CalendarIcon>
          <h2 className="ReasonsCardTitle">Інновації та надійність</h2>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
