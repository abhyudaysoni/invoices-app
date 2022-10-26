import styled from "styled-components";

export const Container = styled.section`
  margin: 2rem auto;
  width: 900px;
  padding: 2rem;
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
    padding: 1rem;
  }
`;
