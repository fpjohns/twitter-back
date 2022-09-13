const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  _userId: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },

  tittle: {
    type: String,
    default: "Заголовок про погоду",
  },
  content: {
    type: String,
    default: "анамальная жара",
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
