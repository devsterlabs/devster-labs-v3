import { useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Partners = () => {
  const [partners, setPartners] = useState([]);
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
  return (
    <div className="partners container" style={{ color: "#fff" }}>
      <div className="row">
        <span className="heading">{t("Partners")}</span>
      </div>
      <div className="partner-container">
        {partners &&
          partners.map(({ _id, image }) => (
            <div className="partner-item" key={_id}>
              <div className="image-box">
                <img src={image} width={"100%"} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
