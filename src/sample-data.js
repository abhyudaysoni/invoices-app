export const sampleData = [
  {
    id: "GH4568",
    name: "John Doe",
    amount: "",
    status: "pending",
    clientAddress: {
      street: "4729 Marion Street",
      city: "South Burlington",
      area: "Vermont",
      country: "Vermont",
      zip: "05403",
    },
    billerAddress: {
      street: "221B Baker's Street",
      city: "London",
      area: "England",
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
  {
    id: "GH4569",
    name: "Jane Doe",
    amount: "",
    status: "paid",
    clientAddress: {
      street: "2953 Rocket Drive",
      city: "Golden Valley",
      area: "Minnesota",
      country: "US",
      zip: "55422",
    },
    billerAddress: {
      street: "221B Baker's Street",
      city: "London",
      area: "England",
      country: "United Kingdom",
      zip: "SW1",
    },
    email: "someone.else@example.com",
    invoiceDate: {
      day: "20",
      month: "12",
      year: "2021",
    },
    paymentDate: {
      day: "02",
      month: "01",
      year: "2022",
    },
    items: [
      {
        itemName: "Chairs",
        quantity: "6",
        itemPrice: "50",
        totalItemPrice: "",
      },
      {
        itemName: "Tables",
        quantity: "2",
        itemPrice: "100",
        totalItemPrice: "",
      },
    ],
  },
];
