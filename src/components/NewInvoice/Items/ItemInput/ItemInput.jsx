import React from "react";
import { Container } from "./styles";
import deleteItem from "../../../../assets/icons/icon-delete.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../../../store/items-slice";

const ItemInput = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    itemName: props.itemName || "",
    itemPrice: props.itemPrice,
    quantity: props.quantity,
    totalItemPrice: props.totalItemPrice || 0,
    itemID: props.itemID,
  });
  const itemNameHandler = (e) => {
    setItem({ ...item, itemName: e.target.value });
    dispatch(
      updateItem({ ...item, itemID: item.itemID, itemName: e.target.value })
    );
  };
  const quantityHandler = (e) => {
    setItem({
      ...item,
      quantity: e.target.value,
      totalItemPrice: Number((e.target.value * item.itemPrice).toFixed(2)),
    });
    dispatch(
      updateItem({
        ...item,
        itemID: item.itemID,
        quantity: e.target.value,
        totalItemPrice: Number((e.target.value * item.itemPrice).toFixed(2)),
      })
    );
  };
  const itemPriceHandler = (e) => {
    setItem({
      ...item,
      itemPrice: e.target.value,
      totalItemPrice: Number((e.target.value * item.quantity).toFixed(2)),
    });
    dispatch(
      updateItem({
        ...item,
        itemID: item.itemID,
        itemPrice: e.target.value,
        totalItemPrice: Number((e.target.value * item.quantity).toFixed(2)),
      })
    );
  };

  return (
    <Container>
      <div className="input-name">
        <input
          id="item-name"
          type="text"
          placeholder="Item Name"
          value={item.itemName}
          onChange={itemNameHandler}
        />
      </div>
      <div className="item-container">
        <div className="qty-price-total">
          <div className="input">
            <input
              id="quantity"
              type="number"
              min={1}
              placeholder="QTY"
              value={item.quantity}
              onChange={quantityHandler}
            />
          </div>
          <div className="x">X</div>
          <div className="input">
            <input
              id="price"
              type="number"
              placeholder="Price"
              value={item.itemPrice}
              onChange={itemPriceHandler}
            />
          </div>
          <div className="input">
            <h3>{Number(item.totalItemPrice).toFixed(2)}</h3>
          </div>
        </div>
        <div className="item-actions">
          <img
            src={deleteItem}
            alt="del"
            onClick={props.onDelete.bind(null, item.itemID)}
          />
        </div>
      </div>
    </Container>
  );
};

export default ItemInput;
