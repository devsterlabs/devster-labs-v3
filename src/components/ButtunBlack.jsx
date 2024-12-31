import topLeftBlack from "../assets/images/topLeftButtonBlack.svg";
import topLeftWhite from "../assets/images/topLeftButtonWhite.svg";
import bottomRightBlack from "../assets/images/bottomRightButtonBlack.svg";
import bottomRightWhite from "../assets/images/bottomRightButtonWhite.svg";
import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const ButtonBlack = ({ variant = "dark", style }) => {
  const { t } = useContext(LocaleContext);
  return (
    <div>
      <div className="btn-container-black">
        <button style={style} onClick={() => {window.open("https://calendly.com/abdul-raheem-devsterlabs/30min")}}>
          {t("Hire Us")}
          {variant === "dark" ? (
            <>
              <img className="tl-btn" width="8px" src={topLeftBlack} alt="" />
              <img
                className="br-btn"
                width="8px"
                src={bottomRightBlack}
                alt=""
              />
            </>
          ) : (
            <>
              <img className="tl-btn" width="8px" src={topLeftWhite} alt="" />
              <img
                className="br-btn"
                width="8px"
                src={bottomRightWhite}
                alt=""
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
