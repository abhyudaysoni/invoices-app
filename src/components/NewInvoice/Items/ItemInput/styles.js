import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 0.1fr;
  .input-name input {
    margin-right: 1rem;
  }
  .qty-price-total {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    input {
      width: 100%;
    }
    .x {
      margin: 0.5rem;
      font-weight: 600;
    }
    h3 {
      width: fit-content;
      text-align: right;
      margin: 0 1rem;
    }
  }
  .item-actions {
    display: flex;
    img {
      height: 30px;
      margin: 5px;
      cursor: pointer;
    }
  }

  .item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    .qty-price-total {
      margin: 0;
    }
  }
`;

/*


  & .qty-price-total {
    display: flex;
    align-items: center;
    #quantity {
      max-width: 70px;
      min-width: 70px;
    }
    #price {
      padding: 3px;
      text-align: right;
      max-width: 150px;
      min-width: 70px;
    }
    #total-price {
      background: none;
      border: none;
      padding: 3px;
      font-size: 1rem;
      text-align: right;
      font-weight: 700;
      max-width: 150px;
      min-width: 50px;
    }
  }
  & .label-input {
    margin: 0 0.5rem 0 0.5rem;
  }

*/
