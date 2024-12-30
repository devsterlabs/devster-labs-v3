import logoWhite from "../assets/images/logo-white.png";
import AbdulRaheem from "../assets/images/AbdulRaheem.png";
import Sara from "../assets/images/SaraRashid.png";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Founders = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div
      className="founders container"
      style={{ color: "#fff", minHeight: "auto", height: "auto" }}
    >
      <div className="row" style={{ justifyContent: "center" }}>
        <span className="heading" style={{ textAlign: "center" }}>
          <span className="heading" style={{ color: "#4cafc8" }}>
            {t("Founders of")}
          </span>{" "}
          <img src={logoWhite} className="logo-header" alt="Devster Labs" />
        </span>
      </div>
      <div className="founder-container">
        <div className="founder-item">
          <div className="image-box">
            <img src={Sara} width={"100%"} alt="" />
          </div>
          <span className="name">Sara Rashid</span>
          <span className="txt18 semi op60">
            {t("Founder & Chief Executive Officer")}
          </span>
        </div>
        <div className="founder-item">
          <div className="image-box">
            <img src={AbdulRaheem} width={"100%"} alt="" />
          </div>
          <span className="name">Abdul Raheem</span>
          <span className="txt18 semi op60">
            {t("Co-founder & Chief Operating Officer")}
          </span>
        </div>
      </div>
    </div>
  );
};
