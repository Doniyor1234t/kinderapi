const Router = require("express");
const router = new Router();
const auth = require('../middleware/auth');
const validation = require('../middleware/validation');
const { register, login, getUser, checkuser, checklogin } = require("../controllers/auth");




router.post('/registration',validation, register)

router.post('/checkuser',auth, checkuser)
router.post('/checklogin',auth, checklogin)

router.post('/login', login)

router.get('/getusers', auth, getUser)


module.exports = router