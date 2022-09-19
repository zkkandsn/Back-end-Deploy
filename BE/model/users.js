const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});
const Users = mongoose.model("user", UsersSchema);
module.exports = Users;
