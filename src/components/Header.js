import logoImg from "../images/Vector.svg";
import React from "react";

function Header(props) {
  return (
    <header className="header">
      <img className="header__icon" src={logoImg} alt="Место" />
      <div className="header-wrapper">
        <span className="header__user-email">{props.email}</span>
        <button className="header__button" onClick={props.click}>
          {props.text}
        </button>
      </div>
    </header>
  );
}

export default Header;
