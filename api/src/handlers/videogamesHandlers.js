const {
    getAllGames,
    getGameByName,
    postGame,
    getById
} = require('../controllers/videogameController');


const getGamesHandler = async(req, res, next) => {
    try {

     const games = await getAllGames()
     res.status(200).json(games);
    console.log(games.length)
    } catch (error) {
        next(error)
    }
};


const gameByIdHandler = async(req, res, next) => {
    try {

        const id = req.params.id;
        const idGame = await getById(id)
        res.status(200).json(idGame)
        
    } catch (error) {
        next(error)
    }
};


const createGameHandler = async(req, res, next) => {
   try {

    const created = await postGame(req.body)
    res.status(201).json(created)
    
   } catch (error) {
    next(error)
   }
};


const updateGameHandler = (req, res) => {
    res.json("modificar un juego")
}

const gameByQueryHandler = async(req, res, next) => {
    try {
            const name = req.query.name.toLowerCase();
            const queryGame = await getGameByName(name)
            res.status(200).json(queryGame)
        
    } catch (error) {
        next(error)
    }
};

const deleteGameHandler = (req, res) => {
    res.json("")
};

module.exports = {
    getGamesHandler,
    gameByIdHandler,
    createGameHandler,
    updateGameHandler,
    gameByQueryHandler,
    deleteGameHandler,
};