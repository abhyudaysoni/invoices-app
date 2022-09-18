import React from "react";
import AddressInput from "../AddressInput/AddressInput";
import { Container } from "./styles";

const ClientInfoInput = () => {
  return (
    <Container>
      <div className="part1 label-input">
        <label htmlFor="client-name">Client's Name</label>
        <input id="client-name" type="text" />
      </div>
      <div className="part1 label-input">
        <label htmlFor="client-email">Client's Email</label>
        <input id="client-email" type="email" />
      </div>
      <AddressInput />
    </Container>
  );
};

export default ClientInfoInput;
