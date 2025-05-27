import express from "express";

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/secure-payment", (req, res) => {
  res.render("secure-payment.ejs");
});

app.get("/wallet", (req, res) => {
  res.render("wallet.ejs");
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.get("/NFC-payment", (req, res) => {
  res.render("404.ejs");
});

app.get("/settings", (req, res) => {
  res.render("404.ejs");
});

app.get("/installment-payment", (req, res) => {
  res.render("404.ejs");
});

app.get("/bank-meeting", (req, res) => {
  res.render("404.ejs");
});

app.get("/contract", (req, res) => {
  res.render("404.ejs");
});

app.get("/crypto-currency", (req, res) => {
  res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
