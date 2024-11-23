import arrowIcon from "../assets/images/arrow.svg";
import logoWhite from "../assets/images/logo-white.png";

export const HeaderBottom = () => {
  return (
    <div className="header-bottom" style={{color: "#fff"}}>
      <span className="text-left">
        Leader in the quality of outsourcing services
      </span>
      <img src={logoWhite} className="logo-header" alt="Devster Labs" />
      <a id="scroll-bottom" href="/">
        <img src={arrowIcon} className="arrowDown" alt="" />
        scroll
      </a>
    </div>
  );
};
