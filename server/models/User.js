const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roel: {
    type: String,
    enum: ["user", "admin"],
    defaul: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);
