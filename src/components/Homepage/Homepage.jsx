import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import HomepageHeader from "./HomepageHeader/HomepageHeader";
import HomepageBody from "./HomepageBody/HomepageBody";
import Backdrop from "../UI/Backdrop/Backdrop";
import NewInvoice from "../NewInvoice/NewInvoice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Homepage(props) {
  const invoices = useSelector((state) => state.invoices);
  const navigate = useNavigate();
  const [filterOptionVisibility, setFilterOptionVisibility] = useState(false);
  const filterVisibilityHandler = () => {
    setFilterOptionVisibility((prev) => !prev);
  };
  const [newInvoiceVisibility, setNewInvoiceVisibility] = useState(false);
  const newInvoiceVisibilityHandler = () => {
    setNewInvoiceVisibility((prev) => !prev);
  };

  const overlayHandler = () => {
    setNewInvoiceVisibility(false);
    navigate(`/`);
  };
  return (
    <Container>
      <section className="default-homepage">
        {filterOptionVisibility &&
          ReactDOM.createPortal(
            <Backdrop onClick={filterVisibilityHandler}></Backdrop>,
            document.getElementById("backdrop-root")
          )}
        <HomepageHeader
          filterOptionVisibility={filterOptionVisibility}
          filterVisibilityHandler={filterVisibilityHandler}
          onNewInvoice={newInvoiceVisibilityHandler}
        />
      </section>
      <HomepageBody status={props.status} invoices={invoices} />
      {newInvoiceVisibility &&
        ReactDOM.createPortal(
          <Backdrop onClick={overlayHandler}></Backdrop>,
          document.getElementById("backdrop-root")
        )}
      {newInvoiceVisibility && (
        <NewInvoice onCloseOverlay={overlayHandler} invoices={invoices} />
      )}
    </Container>
  );
}
