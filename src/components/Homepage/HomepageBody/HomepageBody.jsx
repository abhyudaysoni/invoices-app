import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import styled from "styled-components";
import { sampleData } from "../../../sample-data";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  & .homepage-preview {
    cursor: pointer;
  }
`;

const HomepageBody = (props) => {
  let displayData = [];
  if (props.status === "none") {
    displayData = sampleData;
  }
  if (props.status === "paid") {
    displayData = sampleData.filter((user) => user.status === "paid");
  }
  if (props.status === "pending") {
    displayData = sampleData.filter((user) => user.status === "pending");
  }

  displayData = displayData.map((users, index) => {
    let totalAmount = 0;
    let tempTotalAmount;
    let totalItemsArray = users.items.map((item) => {
      let sum = 0;
      sum = sum + item.quantity * item.itemPrice;
      return sum;
    });
    let sum = 0;
    tempTotalAmount = totalItemsArray.map((item) => {
      sum = sum + item;
      return sum;
    });
    totalAmount = tempTotalAmount[tempTotalAmount.length - 1];
    users.amount = totalAmount.toFixed(2);
    return (
      <PreviewCard
        key={users.id}
        className="homepage-preview"
        id={users.id}
        name={users.name}
        dueDate={users.dueDate}
        amount={users.amount}
        status={users.status}
        onClick={props.onViewInvoice}
      ></PreviewCard>
    );
  });

  return <Container>{displayData}</Container>;
};
export default HomepageBody;
