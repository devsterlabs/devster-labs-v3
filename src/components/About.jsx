import logoWhite from "../assets/images/logo-small-white.png";

export const About = () => {
  return (
    <div className="about container" style={{color: "#fff"}}>
      <div className="row">
        <span className="heading">
          <span className="heading" style={{ color: "#4cafc8" }}>
            The most trusted
          </span>{" "}
          outsourcing partner in Pakistan
        </span>
        <div className="logo-circle">
          <img src={logoWhite} alt="D" />
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="hr" />
          <div className="subh-card">
            <div className="txt16 semi upper">
              <strong>ABOUT US</strong>
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">10+</div>
            <div className="txt16 semi op60">
              People in the team
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">3 countries</div>
            <div className="txt16 semi op60">
              Operational in Germany, United States and Pakistan (Now Expanding)
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">200+</div>
            <div className="txt16 semi op60">
              People in the talent pool
              <br />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="hr"></div>
          <div className="vr"></div>
          <div className="col-cont">
            <div className="txt50 glitch mob-grn">100%</div>
            <div className="txt16 semi op60">
              Job Success Score
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
