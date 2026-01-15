import express from "express";
const app = express();
const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("heeelow debu");
});

app.get("/debu", (req, res) => {
  res.send("<h1>Hellow Debu</h1>");
});

app.get("/debus", (req, res) => {
  res.send("<h1>Hellow Debu debus</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Server running on port ${port}.`);
});
