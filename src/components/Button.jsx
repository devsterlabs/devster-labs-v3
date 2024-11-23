import topLeftBlack from "../assets/images/topLeftButtonBlack.svg";
import topLeftWhite from "../assets/images/topLeftButtonWhite.svg";
import bottomRightBlack from "../assets/images/bottomRightButtonBlack.svg";
import bottomRightWhite from "../assets/images/bottomRightButtonWhite.svg";

export const Button = ({ variant = "dark", style }) => {
  return (
    <div className="btn-container">
      <button style={style}>
        Join the team
        {variant === "dark" ? (
          <>
            <img className="tl-btn" width="8px" src={topLeftBlack} alt="" />
            <img className="br-btn" width="8px" src={bottomRightBlack} alt="" />
          </>
        ) : (
          <>
            <img className="tl-btn" width="8px" src={topLeftWhite} alt="" />
            <img className="br-btn" width="8px" src={bottomRightWhite} alt="" />
          </>
        )}
      </button>
    </div>
  );
};
