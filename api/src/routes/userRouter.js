const { Router } = require("express");

const {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
} = require("../handlers/usersHandlers");

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:id", updateUserHandler);

module.exports = userRouter;