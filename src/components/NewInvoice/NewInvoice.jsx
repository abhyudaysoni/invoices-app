import React from "react";
import { useParams } from "react-router-dom";
import { sampleData } from "../../sample-data";
import { Container } from "./styles";
import BillerAddressInput from "./AddressInput/AddressInput";
import ClientAddressInput from "./AddressInput/AddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import ItemsInput from "./ItemsInput/ItemsInput";
import Button from "../UI/Button/Button";
import closeNewInvoiceBtn from "../../assets/icons/close-line.svg";

const NewInvoice = (props) => {
  const params = useParams();
  let currentUser;
  if (params.userID) {
    currentUser = sampleData.find((element) => element.id === params.userID);
  }
  const removeItemHandler = (key, e) => {};
  const newItemHandler = () => {};
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
        <BillerAddressInput address={currentUser?.billerAddress} />
        <h2>Bill To</h2>
        <ClientInfoInput user={currentUser} />
        <h2>Client Address</h2>
        <ClientAddressInput address={currentUser?.clientAddress} />
        <h2>Dates</h2>
        <InvoiceDateInput user={currentUser} />
        <h2 id="item-list-heading">Item List</h2>
        {currentUser?.items &&
          currentUser.items.map((element, index) => (
            <ItemsInput
              key={index + Math.random()}
              itemKey={index}
              name={element.itemName}
              quantity={element.quantity}
              itemPrice={element.itemPrice}
              totalItemPrice={element.quantity * element.itemPrice}
              onDeleteItem={removeItemHandler}
              items={currentUser.items}
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
