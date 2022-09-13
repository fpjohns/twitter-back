const User = require("../models/User.model");

module.exports.usersController = {
  createUser: async (req, res) => {
    const { userName } = req.body;
    try {
      const user = await User.create({
        userName,
      });
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  updateUser: async (req, res) => {
    const { userName } = req.body;
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        userName,
      });
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.deleteOne(req.params.id);
    } catch (error) {
      res.json(error.message);
    }
  },
  async save(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user.saves.includes(req.body.postId)) {
        const data = await User.findByIdAndUpdate(req.params.id, {
          $push: { saves: req.body.postId },
        });
        res.json(data);
      } else {
        const data = await User.findByIdAndUpdate(req.params.id, {
          $pull: { saves: req.params.postId },
        });
      }
    } catch (error) {}
  },
};
