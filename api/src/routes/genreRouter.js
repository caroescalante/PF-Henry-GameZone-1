const {Router} = require('express');

const {
    getGenresHandler,
} = require("../handlers/genreHandlers");




const genresRouter = Router()


genresRouter.get('/', getGenresHandler)



module.exports = genresRouter;
