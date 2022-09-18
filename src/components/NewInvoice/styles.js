import styled from "styled-components";

export const Container = styled.section`
  background-color: #edebf5;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 60%;
  left: 100px;
  bottom: 0;
  border-radius: 0 20px 20px 0;
  animation-name: new-invoice-open;
  animation-duration: 0.2s;
  padding: 2rem;
  overflow: scroll;
  z-index: 10;
  & .new-invoice-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & h1 {
    font-size: 30px;
    margin: 2rem 0;
  }
  & h2 {
    font-size: 15px;
    color: #7c5df9;
  }
  & #item-list-heading {
    color: #454545;
    font-size: 30px;
    font-weight: 500px;
  }
  & label {
    color: #454545;
  }
  & input {
    background-color: #edebf5;
    border: 1px solid #cfd1d4;
    border-radius: 5px;
    height: 50px;
    margin: 1rem 0;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    color: black;
    font-weight: 500;
  }
  & .label-input {
    display: flex;
    flex-direction: column;
  }
  & #btn-add-new-item {
    width: 100%;
    background: #d3d9f0;
    height: 50px;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: #646566;
  }
  & .form-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .save-actions {
      display: flex;
    }
    button {
      width: max-content;
      color: #808080;
      padding: 1rem;
      height: 60px;
      margin: 1rem;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 700;
    }
    #discard {
      background: #d9d9d9;
      color: #333333;
    }
    #save {
      background: #7c5df9;
      color: #edeef0;
      padding: 0 3rem;
    }
  }
  @keyframes new-invoice-open {
    from {
      width: 0;
    }
    to {
      width: 60%;
    }
  }
  @media (max-width: 1000px) {
    left: 0;
    top: 75px;
    width: 80%;
    @keyframes new-invoice-open {
      from {
        height: 0;
      }
      to {
        height: 80%;
      }
    }
  }
  @media (max-width: 750px) {
    padding: 1rem;
    width: 100%;
    & h1 {
      font-size: 30px;
      margin: 1rem 0 1rem 0;
    }
    @keyframes new-invoice-open {
      from {
        height: 0;
      }
      to {
        height: 100%;
      }
    }
  }
  @media (max-width: 480px) {
    & .form-options {
      button {
        font-size: 0.8rem;
        height: 40px;
        padding: 0.7rem;
      }
    }
  }
  @media (max-width: 400px) {
    & .form-options {
      button {
        font-size: 0.9rem;
        height: 50px;
        padding: 1rem;
      }
      .save-actions {
        flex-direction: column;
      }
    }
  }
`;
