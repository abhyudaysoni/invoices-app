import React from "react";
import { Container } from "./styles";
import arrowRight from "../../../assets/icons/icon-arrow-right.svg";
import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";

const Card = (props) => {
  const isLight = useSelector((state) => state.displayMode.isLight);
  return (
    <Container
      id={props.id}
      className={props.className}
      status={props.status}
      isLight={isLight}
    >
      <h3 className="invoice-id">#...{props.id.slice(30, props.id.length)}</h3>
      <MediaQuery minWidth={700}>
        <p className="invoice-due-date">
          due{" "}
          {`${props.paymentDate.day}-${props.paymentDate.month}-${props.paymentDate.year}`}
        </p>
      </MediaQuery>
      <p className="invoice-name">{props.name}</p>
      <h2 className="invoice-amount">${Number(props.amount).toFixed(2)}</h2>
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
