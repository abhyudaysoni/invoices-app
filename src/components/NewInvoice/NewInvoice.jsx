import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import BillerAddressInput from "./BillerAddress/BillerAddressInput";
import ClientAddressInput from "./ClientAddress/ClientAddressInput";
import ClientInfoInput from "./ClientInfoInput/ClientInfoInput";
import InvoiceDateInput from "./InvoiceDateInput/InvoiceDateInput";
import ItemsInput from "./ItemsInput/ItemsInput";
import Button from "../UI/Button/Button";
import closeNewInvoiceBtn from "../../assets/icons/close-line.svg";
import { getItemsArray, getUser } from "./helper";
import clear from "../../assets/icons/clear.svg";
import save from "../../assets/icons/save.svg";
import { useNavigate } from "react-router-dom";

const NewInvoice = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(
    params.userID ? getUser(props, params) : {}
  );
  let user;
  if (params.userID) {
    user = getUser(props, params);
  }
  const [itemsArr, setItemsArr] = useState(user?.items || []);
  const removeItemHandler = (itemKey, itemName, e) => {
    setItems((prev) =>
      prev.filter((element) => {
        return element.props.itemKey !== itemKey;
      })
    );
    setItemsArr((prev) => {
      return prev.filter((element) => element.itemName !== itemName);
    });
  };
  const saveItemHandler = (itemName, quantity, price, e) => {
    const item = {
      itemName: itemName,
      quantity: quantity,
      itemPrice: price,
      totalItemPrice: (quantity * price).toFixed(2),
    };
    setItemsArr((prev) => {
      return [...prev, item];
    });
  };
  const [items, setItems] = useState(
    getItemsArray(props, user, removeItemHandler, saveItemHandler)
  );
  const newItemHandler = () => {
    setItems((prev) => [
      ...prev,
      <ItemsInput
        key={items.length + Math.random()}
        itemKey={items.length}
        onDeleteItem={removeItemHandler}
        onSaveItem={saveItemHandler}
      />,
    ]);
  };

  const clearItemsHandler = () => {
    setItems([]);
    setItemsArr([]);
  };

  const saveAllItemsHandler = () => {
    let sum = 0;
    itemsArr.map((element) => {
      sum += Number(element.totalItemPrice);
      return sum;
    });
    setInvoice((prev) => {
      return { ...prev, items: itemsArr, status: "pending", amount: sum };
    });
  };

  const saveFormHandler = () => {
    console.log(invoice);
    navigate(`/`);
  };
  const discardFormHandler = () => {
    props.onCloseOverlay();
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
        <BillerAddressInput
          billerAddress={user?.billerAddress}
          user={user}
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <h2>Bill To</h2>
        <ClientInfoInput
          user={user}
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <h2>Client Address</h2>
        <ClientAddressInput
          clientAddress={user?.clientAddress}
          user={user}
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <h2>Dates</h2>
        <InvoiceDateInput
          user={user}
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <h2 id="item-list-heading">Item List</h2>
        {items}
        <Button id="btn-add-new-item" onClick={newItemHandler}>
          <p> + Add New Item</p>
        </Button>
        <div className="actions">
          <div className="item-action">
            <img
              className="form-actions"
              src={save}
              onClick={saveAllItemsHandler}
              alt="save"
            />
            <span onClick={saveAllItemsHandler}>Save all Items</span>
          </div>
          <div className="item-action">
            <img
              className="form-actions"
              src={clear}
              onClick={clearItemsHandler}
              alt="clear"
            />
            <span onClick={clearItemsHandler}>Delete all Items at once</span>
          </div>
        </div>
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
