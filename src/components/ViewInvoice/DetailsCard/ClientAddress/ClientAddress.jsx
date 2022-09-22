import React from "react";

const ClientAddress = (props) => {
  const cAddress = props.clientAddress;
  return (
    <div className="client-address">
      <p>{cAddress.street || ""}</p>
      <p>{cAddress.city || ""}</p>
      <p>{cAddress.state || ""}</p>
      <p>{cAddress.area || ""}</p>
      <p>{cAddress.country || ""}</p>
      <p>ZIP Code: {cAddress.zip || ""}</p>
    </div>
  );
};
export default ClientAddress;
