import React from "react";
import BillerAddress from "./BillerAddress/BillerAddress";
import ClientAddress from "./ClientAddress/ClientAddress";
import Dates from "./Dates/Dates";
import Items from "./Items/Items";
import { Container } from "./styles";

const DetailsCard = (props) => {
  const user = props.filteredUser;
  const id = user.id;
  const amount = user.amount;
  console.log(amount);

  return (
    <Container>
      <div className="id-biller-address">
        <h3>#{id}</h3>
        <BillerAddress billerAddress={user.billerAddress} />
      </div>
      <div className="invoice-date-client-address-email">
        <Dates user={user} />
        <div className="name-client-address">
          <p>Billed to:</p>
          <h3>{user.name}</h3>
          <ClientAddress clientAddress={user.clientAddress} />
        </div>
        <div className="email">
          <p>Sent to: </p>
          <h3>{user.email}</h3>
        </div>
      </div>
      <div className="items-list">
        <Items items={user.items} amount={amount} />
      </div>
    </Container>
  );
};

export default DetailsCard;
