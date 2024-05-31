import { i18n } from "i18next";
import ArrowDown from "../icons/ArrowDown";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  i18n: i18n;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ i18n }) => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    console.log(lng);
  };

  return (
    <div className="HeaderLanguage">
      <div className="LangDropdown">
        <ArrowDown />
        <span>{t("lang")}</span>
        <div className="HeaderDropdownServices">
          <button className="HeaderRouteItem" onClick={() => changeLanguage("uk")}>
            Укр
          </button>
          <button className="HeaderRouteItem" onClick={() => changeLanguage("en")}>
            ENG
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
