import { v4 as uuidv4 } from "uuid";
import { userURl } from "../constants/url";

export const post = (url, invoice) => {
  console.log(invoice);
  if (!invoice.id) {
    const id = uuidv4();
    invoice.id = String(id);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(invoice),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  } else {
    fetch(userURl + invoice.fid, {
      method: "PATCH",
      body: JSON.stringify(invoice),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
};
