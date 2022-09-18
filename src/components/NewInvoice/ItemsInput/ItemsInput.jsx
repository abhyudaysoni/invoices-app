import React from "react";
import { Container } from "./styles";
import Button from "../../UI/Button/Button";
import deleteItem from "../../../assets/icons/icon-delete.svg";

const ItemsInput = (props) => {
  console.log("added " + props.itemKey);
  return (
    <Container>
      <div className="label-input-name">
        <input
          id="item-name"
          type="text"
          placeholder="Item Name"
          value={props.itemName || ""}
        />
      </div>
      <div className="qty-price-total">
        <div className="label-input">
          <input
            id="quantity"
            type="number"
            min={1}
            placeholder="QTY"
            value={props.quantity || ""}
          />
        </div>
        <div>x</div>
        <div className="label-input">
          <input
            id="price"
            type="text"
            placeholder="Price"
            value={props.itemPrice || ""}
          />
        </div>
        <div className="label-input">
          <input
            id="total-price"
            type="text"
            placeholder="Total Price"
            disabled
            value={props.totalItemPrice || ""}
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
