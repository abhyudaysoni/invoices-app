import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import Button from "../UI/Button/Button";
import closeNewInvoiceBtn from "../../assets/icons/close-line.svg";
import BillerAddressInput from "./BillerAddress/BillerAddressInput";
import ClientAddressInput from "./ClientAddress/ClientAddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import { setEditInvoice } from "../../store/editInvoiceSlice";
import { setNewInvoice } from "../../store/newInvoiceSlice";

const NewInvoice = (props) => {
  const params = useParams();
  const newInvoice = useSelector((state) => state.newInvoice);
  const editInvoice = useSelector((state) => state.editInvoice);
  const invoice = params.userID ? editInvoice : newInvoice;
  const setInvoice = params.userID ? setEditInvoice : setNewInvoice;
  console.log(invoice);
  const newItemHandler = () => {};
  const saveFormHandler = () => {};
  const discardFormHandler = () => {};
  return (
    <Container>
      <div className="new-invoice-header">
        <h1>New Invoice</h1>
        <Button onClick={props.onCloseOverlay}>
          <img src={closeNewInvoiceBtn} alt="" />
        </Button>
      </div>
      <form>
        <h2>Bill From</h2>
        <BillerAddressInput invoice={invoice} setInvoice={setInvoice} />
        <h2>Bill To</h2>
        <ClientInfoInput invoice={invoice} setInvoice={setInvoice} />
        <h2>Client Address</h2>
        <ClientAddressInput invoice={invoice} setInvoice={setInvoice} />
        <h2>Dates</h2>
        <InvoiceDateInput invoice={invoice} setInvoice={setInvoice} />
        <h2 id="item-list-heading">Item List</h2>
        {/* {items} */}
        <Button id="btn-add-new-item" onClick={newItemHandler}>
          <p> + Add New Item</p>
        </Button>
      </form>
      <div className="form-options">
        <Button id="discard" onClick={discardFormHandler}>
          Discard
        </Button>
        <div className="save-actions">
          <Button id="save" onClick={saveFormHandler}>
            Save
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NewInvoice;
