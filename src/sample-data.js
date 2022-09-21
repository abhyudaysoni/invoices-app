export const sampleData = [
  {
    id: "GH4568",
    name: "John Doe",
    amount: "",
    status: "pending",
    clientAddress: {
      street: "4729 Marion Street",
      city: "South Burlington",
      Area: "Vermont",
      country: "Vermont",
      zip: "05403",
    },
    billerAddress: {
      street: "221B Baker's Street",
      city: "London",
      Area: "England",
      country: "United Kingdom",
      zip: "SW1",
    },
    email: "someone@example.com",
    invoiceDate: {
      day: "25",
      month: "08",
      year: "2020",
    },
    paymentDate: {
      day: "13",
      month: "05",
      year: "2021",
    },
    items: [
      {
        itemName: "Bedsheets",
        quantity: "3",
        itemPrice: "30",
        totalItemPrice: "",
      },
      {
        itemName: "Pillows",
        quantity: "5",
        itemPrice: "10",
        totalItemPrice: "",
      },
    ],
  },
];
