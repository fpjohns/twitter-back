const { Router } = require("express");
const router = Router();
const { usersController } = require("../controllers/users.controller");

router.post("/user", usersController.createUser);
router.get("/user", usersController.getAllUser);
router.patch("/user", usersController.updateUser);
router.delete("/user", usersController.deleteUser);
router.patch("/users/:id/post", usersController.save);

module.exports = router;
