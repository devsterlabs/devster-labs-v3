import { Button } from "./Button";
import { Eyes } from "./Eyes";
import arrowIcon from "../assets/images/arrow.svg";
import { HeaderBottom } from "./HeaderBottom";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home container" style={{ color: "#fff" }}>
      <Eyes />
      <span className="tagline">
        Gateway to pre-screened,{" "}
        <span style={{ color: "#4cafc8", fontFamily: "HeadingFont" }}>
          full-time
        </span>{" "}
        software developers
      </span>
      <div className="row-between">
        <Button />
        <span className="row-comment">
          <img src={arrowIcon} alt="->" className="arrow" />
          Apply now to get registered in our talent pool
        </span>
      </div>
      {isAtTop && <HeaderBottom />}
    </div>
  );
};
