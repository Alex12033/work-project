require("dotenv").config();

const bodyParser = require("body-parser");

const cors = require("cors");

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const Users = require("./models/login");

const port = 3000;

//db connect
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

//ROUTES
app.get("/users", (req, res) => {
  res.send("GET users from db");
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  // res.sendStatus(200);

  const login = new Users({
    firstName: req.body.name,
    lastName: req.body.surName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  login
    .save()
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(403).json({ message: err });
      return;
    });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is runing on port ${port}`);
});
