import React, { useState } from "react";
import { Container } from "./styles";
import deleteItem from "../../../assets/icons/icon-delete.svg";
import save from "../../../assets/icons/save.svg";

const ItemsInput = (props) => {
  const [itemName, setItemName] = useState(props.name || "");
  const [quantity, setQuantity] = useState(props.quantity || "");
  const [itemPrice, setItemPrice] = useState(props.itemPrice || "");
  const [totalItemPrice, setTotalItemPrice] = useState(
    props.totalItemPrice || ""
  );
  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const quantityHandler = (e) => {
    setQuantity(e.target.value);
    setTotalItemPrice((e.target.value * itemPrice).toFixed(2));
  };
  const itemPriceHandler = (e) => {
    setItemPrice(e.target.value);
    setTotalItemPrice((quantity * e.target.value).toFixed(2));
  };
  return (
    <Container>
      <div className="label-input-name">
        <input
          id="item-name"
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={itemNameHandler}
        />
      </div>
      <div className="qty-price-total">
        <div className="label-input">
          <input
            id="quantity"
            type="number"
            min={1}
            placeholder="QTY"
            value={quantity}
            onChange={quantityHandler}
          />
        </div>
        <div>x</div>
        <div className="label-input">
          <input
            id="price"
            type="text"
            placeholder="Price"
            value={itemPrice}
            onChange={itemPriceHandler}
          />
        </div>
        <div className="label-input">
          <h3>{totalItemPrice}</h3>
        </div>
        <div className="item-actions">
          <img
            src={deleteItem}
            className="item-action"
            alt="delete-item"
            onClick={props.onDeleteItem.bind(null, props.itemKey, itemName)}
          />
          <img
            className="item-action"
            src={save}
            onClick={props.onSaveItem.bind(null, itemName, quantity, itemPrice)}
            alt="save"
          />
        </div>
      </div>
    </Container>
  );
};

export default ItemsInput;
