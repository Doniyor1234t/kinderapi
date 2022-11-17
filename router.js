const {Router} = require('express')
const router = Router()


// const authRouter = require("./router/auth");
// const userRouter = require("./router/user");
const directionRouter = require("./router/direction");
const groupRouter = require("./router/group");
const workerRouter = require("./router/worker");
const pupilRouter = require("./router/pupil");
const spendingRouter = require("./router/spending");
const paymentRouter = require("./router/payment");



// router.use('/auth', authRouter);
// router.use('/user', userRouter);
router.use('/direction', directionRouter);
router.use('/group', groupRouter);
router.use('/worker', workerRouter);
router.use('/pupil', pupilRouter);
router.use('/spending', spendingRouter);
router.use('/payment', paymentRouter);


module.exports = router