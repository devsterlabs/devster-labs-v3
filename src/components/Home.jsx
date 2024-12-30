import { Button } from "./Button";
import { Eyes } from "./Eyes";
import arrowIcon from "../assets/images/arrow.svg";
import { HeaderBottom } from "./HeaderBottom";
import { useContext, useEffect, useRef } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Home = () => {
  const homeRef = useRef(null); // Ensure ref is initialized as null
  const { t } = useContext(LocaleContext);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      }
    };
  
    let touchStartY = 0;
  
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
  
    const handleTouchMove = (e) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // Swiping up
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const element = homeRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel);
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove);
    }
  
    // Cleanup on unmount
    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);
  

  return (
    <div
      className="home container"
      ref={homeRef}
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
