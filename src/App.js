import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { url } from "./requests/url";
import useFetchGet from "./requests/useFetchGet";
import Loading from "./components/UI/Loading//Loading";

function App() {
  const data = useFetchGet(url);
  return (
    <div className="App">
      <AppRoutes invoices={data} />
    </div>
  );
}

export default App;
