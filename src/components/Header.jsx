import { useContext } from "react";
import line from "../assets/images/line.png";
import { LocaleContext } from "../context/LocaleContext";

export const Header = () => {
  const { updateLang, t } = useContext(LocaleContext);
  return (
    <header>
      <div className="header-left" style={{ color: "#fff" }}>
        <label htmlFor="openNav" className="menu-icon">
          <img src={line} alt="-" id="line1" />
          <img src={line} alt="-" id="line2" />
        </label>
        <span
          className="lang"
          onClick={() => updateLang("en")}
          style={{
            textDecoration:
              !localStorage.getItem("locale") ||
              localStorage.getItem("locale") === "en"
                ? "underline"
                : "none",
          }}
        >
          EN
        </span>
        <span
          className="lang"
          onClick={() => updateLang("de")}
          style={{
            textDecoration:
              localStorage.getItem("locale") === "de" ? "underline" : "none",
          }}
        >
          DE
        </span>
      </div>
      <span className="header-right">{t("Join the team")}</span>
    </header>
  );
};
