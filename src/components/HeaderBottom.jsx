import { useContext } from "react";
import arrowIcon from "../assets/images/arrow.svg";
import logoWhite from "../assets/images/logo-white.png";
import { LocaleContext } from "../context/LocaleContext";

export const HeaderBottom = ({id}) => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="header-bottom" style={{ color: "#fff" }}>
      <span className="text-left">
        {t("Leader in the quality of outsourcing services")}
      </span>
      <img src={logoWhite} className="logo-header" alt="Devster Labs" />
      <span className="scroll" id="scroll-bottom" onClick={() => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"})
      }}>
        <img src={arrowIcon} className="arrowDown" alt="" />
        {t("scroll")}
      </span>
    </div>
  );
};
