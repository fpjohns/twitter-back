const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");
const router = Router();

router.post("/post", postsController.createPost);
router.get("/post", postsController.getAllPost);
router.patch("/post", postsController.updatePost);
router.delete("/post", postsController.deletePost);
router.patch("/posts/:id/users/like", postsController.like);

module.exports = router;
