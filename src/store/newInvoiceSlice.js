import { createSlice } from "@reduxjs/toolkit";

const newInvoiceInitialState = {
  name: "",
  amount: "",
  status: "",
  clientAddress: {
    street: "",
    city: "",
    area: "",
    country: "",
    zip: "",
  },
  billerAddress: {
    street: "",
    city: "",
    area: "",
    country: "",
    zip: "",
  },
  email: "",
  invoiceDate: {
    day: "",
    month: "",
    year: "",
  },
  paymentDate: {
    day: "",
    month: "",
    year: "",
  },
  items: [],
};

const newInvoiceSlice = createSlice({
  name: "newInvoiceSlice",
  initialState: newInvoiceInitialState,
  reducers: {
    setNewInvoice(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.amount = action.payload.amount;
      state.status = action.payload.status;
      state.clientAddress = action.payload.clientAddress;
      state.billerAddress = action.payload.billerAddress;
      state.items = action.payload.items;
      state.invoiceDate = action.payload.invoiceDate;
      state.paymentDate = action.payload.paymentDate;
    },
  },
});

export const { setNewInvoice } = newInvoiceSlice.actions;

export default newInvoiceSlice.reducer;
