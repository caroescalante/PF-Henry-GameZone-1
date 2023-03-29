const { Router} = require ("express");
const userRouter = require ("./userRouter")
const videogameRouter = require('./videogameRouter');
const gameQueryRouter = require('./nameRouter')
const genreRouter = require('./genreRouter');
const platformRouter = require("./platformRouter");
const router = Router();
const paymentRouter = require ("./paymentRouter")


// const paymentController = require ("../controllers/paymentController")
// const paymentService = require ("../Services/paymentService.js")
// const paymentInstance = new paymentController(new paymentService())

router.use('/user', userRouter);
router.use('/videogames', videogameRouter); 
router.use('/name', gameQueryRouter)
router.use('/genres', genreRouter)
router.use('/platform', platformRouter);
router.use('/payment', paymentRouter)
router.use('/paymentsuccess', paymentRouter)



module.exports = router;