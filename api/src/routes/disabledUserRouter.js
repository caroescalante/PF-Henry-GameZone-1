const { Router } = require("express");
const {
    toggleActiveHandler

} = require("../handlers/usersHandlers");


const userDisabledRouter = Router();



userDisabledRouter.put("/:id", toggleActiveHandler);



module.exports = userDisabledRouter;