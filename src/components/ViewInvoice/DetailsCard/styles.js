import styled from "styled-components";

export const Container = styled.section`
  border-radius: 20px;
  background-color: white;
  padding: 2rem;
  background: ${(props) => (props.isLight ? "white" : "#1e2139")};
  color: ${(props) => (props.isLight ? "black" : "white")};
  & .id-biller-address {
    display: flex;
    flex-wrap: wrap;
    line-height: 2rem;
    justify-content: space-between;
    margin: 1rem;
    .biller-address {
      display: flex;
      flex-direction: column;
    }
  }

  & .invoice-date-client-address-email {
    display: flex;
    flex-wrap: wrap;
    line-height: 2rem;
    justify-content: space-between;
    margin: 1rem;
    .dates {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 1rem 0;
    }
    .name-client-address {
      margin: 1rem 0;
    }
    .email {
      margin: 1rem 0;
    }
  }
  @media (max-width: 1000px) {
    & .invoice-date-client-address-email {
      margin: 1rem;
      .dates {
        margin: 1rem;
      }
      .name-client-address {
        margin: 1rem;
      }
      .email {
        margin: 1rem;
      }
    }
  }
`;
