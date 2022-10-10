import React from "react";
import styled from "styled-components";
import { getFilteredData } from "./helper";
import empty from "../../../assets/icons/illustration-empty.svg";

const Container = styled.section`
  display: flex;
  .no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem auto;
    opacity: 50%;
    img {
      height: 300px;
    }
  }
  a {
    margin-top: 2rem;
  }
  flex-direction: column;
  & .homepage-preview {
    cursor: pointer;
  }
  @media (max-width: 450px) {
    .no-data {
      img {
        width: 80%;
        height: auto;
      }
    }
  }
`;

const HomepageBody = (props) => {
  const data = getFilteredData(props.status, props.invoices);
  return (
    <Container>
      {data}
      {data.length === 0 && (
        <div className="no-data">
          <h2>No data Found</h2>
          <img src={empty} alt="no data found" />
        </div>
      )}
    </Container>
  );
};
export default HomepageBody;
