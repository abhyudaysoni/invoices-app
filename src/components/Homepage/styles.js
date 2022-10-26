import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem auto;
  width: 900px;
  padding: 1rem;
  & .backdrop {
    opacity: 2%;
  }
  @media (max-width: 1100px) {
    margin-left: 100px;
  }
  @media (max-width: 1000px) {
    margin: 5rem auto;
    width: 90%;
  }
  @media (max-width: 700px) {
    margin: 5rem auto;
    width: 95%;
  }
`;
