import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import HomepageHeader from "./HomepageHeader/HomepageHeader";
import HomepageBody from "./HomepageBody/HomepageBody";
import Backdrop from "../UI/Backdrop/Backdrop";
import NewInvoice from "../NewInvoice/NewInvoice";

export default function Homepage(props) {
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
  };

  return (
    <Container>
      <section className="default-homepage">
        <HomepageHeader
          filterOptionVisibility={filterOptionVisibility}
          filterVisibilityHandler={filterVisibilityHandler}
          onNewInvoice={newInvoiceVisibilityHandler}
        />
      </section>
      <HomepageBody status={props.status} />
      {newInvoiceVisibility &&
        ReactDOM.createPortal(
          <Backdrop onClick={overlayHandler}></Backdrop>,
          document.getElementById("backdrop-root")
        )}
      {newInvoiceVisibility && <NewInvoice onCloseOverlay={overlayHandler} />}
    </Container>
  );
}
