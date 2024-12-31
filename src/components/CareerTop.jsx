import { Button } from "./Button";
import { Eyes } from "./Eyes";
import arrowIcon from "../assets/images/arrow.svg";
import { HeaderBottom } from "./HeaderBottom";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const CareerTop = () => {
  const { t } = useContext(LocaleContext);
  
  return (
    <div
      className="home container"
      style={{ color: "#fff", minHeight: "100vh" }}
    >
      <Eyes />
      <span className="tagline">
        {t("Join us to shape your future, ")}{" "}
        <span style={{ color: "#4cafc8", fontFamily: "HeadingFont" }}>
          {t("unlock opportunities, ")}
        </span>{" "}
        {t("and drive innovation.")}
      </span>
      <div className="row-between">
        <Button />
        <span className="row-comment">
          <img src={arrowIcon} alt="->" className="arrow" />
          {t("Apply now to get registered in our talent pool")}
        </span>
      </div>
      <HeaderBottom id={"career"} />
    </div>
  );
};
