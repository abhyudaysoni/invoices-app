import React from "react";
import { Container } from "./styles";
import deleteItem from "../../../../assets/icons/icon-delete.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import save from "../../../../assets/icons/save.svg";

const ItemInput = (props) => {
  console.log(props);
  const [item, setItem] = useState({
    itemName: props.itemName,
    itemPrice: Number(props.itemPrice),
    quantity: Number(props.quantity),
    totalItemPrice: Number(props.totalItemPrice) || 0,
  });

  // console.log(item);
  const itemNameHandler = (e) => {
    setItem({ ...item, itemName: e.target.value });
  };
  const quantityHandler = (e) => {
    setItem({ ...item, quantity: e.target.value });
    setItem({
      ...item,
      totalItemPrice: Number(e.target.value * item.itemPrice),
    });
  };
  const itemPriceHandler = (e) => {
    setItem({ ...item, itemPrice: e.target.value });
    setItem({
      ...item,
      totalItemPrice: Number(e.target.value * item.quantity),
    });
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
              type="text"
              placeholder="Price"
              value={item.itemPrice}
              onChange={itemPriceHandler}
            />
          </div>
          <div className="input">
            <h3>{item.totalItemPrice.toFixed(2)}</h3>
          </div>
        </div>
        <div className="item-actions">
          <img src={save} alt="save" onClick={props.onSave.bind(null, item)} />
          <img src={deleteItem} alt="del" onClick={props.onDelete} />
        </div>
      </div>
    </Container>
  );
};

export default ItemInput;
