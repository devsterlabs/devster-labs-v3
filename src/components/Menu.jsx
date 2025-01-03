import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";
import { Link } from "react-router-dom";

export const Menu = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="menu">
      <Link
        onClick={() => document.getElementById("openNav").click()}
        to={"/"}
        className="item"
        style={{ transform: "skewY(-6deg)" }}
      >
        <span className="num">01</span>
        <span className="title">{t("Home")}</span>
      </Link>
      {/* <Link to={"/pricing"} className="item" style={{ transform: "skewY(-3deg)" }}>
        <span className="num">02</span>
        <span className="title">{t("Pricing")}</span>
      </Link> */}
      <Link
        onClick={() => document.getElementById("openNav").click()}
        to={"/team"}
        className="item"
        style={{ transform: "skewY(0deg)" }}
      >
        <span className="num">02</span>
        <span className="title">{t("Team")}</span>
      </Link>
      <Link
        onClick={() => document.getElementById("openNav").click()}
        to={"/career"}
        className="item"
        style={{ transform: "skewY(6deg)" }}
      >
        <span className="num">03</span>
        <span className="title">{t("Career")}</span>
      </Link>
      {/* <div className="item" style={{ transform: "skewY(6deg)" }}>
        <span className="num">04</span>
        <span className="title">{t("Contact Us")}</span>
      </div> */}
    </div>
  );
};
