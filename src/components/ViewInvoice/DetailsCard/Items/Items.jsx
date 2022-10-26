import React from "react";
import { Container } from "./styles";
import Card from "../../../UI/Card/Card";
import { useSelector } from "react-redux";

const Items = (props) => {
  const isLight = useSelector((state) => state.displayMode.isLight);
  const tableHead = (
    <thead className="table-header">
      <tr className="table-row">
        <th align="left">Item Name</th>
        <th align="right">QTY.</th>
        <th align="right">Price</th>
        <th align="right">Total</th>
      </tr>
    </thead>
  );
  const totalAmountRow = (
    <>
      <p>Total Amount</p>
      <h2>${Number(props.amount).toFixed(2)}</h2>
    </>
  );
  const items = props?.items?.map((element, index) => (
    <tr className="table-row" key={index}>
      <td className="name" align="left">
        {element.itemName}
      </td>
      <td className="quantity" align="right">
        {element.quantity}
      </td>
      <td className="price" align="right">
        ${element.itemPrice}
      </td>
      <td className="total-item-price" align="right">
        ${element.quantity * element.itemPrice}
      </td>
    </tr>
  ));
  return (
    <>
      <Container isLight={isLight}>
        <table>
          {tableHead}
          <tbody>{items}</tbody>
        </table>
        <Card className="total-amount-row">{totalAmountRow}</Card>
      </Container>
    </>
  );
};

export default Items;

/*

    items: [
      {
        itemName: "Bedsheets",
        quantity: "3",
        itemPrice: "30",
        totalItemPrice: "90",
      },
    ],
*/
