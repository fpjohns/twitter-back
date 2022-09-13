const e = require("express");
const Comment = require("../models/Comment.model");
module.exports.commentsController = {
  createComment: async (req, res) => {
    const { _userId, _postId, content } = req.body;
    try {
      const comment = await Comment.create({
        _userId,
        _postId,
        content,
      });
      res.json(comment);
    } catch (error) {
      res.json(error);
    }
  },
  getAllComment: async (req, res) => {
    try {
      const comment = await Comment.find();
      res.json(comment);
    } catch (error) {
      res.json(error);
    }
  },
  updateComment: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, {
        _userId,
        _postId,
        content,
      });
      res.json(error);
    } catch (error) {
      res.json(error);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.deleteOne(req.params.id);
      res.json(comment);
    } catch (error) {
      res.json(error);
    }
  },
  like: async (req, res) => {
    try {
      const post = await Comment.findById(req.params.id);
      if (!post.likes.includes(req.body._userId)) {
        const data = await Comment.findByIdAndUpdate(req.params.id, {
          $push: { likes: req.body._userId },
        });
        res.json(data);
      } else {
        const data = await Comment.findByIdAndUpdate(req.params.id, {
          $pull: { likes: req.body._userId },
        });
        res.json(data);
      }
    } catch (error) {
      res.json(error);
    }
  },
};
