import React, { useState } from "react";
import { Container } from "./styles";
import clear from "../../../assets/icons/clear.svg";
import save from "../../../assets/icons/save.svg";

const ClientInfoInput = (props) => {
  const [name, setName] = useState(props?.user?.name || "");
  const [email, setEmail] = useState(props?.user?.email || "");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const clearClientInfoHndler = () => {
    setEmail("");
    setName("");
  };
  const saveClientInfoHndler = () => {
    props.setInvoice({
      ...props.invoice,
      name: name,
      email: email,
    });
  };
  return (
    <Container>
      <div className="part1 label-input">
        <label htmlFor="client-name">Client's Name</label>
        <input
          id="client-name"
          type="text"
          value={name}
          onChange={nameHandler}
        />
      </div>
      <div className="part1 label-input">
        <label htmlFor="client-email">Client's Email</label>
        <input
          id="client-email"
          type="email"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div>
        <img
          className="form-actions"
          src={clear}
          onClick={clearClientInfoHndler}
          alt="clear"
        />
        <img
          className="form-actions"
          src={save}
          onClick={saveClientInfoHndler}
          alt="save"
        />
      </div>
    </Container>
  );
};

export default ClientInfoInput;
