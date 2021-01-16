import users from "./users";

export default [
  {
    id: "trip1",
    name: "Journey to the West",
    date: new Date(),
    members: users,
    destination: [
      {
        name: "Twelve Apostles",
        address: "Great Ocean Rd & Booringa Rd, Princetown VIC 3269",
        mapLatitude: "-38.665724",
        mapLongitude: "143.104630",
        image: "",
      },
    ],
    items: [],
  },
];
