import React from "react";

const Dates = (props) => {
  const iDate = props.user.invoiceDate;
  const pDate = props.user.paymentDate;
  return (
    <div className="dates">
      <div>
        <p>Invoice Date:</p>
        <h3>{`${iDate.day}-${iDate.month}-${iDate.year}`}</h3>
      </div>
      <div>
        <p>Payment Date:</p>
        <h3>{`${pDate.day}-${pDate.month}-${pDate.year}`}</h3>
      </div>
    </div>
  );
};

export default Dates;
