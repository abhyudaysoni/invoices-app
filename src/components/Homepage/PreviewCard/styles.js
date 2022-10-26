import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 0.1fr;
  grid-gap: 1rem;
  background-color: white;
  padding: 2rem;
  align-items: center;
  border-radius: 20px;
  height: fit-content;
  :hover {
    box-shadow: 0 0 2px 1px #7c5df9;
    transition: 0.2s;
  }
  & .invoice-status {
    justify-self: right;
    text-transform: capitalize;
    padding: 0.7rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-radius: 10px;
    align-items: center;
    height: 50px;
    width: 120px;
    background: ${(props) =>
      props.status === "pending" ? "#fff8f0" : "#ebfff8"};
    color: ${(props) => (props.status === "pending" ? "#f98e24" : "#42cdac")};
    text-align: center;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${(props) =>
        props.status === "pending" ? "#f98e24" : "#42cdac"};
    }
  }
  & .arrow-right {
    justify-self: right;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    justify-items: space-evenly;
    & .invoice-status {
      justify-self: center;
    }
    & .invoice-name {
      justify-self: center;
    }
    & .invoice-id {
      justify-self: center;
    }
    & .invoice-amount {
      justify-self: center;
    }
  }
`;
