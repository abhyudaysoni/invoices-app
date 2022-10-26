import React from "react";
import { Container } from "./styles";
import logo from "../../assets/images/logo.png";
import dark from "../../assets/icons/icon-moon.svg";
import pfp from "../../assets/images/image-avatar.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} className="logo" alt="logo-img"></img>
      </Link>
      <div className="account-options">
        <div className="display-mode-container">
          <img src={dark} alt="" />
        </div>
        <div className="pfp-container">
          <img src={pfp} alt="" />
        </div>
      </div>
    </Container>
  );
}
