import React from "react";

const BillerAddress = (props) => {
  const bAddress = props.billerAddress;
  return (
    <div className="biller-address">
      <p>{bAddress.street || ""}</p>
      <p>{bAddress.city || ""}</p>
      <p>{bAddress.state || ""}</p>
      <p>{bAddress.country || ""}</p>
      <p>ZIP Code: {bAddress.zip || ""}</p>
    </div>
  );
};
export default BillerAddress;
