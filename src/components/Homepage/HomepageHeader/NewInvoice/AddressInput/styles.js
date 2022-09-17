import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  & .part2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  & #street {
    width: 100%;
  }
  @media (max-width: 550px) {
    & .part2 {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  } ;
`;
