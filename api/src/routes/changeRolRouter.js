const { Router } = require("express");
const {
    toggleRolHandler

} = require("../handlers/usersHandlers");


const userRolRouter = Router();



userRolRouter.put("/:id", toggleRolHandler);



module.exports = userRolRouter;