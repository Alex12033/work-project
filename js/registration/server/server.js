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
    console.log("mongoose connect error", err);
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
app.get("/users", async (req, res) => { 
  const login = await Users.find();
  res.send(login);
});

app.post("/login", (req, res) => {
  const login = new Users({
    firstName: req.body.name,
    lastName: req.body.surName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  login.save((error, user) => {
    if (error) {
      console.log(error, "error in save db");
      res.sendStatus(400);
      return;
    } else {
      res.sendStatus(200);
      return;
    }
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is runing on port ${port}`);
}); 