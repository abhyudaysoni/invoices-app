import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  margin: 0 0.5rem 0 0.5rem;
  & .label-input-name {
    margin: 0 0.5rem 0 0.5rem;
  }
  & .qty-price-total {
    display: flex;
    align-items: center;
    #quantity {
      max-width: 70px;
    }
    #price {
      padding: 3px;
      text-align: right;
      max-width: 100px;
    }
    #total-price {
      background: none;
      border: none;
      padding: 3px;
      font-size: 1rem;
      text-align: right;
      font-weight: 700;
      max-width: 100px;
    }
  }
  & .label-input {
    margin: 0 0.5rem 0 0.5rem;
  }
  #delete-item {
    align-self: flex-end;
    margin: 1rem;
    padding: 0.5rem;
    img {
      height: 2rem;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    & .label-input-name {
      width: 95%;
      input {
        height: 40px;
      }
    }
    & .label-input {
      input {
        height: 40px;
      }
    }
    #delete-item {
      align-self: flex-end;
      margin: 1rem;
      padding: 0.5rem;
      img {
        height: 1.5rem;
      }
    }
  }
`;
