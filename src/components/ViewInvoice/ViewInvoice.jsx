import React from "react";
import { Container } from "./styles";
import StatusCard from "./StatusCard/StatusCard";
import DetailsCard from "./DetailsCard/DetailsCard";
import { useParams } from "react-router-dom";
import { sampleData } from "../../sample-data";

const ViewInvoice = (props) => {
  const params = useParams();
  const user = sampleData.find((user) => user.id === params.userID);
  console.log(user);
  return (
    <Container status={user.status}>
      <StatusCard filteredUser={user} />
      <DetailsCard filteredUser={user} />
    </Container>
  );
};

export default ViewInvoice;
