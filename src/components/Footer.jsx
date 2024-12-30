import { useContext, useState } from "react";
import logoWhite from "../assets/images/logo-white.png";
import { Button } from "./Button";
import { LocaleContext } from "../context/LocaleContext";
import { PrivacyModal } from "./PrivacyModal";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useContext(LocaleContext);
  return (
    <div className="footer" style={{ color: "#fff" }}>
      <span
        className="privacy-txt"
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer" }}
      >
        {t("Privacy Policy")}
      </span>
      {isOpen && <PrivacyModal setIsOpen={setIsOpen} />}
      <img src={logoWhite} className="logo-header" alt="Devster Labs" />
      <Button></Button>
    </div>
  );
};
