import styled from "styled-components";

export const Container = styled.section`
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
