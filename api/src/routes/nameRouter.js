const {Router} = require('express');

const {
    gameByQueryHandler,
} = require("../handlers/videogamesHandlers");




const videogameRouter = Router()


videogameRouter.get('/', gameByQueryHandler)



module.exports = videogameRouter;
