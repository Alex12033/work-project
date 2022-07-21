const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersLoginSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  password: String,
  confirmPassword: String,
});

module.exports = mongoose.model("Users", UsersLoginSchema);
