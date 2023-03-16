const {Router} = require('express');

const {
    getGamesHandler,
    gameByIdHandler,
    createGameHandler,
    updateGameHandler,
    deleteGameHandler,
} = require("../handlers/videogamesHandlers");

const videogameRouter = Router();

videogameRouter.get('/', getGamesHandler);
videogameRouter.get('/:id', gameByIdHandler);
videogameRouter.post('/', createGameHandler);
videogameRouter.put('/:id', updateGameHandler);
videogameRouter.delete('/:id', deleteGameHandler);

module.exports = videogameRouter;
