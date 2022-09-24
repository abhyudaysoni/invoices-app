import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  margin: 10rem;
  h1 {
    margin: 2rem;
  }
  a {
    margin: 2rem;
    background: #7453f9;
    color: white;
    padding: 1rem;
    border-radius: 5px;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <h1>No page Found</h1>
      <Link to="/">Go Home</Link>
    </Container>
  );
};

export default NotFound;
