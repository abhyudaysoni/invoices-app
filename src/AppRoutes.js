import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage status="none" />} exact />
        <Route path="/paid" element={<Homepage status="paid" />} exact />
        <Route path="/pending" element={<Homepage status="pending" />} exact />
      </Routes>
    </>
  );
};

export default AppRoutes;
