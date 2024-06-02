import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import barbas from "../../assets/barbas.jpeg";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "24px", cursor: "pointer" }}
        />
      </div>
      <div className="logo-container">
        <img src={barbas} alt="logo" />
      </div>
      <div className="menu-icons">
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "24px", cursor: "pointer", marginRight: "20px" }}
        />
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ fontSize: "24px", cursor: "pointer" }}
        />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};
