const { Router } = require("express");

const {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
    emailUserHandler,
    favoriteUserHandler,
} = require("../handlers/usersHandlers");


const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.get("/email/:email", emailUserHandler );
userRouter.post("/favorites/:email", favoriteUserHandler);

module.exports = userRouter;

// userRouter.put("/:email", updateUserHandler);