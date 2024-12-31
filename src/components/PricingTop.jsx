import { Button } from "./Button";
import { Eyes } from "./Eyes";
import arrowIcon from "../assets/images/arrow.svg";
import { HeaderBottom } from "./HeaderBottom";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const PricingTop = () => {
  const { t } = useContext(LocaleContext);
  
  return (
    <div
      className="home container"
      style={{ color: "#fff", minHeight: "100vh" }}
    >
      <Eyes />
      <span className="tagline">
        {t("Affordable and Transparent ")}{" "}
        <span style={{ color: "#4cafc8", fontFamily: "HeadingFont" }}>
          {t("Pricing for ")}
        </span>{" "}
        {t("World-Class Software Solutions")}
      </span>
      <div className="row-between">
        <Button />
        <span className="row-comment">
          <img src={arrowIcon} alt="->" className="arrow" />
          {t("Apply now to get registered in our talent pool")}
        </span>
      </div>
      <HeaderBottom id={"costing"} />
    </div>
  );
};
