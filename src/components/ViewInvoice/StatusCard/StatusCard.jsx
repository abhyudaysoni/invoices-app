import React from "react";
import Button from "../../UI/Button/Button";
import IconDelete from "../../../assets/icons/icon-delete.svg";
import IconEdit from "../../../assets/icons/icon-edit.svg";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StatusCard = (props) => {
  const isLight = useSelector((state) => state.displayMode.isLight);
  return (
    <Container
      className="view-invoice-status"
      status={props.filteredUser.status}
      isLight={isLight}
    >
      <div className="status">
        <p>Status</p>
        <div className="invoice-status">
          <span className={"dot"}></span>
          <p>{props.filteredUser.status}</p>
        </div>
      </div>
      <div className="edit-options">
        <Link to={`/invoices/user/${props.userID}/edit`}>
          <Button onClick={props.onEdit.bind(null, props.userID)}>
            <img src={IconEdit} alt="edit" />
          </Button>
        </Link>
        <Link>
          <Button onClick={props.onDelete}>
            <img src={IconDelete} alt="delete" />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default StatusCard;
