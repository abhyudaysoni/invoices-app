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
    setName(state, action) {},
    setEmail(state, action) {},
    setAmount(state, action) {},
    setStatus(state, action) {},
    setClientAddress(state, action) {},
    setBillerAddress(state, action) {},
    setItems(state, action) {},
    setInvoiceDate(state, action) {},
    setPaymentDate(state, action) {},
  },
});

export const {
  setName,
  setEmail,
  setAmount,
  setBillerAddress,
  setClientAddress,
  setItems,
  setInvoiceDate,
  setPaymentDate,
  setStatus,
} = newInvoiceSlice.actions;

export default newInvoiceSlice.reducer;
