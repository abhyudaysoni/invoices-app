import React, { useState } from "react";
import { Container } from "./styles";
import clear from "../../../assets/icons/clear.svg";
import save from "../../../assets/icons/save.svg";

const InvoiceDateInput = (props) => {
  const [invoiceDate, setInvoiceDate] = useState(
    props?.user?.invoiceDate || {}
  );
  const [paymentDate, setPaymentDate] = useState(
    props?.user?.paymentDate || {}
  );
  const invoiceDateHandler = (e) => {
    let dateArray = e.target.value.split("-");
    let date = {
      day: dateArray[2],
      month: dateArray[1],
      year: dateArray[0],
    };
    setInvoiceDate(date);
  };
  const paymentDateHandler = (e) => {
    let dateArray = e.target.value.split("-");
    let date = {
      day: dateArray[2],
      month: dateArray[1],
      year: dateArray[0],
    };
    setPaymentDate(date);
  };

  const clearDatesHandler = () => {
    setInvoiceDate({});
    setPaymentDate({});
  };
  const saveDatesHandler = () => {
    props.setInvoice({
      ...props.invoice,
      invoiceDate: invoiceDate,
      paymentDate: paymentDate,
    });
  };
  return (
    <Container>
      <div className="date label-input">
        <label htmlFor="invoice-date">Invoice Date</label>
        <input
          id="invoice-date"
          type="date"
          value={`${invoiceDate.year}-${invoiceDate.month}-${invoiceDate.day}`}
          onChange={invoiceDateHandler}
        />
      </div>
      <div className="date label-input">
        <label htmlFor="payment-date">Payment Date</label>
        <input
          id="Payment-date"
          type="date"
          value={`${paymentDate.year}-${paymentDate.month}-${paymentDate.day}`}
          onChange={paymentDateHandler}
        />
      </div>
      <div>
        <img
          className="form-actions"
          src={clear}
          onClick={clearDatesHandler}
          alt="clear"
        />
        <img
          className="form-actions"
          src={save}
          onClick={saveDatesHandler}
          alt="save"
        />
      </div>
    </Container>
  );
};

export default InvoiceDateInput;
