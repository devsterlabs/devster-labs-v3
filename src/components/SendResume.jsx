import { useContext } from "react";
import arrowIcon from "../assets/images/arrow.svg";
import { LocaleContext } from "../context/LocaleContext";

export const SendResume = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div
      className="send-resume container"
      style={{ color: "#fff", minHeight: "auto" }}
    >
      <div className="row">
        <span className="row-comment">
          <img
            src={arrowIcon}
            alt="->"
            className="arrow"
            style={{ transform: "rotate(-90deg)" }}
          />
          {t("Leave your contacts and our manager will contact you soon")}
        </span>
        <span className="heading" style={{ fontSize: "3.5vw" }}>
          {t("waiting for you in our team")}
        </span>
      </div>
      <div className="row">
        <span
          className="heading glitch"
          style={{
            fontSize: "3.5vw",
            textDecoration: "underline",
            color: "#4cafc8",
            cursor: "pointer",
          }}
        >
          {t("Send resume")}
        </span>
      </div>
    </div>
  );
};
