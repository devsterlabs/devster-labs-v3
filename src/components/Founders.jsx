import logoWhite from "../assets/images/logo-white.png";
import { Button } from "./Button";
import AbdulRaheem from "../assets/images/AbdulRaheem.png";
import Sara from "../assets/images/SaraRashid.png";

export const Founders = () => {
  return (
    <div className="founders container" style={{color: "#fff"}}>
      <div className="row" style={{ justifyContent: "center" }}>
        <span className="heading" style={{ textAlign: "center" }}>
          <span className="heading" style={{ color: "#4cafc8" }}>
            Founders of
          </span>{" "}
          <img
            src={logoWhite}
            width={"320px"}
            className="logo-header"
            alt="Devster Labs"
          />
        </span>
      </div>
      <div className="founder-container">
        <div className="founder-item">
          <div className="image-box">
          <img src={Sara} width={"100%"} alt="" />
          </div>
          <span className="name">Sara Rashid</span>
          <span className="txt18 semi op60">Founder & Chief Executive Officer</span>
        </div>
        <div className="founder-item">
          <div className="image-box">
          <img src={AbdulRaheem} width={"100%"} alt="" />
          </div>
          <span className="name">Abdul Raheem</span>
          <span className="txt18 semi op60">Co-founder & Chief Operating Officer</span>
        </div>
      </div>
      <Button />
    </div>
  );
};
