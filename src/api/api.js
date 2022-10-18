import { v4 as uuidv4 } from "uuid";
import { userURl } from "../constants/url";

export const post = async (url, invoice) => {
  console.log(invoice);
  if (!invoice.id) {
    const id = uuidv4();
    invoice.id = String(id);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(invoice),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const response = await fetch(userURl + invoice.fid, {
        method: "PUT",
        body: JSON.stringify(invoice),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }
};
