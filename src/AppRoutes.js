import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";

const AppRoutes = (props) => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/invoices" status="none" />}
          exact
        />
        <Route path="/invoices" element={<Homepage status="none" />} exact />
        <Route
          path="/invoices/paid"
          element={<Homepage status="paid" />}
          exact
        />
        <Route
          path="/invoices/pending"
          element={<Homepage status="pending" />}
          exact
        />
        <Route
          path="/invoices/new"
          element={<Homepage status="pending" />}
          exact
        />
        <Route
          path="/invoices/user/:userID/edit"
          element={<ViewInvoice />}
          exact
        />
        <Route path="/invoices/user/:userID" element={<ViewInvoice />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
