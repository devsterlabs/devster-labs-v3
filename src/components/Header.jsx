import { useContext } from "react";
import line from "../assets/images/line.png";
import { LocaleContext } from "../context/LocaleContext";
import { FaXing } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Header = () => {
  const { updateLang } = useContext(LocaleContext);
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
      <div className="social">
          <a href="https://www.linkedin.com/company/devster-labs/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
          <a href="https://www.xing.com/pages/devster-labs" rel="noreferrer" target="_blank"><FaXing /></a>
          <a href="/" rel="noreferrer" target="_blank"><FaSquareXTwitter /></a>
          <a href="/" rel="noreferrer" target="_blank"><FaInstagram /></a>
      </div>
    </header>
  );
};
