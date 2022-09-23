import React from "react";
import styled from "styled-components";
import { getFilteredData } from "./helper";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  & .homepage-preview {
    cursor: pointer;
  }
`;

const HomepageBody = (props) => {
  const data = getFilteredData(props.status, props.invoices);
  return <Container>{data}</Container>;
};
export default HomepageBody;
