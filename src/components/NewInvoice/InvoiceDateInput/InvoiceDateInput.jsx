import React, { useState } from "react";
import { Container } from "./styles";

const InvoiceDateInput = (props) => {
  const [invoiceDate, setInvoiceDate] = useState(
    props?.user?.invoiceDate || ""
  );
  const [paymentDate, setPaymentDate] = useState(
    props?.user?.PaymentDate || ""
  );
  const invoiceDateHandler = (e) => {
    setInvoiceDate(e.target.value);
  };
  const paymentDateHandler = (e) => {
    setPaymentDate(e.target.value);
  };
  return (
    <Container>
      <div className="date label-input">
        <label htmlFor="invoice-date">Invoice Date</label>
        <input
          id="invoice-date"
          type="date"
          value={invoiceDate}
          onChange={invoiceDateHandler}
        />
      </div>
      <div className="date label-input">
        <label htmlFor="payment-date">Payment Date</label>
        <input
          id="Payment-date"
          type="date"
          value={paymentDate}
          onChange={paymentDateHandler}
        />
      </div>
    </Container>
  );
};

export default InvoiceDateInput;
