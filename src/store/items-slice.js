import { createSlice } from "@reduxjs/toolkit";

const initialItemsState = [];

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState: initialItemsState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      state.splice(action.payload, 1);
    },
    updateItem(state, action) {
      const updated = state.map((element, index) => {
        if (action.payload.itemID === element.itemID) {
          element.itemName = action.payload.itemName;
          element.itemPrice = action.payload.itemPrice;
          element.quantity = action.payload.quantity;
          element.totalItemPrice = action.payload.totalItemPrice;
        }
        return element;
      });
      state = updated;
    },
  },
});

export const { addItem, deleteItem, updateItem } = itemsSlice.actions;

export default itemsSlice.reducer;
