import React from "react";
import { Container } from "./styles";
import ItemInput from "./ItemInput/ItemInput";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../../../store/items-slice";

const Items = (props) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const deleteItemHandler = (itemID, e) => {
    // alert("Are you sure you want to delete?");
    dispatch(deleteItem(itemID));
  };
  const newItemHandler = () => {
    dispatch(
      addItem({
        itemName: "",
        itemPrice: "",
        quantity: "",
        itemID: items.length,
      })
    );
  };
  return (
    <Container>
      {items.map((element, index) => (
        <ItemInput
          key={index}
          itemName={element.itemName}
          itemPrice={element.itemPrice}
          quantity={element.quantity}
          totalItemPrice={element.totalItemPrice}
          itemID={element.itemID}
          setInvoice={props.setInvoice}
          invoice={props.invoice}
          onDelete={deleteItemHandler}
        />
      ))}
      <Button id="btn-add-new-item" onClick={newItemHandler}>
        <p> + Add New Item</p>
      </Button>
    </Container>
  );
};

export default Items;
