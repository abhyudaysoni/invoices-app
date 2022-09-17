import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: none;
  border: none;
  width: max-content;
  height: max-content;
`;

const Button = (props) => {
  return (
    <Container
      id={props.id}
      className={props.className}
      onClick={props.onClick}
      type={props.type || "button"}
      style={props.style}
      value={props.value}
    >
      {props.children}
    </Container>
  );
};

export default Button;
