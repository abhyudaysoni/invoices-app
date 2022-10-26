import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";
import PageNotFound from "./components/UI/PageNotFound";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Homepage status="none" />} />
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
          element={<Homepage status="none" />}
          exact
        />
        <Route path="/invoices/user/:userID" element={<ViewInvoice />} />
        <Route
          path="/invoices/user/:userID/edit"
          element={<ViewInvoice />}
          exact
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
