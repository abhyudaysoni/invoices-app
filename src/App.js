import "./App.css";
import AppRoutes from "./AppRoutes";
import { url } from "./constants/url";
import useFetchGet from "./hooks/useFetchGet";
import { sampleData } from "./constants/sample-data";

function App() {
  const data = useFetchGet(url);
  // const data = sampleData;
  return (
    <div className="App">
      <AppRoutes invoices={data} />
    </div>
  );
}

export default App;
