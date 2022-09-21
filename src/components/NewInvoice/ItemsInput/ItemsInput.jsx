import React, { useState } from "react";
import { Container } from "./styles";
import Button from "../../UI/Button/Button";
import deleteItem from "../../../assets/icons/icon-delete.svg";

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
  };
  const itemPriceHandler = (e) => {
    setItemPrice(e.target.value);
  };
  const totalItemPriceHandler = (e) => {
    setTotalItemPrice(e.target.value);
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
          <input
            id="total-price"
            type="text"
            placeholder="Total Price"
            disabled
            value={totalItemPrice}
            onChange={totalItemPriceHandler}
          />
        </div>
        <Button id="delete-item">
          <img
            src={deleteItem}
            alt="delete-item"
            onClick={props.onDeleteItem.bind(null, props.itemKey)}
          />
        </Button>
      </div>
    </Container>
  );
};

export default ItemsInput;
