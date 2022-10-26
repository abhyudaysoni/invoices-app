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
  h4 {
    text-align: center;
    margin: 2rem 0 0 0;
    padding: 0.5rem;
    border-radius: 10px;
    background: ${(props) =>
      props.status === "pending" ? "#fff8f0" : "#ebfff8"};
    color: ${(props) => (props.status === "pending" ? "#f98e24" : "#42cdac")};
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
