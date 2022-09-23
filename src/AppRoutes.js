import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Loading from "./components/UI/Loading/Loading";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";
const AppRoutes = (props) => {
  return (
    <>
      <Header />
      {!props.invoices && <Loading />}
      {props.invoices && (
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/invoices" status="none" />}
            exact
          />
          <Route
            path="/invoices"
            element={<Homepage status="none" invoices={props.invoices} />}
            exact
          />
          <Route
            path="/invoices/paid"
            element={<Homepage status="paid" invoices={props.invoices} />}
            exact
          />
          <Route
            path="/invoices/pending"
            element={<Homepage status="pending" invoices={props.invoices} />}
            exact
          />
          <Route
            path="/invoices/new"
            element={<Homepage status="pending" invoices={props.invoices} />}
            exact
          />
          <Route
            path="/invoices/user/:userID"
            element={<ViewInvoice invoices={props.invoices} />}
          />
          <Route
            path="/invoices/user/:userID/edit"
            element={<ViewInvoice invoices={props.invoices} />}
            exact
          />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
