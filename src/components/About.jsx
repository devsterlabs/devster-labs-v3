import { useContext } from "react";
import logoWhite from "../assets/images/logo-small-white.png";
import { LocaleContext } from "../context/LocaleContext";

export const About = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="about container" style={{ color: "#fff" }}>
      <div className="row">
        <span className="heading">
          <span className="heading" style={{ color: "#4cafc8" }}>
            {t("The most trusted")}
          </span>{" "}
          {t("outsourcing partner in Pakistan")}
        </span>
        <div className="logo-circle">
          <img src={logoWhite} alt="D" />
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="hr" />
          <div className="subh-card">
            <div className="txt16 semi upper">
              <strong>{t("About Us")}</strong>
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">10+</div>
            <div className="txt16 semi op60">
              {t("People in the team")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">{t("3 countries")}</div>
            <div className="txt16 semi op60">
              {t("Operational in Germany, United States and Pakistan (Now Expanding)")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">200+</div>
            <div className="txt16 semi op60">
              {t("People in the talent pool")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">100%</div>
            <div className="txt16 semi op60">
              {t("Job Success Score")}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
