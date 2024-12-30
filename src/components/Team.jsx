import logoWhite from "../assets/images/logo-white.png";
import { LocaleContext } from "../context/LocaleContext";
import { Button } from "./Button";
import { useContext, useEffect, useState } from "react";

export const Team = () => {
  const [teams, setTeams] = useState([]);
  const { t } = useContext(LocaleContext);
  const getTeams = async () => {
    const url = "https://devsterapi.vercel.app/team";
    const res = await fetch(url)
      .then((res) => res.json())
      .then((res) => res);
    setTeams([...res]);
  };
  useEffect(() => {
    getTeams();
  }, []);
  return (
    <div className="teams container" style={{ color: "#fff" }}>
      <div className="row" style={{ justifyContent: "center" }}>
        <span
          className="heading"
          style={{
            textAlign: "center",
          }}
        >
          <span className="heading" style={{ color: "#4cafc8" }}>
            Team
          </span>{" "}
          <img
            src={logoWhite}
            style={{ marginBottom: "8px" }}
            className="logo-header"
            alt="Devster Labs"
          />
        </span>
      </div>
      <div className="team-container">
        {teams &&
          teams.map(({ _id, name, position, image }) => (
            <div className="team-item" key={_id}>
              <div className="image-box">
                <img src={image} width={"100%"} alt="" />
              </div>
              <span className="name">{name}</span>
              <span className="txt18 semi op60">{t(position)}</span>
            </div>
          ))}
      </div>
      <Button />
    </div>
  );
};
