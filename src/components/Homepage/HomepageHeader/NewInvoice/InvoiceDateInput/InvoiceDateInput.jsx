import React from "react";
import { Container } from "./styles";

const InvoiceDateInput = () => {
  return (
    <Container>
      <div className="date label-input">
        <label htmlFor="invoice-date">Invoice Date</label>
        <input id="invoice-date" type="date" />
      </div>
      <div className="date label-input">
        <label htmlFor="payment-date">Payment Date</label>
        <input id="Payment-date" type="date" />
      </div>
    </Container>
  );
};

export default InvoiceDateInput;
