import { v4 as uuidv4 } from "uuid";

export const post = (url, invoice) => {
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
};
