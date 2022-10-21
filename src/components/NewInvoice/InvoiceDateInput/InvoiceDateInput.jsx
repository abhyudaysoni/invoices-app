import React from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";

const InvoiceDateInput = (props) => {
  const dispatch = useDispatch();
  const invoiceDate = props.invoice.invoiceDate;
  const paymentDate = props.invoice.paymentDate;

  const invoiceDateHandler = (e) => {
    let dateArray = e.target.value.split("-");
    let date = {
      day: dateArray[2],
      month: dateArray[1],
      year: dateArray[0],
    };
    dispatch(
      props.setInvoice({
        ...props.invoice,
        invoiceDate: date,
      })
    );
  };
  const paymentDateHandler = (e) => {
    let dateArray = e.target.value.split("-");
    let date = {
      day: dateArray[2],
      month: dateArray[1],
      year: dateArray[0],
    };
    dispatch(
      props.setInvoice({
        ...props.invoice,
        paymentDate: date,
      })
    );
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
    </Container>
  );
};

export default InvoiceDateInput;
