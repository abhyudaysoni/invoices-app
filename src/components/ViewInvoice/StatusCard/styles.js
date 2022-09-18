import styled from "styled-components";

export const Container = styled.section`
  border-radius: 20px;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  & .status {
    display: flex;
    align-items: center;
  }
  & .invoice-status {
    text-transform: capitalize;
    padding: 0.7rem;
    margin: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-radius: 10px;
    align-items: center;
    height: 50px;
    width: max-content;
    background: ${(props) =>
      props.status === "pending" ? "#fff8f0" : "#ebfff8"};
    color: ${(props) => (props.status === "pending" ? "#f98e24" : "#42cdac")};
    text-align: center;
    .dot {
      width: 10px;
      height: 10px;
      margin: 2px;
      border-radius: 100%;
      background-color: ${(props) =>
        props.status === "pending" ? "#f98e24" : "#42cdac"};
    }
  }
  & .edit-options {
    display: flex;
    align-items: center;
    justify-self: right;
    img {
      height: 30px;
      margin: 0 1rem;
    }
  }
`;
