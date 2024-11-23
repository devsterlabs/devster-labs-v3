import { Button } from "./Button";
import { Eyes } from "./Eyes";
import arrowIcon from "../assets/images/arrow.svg";
import { HeaderBottom } from "./HeaderBottom";

export const Home = () => {

  return (
    <div className="home container" style={{ color: "#fff", minHeight: "100vh" }}>
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
      <HeaderBottom />
    </div>
  );
};
