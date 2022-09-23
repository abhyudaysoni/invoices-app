import React from "react";
import styled from "styled-components";
import loader from "./loader.svg";

export const Container = styled.div`
  width: 100px;
  margin: 20rem auto;
`;

const Loading = () => {
  return (
    <Container>
      <img src={loader} alt="loading" />
    </Container>
  );
};

export default Loading;
