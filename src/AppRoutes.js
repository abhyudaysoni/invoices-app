import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Loading from "./components/UI/Loading/Loading";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";
import PageNotFound from "./components/UI/PageNotFound";
import { url } from "./constants/url";
import useFetchGet from "./hooks/useFetchGet";

const AppRoutes = (props) => {
  const data = useFetchGet(url);
  return (
    <>
      <Header />
      {!data && <Loading />}
      {data && (
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/invoices" status="none" />}
            exact
          />
          <Route
            path="/invoices"
            element={<Homepage status="none" invoices={data} />}
            exact
          />
          <Route
            path="/invoices/paid"
            element={<Homepage status="paid" invoices={data} />}
            exact
          />
          <Route
            path="/invoices/pending"
            element={<Homepage status="pending" invoices={data} />}
            exact
          />
          <Route
            path="/invoices/new"
            element={<Homepage status="none" invoices={data} />}
            exact
          />
          <Route
            path="/invoices/user/:userID"
            element={<ViewInvoice invoices={data} />}
          />
          <Route
            path="/invoices/user/:userID/edit"
            element={<ViewInvoice invoices={data} />}
            exact
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
