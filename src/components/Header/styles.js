import styled from "styled-components";

export const Container = styled.header`
  background-color: #252946;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100px;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  z-index: 10;
  & .logo {
    width: 100%;
  }
  & .display-mode-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  & .display-mode-container img {
    height: 30px;
  }
  & .pfp-container {
    border-top: 2px solid #3d3d70;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  & .pfp-container img {
    height: 40px;
    border-radius: 100px;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    width: 100%;
    border-radius: 0;
    a {
      height: 100%;
      width: auto;
    }
    & .logo {
      height: 100%;
      width: auto;
    }
    & .account-options {
      display: flex;
    }
    & .display-mode-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75px;
      width: 75px;
      border-radius: 20px;
      border-right: 1px solid #3d3d70;
    }
    & .pfp-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75px;
      width: 75px;
      border: none;
      border-left: 1px solid #3d3d70;
      border-radius: 20px;
    }
  }
`;
