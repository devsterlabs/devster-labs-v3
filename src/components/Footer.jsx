import logoWhite from "../assets/images/logo-white.png";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="footer" style={{ color: "#fff" }}>
      <span className="privacy-txt">Privacy Policy</span>
      <img src={logoWhite} className="logo-header" alt="Devster Labs" />
      <Button style={{fontSize: "0.6vw"}}></Button>
    </div>
  );
};
