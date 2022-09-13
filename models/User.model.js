const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    default: null,
  },
  saves: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
