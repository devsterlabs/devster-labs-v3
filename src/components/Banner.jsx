import eyes from "../assets/images/eyes.png";
import eyesBlack from "../assets/images/eyes-black.png";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-white">
        {Array(4)
          .fill("0")
          .map((i) => (
            <>
              <img src={eyesBlack} alt="\/" />
              <span className="banner-txt">VACANCIES</span>
            </>
          ))}
      </div>
      <div className="banner-blue">
        {Array(4)
          .fill("0")
          .map((i) => (
            <>
              <img src={eyes} alt="\/" />
              <span className="banner-txt">HIRING</span>
            </>
          ))}
      </div>
    </div>
  );
};
