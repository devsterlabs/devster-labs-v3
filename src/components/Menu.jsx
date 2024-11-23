export const Menu = () => {
  return (
    <div className="menu">
      <div className="item" style={{transform: "skewY(-6deg)"}}>
        <span className="num">01</span>
        <span className="title">About Us</span>
      </div>
      <div className="item" style={{transform: "skewY(-3deg)"}}>
        <span className="num">02</span>
        <span className="title">Benefits</span>
      </div>
      <div className="item" style={{transform: "skewY(0deg)"}}>
        <span className="num">03</span>
        <span className="title">Team</span>
      </div>
      <div className="item" style={{transform: "skewY(3deg)"}}>
        <span className="num">04</span>
        <span className="title">Partners</span>
      </div>
      <div className="item" style={{transform: "skewY(6deg)"}}>
        <span className="num">05</span>
        <span className="title">Contact Us</span>
      </div>
    </div>
  );
};
