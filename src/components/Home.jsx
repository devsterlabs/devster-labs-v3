import { Button } from "./Button";
import { Eyes } from "./Eyes";
import arrowIcon from "../assets/images/arrow.svg";
import { HeaderBottom } from "./HeaderBottom";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Home = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div
      className="home container"
      style={{ color: "#fff", minHeight: "100vh" }}
    >
      <Eyes />
      <span className="tagline">
        {t("Gateway to pre-screened,")}{" "}
        <span style={{ color: "#4cafc8", fontFamily: "HeadingFont" }}>
          {t("full-time")}
        </span>{" "}
        {t("software developers")}
      </span>
      <div className="row-between">
        <Button />
        <span className="row-comment">
          <img src={arrowIcon} alt="->" className="arrow" />
          {t("Apply now to get registered in our talent pool")}
        </span>
      </div>
      <HeaderBottom />
    </div>
  );
};
