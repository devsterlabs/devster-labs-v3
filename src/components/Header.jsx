import line from "../assets/images/line.png";

export const Header = () => {
  return (
    <header>
      <div className="header-left" style={{color: "#fff"}}>
        <label htmlFor="openNav" className="menu-icon">
          <img src={line} alt="-" id="line1" />
          <img src={line} alt="-" id="line2" />
        </label>
        <span className="lang">EN</span>
        <span className="lang">DE</span>
      </div>
      <span className="header-right">Join the team</span>
    </header>
  );
};
