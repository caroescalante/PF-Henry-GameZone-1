const {
    getAllGames,
    getGameByName,
    postGame,
    getById,
    updateVideogame,
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


const updateGameHandler = async (req, res) => {
    
    const { id } = req.params;
    const newData = req.body;

    try {
        const videogame = await updateVideogame(id, newData)
        res.json(videogame);    

    } catch ( error ) {
        res.status(400).json({ error: error.menssage });
    }

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