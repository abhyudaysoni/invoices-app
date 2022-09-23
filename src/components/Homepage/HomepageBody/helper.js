import { NavLink } from "react-router-dom";
import PreviewCard from "../PreviewCard/PreviewCard";

export const getFilteredData = (status, invoices) => {
  let displayData = [];
  if (status === "none") {
    displayData = invoices;
  }
  if (status === "paid") {
    displayData = invoices.filter((user) => user.status === "paid");
  }
  if (status === "pending") {
    displayData = invoices.filter((user) => user.status === "pending");
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
      <NavLink to={`/invoices/user/${user.id}`} key={user.id}>
        <PreviewCard
          key={user.id}
          className="homepage-preview"
          id={user.id}
          name={user.name}
          paymentDate={user.paymentDate}
          amount={user.amount}
          status={user.status}
        ></PreviewCard>
      </NavLink>
    );
  });
  return displayData;
};
