import { useContext, useEffect, useRef, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Partners = () => {
  const [posX, setPosX] = useState(0);
  const [transitions, setTransitions] = useState("transform 1s ease-in-out");
  const [partners, setPartners] = useState([]);
  const intervalRef = useRef(null);
  let currPos = 0;
  const { t } = useContext(LocaleContext);
  const getPartners = async () => {
    const url = "https://devsterapi.vercel.app/client";
    const res = await fetch(url)
      .then((res) => res.json())
      .then((res) => res);
    setPartners([...res]);
  };
  useEffect(() => {
    getPartners();
  }, []);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (partners.length > 0) {
        const total = partners.length;
        if (-1 * currPos >= total * 222) {
          setTransitions("none");
          // eslint-disable-next-line
          currPos = 0;
          setPosX(currPos);
        } else {
          setTransitions("transform 1s ease-in-out");
          currPos -= 100;
          if (-1 * currPos > total * 222) {
            currPos = total * -222;
          }
          setPosX(() => currPos);
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [partners]);
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => {
    currPos = posX;
    intervalRef.current = setInterval(() => {
      if (partners.length > 0) {
        const total = partners.length;
        if (-1 * currPos >= total * 222) {
          setTransitions("none");
          currPos = 0;
          setPosX(currPos);
        } else {
          setTransitions("transform 1s ease-in-out");
          currPos -= 100;
          if (-1 * currPos > total * 222) {
            currPos = total * -222;
          }
          setPosX(() => currPos);
        }
      }
    }, 1000);
  };
  return (
    <div className="partners container" style={{ color: "#fff", height: "auto", minHeight: "50vh" }}>
      <div className="row" style={{marginBottom: "52px"}}>
        <span className="heading">{t("Partners")}</span>
      </div>
      <div
        className="partner-container"
        style={{
          transform: `translateX(${posX}px)`,
          transition: transitions,
        }}
      >
        {partners &&
          partners.map(({ _id, image }) => (
            <div
              className="partner-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={_id}
            >
              <div className="image-box">
                <img src={image} width={"100%"} alt="" />
              </div>
            </div>
          ))}
        {partners &&
          partners.map(({ _id, image }) => (
            <div
              className="partner-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={_id + "_duplicate"}
            >
              <div className="image-box">
                <img src={image} width={"100%"} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
