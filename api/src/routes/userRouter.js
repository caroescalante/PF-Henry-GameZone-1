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
userRouter.put("/:email", updateUserHandler);
userRouter.get("/email/:email", emailUserHandler );
userRouter.put("/favorites", favoriteUserHandler);

module.exports = userRouter;