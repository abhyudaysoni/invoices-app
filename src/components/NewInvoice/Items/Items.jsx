import React from "react";
import { Container } from "./styles";
import ItemInput from "./ItemInput/ItemInput";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Items = (props) => {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    alert("Are you sure you want to delete?");
  };
  const saveItemHandler = () => {};
  const items = props.items.map((element, index) => (
    <ItemInput
      key={index}
      itemName={element.itemName}
      itemPrice={element.itemPrice}
      quantity={element.quantity}
      totalItemPrice={element.totalItemPrice}
      setInvoice={props.setInvoice}
      invoice={props.invoice}
      onDelete={deleteItemHandler}
      onSave={saveItemHandler}
    />
  ));
  const newItemHandler = () => {
    dispatch(props.addItem());
  };
  return (
    <Container>
      {items}
      <Button id="btn-add-new-item" onClick={newItemHandler}>
        <p> + Add New Item</p>
      </Button>
    </Container>
  );
};

export default Items;
