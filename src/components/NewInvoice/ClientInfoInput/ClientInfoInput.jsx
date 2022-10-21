import React from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";

const ClientInfoInput = (props) => {
  const dispatch = useDispatch();
  const name = props.invoice.name;
  const email = props.invoice.email;
  const nameHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        name: e.target.value,
      })
    );
  };
  const emailHandler = (e) => {
    dispatch(
      props.setInvoice({
        ...props.invoice,
        email: e.target.value,
      })
    );
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
    </Container>
  );
};

export default ClientInfoInput;
