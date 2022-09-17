import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .left {
    p {
      color: #454545;
    }
    h1 {
      font-size: 40px;
      font-weight: 800;
    }
  }
  & .right {
    display: flex;
    align-items: center;
    #btn-filter {
      z-index: 6;
      :hover {
        img {
          scale: 1.5;
          transition: 0.1s;
        }
      }
      display: flex;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      width: 190px;
      justify-content: space-between;
      padding: 1rem;
      color: black;
      font-size: 1rem;
      font-weight: 700;
      img {
        margin: 0.5rem;
      }
      .btn {
        display: flex;
        /* margin: 1rem 0; */
      }
      .filter-options {
        display: flex;
        padding: 0;
        width: 140px;
        top: 140px;
        flex-direction: column;
        height: fit-content;
        justify-content: space-around;
        border-radius: 5px;
        position: fixed;
        background: #e9edf5;
        overflow: hidden;
        box-shadow: 0px 0px 5px 1px #e6e6e6;
        z-index: 10;
        #paid {
          background: #ebfff8;
        }
        #pending {
          background: #fff8f0;
        }
        #paid:hover {
          color: #42cdac;
          background: #ebfff8;
        }
        #pending:hover {
          color: #f98e24;
          background: #fff8f0;
        }
        button {
          width: 100%;
          text-align: left;
          padding: 1rem;
          font-weight: 600;
        }
        button:hover {
          background-color: white;
          text-shadow: 1px 1px 5px #d9dadb;
        }
      }
    }

    #btn-new-invoice {
      :hover {
        img {
          scale: 1.3;
          transition: 0.1s;
        }
      }
      width: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #7c5df9;
      padding: 1rem;
      height: 70px;
      border-radius: 50px;
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      img {
        margin: 0.2rem;
      }
    }
  }
  @media (max-width: 700px) {
    & .right #btn-new-invoice {
      width: fit-content;
      border-radius: 100px;
    }
    & .left h1 {
      font-size: 30px;
      font-weight: 800;
    }
  }
  @media (max-width: 400px) {
    & .right #btn-filter {
      width: fit-content;
      .filter-options {
        width: fit-content;
      }
    }
  }
`;
