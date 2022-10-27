import "./App.css";
import AppRoutes from "./AppRoutes";
import { useGetData } from "./api/api";
import { useSelector } from "react-redux";
// import { sampleData } from "./constants/sample-data";

function App() {
  // sampleData.map((element) => addData(element));
  useGetData();
  const invoices = useSelector((state) => state.invoices);
  return (
    <>
      {invoices.length > 0 && (
        <div className="App">
          <AppRoutes />
        </div>
      )}
    </>
  );
}

export default App;
