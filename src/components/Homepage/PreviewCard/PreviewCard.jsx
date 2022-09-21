import React from "react";
import { Container } from "./styles";
import arrowRight from "../../../assets/icons/icon-arrow-right.svg";
import MediaQuery from "react-responsive";

const Card = (props) => {
  return (
    <Container
      id={props.id}
      className={props.className}
      status={props.status}
    >
      <h3 className="invoice-id">#{props.id}</h3>
      <MediaQuery minWidth={700}>
        <p className="invoice-due-date">due {props.dueDate}</p>
      </MediaQuery>
      <p className="invoice-name">{props.name}</p>
      <h2 className="invoice-amount">${props.amount}</h2>
      <div className="invoice-status">
        <span className={"dot"}></span>
        {props.status}
      </div>
      <MediaQuery minWidth={700}>
        <img className="arrow-right" src={arrowRight} alt="" />
      </MediaQuery>
    </Container>
  );
};

export default Card;
