import { useContext } from "react";
import logoWhite from "../assets/images/logo-small-white.png";
import { LocaleContext } from "../context/LocaleContext";

export const Costing = () => {
  const { t } = useContext(LocaleContext);
  const roles = [
    {
      title: "Frontend Developer",
      experiences: [
        { level: "1-3 years", cost: "36.000 €/year" },
        { level: "3-5 years", cost: "48.000 €/year" },
        { level: "5+ years", cost: "54.000 €/year" },
      ],
    },
    {
      title: "Mobile Application Developer",
      experiences: [
        { level: "1-3 years", cost: "38.000 €/year" },
        { level: "3-5 years", cost: "50.000 €/year" },
        { level: "5+ years", cost: "65.000 €/year" },
      ],
    },
    {
      title: "Data Scientist",
      experiences: [
        { level: "1-3 years", cost: "50.000 €/year" },
        { level: "3-5 years", cost: "60.000 €/year" },
        { level: "5+ years", cost: "65.000 €/year" },
      ],
    },
    {
      title: "Full Stack Developer",
      experiences: [
        { level: "1-3 years", cost: "37.000 €/year" },
        { level: "3-5 years", cost: "40.000 €/year" },
        { level: "5+ years", cost: "50.000 €/year" },
      ],
    },
    {
      title: "Machine Learning Engineer",
      experiences: [
        { level: "1-3 years", cost: "48.000 €/year" },
        { level: "3-5 years", cost: "58.000 €/year" },
        { level: "5+ years", cost: "66.000 €/year" },
      ],
    },
    {
      title: "DevOps Engineer",
      experiences: [
        { level: "1-3 years", cost: "41.000 €/year" },
        { level: "3-5 years", cost: "54.000 €/year" },
        { level: "5+ years", cost: "58.000 €/year" },
      ],
    },
    {
      title: "Backend Developer",
      experiences: [
        { level: "1-3 years", cost: "38.000 €/year" },
        { level: "3-5 years", cost: "48.000 €/year" },
        { level: "5+ years", cost: "58.000 €/year" },
      ],
    },
  ];
  return (
    <div id="costing" className="about container" style={{ color: "#fff" }}>
      <div className="row">
        <span className="heading">
          <span className="heading" style={{ color: "#4cafc8" }}>
            {t("Devster Labs ")}
          </span>{" "}
          {t("Estimated Cost")}
        </span>
        <div className="logo-circle">
          <img src={logoWhite} alt="D" />
        </div>
      </div>
      {roles.map((role, index) => (
        <div key={index} style={{ marginBottom: "42px" }} className="grid-container">
          <div className="grid-item">
            <div className="hr" />
            <div className="subh-card">
              <div className="txt17 semi upper">
                <strong>{t(role?.title)}</strong>
                <br />
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="hr"></div>
            <div className="vr"></div>
            <div className="col-cont">
              <div className="txt51 glitch mob-grn">{role.experiences[0].level}</div>
              <div className="txt17 semi op60">
                {t("Experience")}
                <br />
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="hr"></div>
            <div className="vr"></div>
            <div className="col-cont">
              <div className="txt51 glitch mob-grn">{role.experiences[0].cost}</div>
              <div className="txt17 semi op60">
                {t("Estimated Cost")}
                <br />
              </div>
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div className="hr"></div>
            <div className="vr"></div>
            <div className="col-cont">
              <div className="txt51 glitch mob-grn">{role.experiences[1].level}</div>
              <div className="txt17 semi op60">
                {t("Experience")}
                <br />
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="hr"></div>
            <div className="vr"></div>
            <div className="col-cont">
              <div className="txt51 glitch mob-grn">{role.experiences[1].cost}</div>
              <div className="txt17 semi op60">
                {t("Estimated Cost")}
                <br />
              </div>
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div className="hr"></div>
            <div className="vr"></div>
            <div className="col-cont">
              <div className="txt51 glitch mob-grn">{role.experiences[2].level}</div>
              <div className="txt17 semi op60">
                {t("Experience")}
                <br />
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="hr"></div>
            <div className="vr"></div>
            <div className="col-cont">
              <div className="txt51 glitch mob-grn">{role.experiences[2].cost}</div>
              <div className="txt17 semi op60">
                {t("Estimated Cost")}
                <br />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
