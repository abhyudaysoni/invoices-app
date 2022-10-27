import { createSlice } from "@reduxjs/toolkit";

export const editInvoiceInitialState = {
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
  id: "",
  fid: "",
  items: [],
};

const editInvoiceSlice = createSlice({
  name: "editInvoiceSlice",
  initialState: editInvoiceInitialState,
  reducers: {
    setEditInvoice(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.amount = action.payload.amount;
      state.status = action.payload.status;
      state.clientAddress = action.payload.clientAddress;
      state.billerAddress = action.payload.billerAddress;
      state.items = action.payload.items;
      state.invoiceDate = action.payload.invoiceDate;
      state.paymentDate = action.payload.paymentDate;
      state.id = action.payload.id;
      state.fid = action.payload.fid;
    },
  },
});

export const { setEditInvoice } = editInvoiceSlice.actions;

export default editInvoiceSlice.reducer;
