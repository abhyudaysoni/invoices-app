import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0 1rem 0;
`;

const Card = (props) => {
  const classes = props.className;
  return <Container className={classes}>{props.children}</Container>;
};

export default Card;
