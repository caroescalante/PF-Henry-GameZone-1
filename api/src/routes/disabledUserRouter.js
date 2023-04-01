const { Router } = require("express");
const {
    disableUserHandler
} = require("../handlers/usersHandlers");


const userRouter = Router();


userRouter.put("/:id/disable", disableUserHandler);


module.exports = userRouter;