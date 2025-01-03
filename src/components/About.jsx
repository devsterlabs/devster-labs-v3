import { useContext, useEffect, useState } from "react";
import logoWhite from "../assets/images/logo-small-white.png";
import { LocaleContext } from "../context/LocaleContext";

export const About = () => {
  const [res, setRes] = useState({ dev: 0, data: 0 });
  const team = [
    {
      name: "ahad",
      joined: "2024-03-01T00:00:00Z",
      dept: "dev",
    },
    {
      name: "jawad",
      joined: "2024-05-01T00:00:00Z",
      dept: "dev",
    },
    {
      name: "ahmed",
      joined: "2024-05-01T00:00:00Z",
      end: "2024-09-01T00:00:00Z",
      dept: "dev",
    },
    {
      name: "jibran",
      joined: "2024-07-01T00:00:00Z",
      end: "2024-11-01T00:00:00Z",
      dept: "dev",
    },
    {
      name: "omer",
      joined: "2024-10-01T00:00:00Z",
      dept: "dev",
    },
    {
      name: "yamaann",
      joined: "2024-10-14T00:00:00Z",
      dept: "data",
    },
    {
      name: "zayaam",
      joined: "2024-10-22T00:00:00Z",
      dept: "data",
    },
  ];
  function calculateWorkingDays(startDate, endDate) {
    let count = 0;
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const day = currentDate.getDay();
      if (day !== 0 && day !== 6) {
        // Skip weekends
        count++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return count;
  }

  // Calculate total working hours
  function calculateTotalWorkingHours(team) {
    const result = {};
    const today = new Date();

    team.forEach((member) => {
      const joinedDate = new Date(member.joined);
      let workingDays;
      if (member.end) {
        const endDate = new Date(member.end);
        workingDays = calculateWorkingDays(joinedDate, endDate);
      } else {
        workingDays = calculateWorkingDays(joinedDate, today);
      }
      const workingHours = workingDays * 8;

      if (!result[member.dept]) {
        result[member.dept] = 0;
      }
      result[member.dept] += workingHours;
    });

    return result;
  }

  useEffect(() => {
    setRes({ ...calculateTotalWorkingHours(team) });
    // eslint-disable-next-line
  }, []);
  const { t } = useContext(LocaleContext);
  return (
    <div id="about" className="about container" style={{ color: "#fff" }}>
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
            <div className="txt17 semi upper">
              <strong>{t("About Us")}</strong>
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt51 glitch mob-grn">10+</div>
            <div className="txt17 semi op60">
              {t("People in the team")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt51 glitch mob-grn">{t("3 countries")}</div>
            <div className="txt17 semi op60">
              {t(
                "Operational in Germany, United States and Pakistan (Now Expanding)"
              )}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt51 glitch mob-grn">200+</div>
            <div className="txt17 semi op60">
              {t("People in the talent pool")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt51 glitch mob-grn">100%</div>
            <div className="txt17 semi op60">
              {t("Job Success Score")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt51 glitch mob-grn">{res.data} hours</div>
            <div className="txt17 semi op60">
              {t("Audio Data Labelled")}
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt51 glitch mob-grn">{res.dev} hours</div>
            <div className="txt17 semi op60">
              {t("Development Services")}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
