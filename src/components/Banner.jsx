import eyes from "../assets/images/eyes.png";
import eyesBlack from "../assets/images/eyes-black.png";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Banner = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="banner">
      <div className="banner-white">
        {Array(4)
          .fill("0")
          .map((i) => (
            <>
              <img src={eyesBlack} alt="\/" />
              <span className="banner-txt">{t("VACANCIES")}</span>
            </>
          ))}
      </div>
      <div className="banner-blue">
        {Array(4)
          .fill("0")
          .map((i) => (
            <>
              <img src={eyes} alt="\/" />
              <span className="banner-txt">{t("HIRING")}</span>
            </>
          ))}
      </div>
    </div>
  );
};
