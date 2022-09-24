import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import BillerAddressInput from "./AddressInput/AddressInput";
import ClientAddressInput from "./AddressInput/AddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import ItemsInput from "./ItemsInput/ItemsInput";
import Button from "../UI/Button/Button";
import closeNewInvoiceBtn from "../../assets/icons/close-line.svg";
import { getItemsArray, getUser } from "./helper";

const NewInvoice = (props) => {
  const params = useParams();
  let user;
  if (params.userID) {
    user = getUser(props, params);
  }
  const removeItemHandler = (itemKey, e) => {
    setItems((prev) =>
      prev.filter((element) => {
        return element.props.itemKey !== itemKey;
      })
    );
  };
  const itemsArr = getItemsArray(props, user, removeItemHandler);
  const [items, setItems] = useState(itemsArr);
  const newItemHandler = () => {
    setItems((prev) => [
      ...prev,
      <ItemsInput
        key={items.length + Math.random()}
        itemKey={items.length}
        onDeleteItem={removeItemHandler}
      />,
    ]);
  };
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
        <BillerAddressInput address={user?.billerAddress} />
        <h2>Bill To</h2>
        <ClientInfoInput user={user} />
        <h2>Client Address</h2>
        <ClientAddressInput address={user?.clientAddress} />
        <h2>Dates</h2>
        <InvoiceDateInput user={user} />
        <h2 id="item-list-heading">Item List</h2>
        {items}
        <Button id="btn-add-new-item" onClick={newItemHandler}>
          <p> + Add New Item</p>
        </Button>
      </form>
      <div className="form-options">
        <Button id="discard" onClick={props.onCloseOverlay}>
          Discard
        </Button>
        <div className="save-actions">
          <Button id="save">Save</Button>
        </div>
      </div>
    </Container>
  );
};

export default NewInvoice;
