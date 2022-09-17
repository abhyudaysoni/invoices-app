import React from "react";
import { Container } from "./styles";
import logo from "../../assets/images/logo.png";
import dark from "../../assets/icons/icon-moon.svg";
import pfp from "../../assets/images/image-avatar.jpg";

export default function Header() {
  return (
    <Container>
      <img src={logo} className="logo" alt="logo-img"></img>
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
