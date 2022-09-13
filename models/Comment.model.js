const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "User",
  },
  _postId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Post",
  },
  content: {
    type: String,
    default: null,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
