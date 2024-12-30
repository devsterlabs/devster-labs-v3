import topLeftBlack from "../assets/images/topLeftButtonBlack.svg";
import topLeftWhite from "../assets/images/topLeftButtonWhite.svg";
import bottomRightBlack from "../assets/images/bottomRightButtonBlack.svg";
import bottomRightWhite from "../assets/images/bottomRightButtonWhite.svg";
import { useContext, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";
import { Modal } from "./Modal";

export const Button = ({ variant = "dark", style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { t } = useContext(LocaleContext);
  return (
    <div>
      <div className="btn-container">
        <button style={style} onClick={openModal}>
          {t("Join the team")}
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
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
