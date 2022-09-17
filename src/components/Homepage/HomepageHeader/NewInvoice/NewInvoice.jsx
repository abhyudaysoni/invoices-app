import React from "react";
import Button from "../../../UI/Button/Button";
import BillerAddressInput from "./AddressInput/AddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import ItemsInput from "./ItemsInput/ItemsInput";
import { Container } from "./styles";
import closeNewInvoiceBtn from "../../../../assets/icons/close-line.svg";
import { useState } from "react";

const NewInvoice = (props) => {
  const [itemsInputArray, setItemsInputArray] = useState([]);
  const removeItemHandler = (key, e) => {
    setItemsInputArray(
      itemsInputArray.filter((element, index) => index !== key)
    );
  };
  const newItemHandler = () => {
    setItemsInputArray((prev) => [
      ...prev,
      {
        itemName: "",
        quantity: "",
        itemPrice: "",
        totalItemPrice: "",
      },
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
        <BillerAddressInput />
        <h2>Bill To</h2>
        <ClientInfoInput />
        <h2>Dates</h2>
        <InvoiceDateInput />
        <h2 id="item-list-heading">Item List</h2>
        {itemsInputArray.map((element, index) => (
          <ItemsInput
            key={index + Math.random()}
            itemKey={index}
            name={element.itemName}
            quantity={element.quantity}
            itemPrice={element.itemPrice}
            totalItemPrice={element.quantity * element.itemPrice}
            onDeleteItem={removeItemHandler}
          />
        ))}
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
