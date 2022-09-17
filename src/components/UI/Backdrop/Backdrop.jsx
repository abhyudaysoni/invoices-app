import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 70%;
  z-index: 5;
`;

const Backdrop = (props) => {
  const classes = `backdrop ${props.className}`;
  return <Container className={classes} onClick={props.onClick}></Container>;
};

export default Backdrop;
