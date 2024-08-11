const Express = require("express");

const app = Express();

const items = [
  { id: 1, title: "Learn Nodejs", isCompleted: false },
  { id: 2, title: "Learn React", isCompleted: true },
  { id: 3, title: "Learn GraphQL", isCompleted: false },
  { id: 4, title: "Learn Apollo", isCompleted: true },
];

app.get("/api", (req, res) => {
  res.send(items);
});

app.get("/name", (req, res) => {
  res.send([
    { id: 101, name: "Rohit" },
    { id: 102, name: "Abhishek" },
  ]);
});

app.listen(3000);
