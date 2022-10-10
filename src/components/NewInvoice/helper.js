import ItemsInput from "./ItemsInput/ItemsInput";

export const getItemsArray = (
  props,
  user,
  removeItemHandler,
  saveItemHandler
) => {
  let itemsArr = [];
  if (user) {
    itemsArr = user.items.map((element, index) => (
      <ItemsInput
        key={index + Math.random()}
        itemKey={index}
        name={element.itemName}
        quantity={element.quantity}
        itemPrice={element.itemPrice}
        totalItemPrice={element.quantity * element.itemPrice}
        onDeleteItem={removeItemHandler}
        onSaveItem={saveItemHandler}
        items={user.items}
      />
    ));
  }
  return itemsArr;
};

export const getUser = (props, params) => {
  let currentUser;
  if (params.userID && props.invoices) {
    currentUser = props.invoices.find(
      (element) => element.id === params.userID
    );
  }
  return currentUser;
};
