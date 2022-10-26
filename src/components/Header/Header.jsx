import React from "react";
import { Container } from "./styles";
import logo from "../../assets/images/logo.png";
import dark from "../../assets/icons/icon-moon.svg";
import light from "../../assets/icons/icon-sun.svg";
import pfp from "../../assets/images/image-avatar.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeDisplayMode } from "../../store/displayMode";

export default function Header() {
  const dispatch = useDispatch();
  const isLight = useSelector((state) => state.displayMode);
  const displayModeHandler = () => {
    dispatch(changeDisplayMode());
  };
  return (
    <Container>
      <Link to="/">
        <img src={logo} className="logo" alt="logo-img"></img>
      </Link>
      <div className="account-options">
        <div className="display-mode-container">
          <img
            src={isLight ? dark : light}
            alt="mode"
            onClick={displayModeHandler}
          />
        </div>
        <div className="pfp-container">
          <img src={pfp} alt="" />
        </div>
      </div>
    </Container>
  );
}
