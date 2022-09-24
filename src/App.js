import "./App.css";
import AppRoutes from "./AppRoutes";
import { url } from "./constants/url";
import useFetchGet from "./hooks/useFetchGet";

function App() {
  const data = useFetchGet(url);
  return (
    <div className="App">
      <AppRoutes invoices={data} />
    </div>
  );
}

export default App;
