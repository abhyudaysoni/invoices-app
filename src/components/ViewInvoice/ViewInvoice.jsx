import StatusCard from "./StatusCard/StatusCard";
import DetailsCard from "./DetailsCard/DetailsCard";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import Backdrop from "../UI/Backdrop/Backdrop";
import NewInvoice from "../NewInvoice/NewInvoice";
import { useNavigate } from "react-router-dom";

const ViewInvoice = (props) => {
  const params = useParams();

  const [editVisibility, setEditVisibility] = useState(false);
  const user = props.invoices.find((user) => user.id === params.userID);
  const navigate = useNavigate();
  const editVisibilityHandler = () => {
    setEditVisibility((prev) => !prev);
  };

  const deleteInvoiceHandler = () => {};

  const overlayHandler = () => {
    setEditVisibility(false);
    navigate(`/invoices/user/${params.userID}`);
  };
  return (
    <Container status={user.status}>
      <StatusCard
        filteredUser={user}
        userID={params.userID}
        onEdit={editVisibilityHandler}
        onDelete={deleteInvoiceHandler}
      />
      <DetailsCard filteredUser={user} />
      {editVisibility &&
        ReactDOM.createPortal(
          <Backdrop onClick={overlayHandler}></Backdrop>,
          document.getElementById("backdrop-root")
        )}
      {editVisibility && (
        <NewInvoice
          onCloseOverlay={overlayHandler}
          userID={params.userID}
          invoices={props.invoices}
        />
      )}
    </Container>
  );
};

export default ViewInvoice;
