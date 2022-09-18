import React from "react";
import Button from "../../UI/Button/Button";
import IconDelete from "../../../assets/icons/icon-delete.svg";
import IconEdit from "../../../assets/icons/icon-edit.svg";
import { Container } from "./styles";

const StatusCard = (props) => {
  return (
    <Container
      className="view-invoice-status"
      status={props.filteredUser.status}
    >
      <div className="status">
        <p>Status</p>
        <div className="invoice-status">
          <span className={"dot"}></span>
          <p>{props.filteredUser.status}</p>
        </div>
      </div>
      <div className="edit-options">
        <Button>
          <img src={IconEdit} alt="edit" />
        </Button>
        <Button>
          <img src={IconDelete} alt="delete" />
        </Button>
      </div>
    </Container>
  );
};

export default StatusCard;