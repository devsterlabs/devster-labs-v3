import { useContext } from "react";
import logoWhite from "../assets/images/logo-white.png";
import { Button } from "./Button";
import { LocaleContext } from "../context/LocaleContext";

export const Footer = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="footer" style={{ color: "#fff" }}>
      <span className="privacy-txt">{t("Privacy Policy")}</span>
      <img src={logoWhite} className="logo-header" alt="Devster Labs" />
      <Button></Button>
    </div>
  );
};
