import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import styled from "styled-components";
import { sampleData } from "../../../sample-data";
import { NavLink } from "react-router-dom";

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

  displayData = displayData.map((user, index) => {
    let totalAmount = 0;
    let tempTotalAmount;
    let totalItemsArray = user.items.map((item) => {
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
    user.amount = totalAmount.toFixed(2);
    return (
      <NavLink to={`/user/${user.id}`} key={user.id}>
        <PreviewCard
          key={user.id}
          className="homepage-preview"
          id={user.id}
          name={user.name}
          paymentDate={user.paymentDate}
          amount={user.amount}
          status={user.status}
          onClick={props.onViewInvoice}
        ></PreviewCard>
      </NavLink>
    );
  });

  return <Container>{displayData}</Container>;
};
export default HomepageBody;
