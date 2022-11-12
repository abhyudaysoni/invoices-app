import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./invoices-slice";
import newInvoiceReducer from "./new-invoice-slice";
import editInvoiceReducer from "./edit-invoice-slice";
import displayModeReducer from "./display-mode";
import itemsReducer from "./items-slice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    newInvoice: newInvoiceReducer,
    editInvoice: editInvoiceReducer,
    displayMode: displayModeReducer,
    items: itemsReducer,
  },
});
