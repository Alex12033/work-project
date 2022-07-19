const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

// We are using our packages here
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

//You can use this to check if your server is working
app.get("/", (req, res) => {
  res.send("Welcome to your server");
});

//Route that handles login logic
app.post("/login", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

//Start your server on a specified port
app.listen(process.env.PORT || port, () => {
  console.log(`Server is runing on port ${port}`); 
});
