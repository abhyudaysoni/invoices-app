import React from "react";
import { Container } from "./styles";
import { getFilteredData } from "./helper";
import empty from "../../../assets/icons/illustration-empty.svg";

const HomepageBody = (props) => {
  const data = getFilteredData(props.status, props.invoices);
  return (
    <Container>
      {data}
      {data.length === 0 && (
        <div className="no-data">
          <h2>No data Found</h2>
          <img src={empty} alt="no data found" />
        </div>
      )}
    </Container>
  );
};
export default HomepageBody;
