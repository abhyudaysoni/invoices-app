import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice";
import newInvoiceReducer from "./newInvoiceSlice";
import editInvoiceReducer from "./editInvoiceSlice";
import displayModeReducer from "./displayMode";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    newInvoice: newInvoiceReducer,
    editInvoice: editInvoiceReducer,
    displayMode: displayModeReducer,
  },
});
