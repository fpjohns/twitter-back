const Post = require("../models/Post.model");
module.exports.postsController = {
  createPost: async (req, res) => {
    const { _userId, tittle, content } = req.body;
    try {
      const post = await Post.create({
        _userId,
        tittle,
        content,
      });
      res.json(post);
    } catch (error) {
      res.json(error);
    }
  },
  getAllPost: async (req, res) => {
    try {
      const post = await Post.find().populate("_userId", "userName");
      res.json(post);
    } catch (error) {
      res.json(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      const post = Post.findByIdAndUpdate(req.params.id, {
        _userId,
        tittle,
        content,
      });
      res.json(post);
    } catch (error) {
      res.json(error);
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = Post.deleteOne(req.params.id);
      res.json(Post);
    } catch (error) {
      res.json(error);
    }
  },
  async like(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        const data = await Post.findByIdAndUpdate(req.params.id, {
          $push: { likes: req.body.userId },
        });
        res.json(data);
      } else {
        const data = await Post.findByIdAndUpdate(req.params.id, {
          $pull: { likes: req.body.userId },
        });
        res.json(data);
      }
    } catch (e) {
      res.json(e);
    }
  },
};
