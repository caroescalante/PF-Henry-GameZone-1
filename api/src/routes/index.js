const { Router} = require ("express");
const userRouter = require ("./userRouter")
const videogameRouter = require('./videogameRouter');
const gameQueryRouter = require('./nameRouter')
const genreRouter = require('./genreRouter');
const platformRouter = require("./platformRouter");
const router = Router();

router.use('/user', userRouter);
router.use('/videogames', videogameRouter); 
router.use('/name', gameQueryRouter)
router.use('/genres', genreRouter)
router.use('/platform', platformRouter);


module.exports = router;