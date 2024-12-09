import { useContext } from "react";
import arrowIcon from "../assets/images/arrow.svg";
import logoWhite from "../assets/images/logo-white.png";
import { LocaleContext } from "../context/LocaleContext";

export const HeaderBottom = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="header-bottom" style={{ color: "#fff" }}>
      <span className="text-left">
        {t("Leader in the quality of outsourcing services")}
      </span>
      <img src={logoWhite} className="logo-header" alt="Devster Labs" />
      <a id="scroll-bottom" href="/">
        <img src={arrowIcon} className="arrowDown" alt="" />
        {t("scroll")}
      </a>
    </div>
  );
};
