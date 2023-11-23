import React from "react";

const Header = () => {
  return (
    <div className="header--container">
      <div className="header--content">
        <div className="header--left"></div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="LingoQL">LingoQL</h1>
      </div>
    </div>
  );
};

export default Header;
