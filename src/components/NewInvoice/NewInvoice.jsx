import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";
import Button from "../UI/Button/Button";
import closeNewInvoiceBtn from "../../assets/icons/close-line.svg";
import BillerAddressInput from "./BillerAddress/BillerAddressInput";
import ClientAddressInput from "./ClientAddress/ClientAddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import { setEditInvoice } from "../../store/editInvoiceSlice";
import { setNewInvoice } from "../../store/newInvoiceSlice";
import { addData, updateData } from "../../api/api";

const NewInvoice = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newInvoice = useSelector((state) => state.newInvoice);
  const editInvoice = useSelector((state) => state.editInvoice);
  const isLight = useSelector((state) => state.displayMode.isLight);
  const invoice = params.userID ? editInvoice : newInvoice;
  const setInvoice = params.userID ? setEditInvoice : setNewInvoice;
  const saveFormHandler = () => {
    params.userID ? updateData(invoice, invoice.fid) : addData({ ...invoice });
    props.onCloseOverlay();
  };
  const discardFormHandler = () => {
    params.userID ? dispatch(setEditInvoice({})) : dispatch(setNewInvoice({}));
    navigate("/");
  };
  return (
    <Container isLight={isLight}>
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
      </form>
      <div className="form-options">
        <Button id="discard" onClick={discardFormHandler}>
          Discard
        </Button>
        <div className="save-actions">
          <Button id="save" onClick={saveFormHandler}>
            Save Invoice
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NewInvoice;
