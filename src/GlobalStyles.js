import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  background: ${(props) => (props.isLight ? "#edebf5" : "#141625")};
  color: ${(props) => (props.isLight ? "black" : "white")};
}
a {
  text-decoration: none;
  color: black;
}
button {
  cursor: pointer;
}
`;
