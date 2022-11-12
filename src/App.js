import "./App.css";
import AppRoutes from "./AppRoutes";
import { useGetData } from "./api/api";

function App() {
  useGetData();
  return (
    <>
      <div className="App">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
