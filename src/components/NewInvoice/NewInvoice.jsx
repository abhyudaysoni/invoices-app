import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";
import Button from "../UI/Button/Button";
import closeNewInvoiceBtn from "../../assets/icons/close-line.svg";
import BillerAddressInput from "./BillerAddress/BillerAddressInput";
import ClientAddressInput from "./ClientAddress/ClientAddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import {
  setEditInvoice,
  editInvoiceInitialState,
} from "../../store/edit-invoice-slice";
import {
  setNewInvoice,
  newInvoiceInitialState,
} from "../../store/new-invoice-slice";
import { addData, updateData } from "../../api/api";
import Items from "./Items/Items";
import { addItem } from "../../store/items-slice";
import save from "../../assets/icons/save.svg";

const NewInvoice = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newInvoice = useSelector((state) => state.newInvoice);
  const editInvoice = useSelector((state) => state.editInvoice);
  const isLight = useSelector((state) => state.displayMode.isLight);
  const invoice = params.userID ? editInvoice : newInvoice;
  const setInvoice = params.userID ? setEditInvoice : setNewInvoice;
  const items = useSelector((state) => state.items);
  useEffect(() => {
    if (params.userID) {
      invoice.items.map((item, index) => {
        dispatch(addItem({ ...item, itemID: index + 1 }));
        return item;
      });
    }
  }, [invoice.items, dispatch, params.userID]);
  const saveAllItems = () => {
    let sum = 0;
    items.map((item) => {
      sum += Number(item.totalItemPrice);
      return sum;
    });
    dispatch(setInvoice({ ...invoice, items: items, amount: sum.toFixed(2) }));
    alert("all items saved");
  };
  const saveFormHandler = () => {
    params.userID ? updateData(invoice, invoice.fid) : addData({ ...invoice });
    props.onCloseOverlay();
    params.userID
      ? dispatch(setEditInvoice(editInvoiceInitialState))
      : dispatch(setNewInvoice(newInvoiceInitialState));
    navigate("/");
  };
  const discardFormHandler = () => {
    alert("Changes will not be saved");
    params.userID
      ? dispatch(setEditInvoice(editInvoiceInitialState))
      : dispatch(setNewInvoice(newInvoiceInitialState));
    props.onCloseOverlay();
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
        <Items />
      </form>
      <div className="item-options">
        <p onClick={saveAllItems}>Save all Items</p>
        <img
          src={save}
          alt="save-items"
          id="save-all-items"
          onClick={saveAllItems}
        />
      </div>
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
