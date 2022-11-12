import styled from "styled-components";

export const Container = styled.section`
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
  background: ${(props) => (props.isLight ? "#edebf5" : "#1e2139")};
  color: ${(props) => (props.isLight ? "black" : "white")};
  #save-items-btn {
    height: 50px;
  }
  & .new-invoice-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      border-radius: 5px;
      background: ${(props) => (props.isLight ? "#edebf5" : "#1e2139")};
    }
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
    color: ${(props) => (props.isLight ? "#454545" : "white")};
    font-size: 30px;
    font-weight: 500px;
  }
  & label {
    color: ${(props) => (props.isLight ? "#454545" : "white")};
  }
  & input {
    border: 1px solid ${(props) => (props.isLight ? "#cfd1d4" : "#343859")};
    border-radius: 5px;
    height: 50px;
    margin: 1rem 0;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    font-weight: 500;
    background: ${(props) => (props.isLight ? "#edebf5" : "#1e2139")};
    color: ${(props) => (props.isLight ? "black" : "white")};
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
    margin: 1rem auto;
  }
  .item-options {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0 1rem;
    margin-bottom: 2rem;
    #save-all-items {
      height: 30px;
      padding: 0 0.5rem;
    }
    span {
      cursor: pointer;
    }
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
  .form-actions {
    cursor: pointer;
    height: 20px;
    margin: 0rem 1rem 2rem 0;
  }
  .actions {
    display: flex;
    justify-content: space-between;
  }
  .item-action {
    display: flex;
    align-items: center;
    img {
      margin: 1rem;
    }
    span {
      cursor: pointer;
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
