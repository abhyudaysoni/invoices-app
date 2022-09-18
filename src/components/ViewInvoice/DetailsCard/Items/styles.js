import styled from "styled-components";

export const Container = styled.div`
  & table {
    border-radius: 10px;
    width: 100%;
    background-color: #f9fafe;
    padding: 3rem;
    margin: 1rem 0 0 0;
    border: none;
  }
  & .table-header {
    height: 5rem;
  }
  & tr {
    height: 2rem;
  }
  & .total-amount-row {
    display: flex;
    margin: 0;
    width: 100%;
    height: 150px;
    background: #373b54;
    color: white;
    border-radius: 0 0 10px 10px;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 500px) {
    & table {
      padding: 1rem;
    }
  }
`;
