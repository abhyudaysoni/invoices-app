export const post = (url, invoice) => {
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
