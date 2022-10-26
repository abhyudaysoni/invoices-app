import "./App.css";
import AppRoutes from "./AppRoutes";
import { useGetData } from "./api/api";
// import { sampleData } from "./constants/sample-data";

function App() {
  // sampleData.map((element) => addData(element));
  useGetData();
  return <div className="App">{<AppRoutes />}</div>;
}

export default App;
