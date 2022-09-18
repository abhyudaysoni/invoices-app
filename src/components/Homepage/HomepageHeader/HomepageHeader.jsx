import React from "react";
import Button from "../../UI/Button/Button";
import { Container } from "./styles";
import plus from "../../../assets/icons/icon-plus-circle.svg";
import arrowDown from "../../../assets/icons/icon-arrow-down.svg";
import MediaQuery from "react-responsive";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";

const HomepageHeader = (props) => {
  return (
    <Container>
      <div className="left">
        <h1>Invoices</h1>
        <MediaQuery minWidth={600}>
          <p>There are {props.length} total invoices</p>
        </MediaQuery>
      </div>
      <div className="right">
        <div id="btn-filter" onClick={props.filterVisibilityHandler}>
          <div className="btn">
            <MediaQuery maxWidth={400}>
              <p>Status</p>
            </MediaQuery>
            <MediaQuery minWidth={400}>
              <p>Filter by status</p>
            </MediaQuery>
            <img id="arrow-down" src={arrowDown} alt="arrowDown" />
          </div>
          {props.filterOptionVisibility && (
            <Card className="filter-options">
              <Link to="/">
                <Button value="none" onClick={props.filterHandler}>
                  None
                </Button>
              </Link>
              <Link to="/paid">
                <Button value="paid" id="paid" onClick={props.filterHandler}>
                  Paid
                </Button>
              </Link>
              <Link to="/pending">
                <Button
                  value="pending"
                  id="pending"
                  onClick={props.filterHandler}
                >
                  Pending
                </Button>
              </Link>
            </Card>
          )}
        </div>
        <Button id="btn-new-invoice" onClick={props.onNewInvoice}>
          <img src={plus} alt="" />
          <MediaQuery minWidth={700}>
            <p className="new-invoice-text">New Invoice</p>
          </MediaQuery>
        </Button>
      </div>
    </Container>
  );
};

export default HomepageHeader;