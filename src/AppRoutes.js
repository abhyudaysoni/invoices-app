import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage status="none" />} exact />
        <Route path="/paid" element={<Homepage status="paid" />} exact />
        <Route path="/pending" element={<Homepage status="pending" />} exact />
        <Route path="/user/:userID" element={<ViewInvoice />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
