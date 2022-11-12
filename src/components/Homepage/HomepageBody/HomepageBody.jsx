import React from "react";
import { Container } from "./styles";
import { getFilteredData } from "./helper";
import empty from "../../../assets/icons/illustration-empty.svg";
import { useSelector } from "react-redux";
import Loading from "../../UI/Loading/Loading";
import noInvoices from "../../../assets/icons/illustration-empty.svg";

const HomepageBody = (props) => {
  const invoices = useSelector((state) => state.invoices);
  const data = getFilteredData(props.status, invoices);
  return (
    <Container status={props.status}>
      {!(props.status === "none") && (
        <h4>Filtered by: {props.status.toUpperCase()}</h4>
      )}
      {data}
      {invoices.length === 0 && <img src={noInvoices} id="no-invoices" alt="no-invoices" />}
      {invoices.length > 0 && data.length === 0 && (
        <div className="no-data">
          <h2>No data Found</h2>
          <img src={empty} alt="no data found" />
        </div>
      )}
    </Container>
  );
};
export default HomepageBody;
