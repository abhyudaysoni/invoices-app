import styled from "styled-components";

export const Container = styled.section`
  margin: 2rem auto;
  width: 900px;
  padding: 1rem;

  & .btn-go-back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 2rem 0;
    img {
      height: 10px;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 5rem;
    width: 100%;
  }
  @media (max-width: 700px) {
    margin-top: 5rem;
  }
`;
