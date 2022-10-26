import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { GlobalStyles } from "./GlobalStyles";

const Root = () => {
  const isLight = useSelector((state) => state.displayMode.isLight);
  console.log(isLight);
  return (
    <>
      <GlobalStyles isLight={isLight} />
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>
);
